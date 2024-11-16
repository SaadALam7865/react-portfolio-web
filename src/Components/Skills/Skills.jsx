import React from 'react'
import "../Skills/Skills.css";
import html from "../Skills/HTML.png";
import css from "../Skills/CSS.png"
import js from "../Skills/javascript.png"
import reactjs from '../Skills/react.png';
import nextjs from "../Skills/nextjs.png";
import ts from "../Skills/Typescript.png"
import tailwindcss from "../Skills/tailwind5.png"
import git from "../Skills/git.png"
const Skills = () => {
  return (
    <div className='skills'>
      <h1> My Skills</h1>
      <div className="skills-part">
        <div className="html">
          <img src={html} alt=""  height={"150px"}/>
        </div>
        <div className="css">
          <img src={css} alt=""  height={"150px"}/>
        </div>
        <div className="js">
          <img src={js} alt=""  height={"150px"}/>
        </div>
        <div className="reactjs">
          <img src={reactjs} alt=""  height={"150px"}/>
        </div>
        
      </div>
      <div className='skills-part-2'>
        
      <div className="ts">
          <img src={ts} alt=""  height={"150px"}/>
        </div>
      <div className="nextjs">
          <img src={nextjs} alt=""  height={"150px"}/>
        </div>
        <div className="tlwncss">
          <img src={tailwindcss} alt=""  height={"150px"}/>
        </div>
        <div className="git">
          <img src={git} alt=""  height={"150px"}/>
        </div>
      </div>
    </div>
  )
}

export default Skills