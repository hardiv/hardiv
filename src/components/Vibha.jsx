import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";

const Vibha = () => {
  const [message, setMessage] = useState("will you go out with me?");
  const [noVisible, setNoVisible] = useState(true);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // First Section Observer
  const [firstRef, firstInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const firstControls = useAnimation();
  if (firstInView) firstControls.start("visible");

  // Second Section Observer
  const [secondRef, secondInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const secondControls = useAnimation();
  if (secondInView) secondControls.start("visible");

  // Third Section Observer
  const [thirdRef, thirdInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const thirdControls = useAnimation();
  if (thirdInView) thirdControls.start("visible");

  const sendEmail = (subject, body) => {
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: "Vibha",
          to_name: "Hardiv Harshakumar",
          to_email: "hardivhk@gmail.com",
          message: body,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => console.log("Email sent!"),
        (error) => console.error("Email error: ", error)
      );
  };

  const handleNoClick = () => {
    alert("Wrong answer, you jokeman. Try again.");
    sendEmail("Vibha's Response", "Vibha decided to be a jokeman and press no");
    setNoVisible(false); // Hide "No" button after it's clicked
  };

  const handleYesClick = (response) => {
    const isHellYeah = response === "hell yeah";

    // Set message based on the response
    setMessage(
      isHellYeah
        ? "appreciate the enthusiasm! see you there ;)\nlocation: bank station\n time: 6:30pm"
        : "sounds great! see you there ;)\nlocation: bank station\n time: 6:30pm"
    );

    // Set email body based on the response
    const emailBody = isHellYeah
      ? "Vibha is ecstatic about going on a date with you"
      : "Vibha has agreed to go on a date with you";

    // Send email
    sendEmail("Vibha's Response", emailBody);
  };

  return (
    <>
      {/* First Section */}
      <section ref={firstRef} className="relative w-full h-screen mx-auto">
        <motion.div
          animate={firstControls}
          initial="hidden"
          variants={fadeInVariant}
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              hey,{" "}
              <span
                className="text-[#ff7777]"
                style={{ textShadow: "0px 0px 10px #ff3333" }}
              >
                vibha
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white`}>
              let's not beat around the bush. <br /> you're an amazing girl...
            </p>
          </div>
        </motion.div>
        <div className="absolute xs:bottom-10 bottom-32 pr-12 w-full flex justify-end items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>

      {/* Second Section */}
      <section ref={secondRef} className="relative w-full h-screen mx-auto">
        <motion.div
          animate={secondControls}
          initial="hidden"
          variants={fadeInVariant}
          className={`${styles.paddingX} inset-0 top-[120px] pt-40 max-w-7xl h-screen mx-auto flex flex-row items-start gap-5`}
        >
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            so i figured it's only right if i asked you properly...
          </p>
        </motion.div>
      </section>

      {/* Third Section */}
      <section ref={thirdRef} className="relative w-full h-screen mx-auto">
        <motion.div
          animate={thirdControls}
          initial="hidden"
          variants={fadeInVariant}
          className={`${styles.paddingX} inset-0 top-[120px] pt-40 max-w-7xl h-screen mx-auto flex flex-col items-center gap-5`}
        >
          {/* Message */}
          <p
            className={`${styles.heroSubText} mt-2 text-white text-center`}
            style={{ whiteSpace: "pre-line" }}
          >
            {message}
          </p>

          {/* Buttons */}
          {message === "will you go out with me?" && (
            <div className="flex flex-col items-center gap-4 mt-8">
              {/* "No" Button */}
              {noVisible && (
                <button
                  onClick={handleNoClick}
                  className="bg-red-500 py-2 px-6 text-white rounded-lg shadow-md text-lg"
                >
                  No
                </button>
              )}

              {/* "Yes" and "Hell Yeah" Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => handleYesClick("yes")}
                  className="bg-green-500 py-3 px-8 text-white rounded-lg shadow-md text-lg"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleYesClick("hell yeah")}
                  className="bg-blue-500 py-3 px-8 text-white rounded-lg shadow-md text-lg"
                >
                  Hell Yeah
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default Vibha;
