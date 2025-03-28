import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Per favore compila tutti i campi richiesti.');
      return;
    }
    
    // Here you would normally send the form data to a server
    console.log('Form data submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading text-center">
            Pronto a <span className="text-gradient">Investire</span> Nella Crescita?
          </h2>
          
          <p className="subheading text-center max-w-3xl mx-auto">
            Riservato a brand ambiziosi con chiari obiettivi di crescita nel settore lusso/premium
          </p>

          <div className="mt-12 bg-secondary p-8 rounded-sm">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-6">✓</div>
                <h3 className="text-2xl font-display font-bold mb-4">Messaggio Inviato con Successo</h3>
                <p className="text-gray-300 mb-8">
                  Grazie per il tuo interesse. Ti risponderò personalmente entro 24 ore per discutere la tua strategia di crescita digitale.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-primary"
                >
                  Invia un Altro Messaggio
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label htmlFor="name" className="block mb-2 font-display">Nome *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-primary p-3 border-2 border-gray-700 focus:border-accent focus:outline-none transition-colors rounded-sm"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label htmlFor="company" className="block mb-2 font-display">Azienda</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-primary p-3 border-2 border-gray-700 focus:border-accent focus:outline-none transition-colors rounded-sm"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block mb-2 font-display">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary p-3 border-2 border-gray-700 focus:border-accent focus:outline-none transition-colors rounded-sm"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="message" className="block mb-2 font-display">Obiettivo di Crescita *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-primary p-3 border-2 border-gray-700 focus:border-accent focus:outline-none transition-colors rounded-sm"
                    required
                    placeholder="Descrivi brevemente il tuo brand e i principali obiettivi di crescita digitale che vorresti raggiungere."
                  ></textarea>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center"
                >
                  <button type="submit" className="btn btn-primary px-12">
                    Invia Richiesta
                  </button>
                  <p className="mt-4 text-sm text-gray-400">
                    * Campi obbligatori. La risposta verrà inviata entro 24 ore lavorative.
                  </p>
                </motion.div>
              </form>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-lg">
              Preferisci un contatto diretto? Scrivimi a <a href="mailto:info@esempio.com" className="text-accent font-bold hover:underline">info@esempio.com</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
