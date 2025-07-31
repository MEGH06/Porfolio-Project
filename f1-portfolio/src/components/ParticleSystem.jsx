import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ParticleSystem = () => {
  const particlesRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const createParticle = () => {
      const colors = ['#dc143c', '#ff8700', '#ffd700']
      const particle = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2,
        life: 1,
        decay: Math.random() * 0.01 + 0.005,
      }
      return particle
    }

    const updateParticles = () => {
      particlesRef.current = particlesRef.current
        .map(particle => ({
          ...particle,
          y: particle.y - particle.speedY,
          x: particle.x + particle.speedX,
          life: particle.life - particle.decay,
        }))
        .filter(particle => particle.life > 0 && particle.y > -10)
    }

    const animate = () => {
      // Add new particles
      if (Math.random() < 0.3) {
        particlesRef.current.push(createParticle())
      }

      updateParticles()

      // Limit particles for performance
      if (particlesRef.current.length > 100) {
        particlesRef.current = particlesRef.current.slice(-100)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      particlesRef.current = []
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {particlesRef.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Static floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`static-${i}`}
          className="absolute w-1 h-1 bg-ferrari-red rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-sm opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            background: i % 2 === 0 ? 
              'radial-gradient(circle, #dc143c, transparent)' : 
              'radial-gradient(circle, #ff8700, transparent)',
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default ParticleSystem