import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import catalogData from '../data/catalogData.json';

const CATALOG_DATA = catalogData as Record<string, { id: number | string, image: string }[]>;

const CATEGORIES = Object.keys(CATALOG_DATA);

function CategorySection({ title, index }: { title: string, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Use data if available, otherwise generate placeholders that map to expected file names
  const items = CATALOG_DATA[title] || [
    { id: 1, image: `/images/${title.toLowerCase().replace(' ', '-')}-1.jpg` },
    { id: 2, image: `/images/${title.toLowerCase().replace(' ', '-')}-2.jpg` },
    { id: 3, image: `/images/${title.toLowerCase().replace(' ', '-')}-3.jpg` },
    { id: 4, image: `/images/${title.toLowerCase().replace(' ', '-')}-4.jpg` }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`py-16 relative ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#0A1628]' : 'bg-white dark:bg-[#0D1B2A]'}`} ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="w-[60px] h-[3px] bg-cta-color"></div>
        </motion.div>

        <div className="relative overflow-hidden pt-4 pb-8">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[1200px] relative">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {items.map((item, i) => {
                  const isVisible = Math.abs(i - activeIndex) <= 1;
                  
                  return (
                    <motion.div 
                      key={i} 
                      className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { 
                        opacity: isVisible ? 1 : 0.5, 
                        scale: isVisible ? 1 : 0.9 
                      } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className={`bg-white dark:bg-[#112236] text-gray-900 dark:text-white shadow-xl p-0 flex flex-col h-[340px] md:h-[300px] border-t-4 border-t-cta-color relative overflow-hidden group transition-all duration-500`}>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] mix-blend-overlay pointer-events-none z-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-white/5 to-transparent pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0"></div>
                        
                        {item.image ? (
                          <div className="flex-grow w-full relative z-10 overflow-hidden bg-white">
                            <img 
                              src={item.image} 
                              alt={`${title} Product`} 
                              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
                              onError={(e) => {
                                // If the image doesn't exist yet, show a fallback instead of a broken link
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = `
                                  <div class="flex flex-col h-full justify-center items-center text-center bg-gray-100 dark:bg-[#0A1628]/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image text-gray-300 dark:text-white/20 mb-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                                    <p class="text-sm text-gray-400 dark:text-white/30 px-4">Upload to public${item.image}</p>
                                  </div>
                                `;
                              }}
                            />
                          </div>
                        ) : (
                          <div className="flex-grow flex flex-col justify-center items-center text-center relative z-10 bg-gray-100 dark:bg-[#0A1628]/50">
                            <ImageIcon size={48} className="text-gray-300 dark:text-white/20 mb-4" />
                            <p className="text-sm text-gray-400 dark:text-white/30 px-4">
                              (Image coming soon)
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center mt-4 space-x-6 relative z-20"
        >
          <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-white shadow-md dark:bg-white/5 flex items-center justify-center text-gray-800 dark:text-white hover:bg-cta-color dark:hover:bg-cta-color hover:text-white hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] transition-all duration-300 active:scale-95">
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {items.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-cta-color w-8' : 'bg-gray-300 dark:bg-white/20 w-2 hover:bg-gray-400 dark:hover:bg-white/40'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white shadow-md dark:bg-white/5 flex items-center justify-center text-gray-800 dark:text-white hover:bg-cta-color dark:hover:bg-cta-color hover:text-white hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] transition-all duration-300 active:scale-95">
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export function Catalog() {
  return (
    <main className="flex-grow pt-24 bg-gray-50 dark:bg-[#0A1628]">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-gray-900 dark:text-white mb-6">
            Our <span className="text-cta-color">Catalog</span>
          </h1>
          <p className="text-gray-600 dark:text-white/70 text-lg md:text-xl font-medium">
            Explore our complete inventory of industrial safety equipment. Designed for protection and durability.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {CATEGORIES.map((category, index) => (
          <CategorySection key={category} title={category} index={index} />
        ))}
      </div>
    </main>
  );
}
