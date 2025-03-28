import React, { useState, useEffect } from 'react';

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState('intro');
  
  // Lista delle sezioni nel documento
  const sections = [
    { id: 'intro', label: 'Introduzione' },
    { id: 'choice1', label: 'Scelta 1: Servizi Esterni' },
    { id: 'choice2', label: 'Scelta 2: Risorsa Interna' },
    { id: 'comparison', label: 'Confronto Opzioni' },
    { id: 'contact', label: 'Contatti' }
  ];

  // Funzione per lo scroll alle sezioni
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset per evitare che la sezione sia nascosta sotto il menu
        behavior: 'smooth'
      });
    }
  };

  // Funzione per determinare la sezione attiva mentre si scorre
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Aggiungere un offset per una migliore attivazione
      
      // Trova quale sezione è visibile nel viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 right-4 z-40 bg-primary/90 backdrop-blur-sm rounded-sm shadow-lg border border-accent/20 overflow-hidden transition-all duration-300 hover:border-accent/50">
      <ul className="py-1">
        {sections.map((section) => (
          <li key={section.id} className="px-1">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-4 py-2 text-sm rounded-sm transition-colors duration-200 ${
                activeSection === section.id
                  ? 'bg-accent text-primary font-bold'
                  : 'hover:bg-secondary'
              }`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StickyNav;
