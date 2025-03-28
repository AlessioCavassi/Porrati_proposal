import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SolutionCard = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
      className="bg-primary p-8 rounded-sm border-l-2 border-accent hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4 text-accent text-3xl">{icon}</div>
      <h3 className="text-xl font-display font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const SolutionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      title: "Brand Strategy & Positioning Online",
      description: "Definizione di un'identità digitale distintiva e coerente con il DNA del brand. Analisi approfondita del mercato e dei competitor per identificare il posizionamento ottimale e massimizzare l'impatto nel segmento luxury.",
      icon: "⚜️",
      delay: 0.2
    },
    {
      title: "Social Media che Convertono",
      description: "Sviluppo di strategie social mirate che vanno oltre la semplice presenza. Focus su contenuti premium che costruiscono una community qualificata e generano conversioni misurabili, con particolare attenzione a Instagram e Pinterest per il settore gioielli.",
      icon: "💎",
      delay: 0.3
    },
    {
      title: "Landing Page & Funnel ad Alte Prestazioni",
      description: "Progettazione di landing page e funnel di vendita ottimizzati per conversioni di alto valore. Copywriting persuasivo mirato al segmento luxury e struttura UX studiata per guidare il prospect verso l'azione desiderata.",
      icon: "🚀",
      delay: 0.4
    },
    {
      title: "Content Strategy di Valore",
      description: "Creazione di una content strategy che posiziona il brand come autorità nel settore. Contenuti che attraggono il target ideale, comunicano l'esclusività del prodotto e costruiscono relazioni durature con i clienti di fascia alta.",
      icon: "✨",
      delay: 0.5
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading">
            Trasformo <span className="text-gradient">Potenziali</span> in <span className="text-gradient">Performance</span>
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            Strategie digitali concrete che generano risultati misurabili per brand di lusso nel settore gioielli.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              delay={solution.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Ogni strategia è sviluppata in base a dati concreti, una profonda comprensione del mercato luxury e un approccio scientifico all'ottimizzazione continua. Il risultato? Crescita esponenziale e ROI dimostrabile.
          </p>
          <a href="#results" className="btn btn-primary inline-block">
            Scopri i Risultati Ottenuti
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
