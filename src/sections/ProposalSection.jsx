import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MasonryGallery from '../components/MasonryGallery';
import StickyNav from '../components/StickyNav';

const ProposalSection = ({ title, content, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className={`mb-12 ${className}`}
    >
      {title && (
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white uppercase tracking-tight">
          {title}
        </h2>
      )}
      <div className="prose prose-invert max-w-none">
        {content}
      </div>
    </motion.div>
  );
};

const ProposalHeader = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="heading text-4xl md:text-5xl lg:text-6xl mb-4 uppercase tracking-tight">
        PROPOSTA STRATEGICA PER LA PRESENZA DIGITALE DI{' '}
        <span className="text-gradient accent-glow">PORRATI</span>
      </h1>
      <p className="subheading text-xl md:text-2xl mb-10">
        Dalla Base al Dominio Online: <span className="font-medium">La Roadmap per il Successo</span>
      </p>
      <div className="mt-10 flex flex-col items-center">
        <p className="text-xl font-display font-bold">Alessio Cavatassi</p>
        <p className="text-gray-300">Digital Marketing Strategist & Brand Accelerator</p>
        <p className="text-gray-400 mt-2">27 Marzo 2025</p>
      </div>
    </motion.div>
  );
};

const IntroSection = () => {
  return (
    <ProposalSection
      title="INTRODUZIONE E RICOMPRENSIONE DELL'ESIGENZA"
      content={
        <>
          <div id="intro" className="prose prose-invert max-w-none">
            <p className="font-bold text-accent mb-4 uppercase tracking-tight">
              Oggetto: Costruzione della Presenza Digitale e Strategie di Crescita per i prossimi 6 mesi (Aprile-Ottobre 2025)
            </p>
            
            <h3 className="text-xl font-display font-bold mt-8 mb-2 uppercase tracking-tight">Il Vostro Obiettivo Immediato:</h3>
            <p>
              Avete espresso l'esigenza di stabilire una presenza digitale fondamentale (Landing Page e Social Media) 
              prima del lancio ufficiale di Settembre. L'obiettivo è creare una prima traccia online, 
              una "vetrina" iniziale che rappresenti il vostro brand di gioielli.
            </p>
            
            <h3 className="text-xl font-display font-bold mt-8 mb-2 uppercase tracking-tight">La Visione Strategica Necessaria:</h3>
            <p>
              Una semplice "presenza" non è sufficiente per costruire un brand di valore nel mercato 
              competitivo della gioielleria. Il vero obiettivo, raggiungibile solo con un approccio strategico, 
              è trasformare l'online da una casella da spuntare a un motore di crescita e riconoscibilità.
            </p>
            <p className="mt-3">
              Una landing page o un profilo social senza una strategia a supporto sono strumenti inefficaci: 
              possono esistere, ma non portano risultati concreti in termini di visibilità, engagement o, 
              più importante, conversioni e vendite.
            </p>
            
            <h3 className="text-xl font-display font-bold mt-8 mb-2 uppercase tracking-tight">La Mia Proposta per i prossimi 6 mesi:</h3>
            <p>Questa proposta presenta due possibili scelte per raggiungere i vostri obiettivi:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <span className="font-bold">SCELTA 1: Servizi Esterni Separati</span>: 
                Fornitura di servizi singoli come landing page e gestione social di base, con pagamenti separati
                e un approccio frammentato.
              </li>
              <li>
                <span className="font-bold">SCELTA 2: Risorsa Interna Strategica</span>: 
                Integrazione di una figura professionale interna che sviluppi e implementi una strategia digitale 
                completa con un focus sui risultati a lungo termine, includendo competenze avanzate di AI e programming.
              </li>
            </ul>
          </div>
        </>
      }
      delay={0.2}
    />
  );
};

