import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9222056520",
      color: "text-ferrari-red"
    },
    {
      icon: Mail,
      label: "Email",
      value: "meghdave2006@gmail.com",
      color: "text-mclaren-orange"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
      color: "text-ferrari-yellow"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-racing-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ferrari-red rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-mclaren-orange rounded-full blur-2xl animate-pulse" />
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
            PIT STOP CONTACT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ferrari-red to-mclaren-orange mx-auto mb-4" />
          <p className="text-xl text-gray-300 font-rajdhani">
            Ready to race towards innovation together? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-racing-card-dark/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`p-3 rounded-full bg-racing-card-dark ${info.color} group-hover:animate-pulse`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-rajdhani">
                        {info.label}
                      </div>
                      <div className="text-white text-lg font-rajdhani font-semibold group-hover:text-ferrari-red transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Racing Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8 p-6 border-l-4 border-ferrari-red bg-racing-card-dark/30 rounded-r-xl"
              >
                <p className="text-gray-300 italic font-rajdhani text-lg">
                  "The way to get started is to quit talking and begin doing. In F1 and in AI, 
                  it's all about precision, speed, and never giving up."
                </p>
                <p className="text-ferrari-red font-orbitron font-bold mt-2">
                  - Megh Dave
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-8">
                Send Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-4 bg-racing-card-dark border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-ferrari-red focus:outline-none transition-colors font-rajdhani"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-4 bg-racing-card-dark border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-ferrari-red focus:outline-none transition-colors font-rajdhani"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-4 bg-racing-card-dark border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-ferrari-red focus:outline-none transition-colors font-rajdhani"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="w-full px-4 py-4 bg-racing-card-dark border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-ferrari-red focus:outline-none transition-colors font-rajdhani resize-none"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(220, 20, 60, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-ferrari-gradient text-white font-orbitron font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:animate-pulse" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <p className="text-gray-300 font-rajdhani text-lg mb-4">
              Built with ⚡ React, 🎨 Tailwind CSS, and 🏎️ F1 Passion
            </p>
            <p className="text-ferrari-red font-orbitron font-bold">
              © 2024 Megh Dave. Ready to race towards the future!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact