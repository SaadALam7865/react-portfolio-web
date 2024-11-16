import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  let handleInstagram = () => {
    let link = document.createElement("a");
    link.href = "https://www.instagram.com/";
    link.click();
  };
  let handleFacebook = () => {
    let link = document.createElement("a");
    link.href = "https://www.facebook.com/";
    link.click();
  };
  let handleLinkedin = () => {
    let link = document.createElement("a");
    link.href = "https://www.linkedin.com/in/saad-alam-5631432b5/";
    link.click();
  };
  let handleTwitter = () => {
    let link = document.createElement("a");
    link.href =
      "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://twitter.com/login&ved=2ahUKEwiA5MGOqsKJAxW6SaQEHa7SMkQQjBB6BAgPEAE&usg=AOvVaw3swNPrVfKaBGiX8TGfSpkN";
    link.click();
  };
  let handleGithub = () => {
    let link = document.createElement("a");
    link.href = "https://github.com/SaadALam7865";
    link.click();
  };

  return (
    <>
    <div className="footer">
       
      <div className="logo">
        <span>Sa</span>ad
      </div>
      <div className="footer-icons">
        <i
          className="fa-brands fa-instagram instagram"
          onClick={handleInstagram}
        ></i>
        <i
          className="fa-brands fa-facebook facebook"
          onClick={handleFacebook}
        ></i>
        <i
          className="fa-brands fa-linkedin linkedin"
          onClick={handleLinkedin}
        ></i>
        <i className="fa-brands fa-twitter twitter" onClick={handleTwitter}></i>
        <i className="fa-brands fa-github github" onClick={handleGithub}></i>
      </div>
  
      <div className="code">
        <h4>&copy; My Portfolio. All rights reserved</h4>
    </div>
     
    </div>
    
    </>
  );
};

export default Footer;
