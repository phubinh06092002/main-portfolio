import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Hero from './component/hero'
import About from './component/About'
import { Skills } from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    }, [])
  })
  return (
    <main className='bg-gray-800'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
