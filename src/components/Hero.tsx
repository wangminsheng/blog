import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Code2, Cloud } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-darker via-tech-dark to-tech-darker" />
      
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-tech-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-green/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-tech-blue to-tech-green flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              animate={{ boxShadow: ['0 0 20px rgba(59,130,246,0.3)', '0 0 40px rgba(59,130,246,0.5)', '0 0 20px rgba(59,130,246,0.3)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-5xl font-bold text-white">W</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-tech-green rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Terminal size={16} className="text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          <span className="text-tech-blue">汪</span>民胜
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-300 mb-6"
        >
          {contactInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {contactInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {contactInfo.skills.slice(0, 6).map((skill, index) => (
            <motion.span
              key={skill}
              className="px-4 py-2 bg-tech-blue/10 border border-tech-blue/30 rounded-full text-tech-blue text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="#techstack"
            className="flex items-center gap-2 px-6 py-3 bg-tech-blue text-white rounded-lg font-medium hover:bg-tech-blue/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 size={20} />
            查看技术栈
          </motion.a>
          <motion.a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-white rounded-lg font-medium hover:border-tech-blue hover:text-tech-blue transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Cloud size={20} />
            项目展示
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#techstack" className="text-gray-500 hover:text-tech-blue transition-colors">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
