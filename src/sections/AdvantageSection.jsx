import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AdvantagePoint = ({ number, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="flex gap-6 mb-12"
    >
      <div className="flex-shrink-0">
        <span className="flex items-center justify-center w-12 h-12 rounded-sm bg-accent text-primary font-bold text-xl">
          {number}
        </span>
      </div>
      <div>
        <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const AdvantageSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      number: "01",
      title: "Immersione Totale nel Brand",
      description: "Un consulente esterno, per quanto competente, non potrà mai raggiungere il livello di comprensione e immersione che una figura interna sviluppa. Conoscere ogni sfumatura dell'identità del brand, vivere la sua evoluzione quotidiana e sentirne il polso permette strategie digitali perfettamente allineate al DNA aziendale.",
      delay: 0.2
    },
    {
      number: "02",
      title: "Velocità di Esecuzione e Adattamento",
      description: "Il mercato digitale si muove a velocità impressionante. Una figura interna garantisce tempi di reazione immediati, possibilità di pivot rapidi della strategia e sfruttamento istantaneo di opportunità emergenti, eliminando i ritardi tipici della consulenza esterna.",
      delay: 0.3
    },
    {
      number: "03",
      title: "Visione e Strategia a Lungo Termine",
      description: "La crescita digitale significativa richiede continuità strategica e visione a lungo termine. Come risorsa interna, sviluppo roadmap digitali integrate con l'evoluzione pluriennale del brand, evitando l'approccio 'stop and go' tipico della consulenza esterna.",
      delay: 0.4
    },
    {
      number: "04",
      title: "Dedizione Esclusiva e Priorità Garantita",
      description: "A differenza di un consulente che divide tempo e attenzione tra diversi clienti, come risorsa interna offro dedizione totale al successo del vostro brand. I vostri obiettivi di crescita digitale sono la mia unica priorità, ogni giorno.",
      delay: 0.5
    },
    {
      number: "05",
      title: "Ottimizzazione Continua e Knowledge Transfer",
      description: "Lavorando internamente, posso implementare cicli di miglioramento continuo e trasferire conoscenze al team esistente, creando una cultura aziendale orientata all'eccellenza digitale che diventa un asset competitivo duraturo e proprietario.",
      delay: 0.6
    }
  ];

  return (
    <section id="advantage" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading text-center">
            Il Vantaggio <span className="text-gradient">Competitivo Interno</span>
          </h2>
          
          <p className="subheading text-center max-w-3xl mx-auto">
            Perché inserire una figura strategica interna piuttosto che affidarsi a consulenti esterni
          </p>

          <div className="mt-16">
            {advantages.map((advantage, index) => (
              <AdvantagePoint
                key={index}
                number={advantage.number}
                title={advantage.title}
                description={advantage.description}
                delay={advantage.delay}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-lg max-w-3xl mx-auto mb-8 text-white">
              <strong>La differenza è fondamentale:</strong> non rappresento un costo operativo, ma un investimento strategico con ROI misurabile che trasforma la vostra presenza digitale in un vantaggio competitivo strutturale.
            </p>
            <a href="#contact" className="btn btn-primary inline-block">
              Discutiamo il Vostro Obiettivo di Crescita
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection;
