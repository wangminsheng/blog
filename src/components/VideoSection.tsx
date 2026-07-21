import { motion } from 'framer-motion';
import { Play, Monitor, Video } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="video" className="py-20 bg-tech-darker relative">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">视频介绍</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            屏幕录制展示项目操作过程，直观呈现技术能力
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-tech-dark/50 rounded-2xl border border-gray-800 overflow-hidden aspect-video">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-tech-blue/10 to-tech-green/10">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 rounded-full bg-tech-blue/20 flex items-center justify-center border-2 border-tech-blue">
                  <Play size={48} className="text-tech-blue ml-2" fill="currentColor" />
                </div>
              </motion.div>
              <p className="text-white text-xl font-semibold mt-4">屏幕录制视频</p>
              <p className="text-gray-400 mt-2">环境检测工具操作演示</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Monitor size={18} />
                  <span className="text-sm">1920 x 1080</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Video size={18} />
                  <span className="text-sm">5分钟</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between bg-tech-darker/80 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-tech-blue/20 flex items-center justify-center">
                    <Video size={20} className="text-tech-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">环境检测工具演示</p>
                    <p className="text-gray-500 text-xs">展示系统环境检测流程</p>
                  </div>
                </div>
                <span className="text-tech-green text-sm font-medium">准备中</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="bg-tech-dark/50 rounded-xl border border-gray-800 p-4 hover:border-tech-blue/50 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video rounded-lg bg-tech-blue/10 mb-3 flex items-center justify-center">
                  <Video size={24} className="text-gray-600" />
                </div>
                <p className="text-white text-sm font-medium">视频 {item}</p>
                <p className="text-gray-500 text-xs">项目演示</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
