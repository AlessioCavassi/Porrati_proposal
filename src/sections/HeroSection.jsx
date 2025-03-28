import React from 'react';
import { motion } from 'framer-motion';
import HeroScene from '../scenes/HeroScene';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-primary/70 z-10"></div>
      
      {/* 3D Scene as background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.h1 
            className="heading text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Basta Essere Online. <br />
            <span className="text-gradient">È Ora di Dominare.</span>
          </motion.h1>
          
          <motion.p 
            className="subheading text-xl md:text-2xl mt-6 mb-10 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialista in Digital Strategy & Brand Acceleration per il Settore Lusso. <br />
            Comprovata Esperienza. Risultati Garantiti.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#advantage" className="btn btn-primary">
              Scopri Perché Sono l'Asset Interno Che Ti Manca
            </a>
            <a href="#contact" className="btn border-white hover:bg-white hover:text-primary">
              Parliamo di Strategia Reale
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2">Scopri di più</span>
          <svg 
            className="animate-bounce w-6 h-6 text-white/80" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
