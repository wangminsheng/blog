import { motion } from 'framer-motion';
import { Briefcase, Award, ChevronRight } from 'lucide-react';
import { experiences } from '../data/experiences';

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="timeline" className="py-20 bg-tech-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker via-transparent to-tech-darker" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">工作经历</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            10年+工作经验，从学徒到全栈运维工程师的成长历程（全栈是目标）
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-tech-blue via-tech-green to-tech-orange hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-tech-darker/50 rounded-xl p-6 border border-gray-800 hover:border-tech-blue/50 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-tech-blue font-semibold">{experience.year}</span>
                    </div>
                    
                    <h3 className={`text-xl font-bold text-white mb-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {experience.company}
                    </h3>
                    <p className={`text-tech-green font-medium mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {experience.position}
                    </p>

                    <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Briefcase size={14} className="text-gray-500" />
                        <span className="text-sm text-gray-500">负责项目</span>
                      </div>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {experience.projects.map((project) => (
                          <span
                            key={project}
                            className="px-2 py-1 bg-tech-blue/10 text-tech-blue text-xs rounded"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Award size={14} className="text-gray-500" />
                        <span className="text-sm text-gray-500">主要成就</span>
                      </div>
                      <ul className={index % 2 === 0 ? 'md:text-right' : ''}>
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <ChevronRight size={12} className="text-tech-green flex-shrink-0 mt-1" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-tech-blue border-4 border-tech-dark shadow-lg shadow-tech-blue/50" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
