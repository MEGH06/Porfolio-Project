import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileDown, Car } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const typingTexts = [
    "Racing through Neural Networks 🧠",
    "Researching at IIT Bombay 🎓",
    "Deep Learning Enthusiast 🚀",
    "Technical Writer on Medium ✍️",
    "AI Innovation Driver 🏎️"
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = typingTexts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % typingTexts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, typingTexts])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MEGH06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/megh-dave-4a2227314/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:meghdave2006@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ferrari-red rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="text-6xl md:text-8xl font-orbitron font-black text-gradient-ferrari animate-glow"
          >
            MEGH DAVE
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 font-rajdhani font-medium"
          >
            ML Research Intern @ IIT Bombay • Deep Learning Engineer
          </motion.p>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-16 flex items-center justify-center"
          >
            <span className="text-lg md:text-xl text-ferrari-red font-rajdhani font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(220, 20, 60, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-ferrari-gradient text-white font-orbitron font-bold rounded-full flex items-center gap-2 hover:shadow-2xl transition-all duration-300 neon-glow group"
            >
              <Car className="group-hover:animate-bounce" size={20} />
              Contact Me
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1O3JpbsQXBLjN2991dEnIIMEwn1WMfN3L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(255, 135, 0, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-mclaren-gradient text-white font-orbitron font-bold rounded-full flex items-center gap-2 hover:shadow-2xl transition-all duration-300 group"
            >
              <FileDown className="group-hover:animate-bounce" size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(220, 20, 60, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-racing-card-dark border border-gray-700 rounded-full flex items-center justify-center text-white hover:text-ferrari-red hover:border-ferrari-red transition-all duration-300 group"
              >
                <social.icon size={20} className="group-hover:animate-pulse" />
              </motion.a>
            ))}
            
            {/* Medium Link */}
            <motion.a
              href="https://medium.com/@meghdave2006"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: "0 0 20px rgba(255, 135, 0, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-racing-card-dark border border-gray-700 rounded-full flex items-center justify-center text-white hover:text-mclaren-orange hover:border-mclaren-orange transition-all duration-300 group"
            >
              <span className="text-sm font-bold group-hover:animate-pulse">M</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-ferrari-red opacity-10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-mclaren-orange opacity-10 rounded-full blur-2xl"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-ferrari-red rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-ferrari-red rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero