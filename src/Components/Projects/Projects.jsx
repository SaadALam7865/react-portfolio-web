import React from "react";
import "../Projects/Projects.css";
import pro1 from "../Projects/projects1.jpg";
import pro2 from "../Projects/projects5.png";

const Projects = () => {
  let handleEcommerce = ()=> {
    let link = document.createElement('a')
    link.href="https://shopsy-web.vercel.app/"
    link.click();
  }
 
  let handleREsume = ()=> {
    let link = document.createElement('a')
    link.href="https://saad-a-lam7865-static-resume-builder-by-saad-alam.vercel.app/"
    link.click();
  }

  
  return (
    <div className="projects">
      <div className="portfolio">
  
        <img src={pro1} alt="" height={"260px"} />
        {/* <h1>E-Commerce Web</h1> */}
        {/* <p>Discover a modern e-commerce website built with Next.js and Tailwind CSS!</p> */}
        <div className="myweb">
        <button onClick={handleEcommerce} >View Project</button>
        </div>
        <h1>E-Commerce Web</h1>
      </div>
      <div className="e-commerce">
        <img src={pro2} alt="" height={"260px"} />
        <div className="mypro">
        <button onClick={handleREsume} >View Project</button>
        </div>
       
        <h1>Static resume builder </h1>
      </div>
    </div>
  );
};

export default Projects;
