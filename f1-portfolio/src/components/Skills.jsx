import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    // Programming Languages
    { name: "Python", icon: "🐍", category: "Languages", level: 95 },
    { name: "JavaScript", icon: "⚡", category: "Languages", level: 85 },
    { name: "HTML5", icon: "🌐", category: "Languages", level: 90 },
    { name: "CSS3", icon: "🎨", category: "Languages", level: 88 },
    { name: "SQL", icon: "🗃️", category: "Languages", level: 80 },

    // Deep Learning & ML
    { name: "TensorFlow", icon: "🧠", category: "Deep Learning", level: 90 },
    { name: "PyTorch", icon: "🔥", category: "Deep Learning", level: 88 },
    { name: "Keras", icon: "⚙️", category: "Deep Learning", level: 85 },
    { name: "Scikit-learn", icon: "🤖", category: "Machine Learning", level: 92 },

    // Data Science
    { name: "NumPy", icon: "🔢", category: "Data Science", level: 90 },
    { name: "Pandas", icon: "🐼", category: "Data Science", level: 95 },
    { name: "Matplotlib", icon: "📊", category: "Data Science", level: 85 },
    { name: "Seaborn", icon: "📈", category: "Data Science", level: 80 },

    // Frameworks
    { name: "React", icon: "⚛️", category: "Frontend", level: 85 },
    { name: "Tailwind CSS", icon: "💨", category: "Frontend", level: 90 },
    { name: "Bootstrap", icon: "🅱️", category: "Frontend", level: 88 },
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section id="skills" className="py-20 bg-racing-dark-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black text-gradient-ferrari mb-6">
            TECHNICAL SPECIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ferrari-red to-mclaren-orange mx-auto" />
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-3xl font-orbitron font-bold text-white mb-8 text-center">
                {category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + index * 0.1 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 10,
                        z: 50
                      }}
                      className="glass-effect rounded-xl p-6 text-center group cursor-pointer relative overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-ferrari-red to-mclaren-orange" />
                      </div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360 
                          }}
                          transition={{ duration: 0.5 }}
                          className="text-4xl mb-4 group-hover:animate-bounce"
                        >
                          {skill.icon}
                        </motion.div>

                        {/* Skill Name */}
                        <h4 className="text-xl font-orbitron font-bold text-white mb-4 group-hover:text-ferrari-red transition-colors">
                          {skill.name}
                        </h4>

                        {/* Progress Bar */}
                        <div className="w-full bg-racing-card-dark rounded-full h-2 mb-2">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-ferrari-red to-mclaren-orange"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + index * 0.1 + 0.5 
                            }}
                          />
                        </div>

                        {/* Percentage */}
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.2 + index * 0.1 + 1 
                          }}
                          className="text-sm text-gray-400 font-rajdhani font-semibold"
                        >
                          {skill.level}%
                        </motion.span>

                        {/* Decorative elements */}
                        <div className="absolute top-2 right-2 w-1 h-1 bg-ferrari-red rounded-full animate-ping" />
                        <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-mclaren-orange rounded-full animate-pulse" />
                      </div>

                      {/* Hover effect border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-ferrari-red rounded-xl transition-colors duration-300" />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="text-4xl font-orbitron font-black text-gradient-ferrari mb-2"
                >
                  {skills.length}+
                </motion.div>
                <div className="text-gray-400 font-rajdhani">Technologies</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="text-4xl font-orbitron font-black text-gradient-ferrari mb-2"
                >
                  90%
                </motion.div>
                <div className="text-gray-400 font-rajdhani">Avg Proficiency</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="text-4xl font-orbitron font-black text-gradient-ferrari mb-2"
                >
                  24/7
                </motion.div>
                <div className="text-gray-400 font-rajdhani">Learning Mode</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills