import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProposalDocument from './sections/ProposalSection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for resources
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-display font-bold text-gradient mb-4">PORRATI</h1>
          <p className="text-white">Proposta Commerciale</p>
          <div className="mt-8 w-16 h-1 bg-accent mx-auto">
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app bg-primary text-white min-h-screen">
      <main>
        <ProposalDocument />
      </main>
    </div>
  );
}

export default App
