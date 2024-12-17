import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Vibha,
} from "./components";
// import ExamplePage from "./components/ExamplePage"; // Import the new page

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Tech />
                <Works />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </div>
            }
          />
          {/* Example Page */}
          <Route
            path="/vibha"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Vibha />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
