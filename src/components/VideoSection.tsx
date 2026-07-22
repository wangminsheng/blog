import { motion } from 'framer-motion';
import { Play, Video, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { useState, useRef } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const fullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const replay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
            屏幕录制展示项目，直观呈现
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-tech-dark/50 rounded-2xl border border-gray-800 overflow-hidden">
            <video
              ref={videoRef}
              className="w-full aspect-video"
              poster="/blog/video/环境检测工具.mp4#t=1"
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/blog/video/环境检测工具.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-tech-blue/10 to-tech-green/10 pointer-events-none">
              {!isPlaying && (
                <motion.button
                  className="relative z-10 pointer-events-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                >
                  <div className="w-24 h-24 rounded-full bg-tech-blue/20 flex items-center justify-center border-2 border-tech-blue backdrop-blur-sm">
                    <Play size={48} className="text-tech-blue ml-2" fill="currentColor" />
                  </div>
                </motion.button>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tech-darker via-tech-darker/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-tech-blue/20 flex items-center justify-center">
                    <Video size={20} className="text-tech-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">环境检测工具演示</p>
                    <p className="text-gray-500 text-xs">展示系统环境检测流程</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg bg-tech-dark/50 hover:bg-tech-blue/20 text-gray-400 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button
                    onClick={fullscreen}
                    className="p-2 rounded-lg bg-tech-dark/50 hover:bg-tech-blue/20 text-gray-400 hover:text-white transition-colors"
                  >
                    <Maximize2 size={18} />
                  </button>
                  <button
                    onClick={replay}
                    className="p-2 rounded-lg bg-tech-dark/50 hover:bg-tech-blue/20 text-gray-400 hover:text-white transition-colors"
                  >
                    <RotateCcw size={18} />
                  </button>
                </div>
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