const Choice1Section = () => {
  return (
    <ProposalSection
      title="SCELTA 1: SERVIZI ESTERNI SEPARATI"
      content={
        <>
          <div id="choice1" className="prose prose-invert max-w-none">
            <p className="font-bold mb-4 uppercase tracking-tight">
              Questa scelta prevede la fornitura di servizi individuali senza un piano strategico integrato. 
              È il modello tradizionale "a progetto" o "a servizio" che si limita a creare gli strumenti digitali 
              di base senza garantirne l'efficacia.
            </p>
            
            <h3 className="text-xl font-display font-bold mt-8 mb-4 uppercase tracking-tight">Servizi Disponibili:</h3>
            
            <div className="bg-secondary p-6 rounded-sm mb-8">
              <h4 className="text-lg font-display font-bold mb-3">1. Landing Page</h4>
              <p className="mb-4">
                Una landing page è una singola pagina web progettata per una specifica azione di conversione (raccolta email, 
                contatti, ecc). <span className="italic">Non è un sito web completo</span>.
              </p>
              
              <div className="bg-primary/50 p-4 mb-4 rounded-sm">
                <p className="text-sm text-gray-300 italic mb-2">Esempio di Landing Page per Porrati Gioielli:</p>
                <img 
                  src="/src/assets/landing-example.svg" 
                  alt="Esempio Landing Page Porrati" 
                  className="w-full rounded-sm mb-2 border border-gray-800" 
                />
                <p className="text-xs text-gray-400">
                  Esempio di landing page per Porrati Gioielli: design elegante con form di raccolta email, 
                  anteprima della collezione e focus su conversion.
                </p>
              </div>
              
              <p>La landing page include:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Design base allineato alla vostra estetica</li>
                <li>Form di raccolta email</li>
                <li>Singola pagina responsive</li>
              </ul>
              
              <div className="bg-dark p-4 rounded-sm mt-4">
                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-bold text-accent">IMPORTANTE:</span> Una landing page senza traffico è inutile.
                  Questo servizio non include strategie per portare visitatori alla pagina (SEO, advertising, ecc).
                </p>
              </div>
              
              <p className="mt-4 text-accent">
                <span className="font-bold">Investimento:</span> €500 - €1.000 + IVA (pagamento unico)
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-sm mb-8">
              <h4 className="text-lg font-display font-bold mb-3">2. Sito Vetrina Base (Alternativa alla Landing Page)</h4>
              <p className="mb-4">
                Un sito web semplice con 3-5 pagine (Home, Chi Siamo, Prodotti, Contatti) che presenta il vostro brand
                in modo più completo rispetto a una landing page.
              </p>
              
              <p>Il sito vetrina include:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Design responsive</li>
                <li>Layout base con navigazione semplice</li>
                <li>Inserimento contenuti forniti da voi</li>
                <li>Form di contatto</li>
              </ul>
              
              <div className="bg-dark p-4 rounded-sm mt-4">
                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-bold text-accent">IMPORTANTE:</span> Come per la landing page, un sito senza
                  una strategia di traffico ha un'efficacia estremamente limitata.
                </p>
              </div>
              
              <p className="mt-4 text-accent">
                <span className="font-bold">Investimento:</span> €1.000 - €2.500 + IVA (pagamento unico)
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-sm mb-8">
              <h4 className="text-lg font-display font-bold mb-3">3. Gestione Social Media Base (Instagram)</h4>
              <p className="mb-4">
                Setup e gestione base di un profilo Instagram con pubblicazione regolare di contenuti.
              </p>
              
              <p>Il servizio mensile include:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                <li>Setup iniziale profilo</li>
                <li>X numero di post mensili (in base al vostro materiale fornito)</li>
                <li>Ottimizzazione base caption e hashtag</li>
                <li>Utilizzo contenuti forniti da voi</li>
                <li>Report mensile basilare</li>
                <li>Piano editoriale</li>

              </ul>
              
              <div className="bg-dark p-4 rounded-sm mt-4">
                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-bold text-accent">IMPORTANTE:</span> Questo servizio include le tattiche assimilate negli anni ma sono limitate ai contenuti forniti dall'azienda. Non include strategie avanzate 
                  di content marketing, di crescita, engagement attivo, community building o campagne mirate.  Si tratta di una semplice 
                  pubblicazione di contenuti che difficilmente genererà risultati significativi senza una strategia più ampia. IO VI POSSO FORNIRE UN IDEA DI PIANO EDITORIALE POI STARà A VOI CREARE I CONTENUTI PERTINENTI.
                </p>
              </div>
              
              <p className="mt-4 text-accent">
                <span className="font-bold">Investimento:</span> €500 - €1000 + IVA / mese 
                <span className="text-sm text-gray-300 ml-2">(impegno minimo 6 mesi: €3.000 - €6.000 + IVA totali)</span>
              </p>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-sm mt-8 border-l-4 border-accent">
              <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tight">Considerazioni sulla Scelta 1:</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-bold">Approccio Frammentato:</span> Servizi separati senza una 
                  strategia integrata limitano significativamente i potenziali risultati.
                </li>
                <li>
                  <span className="font-bold">Costo Cumulativo Alto:</span> Combinando landing page (o sito vetrina) 
                  e gestione social per 6 mesi, l'investimento totale è di €3.500-8.500 + IVA senza garanzia di risultati 
                  significativi.
                </li>
                <li>
                  <span className="font-bold">Nessuna Strategia di Crescita:</span> L'approccio si limita a "essere presenti" 
                  senza focus su conversioni o ROI.
                </li>
                <li>
                  <span className="font-bold">Gestione Complessa:</span> Richiede da parte vostra coordinamento 
                  tra diversi servizi e fornitori.
                </li>
              </ul>
            </div>
          </div>
        </>
      }
      delay={0.3}
    />
  );
};

