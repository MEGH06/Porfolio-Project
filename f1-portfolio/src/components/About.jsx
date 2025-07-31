import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Target, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: Trophy,
      title: "IIT Bombay Research",
      description: "ML Research Intern working on cutting-edge AI projects",
      color: "text-ferrari-red"
    },
    {
      icon: Target,
      title: "Deep Learning Expert",
      description: "Specialized in neural networks and advanced AI architectures",
      color: "text-mclaren-orange"
    },
    {
      icon: Zap,
      title: "Technical Writer",
      description: "Sharing AI knowledge through Medium publications",
      color: "text-ferrari-yellow"
    }
  ]

  return (
    <section id="about" className="py-20 bg-racing-dark-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-ferrari-red rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-mclaren-orange rounded-full animate-bounce-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black text-gradient-ferrari mb-6">
            ABOUT THE DRIVER
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ferrari-red to-mclaren-orange mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a sophomore at <span className="text-ferrari-red font-semibold">Dwarkadas J. Sanghvi College of Engineering</span>, 
                  specializing in Computer Science with a focus on Data Science. Currently, I'm accelerating my research journey 
                  as an <span className="text-mclaren-orange font-semibold">ML Research Intern at IIT Bombay</span>, where I'm diving 
                  deep into cutting-edge machine learning and deep learning technologies.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Like a Formula 1 driver navigating complex circuits, I leverage technology to solve real-world challenges 
                  with precision, speed, and innovation. My expertise spans from traditional ML algorithms to advanced 
                  <span className="text-ferrari-red font-semibold"> deep learning architectures</span>, including neural networks, 
                  computer vision, and natural language processing.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond research, I'm passionate about sharing knowledge through technical writing on 
                  <span className="text-mclaren-orange font-semibold"> Medium</span>, where I break down complex AI concepts 
                  for the broader community. Every project is a new race, every challenge a corner to master.
                </p>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-ferrari-red font-orbitron font-bold text-lg">
                    🏎️ Racing Philosophy:
                  </p>
                  <p className="text-gray-300 mt-2">
                    Technology isn't just something I study—it's my high-performance vehicle for creativity and innovation. 
                    Let's connect and explore the possibilities, because together, we could engineer the championship solutions of tomorrow!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className="glass-effect rounded-xl p-6 cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-racing-card-dark ${achievement.color} group-hover:animate-pulse`}>
                    <achievement.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-ferrari-red transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "1", label: "Research Publications" },
            { number: "∞", label: "Lines of Code" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center glass-effect rounded-lg p-6 group"
            >
              <div className="text-3xl md:text-4xl font-orbitron font-black text-gradient-ferrari mb-2 group-hover:animate-pulse">
                {stat.number}
              </div>
              <div className="text-gray-400 font-rajdhani font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About