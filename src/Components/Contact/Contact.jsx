import React, { useState } from 'react'
import "../Contact/Contact.css"


const Contact = () => {

  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

const handlesubmit = (e) =>{
  e.preventDefault()
  setUserName("");
  setEmail("");
  setPassword("");
  console.log(` UserName: ${userName} Email: ${email} Password: ${password}`);
  
}

const handleUserName = (e) => {
  setUserName(e.target.value);
  
}
const handleEmail = (e) => {
  setEmail(e.target.value);
 

}
const handlePassword = (e) => {
  setPassword(e.target.value);
 
 
}

  return (
    <div className='contact'>
      <div className='saad'><h1><span>Let's</span> Connect</h1></div>
      <div className="contact-div">
      <form className='border' onSubmit={handlesubmit}>
    <label htmlFor="username">Username</label>
    <br />
    <input onChange={handleUserName} value={userName} type="text" id='text' placeholder='Enter Your Name' required />
    <br /><br />
    <label htmlFor="username">Email</label>
   <br />
    <input onChange={handleEmail} value={email} type="email" id='email' placeholder='Enter Your Email' required />
    <br /><br />
    <label htmlFor="password">Password</label>
   <br />
    <input onChange={handlePassword} value={password} type="password" id='password' placeholder='Enter Your password here' required />
    <br /><br />
    <br /><br />
    <button className='btn-contact' type='submit'>Submit</button>
   </form>
  
   
      </div>
   
    </div>
  )
}

export default Contact