const Choice2Section = () => {
  return (
    <ProposalSection
      title="SCELTA 2: RISORSA INTERNA STRATEGICA"
      content={
        <>
          <div id="choice2" className="prose prose-invert max-w-none">
            <p className="font-bold mb-4 uppercase tracking-tight">
              La scelta strategicamente più efficace: integrare una figura professionale interna che si occupi
              della costruzione di una presenza digitale coerente e orientata ai risultati. Questa opzione va oltre
              i semplici "servizi" per creare una vera e propria strategia di crescita.
            </p>
            
            <h3 className="text-xl font-display font-bold mt-8 mb-2 uppercase tracking-tight">Valore Strategico dell'Approccio Interno:</h3>
            <p className="mb-4">
              L'approccio della risorsa interna non si limita a "creare strumenti digitali", ma sviluppa una vera 
              strategia integrata in cui ogni elemento lavora in sinergia con gli altri per generare risultati 
              concreti e misurabili.
            </p>
            
            <div className="bg-accent/20 p-6 rounded-sm mb-8">
              <h4 className="text-lg font-display font-bold mb-4 uppercase tracking-tight">Vantaggi della Risorsa Interna vs Servizi Esterni:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2">Risorsa Interna Strategica</h5>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Strategia completa e integrata</li>
                    <li>Allineamento totale con obiettivi aziendali</li>
                    <li>Reattività immediata alle opportunità</li>
                    <li>Dedizione esclusiva al vostro brand</li>
                    <li>Conoscenza profonda del prodotto</li>
                    <li>Ottimizzazione continua della strategia</li>
                    <li>Sviluppo know-how interno all'azienda</li>
                    <li>Competenze multiple (marketing, AI, tech)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2">Servizi Esterni Separati</h5>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>Servizi singoli scollegati tra loro</li>
                    <li>Focus limitato al deliverable specifico</li>
                    <li>Tempi di risposta più lunghi</li>
                    <li>Attenzione divisa tra più clienti</li>
                    <li>Conoscenza superficiale del prodotto</li>
                    <li>Esecuzione statica del piano iniziale</li>
                    <li>Dipendenza continua da fornitori esterni</li>
                    <li>Competenze limitate all'area specifica</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-display font-bold mt-10 mb-4 uppercase tracking-tight">Aree di Intervento della Risorsa Interna:</h3>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-sm">
                <h4 className="text-lg font-display font-bold mb-3 text-accent">1. Sviluppo Strategia Digitale Completa</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analisi approfondita target e competitors</li>
                  <li>Definizione KPI specifici per settore gioielleria</li>
                  <li>Posizionamento distintivo nel mercato</li>
                  <li>Piano editoriale strategico integrato</li>
                  <li>Definizione customer journey completa</li>
                  <li>Pianificazione campagne di conversione</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-sm">
                <h4 className="text-lg font-display font-bold mb-3 text-accent">2. Presenza Web Efficace e Conversionale</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sviluppo sito web con focus su conversioni (non solo estetica)</li>
                  <li>Integrazione sistema analytics avanzato</li>
                  <li>Ottimizzazione SEO strategica</li>
                  <li>Implementazione automazioni marketing</li>
                  <li>Setup funnel di vendita e nurturing</li>
                  <li>Ottimizzazione continua basata su dati</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-sm">
                <h4 className="text-lg font-display font-bold mb-3 text-accent">3. Social Media Growth Strategy</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Gestione strategica canali social primari</li>
                  <li>Creazione contenuti premium orientati alla conversione</li>
                  <li>Community building e engagement attivo</li>
                  <li>Monitoraggio e interazione strategica</li>
                  <li>Collaborazione con influencer di settore</li>
                  <li>Campagne advertising mirate</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-sm border-l-4 border-accent">
                <h4 className="text-lg font-display font-bold mb-3 text-accent">4. Implementazione AI e Tech Avanzate</h4>
                <p className="mb-3">
                  Ciò che mi distingue dalla maggior parte degli specialisti di marketing è la mia comprovata 
                  competenza nell'ambito dell'Intelligenza Artificiale generativa e della programmazione. 
                  Queste competenze rappresentano un valore aggiunto cruciale per accelerare la crescita digitale:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Creazione di workflow AI per l'ottimizzazione dei contenuti e delle performance</li>
                  <li>Sviluppo di assistenti virtuali personalizzati per supportare vendite e customer care</li>
                  <li>Automazione di processi marketing ripetitivi, liberando risorse per attività strategiche</li>
                  <li>Analisi avanzata dati per decision-making strategico</li>
                  <li>Implementazione di sistemi di analisi predittiva per anticipare trend di mercato</li>
                  <li>Creazione rapida di prototipi web e landing page ad alte performance</li>
                  <li>Personalizzazione degli strumenti tecnologici secondo le esigenze specifiche del brand</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-display font-bold mt-10 mb-4 uppercase tracking-tight">Investimento per Risorsa Interna Strategica:</h3>
            <p className="mb-6">
              L'integrazione di una risorsa interna con competenze strategiche, digitali, AI e tech rappresenta 
              un investimento significativamente più efficace rispetto ai servizi frammentati.
            </p>
            
            <div className="bg-accent/10 p-6 rounded-sm mt-6 border-l-4 border-accent">
              <h4 className="text-lg font-display font-bold mb-4 uppercase tracking-tight">Opzioni di Collaborazione:</h4>
              
              <div className="mb-6 pb-6 border-b border-accent/30">
                <h5 className="font-bold mb-2">Contratto Part-Time (3 giorni/settimana)</h5>
                <p className="mb-2">
                  Soluzione ottimale per garantire continuità strategica mantenendo flessibilità e costi contenuti.
                </p>
                <p className="font-bold text-accent">
                  Investimento mensile: €XXX + contributi/tasse (definizione in sede di colloquio)
                </p>
              </div>
              
              <div>
                <h5 className="font-bold mb-2">Contratto Full-Time</h5>
                <p className="mb-2">
                  Massima dedizione e implementazione accelerata della strategia digitale completa.
                </p>
                <p className="font-bold text-accent">
                  Investimento mensile: €XXX + contributi/tasse (definizione in sede di colloquio)
                </p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-accent/30">
                <p className="text-lg">
                  <span className="font-bold">ROI Atteso:</span> A differenza dei servizi esterni che generano 
                  "presenza" senza garanzia di risultati, l'investimento in una risorsa strategica interna 
                  è orientato alla creazione di un asset digitale di valore con impatto diretto e misurabile 
                  sul business.
                </p>
              </div>
            </div>
            <div className="mt-10 mb-12 bg-secondary/30 p-6 rounded-sm">
              <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-tight">Esempi di Content Marketing con AI</h3>
              <p className="mb-6">
                Questi contenuti dimostrano come utilizzo l'Intelligenza Artificiale per creare asset visivi di qualità elevata. 
                Le immagini mostrano <span className="text-accent font-medium">output AI ottimizzati e curati</span> per il luxury market, 
                con efficienza di costi e tempi notevolmente migliori rispetto agli shooting tradizionali. 
                Ogni immagine mantiene l'identità di brand ma viene generata ad una frazione del costo di produzione standard.
              </p>
              <MasonryGallery />
            </div>
          </div>
        </>
      }
      delay={0.4}
    />
  );
};

