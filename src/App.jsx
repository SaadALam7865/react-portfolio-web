import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (


    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={ <About/>}/>
          <Route path="/Skills" element={ <Skills/>}/>
          <Route path="/projects" element={ <Projects/>}/>
          <Route path="/contact" element={ <Contact/>}/>
        </Routes>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App