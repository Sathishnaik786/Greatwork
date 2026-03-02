import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Phone } from 'lucide-react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import JobApplication from './pages/JobApplication';
import Login from './pages/Login';
import Profile from './pages/Profile';

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    const check = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', check);
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<JobApplication />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<div className="pt-60 text-center font-black text-4xl uppercase text-slate-200">404 - Page Not Found</div>} />
            </Routes>
          </div>
        </AnimatePresence>
      </main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 left-8 w-12 h-12 bg-white text-[#020617] rounded-full flex items-center justify-center shadow-2xl z-[90] border border-slate-100"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Global Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 md:bottom-10 md:right-8 z-[90] flex flex-col gap-3 md:gap-4 items-center">
        {/* Phone Call Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#5A63F5]/50 rounded-full animate-ping" />
          <motion.a
            href="tel:+918367208436"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Call Us"
            className="relative w-12 h-12 rounded-full overflow-hidden flex flex-shrink-0 items-center justify-center shadow-[0_0_15px_rgba(90,99,245,0.4)] bg-[#5A63F5] text-white block"
          >
            <motion.div
              animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatDelay: 1.2 }}
            >
              <Phone size={22} fill="currentColor" />
            </motion.div>
          </motion.a>
        </div>

        {/* WhatsApp Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/50 rounded-full animate-ping" />
          <motion.a
            href="https://wa.me/qr/7QTLRCDFVZQHP1"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-full overflow-hidden flex flex-shrink-0 items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-transparent block"
          >
            <img src="/social.png" alt="WhatsApp" className="w-full h-full object-cover scale-[1.05]" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
