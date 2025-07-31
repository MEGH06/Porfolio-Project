import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ParticleSystem from './components/ParticleSystem'
import RacingCars from './components/RacingCars'

function App() {
  return (
    <div className="min-h-screen bg-racing-black text-white relative overflow-hidden">
      {/* Racing Background */}
      <div className="racing-bg"></div>
      
      {/* Particle System */}
      <ParticleSystem />
      
      {/* Racing Cars */}
      <RacingCars />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Research />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
