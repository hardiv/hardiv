import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full red-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        /> */}

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const LinkCard = ({ title, link }) => (
  <Tilt className="w-20 h-20">
    <a href={link} target="_blank">
      <motion.li
        variants={fadeIn("", "", 0.1, 1)}
        className="bg-tertiary rounded-[20px] h-20 w-20 flex justify-evenly items-center flex-col"
      >
        <img
          src={`./src/assets/logos/${title}.png`}
          alt={title}
          className="w-16 h-16 object-contain"
        />
      </motion.li>
    </a>
  </Tilt>
);

const links = {
  instagram: "https://www.instagram.com/hardivhk/",
  linkedin: "https://www.linkedin.com/in/hardiv-harshakumar/",
  github: "https://www.github.com/hardiv",
  youtube: "https://www.youtube.com/@HardivHk",
  medium: "https://hardivhk.medium.com/",
  codecademy: "https://www.codecademy.com/profiles/hardivhk",
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        i'm a <span className="text-[#ff0000]">computer science</span> student
        at{" "}
        <a
          href="https://www.imperial.ac.uk/"
          className="text-shadow-red-glow text-[#ff0000]"
          target="_blank"
        >
          imperial college london
        </a>{" "}
        with a passion for building beautiful software, inside and out. i also
        lead the team that's building{" "}
        <a
          href="https://husclefitness.co.uk/"
          className="text-shadow-red-glow text-[#ff0000]"
          target="_blank"
        >
          huscle
        </a>
        , the platform that aims to revolutionise how you track your fitness
        progress. in my spare time, i'm a{" "}
        <a
          href="https://www.youtube.com/@HardivHk"
          className="text-shadow-red-glow text-[#ff0000]"
          target="_blank"
        >
          content creator
        </a>
        , making vlogs and videos that help people navigate the challenges of
        university.
      </motion.p>

      <motion.div>
        <h2 className="text-white pt-5 font-black md:text-[20px] sm:text-[10px] xs:text-[5px] text-[30px]">
          find me on the web!
        </h2>
        <ul className="mt-4 flex flex-wrap gap-5">
          {Object.entries(links).map(([key, value]) => (
            <LinkCard key={key} title={key} link={value} />
          ))}
        </ul>
      </motion.div>

      <h2 className="text-white mt-2 pt-5 font-black md:text-[20px] sm:text-[10px] xs:text-[5px] text-[30px]">
        who i am:
      </h2>
      <div className="mt-5 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