const ComparisonSection = () => {
  return (
    <ProposalSection
      title="CONFRONTO TRA LE OPZIONI"
      content={
        <>
          <div id="comparison" className="prose prose-invert max-w-none">
            <p className="mb-6">
              Confrontiamo direttamente i due approcci per evidenziare perché la scelta della risorsa interna 
              rappresenta l'opzione più vantaggiosa per costruire una presenza digitale che generi risultati reali.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-accent/50">
                    <th className="py-3 px-4 text-left">Criterio</th>
                    <th className="py-3 px-4 text-left text-accent">Risorsa Interna Strategica</th>
                    <th className="py-3 px-4 text-left text-gray-400">Servizi Esterni Separati</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold">Approccio</td>
                    <td className="py-3 px-4 text-accent">Strategico e integrato</td>
                    <td className="py-3 px-4 text-gray-400">Frammentato e tattico</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold">Focus</td>
                    <td className="py-3 px-4 text-accent">Risultati e conversioni</td>
                    <td className="py-3 px-4 text-gray-400">Deliverable specifici</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold">Investimento</td>
                    <td className="py-3 px-4 text-accent">Ottimizzato per risultati</td>
                    <td className="py-3 px-4 text-gray-400">Frammentato e cumulativo</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold">Crescita Brand</td>
                    <td className="py-3 px-4 text-accent">Coerente e accelerata</td>
                    <td className="py-3 px-4 text-gray-400">Lenta e inconsistente</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold">AI & Tech</td>
                    <td className="py-3 px-4 text-accent">Integrate nella strategia</td>
                    <td className="py-3 px-4 text-gray-400">Limitate o assenti</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold">Allineamento</td>
                    <td className="py-3 px-4 text-accent">Totale con vision aziendale</td>
                    <td className="py-3 px-4 text-gray-400">Parziale e superficiale</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">ROI</td>
                    <td className="py-3 px-4 text-accent">Alto e misurabile</td>
                    <td className="py-3 px-4 text-gray-400">Basso e incerto</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-sm mt-8 border-l-4 border-accent">
              <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tight">Conclusione:</h3>
              <p className="text-lg">
                L'assunzione di una risorsa interna rappresenta un investimento strategico che costruisce un 
                asset di valore per l'azienda: una presenza digitale efficace che genera risultati misurabili.
              </p>
              <p className="mt-4">
                Al contrario, i servizi esterni rappresentano una spesa frammentata che crea strumenti 
                digitali di base, senza garantire risultati concreti.
              </p>
            </div>
          </div>
        </>
      }
      delay={0.5}
    />
  );
};

