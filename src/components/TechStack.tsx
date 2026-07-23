import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { techStack, radarData } from '../data/techStack';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'master':
        return 'text-tech-green bg-tech-green/10 border-tech-green/30';
      case 'proficient':
        return 'text-tech-blue bg-tech-blue/10 border-tech-blue/30';
      case 'familiar':
        return 'text-tech-orange bg-tech-orange/10 border-tech-orange/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'master':
        return '精通';
      case 'proficient':
        return '熟练';
      case 'familiar':
        return '了解[AI中会用而已]';
      default:
        return level;
    }
  };

  return (
    <section id="techstack" className="py-20 bg-tech-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker via-transparent to-tech-darker" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">技术栈</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            10年+技术积累，涵盖前端开发、后端开发、运维技术和工具技能
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-tech-darker/50 rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-white mb-6">能力雷达图</h3>
            <div className="aspect-square max-w-md mx-auto">
              <Radar
                data={radarData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    r: {
                      angleLines: {
                        color: 'rgba(59, 130, 246, 0.2)',
                      },
                      grid: {
                        color: 'rgba(59, 130, 246, 0.1)',
                      },
                      pointLabels: {
                        color: '#94a3b8',
                        font: {
                          size: 12,
                        },
                      },
                      ticks: {
                        display: false,
                        stepSize: 20,
                      },
                      suggestedMin: 0,
                      suggestedMax: 100,
                    },
                  },
                }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {techStack.map((category) => (
              <div
                key={category.name}
                className="bg-tech-darker/50 rounded-xl p-5 border border-gray-800"
              >
                <h3 className="text-lg font-semibold text-tech-blue mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <motion.span
                      key={item.name}
                      variants={itemVariants}
                      className={`group relative px-3 py-1.5 rounded-full text-sm font-medium border ${getLevelColor(item.level)} cursor-help`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                      <span className="ml-1 text-xs opacity-70">({getLevelLabel(item.level)})</span>
                      {item.description && (
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg border border-gray-700">
                          {item.description}
                          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></span>
                        </span>
                      )}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
