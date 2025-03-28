import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Stylized bar chart component for growth metrics
const GrowthMetric = ({ title, percentage, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="mb-8"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-display font-medium">{title}</h4>
        <span className="text-accent font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-sm overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full bg-accent"
        />
      </div>
    </motion.div>
  );
};

// Case study card component
const CaseStudyCard = ({ title, metrics, image, delay }) => {
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
      className="bg-secondary rounded-sm overflow-hidden"
    >
      <div className="aspect-video bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h3 className="font-display font-bold text-xl text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-gray-300">{metric.label}</span>
              <span className="font-bold text-accent">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ResultsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Placeholder images for case studies
  const caseStudies = [
    {
      title: "Rebrand Digitale per Brand Gioielli di Lusso",
      image: "https://placehold.co/600x400/111111/DDDDDD?text=Luxury+Jewelry",
      metrics: [
        { label: "Incremento Vendite Online", value: "+187%" },
        { label: "Tasso di Conversione", value: "4.8%" },
        { label: "ROI sulla Campagna", value: "540%" }
      ],
      delay: 0.3
    },
    {
      title: "Lancio Collezione Esclusiva su Instagram",
      image: "https://placehold.co/600x400/111111/DDDDDD?text=Instagram+Campaign",
      metrics: [
        { label: "Engagement Rate", value: "12.3%" },
        { label: "Nuovi Clienti Premium", value: "+320" },
        { label: "Vendite Dirette", value: "€285K" }
      ],
      delay: 0.5
    }
  ];

  return (
    <section id="results" className="section-padding bg-primary" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading">
            I <span className="text-gradient">Risultati</span> Parlano Chiaro
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            Performance misurabili che dimostrano l'efficacia della mia strategia digitale nel settore luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Growth Metrics */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-2xl mb-8"
            >
              Crescita Media Generata per Clienti
            </motion.h3>

            <div className="space-y-6">
              <GrowthMetric title="Aumento Engagement Qualificato" percentage={215} delay={0.2} />
              <GrowthMetric title="Crescita Traffico Organico" percentage={180} delay={0.3} />
              <GrowthMetric title="Incremento Conversioni" percentage={145} delay={0.4} />
              <GrowthMetric title="Retention Rate Cliente Premium" percentage={92} delay={0.5} />
              <GrowthMetric title="ROI Medio Campagne" percentage={320} delay={0.6} />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-gray-300"
            >
              * Dati relativi alla media dei risultati ottenuti negli ultimi 24 mesi con clienti del settore luxury/premium.
            </motion.p>
          </div>

          {/* Right Column: Case Studies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-2xl mb-8"
            >
              Case History Selezionati
            </motion.h3>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={index}
                  title={study.title}
                  metrics={study.metrics}
                  image={study.image}
                  delay={study.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