const WhyMeSection = () => {
  return (
    <ProposalSection
      title="PERCHÉ IO SONO LA RISORSA GIUSTA"
      content={
        <>
          <h3 className="text-xl font-display font-bold mt-2 mb-4 uppercase tracking-tight">Oltre il Marketing Tradizionale:</h3>
          <p className="mb-6">
            I prezzi indicati sono riferimenti di mercato per servizi standard. Io non offro servizi standard. 
            Offro strategia, competenza d'élite e focus maniacale sui risultati, derivanti da una formazione 
            accademica d'eccellenza (Triennale e Magistrale in Marketing e Master presso Il Sole 24 Ore) e 
            comprovati da risultati misurabili con diversi personal brand ed aziende in diversi settori.
          </p>
          
          <h3 className="text-xl font-display font-bold mt-8 mb-4 uppercase tracking-tight">Il Vantaggio della Mia Direzione:</h3>
          
          <div className="space-y-6 mt-4">
            <div className="bg-secondary p-6 rounded-sm">
              <h4 className="text-lg font-display font-bold mb-2 text-accent">1. Visione Strategica & Digital Marketing</h4>
              <p>
                Non solo esecuzione, ma pensiero critico e pianificazione. La mia competenza va oltre il "postare sui social"; 
                comprendo le dinamiche di mercato, i meccanismi psicologici dei consumatori target e le leve di 
                conversione specifiche per ogni settore. Sviluppo strategie integrate dove ogni canale supporta 
                gli altri per massimizzare i risultati.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-sm">
              <h4 className="text-lg font-display font-bold mb-2 text-accent">2. Approccio Diretto e Pragmatico:</h4>
              <p>
                Niente fuffa, solo azioni efficaci e misurabili. Ogni strategia che propongo è orientata a risultati concreti: 
                costruzione brand, generazione lead qualificati, conversioni. Non mi perdo in metriche vanity.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-sm border-l-4 border-accent">
              <h4 className="text-lg font-display font-bold mb-2 text-accent">3. Expertise in Generative AI e Programming:</h4>
              <p className="mb-3">
                Ciò che mi distingue dalla maggior parte degli specialisti di marketing è la mia comprovata 
                competenza nell'ambito dell'Intelligenza Artificiale generativa e della programmazione. 
                Queste competenze rappresentano un valore aggiunto cruciale per accelerare la crescita digitale:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Creazione di workflow AI per l'ottimizzazione dei contenuti e delle performance</li>
                <li>Sviluppo di assistenti virtuali personalizzati per supportare vendite e customer care</li>
                <li>Automazione di processi marketing ripetitivi, liberando risorse per attività strategiche</li>
                <li>Analisi avanzata dati per decision-making strategico</li>
                <li>Implementazione di sistemi di analisi predittiva per anticipare trend di mercato</li>
                <li>Creazione rapida di prototipi web e landing page ad alte performance</li>
                <li>Personalizzazione degli strumenti tecnologici secondo le esigenze specifiche del brand</li>
              </ul>
            </div>
            
            <div className="bg-secondary p-6 rounded-sm">
              <h4 className="text-lg font-display font-bold mb-2 text-accent">4. Integrazione Totale:</h4>
              <p>
                Come risorsa interna, divento parte del vostro team, allineato al 100% con i vostri obiettivi. 
                Massima efficienza, commitment totale e sviluppo di una strategia realmente su misura, che evolve 
                con voi giorno dopo giorno. La capacità di collaborare con tutti i reparti aziendali (produzione, 
                vendite, customer care) crea sinergie che un consulente esterno non può raggiungere.
              </p>
            </div>
          </div>
        </>
      }
      delay={0.5}
    />
  );
};

