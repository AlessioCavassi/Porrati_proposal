import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="vision" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading text-center">
            Oltre il Marketing <span className="text-gradient">Tradizionale</span>
          </h2>
          
          <div className="mt-12 space-y-8 text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="leading-relaxed"
            >
              Nel panorama attuale del marketing digitale, la maggior parte delle aziende si accontenta della mera presenza online. Ma la verità è che <span className="font-bold text-accent">essere presenti non significa essere rilevanti</span>. La mia filosofia si basa su un principio fondamentale: i risultati misurabili sono l'unica metrica che conta.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="leading-relaxed"
            >
              Formatomi presso le migliori istituzioni accademiche italiane, con una laurea magistrale in Marketing e un Master executive presso Il Sole 24 Ore, ho sviluppato un metodo rigoroso che unisce la profondità dell'analisi strategica alla precisione dell'esecuzione tattica. Ma la vera differenza l'ho forgiata sul campo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="leading-relaxed"
            >
              <span className="font-bold text-white">Non gestisco pagine, costruisco imperi digitali</span>. La mia expertise si concentra esclusivamente sul segmento luxury e premium, con un focus particolare sul settore gioielli, dove ogni dettaglio comunicativo deve riflettere l'eccellenza del prodotto e generare un desiderio irresistibile nel target adeguato.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="border-l-4 border-accent pl-6 py-2 my-8 italic"
            >
              "La strategia digitale non è un'opzione nel mercato contemporaneo dei beni di lusso, è l'elemento discriminante tra chi dominerà il mercato e chi verrà dimenticato."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="leading-relaxed"
            >
              Il mio approccio esclude il superficiale, il mediocre, l'approssimativo. Il vostro brand merita una strategia digitale che sia all'altezza della vostra eccellenza produttiva. E io sono qui per costruirla.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
