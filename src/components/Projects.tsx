import { motion } from 'framer-motion';
import { ArrowRight, Code, Folder, Star } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-tech-darker relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-blue/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-blue/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">项目展示</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            精选个人项目和工作项目，展示技术能力和解决问题的思路
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-tech-dark/50 rounded-xl border border-gray-800 overflow-hidden group hover:border-tech-blue/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Folder size={20} className="text-tech-blue" />
                    <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-tech-blue/10 text-tech-blue text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  {project.highlights.slice(0, 3).map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <Star size={12} className="text-tech-green flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-tech-blue text-sm font-medium hover:text-tech-blue/80 transition-colors"
                  >
                    <Code size={14} />
                    查看详情
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
