import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Github, Linkedin, FileText } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-tech-dark relative">
      <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">联系我</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            欢迎联系我，期待与您交流技术和工作机会
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-tech-darker/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">基本信息</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-tech-blue/10 flex items-center justify-center">
                    <Mail size={24} className="text-tech-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">邮箱</p>
                    <p className="text-white">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-tech-green/10 flex items-center justify-center">
                    <Phone size={24} className="text-tech-green" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">电话</p>
                    <p className="text-white">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-tech-orange/10 flex items-center justify-center">
                    <MapPin size={24} className="text-tech-orange" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">所在地</p>
                    <p className="text-white">{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <motion.a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-lg hover:bg-tech-blue/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-lg hover:bg-tech-blue/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Linkedin size={18} />
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-tech-darker/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">下载简历</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-tech-blue/10 rounded-lg border border-tech-blue/30 hover:bg-tech-blue/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-tech-blue/20 flex items-center justify-center">
                    <FileText size={24} className="text-tech-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">汪民胜简历 - 运维工程师</p>
                    <p className="text-gray-400 text-sm">PDF 格式 · 2页</p>
                  </div>
                  <Download size={20} className="text-tech-blue" />
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-tech-green/10 rounded-lg border border-tech-green/30 hover:bg-tech-green/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-tech-green/20 flex items-center justify-center">
                    <FileText size={24} className="text-tech-green" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">汪民胜简历 - 云平台运维</p>
                    <p className="text-gray-400 text-sm">PDF 格式 · 2页</p>
                  </div>
                  <Download size={20} className="text-tech-green" />
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-tech-orange/10 rounded-lg border border-tech-orange/30 hover:bg-tech-orange/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-tech-orange/20 flex items-center justify-center">
                    <FileText size={24} className="text-tech-orange" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">汪民胜简历 - GPU虚拟化</p>
                    <p className="text-gray-400 text-sm">PDF 格式 · 2页</p>
                  </div>
                  <Download size={20} className="text-tech-orange" />
                </motion.a>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-tech-blue/20 to-tech-green/20 rounded-xl p-6 border border-tech-blue/30">
              <p className="text-white text-center font-medium">
                如有合作机会或工作邀请，欢迎随时联系！
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
