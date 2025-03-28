import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <a href="#" className="text-2xl font-display font-bold text-gradient">
              A.PORRATI
            </a>
            <p className="mt-2 text-gray-400">
              Digital Strategy & Brand Acceleration
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400">
              &copy; {currentYear} Alessandro Porrati. Tutti i diritti riservati.
            </p>
            <div className="mt-2 flex items-center justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                LinkedIn
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Instagram
              </a>
              <span className="text-gray-600">|</span>
              <a href="mailto:info@esempio.com" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
