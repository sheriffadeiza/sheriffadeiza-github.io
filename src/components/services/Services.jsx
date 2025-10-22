"use client";
import React, { useContext } from "react";
import "./services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../../img/resume.pdf";
import { themeContext } from "../../context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          I am a frontend developer and you can hire me for your website
          projects.
          <br />
          I do all forms of web design, from static pages to dynamic full-stack
          applications using HTML, CSS, JavaScript, React.js, TailwindCSS,
          Node.js, and Next.js.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur s-blur1"
          style={{ background: "#C1F5FF" }}
        ></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* Card 1 */}
        <motion.div
          style={{ left: "14rem" }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend Developer"}
            detail={"HTML, CSS, JavaScript, React.js, TailwindCSS, Next.js"}
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          style={{ top: "12rem", left: "-4rem" }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <Card
            emoji={Glasses}
            heading={"Backend Developer"}
            detail={
              "Node.js, PrismaClient, MongoDB, and Superbase integration"
            }
          />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          style={{ top: "19rem", left: "12rem" }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Card
            emoji={Humble}
            heading={"GIS Analyst & Programmer"}
            detail={"ArcGIS, QGIS, Python, and Google Earth Engine"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
