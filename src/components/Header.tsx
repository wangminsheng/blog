import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: '首页', href: '#hero' },
  { name: '技术栈', href: '#techstack' },
  { name: '项目', href: '#projects' },
  { name: '工作经历', href: '#timeline' },
  { name: '视频介绍', href: '#video' },
  { name: '联系我', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tech-dark/95 backdrop-blur-md shadow-lg border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#hero"
            className="text-xl font-bold text-tech-blue flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-8 h-8 bg-tech-blue rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">W</span>
            </span>
            <span className="text-white">汪民胜</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-tech-blue transition-colors text-sm font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-tech-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-tech-dark/95 backdrop-blur-md border-t border-blue-500/20"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-tech-blue transition-colors py-2 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
