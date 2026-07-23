import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import VideoSection from './components/VideoSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-tech-dark">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Timeline />
        <VideoSection />
        <Contact />
      </main>
      <footer className="bg-tech-darker border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/blog/images/logo.png"
                alt="汪民胜"
                className="w-6 h-6 rounded object-cover"
              />
              <span className="text-white font-medium">汪民胜</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 汪民胜. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span>全栈运维工程师</span>
              <span>|</span>
              <span>持续学习中</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
