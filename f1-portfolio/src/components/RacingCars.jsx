import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const RacingCars = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cars = [
    {
      id: 'ferrari',
      color: 'bg-ferrari-gradient',
      delay: 0,
      speed: 8,
      trail: '#dc143c',
    },
    {
      id: 'mclaren',
      color: 'bg-mclaren-gradient',
      delay: 4,
      speed: 7,
      trail: '#ff8700',
    },
  ]

  return (
    <div className="fixed bottom-10 left-0 w-full pointer-events-none z-10">
      {cars.map((car) => (
        <div key={car.id} className="relative">
          {/* Car */}
          <motion.div
            className={`absolute w-20 h-10 ${car.color} rounded-l-full rounded-r-lg shadow-2xl`}
            style={{
              filter: `drop-shadow(0 0 10px ${car.trail})`,
              transform: `translateX(${-scrollY * 0.5}px)`,
            }}
            animate={{
              x: ['0vw', '100vw'],
            }}
            transition={{
              duration: car.speed,
              repeat: Infinity,
              ease: 'linear',
              delay: car.delay,
            }}
          >
            {/* Car details */}
            <div className="absolute inset-0">
              {/* Windshield */}
              <div className="absolute top-1 left-2 w-6 h-6 bg-gray-800 rounded opacity-60" />
              
              {/* Wheels */}
              <motion.div
                className="absolute -bottom-1 left-1 w-3 h-3 bg-gray-900 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-1 right-2 w-3 h-3 bg-gray-900 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.2, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Racing stripes */}
              <div className="absolute top-2 left-4 w-8 h-1 bg-white opacity-80 rounded" />
              
              {/* Exhaust effect */}
              <motion.div
                className="absolute right-0 top-3 w-2 h-2 rounded-full opacity-60"
                style={{ backgroundColor: car.trail }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0.6, 0.2, 0],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </div>
          </motion.div>

          {/* Speed lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 opacity-30"
              style={{
                backgroundColor: car.trail,
                width: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 40 + 10}px`,
                transform: `translateX(${-scrollY * 0.5}px)`,
              }}
              animate={{
                x: ['0vw', '100vw'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: car.speed * 0.8,
                repeat: Infinity,
                ease: 'linear',
                delay: car.delay + i * 0.1,
              }}
            />
          ))}

          {/* Dust trail */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute w-2 h-2 bg-gray-600 rounded-full opacity-20"
              style={{
                transform: `translateX(${-scrollY * 0.5}px)`,
              }}
              animate={{
                x: ['0vw', '100vw'],
                y: [0, -10, 0],
                scale: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: car.speed,
                repeat: Infinity,
                ease: 'linear',
                delay: car.delay + i * 0.2,
              }}
            />
          ))}
        </div>
      ))}

      {/* Track markers */}
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30" />
      
      {/* Finish line effect */}
      <motion.div
        className="absolute right-0 bottom-0 w-1 h-16 bg-gradient-to-t from-white via-gray-300 to-white opacity-40"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export default RacingCars