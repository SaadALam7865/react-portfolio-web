import React, { useState } from "react";
import home from "../Home/home.png";
import "../Home/Home.css";
const Home = () => {
  let [isLoading, setIsLoading] = useState(false)

  let handleDownload = () => {
    setIsLoading(true);
   let link = document.createElement('a')
  link.href=" https://www.my-resume-templates.com/wp-content/uploads/2023/07/job-resume-template-259.jpg"
  

  setTimeout(() => {
    link.click();
  setIsLoading(false);
  }, 2000);
    
  }
  return (
    <div className="home">
      <div className="home-img-centre">
        <div className="home-img">
          <img src={home} alt="home-imgage" height="100px" />
        </div>
      </div>
      <h2>I'm Saad</h2>
      <div className="home-box">
        <div className="box">
           <h1>FRONTED DEVELOPER</h1>
           <p> I am a frontend developer dedicated to transforming ideas into interactive, visually compelling websites. With a solid foundation in HTML, CSS, JavaScript, and experience with frameworks like Next.js, I specialize in crafting responsive, user-focused designs. My goal is to merge creativity with functionality to deliver seamless and impactful digital experiences.</p>
          <div className="home-btn">
          {/* <button onClick={handleDownload} disabled={isLoading} >{isLoading ? "Downloading... ": "DOWNLOAD RESUME"}</button> */}
          <button onClick={handleDownload} disabled={isLoading}>
        {isLoading ? 'Downloading...' : 'DOWNLOAD RESUME'}
      </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
