import React from "react";
import "../About/About.css";
import about from "../About/about.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-img">
          <img src={about} alt="about-img" height={"350px"} />
        </div>
      </div>
      <div className="about-right">
        <h1>ABOUT ME</h1>
        <div className="about-para">
          <p>
            Hello! <b>I'm Saad Alam</b>, a passionate frontend developer with a
            strong foundation in HTML, CSS, and JavaScript, along with
            experience in TypeScript, Next.js, and Tailwind CSS. I’m dedicated
            to building intuitive and visually appealing web applications that
            prioritize user experience. Always eager to learn and grow, I love
            exploring new technologies and refining my skills to deliver
            high-quality work. I’m currently seeking opportunities to contribute
            my skills in a professional setting, collaborate with other
            developers, and make a meaningful impact. My goal is to continually
            evolve as a developer, taking on new challenges that fuel my passion
            for innovation and creativity in tech.
          </p>
        </div>
        {/* <button>Fronted developer</button> */}
        <h2>Highlights</h2>
        <ul>
          <li>Web Developer</li>
          <li>Fronted Developer</li>
          <li>UI/UX Desighner </li>
           <li>Software Developer</li>
        </ul>
        
      </div>
    </div>
  );
};

export default About;
