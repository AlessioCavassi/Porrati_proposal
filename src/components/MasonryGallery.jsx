import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente per visualizzare una galleria in stile masonry degli shooting Porrati
const MasonryGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Immagini Porrati con aspect ratio misti
  const images = [
    { id: 1, src: "/porrati-images/3eb1f1ba-dd71-4dd7-b5e0-175eec266827.png", ratio: "3/4", category: "Shooting Brand" },
    { id: 2, src: "/porrati-images/0b831b4a-144a-4144-989e-c18987be3b59.png", ratio: "16/9", category: "Lifestyle" },
    { id: 3, src: "/porrati-images/0b40e007-fc97-4fc9-a2d8-fa2d13e4b282.png", ratio: "4/3", category: "Shooting Gioielli" },
    { id: 4, src: "/porrati-images/8d8d238e-8098-4809-92f8-992f866a3f46.png", ratio: "9/16", category: "Lifestyle" },
    { id: 5, src: "/porrati-images/0d253c86-f376-4f37-943c-a943231a9f4a.png", ratio: "16/9", category: "Branding" },
    { id: 6, src: "/porrati-images/9aa56861-0eb9-40eb-ad45-a6d45674244e.png", ratio: "9/16", category: "Shooting Brand" },
    { id: 7, src: "/porrati-images/17a59486-0181-4018-b975-07974ec7049d.png", ratio: "4/3", category: "Shooting Gioielli" },
    { id: 8, src: "/porrati-images/032fabbe-3d9a-43d9-91d3-ed1d1fbe457f.png", ratio: "9/16", category: "Shooting Gioielli" },
    { id: 9, src: "/porrati-images/8e751c44-4ee1-44ee-a3df-123dd0d173f1.png", ratio: "16/9", category: "Lifestyle" },
    { id: 10, src: "/porrati-images/09b35b4d-7cc8-47cc-9378-0937a0e34bc1.png", ratio: "9/16", category: "Lifestyle" },
  ];

  // Categorie per filtraggio
  const categories = ['Tutti', 'Shooting Brand', 'Shooting Gioielli', 'Lifestyle', 'Branding'];
  const [filter, setFilter] = useState('Tutti');

  // Filtra immagini in base alla categoria selezionata
  const filteredImages = filter === 'Tutti' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="w-full">
      {/* Testo introduttivo sull'ottimizzazione dei costi */}
      <div className="bg-accent/10 p-4 rounded-sm mb-6">
        <p className="text-sm">
          <span className="font-bold text-accent">OTTIMIZZAZIONE COSTI:</span> Con una risorsa interna specializzata, 
          Porrati potrebbe ridurre significativamente la frequenza degli shooting fotografici esterni, limitandoli 
          solo a quelli essenziali per il branding. Potrei gestire internamente i contenuti social e di supporto, 
          generando un risparmio stimato di €3.000-5.000 per shooting.
        </p>
      </div>
      
      {/* Filtri di categoria */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-300 ${
              filter === category 
                ? 'bg-accent text-primary' 
                : 'bg-secondary text-white hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Galleria Masonry - si adatta automaticamente a immagini di diverse dimensioni */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            className="relative overflow-hidden rounded-sm cursor-pointer group"
            style={{ aspectRatio: image.ratio }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(image)}
            layoutId={`container-${image.id}`}
          >
            <motion.img
              src={image.src}
              alt={`Porrati ${image.id}`}
              className="w-full h-full object-cover object-center"
              layoutId={`image-${image.id}`}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            >
              <p className="absolute bottom-3 left-3 text-white font-display text-sm">
                {image.category}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Modal per visualizzare l'immagine ingrandita */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-secondary rounded-sm overflow-hidden"
              layoutId={`container-${selectedImage.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage.src}
                alt={`Porrati ${selectedImage.id}`}
                className="w-full h-auto"
                layoutId={`image-${selectedImage.id}`}
              />
              <motion.div
                className="absolute top-4 right-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-accent text-primary rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
              <div className="p-4">
                <h4 className="text-xl font-display font-bold text-white">Shooting Porrati {selectedImage.id}</h4>
                <p className="text-gray-300 mt-2">Categoria: {selectedImage.category}</p>
                <p className="text-gray-400 mt-4">
                  Esempio di contenuto della categoria {selectedImage.category.toLowerCase()}. Come risorsa interna 
                  potrei ottimizzare questi shooting essenziali, integrandoli con contenuti gestiti internamente, 
                  riducendo i costi complessivi.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGallery;
