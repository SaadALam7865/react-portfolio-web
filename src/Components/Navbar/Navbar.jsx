import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Saad</h1>
        <div className='nav-options'>
          <ul >
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/skills"}>Skills</Link></li>
          <li><Link to={"/projects"}>Projects</Link></li>
          <li><Link to={"/contact"}></Link></li>
          </ul>
   
    <button><Link to="/contact">Contact me</Link></button>
     </div>
    </div>
  )
}

export default Navbar