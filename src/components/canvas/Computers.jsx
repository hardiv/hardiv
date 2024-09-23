import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Rocket = ({ isMobile, isLaunching }) => {
  const rocket = useGLTF("./rocket_ship/scene.gltf");
  const [currentNumber, setCurrentNumber] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const meshRef = React.useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      setCurrentNumber(Math.sin(elapsedTime) * 0.1);
      setXPosition(Math.tan(elapsedTime) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={100} groundColor="black" color="red" />
      <spotLight
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={rocket.scene}
        scale={isMobile ? 0.4 : 0.025}
        position={[
          0,
          currentNumber - 0.5 + (isLaunching ? xPosition / 2 : 0),
          isLaunching ? xPosition * -1 : currentNumber * -1,
        ]}
        rotation={[0, 1.5, -1.8]}
      />
    </mesh>
  );
};

const RocketCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setIsLaunching(true);
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Rocket isMobile={isMobile} isLaunching={isLaunching} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RocketCanvas;
