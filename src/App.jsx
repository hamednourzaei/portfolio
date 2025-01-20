import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Certification from './Components/Certification'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/certification" element={<Certification />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter> 
      
       
    </>
  )
}

export default App