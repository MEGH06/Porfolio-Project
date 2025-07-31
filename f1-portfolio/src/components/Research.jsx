import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, FileText, Rocket, ExternalLink } from 'lucide-react'

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const researchItems = [
    {
      icon: Brain,
      title: "🧠 ML Research @ IIT Bombay",
      description: "Currently working as a Machine Learning Research Intern at IIT Bombay, focusing on advanced deep learning architectures and their applications in real-world problem solving. Collaborating with leading researchers on cutting-edge AI projects.",
      color: "border-ferrari-red",
      bgColor: "bg-ferrari-red/10",
      link: null
    },
    {
      icon: FileText,
      title: "📝 Physics-Informed Neural Networks",
      description: "Published a comprehensive article explaining PINNs (Physics-Informed Neural Networks) and their significance in modern AI. Breaking down complex concepts into digestible insights for the AI community.",
      color: "border-mclaren-orange",
      bgColor: "bg-mclaren-orange/10",
      link: "https://medium.com/@meghdave2006/explained-simply-what-are-pinns-and-why-they-matter-b9ad1f9a1c5c"
    },
    {
      icon: Rocket,
      title: "🚀 Deep Learning Expertise",
      description: "Specialized in neural networks, computer vision, NLP, and advanced deep learning frameworks. Constantly exploring state-of-the-art architectures and their practical implementations.",
      color: "border-ferrari-yellow",
      bgColor: "bg-ferrari-yellow/10",
      link: null
    },
    {
      icon: FileText,
      title: "✍️ Medium Technical Writer",
      description: "Regular contributor to Medium, sharing insights on machine learning, deep learning, and AI research. Committed to making complex AI concepts accessible to everyone.",
      color: "border-mclaren-orange",
      bgColor: "bg-mclaren-orange/10",
      link: "https://medium.com/@meghdave2006"
    }
  ]

  return (
    <section id="research" className="py-20 bg-racing-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black text-gradient-ferrari mb-6">
            RESEARCH & TECHNICAL WRITING
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ferrari-red to-mclaren-orange mx-auto" />
        </motion.div>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 2,
                boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
              }}
              className={`glass-effect rounded-2xl p-8 border-2 ${item.color} ${item.bgColor} group cursor-pointer relative overflow-hidden`}
            >
              {/* Background animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-ferrari-red to-mclaren-orange animate-pulse" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-4 rounded-full bg-racing-card-dark group-hover:animate-bounce">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-ferrari-red transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors">
                  {item.description}
                </p>

                {item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-ferrari-gradient text-white font-orbitron font-semibold rounded-full hover:shadow-lg transition-all duration-300 group"
                  >
                    <span>Read Article</span>
                    <ExternalLink size={16} className="group-hover:animate-pulse" />
                  </motion.a>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-ferrari-red rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-mclaren-orange rounded-full animate-ping" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              I'm always excited to work on innovative AI projects and share knowledge with the community. 
              Let's build the future of technology together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-mclaren-gradient text-white font-orbitron font-bold rounded-full hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Let's Connect</span>
              <Rocket size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Research