const ContactSection = () => {
  return (
    <ProposalSection
      title="PROSSIMI PASSI"
      content={
        <>
          <div id="contact" className="prose prose-invert max-w-none">
            <p className="text-xl font-bold text-accent mb-6 uppercase tracking-tight">
              Non accontentatevi di "esserci". Puntate a dominare il vostro spazio digitale.
            </p>
            
            <p className="mb-4">
              Discutiamo nel dettaglio questa proposta e definiamo insieme il percorso migliore per Porrati Gioielli.
            </p>
            
            <p className="mb-8">
              Sono disponibile per un incontro di approfondimento già la prossima settimana, sia in presenza presso la 
              vostra sede che in videoconferenza.
            </p>
            
            <div className="bg-secondary p-6 rounded-sm mt-8">
              <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tight">CONTATTI</h3>
              <div className="space-y-2">
                <p><span className="font-bold">Alessio Cavatassi</span></p>
                <p>Digital Marketing Strategist & Brand Accelerator</p>
                <p>Email: cavatassialessio@icloud.com</p>
                <p>Telefono: +39 3455133582</p>
              </div>
            </div>
          </div>
        </>
      }
      delay={0.6}
      className="mb-20"
    />
  );
};

const ProposalDocument = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <StickyNav />
        <ProposalHeader />
        <div className="max-w-4xl mx-auto">
          <IntroSection />
          <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent my-16"></div>
          <Choice1Section />
          <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent my-16"></div>
          <Choice2Section />
          <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent my-16"></div>
          <ComparisonSection />
          <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent my-16"></div>
          <WhyMeSection />
          <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent my-16"></div>
          <ContactSection />
        </div>
      </div>
    </section>
  );
};

export default ProposalDocument;
