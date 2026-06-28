import { motion, useInView } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    author: "Sumit Saxena",
    details: "1 review — 4 months ago",
    content: "I brought safety shoes with nano carbon toe from here.",
    isText: true
  },
  {
    author: "Sanju Gupta",
    details: "5 reviews · 2 photos — 7 months ago",
    content: "Owner have sound knowledge of industrial products.",
    isText: true
  },
  {
    author: "Rahul Rastogi",
    details: "1 review — 4 months ago",
    content: "Best rate in town.",
    isText: true
  },
  { author: "Mohit Rana", details: "4 months ago", isText: false },
  { author: "Bhabna Rana", details: "4 months ago", isText: false },
  { author: "Bhuvan", details: "4 months ago", isText: false },
  { author: "Munish Mittal", details: "4 months ago", isText: false },
  { author: "Kishan Nishad", details: "4 months ago", isText: false },
  { author: "Bipin Goel", details: "4 months ago", isText: false },
  { author: "Dharamveer Singhal", details: "4 months ago", isText: false },
];

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setHasEntered(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > Math.floor(reviews.length / 2)) diff -= reviews.length;
    if (diff < -Math.floor(reviews.length / 2)) diff += reviews.length;
    return diff;
  };

  return (
    <section id="reviews" className="py-24 relative bg-gray-50 dark:bg-[#0A1628] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-6 text-gray-900 dark:text-white">
              Client <br />Feedback
            </h2>
            <div className="w-[60px] h-[1px] bg-cta-color"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center space-x-4 bg-white dark:bg-[#0D1B2A] text-gray-900 dark:text-white px-6 py-4 border-l-4 border-l-cta-color shadow-xl"
          >
            <div className="flex text-[#FFD700]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} fill="currentColor" />
              ))}
            </div>
            <div className="flex flex-col border-l border-white/20 pl-4">
              <span className="font-display text-2xl leading-none text-[#FFD700]">5.0</span>
              <span className="text-[10px] text-gray-500 dark:text-white/70 uppercase tracking-wider font-semibold">10 Reviews</span>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[450px] md:h-[400px] w-full max-w-4xl mx-auto flex items-center justify-center mt-10" style={{ perspective: "1200px" }}>
          {reviews.map((review, index) => {
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);
            const isVisible = absOffset <= 2;
            const isCenter = offset === 0;

            return (
              <motion.div
                key={index}
                className="absolute w-full max-w-[320px] md:max-w-md cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                animate={{
                  x: `${offset * 75}%`,
                  y: isInView ? 0 : 100,
                  z: -absOffset * 250,
                  rotateY: -offset * 35,
                  rotateX: isInView ? 0 : 20,
                  scale: isCenter ? 1 : 0.85,
                  opacity: isInView && isVisible ? (isCenter ? 1 : 0.6) : 0,
                  zIndex: 20 - absOffset,
                  pointerEvents: isVisible ? "auto" : "none"
                }}
                transition={{ 
                  duration: hasEntered ? 0.5 : 0.8, 
                  ease: "easeOut",
                  delay: !hasEntered && isInView ? absOffset * 0.15 : 0
                }}
                whileHover={!isCenter && isVisible && hasEntered ? { 
                  scale: 0.9, 
                  z: -absOffset * 250 + 60,
                  opacity: 0.8
                } : {}}
                onClick={() => isVisible && setActiveIndex(index)}
              >
                <div className={`bg-white dark:bg-[#0D1B2A] text-gray-900 dark:text-white shadow-2xl p-8 flex flex-col h-[340px] md:h-[300px] border-t-4 border-t-cta-color relative overflow-hidden group transition-colors duration-500 ${isCenter ? 'ring-1 ring-gray-200 dark:ring-white/10' : ''}`}>
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-white/5 to-transparent pointer-events-none transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  <div className="flex text-[#FFD700] mb-6 space-x-1 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.8)] transition-all duration-300 relative z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center mb-6 relative z-10">
                    {review.isText ? (
                      <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-white/90 leading-snug">
                        "{review.content}"
                      </p>
                    ) : (
                      <div className="flex items-center space-x-2 text-cta-color bg-cta-color/10 px-4 py-2 w-max rounded-full">
                        <CheckCircle2 size={16} />
                        <span className="text-xs font-semibold uppercase tracking-wider">Verified Review</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10 relative z-10">
                    <p className="font-semibold text-lg">{review.author}</p>
                    <p className="text-xs text-gray-500 dark:text-white/50 mt-1 uppercase tracking-wider">{review.details}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex justify-center items-center mt-8 space-x-6 relative z-20"
        >
          <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-gray-800 dark:text-white hover:bg-cta-color dark:hover:bg-cta-color hover:text-white hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] transition-all duration-300 active:scale-95 shadow-sm">
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {reviews.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-cta-color w-8' : 'bg-gray-300 dark:bg-white/20 w-2 hover:bg-gray-400 dark:hover:bg-white/40'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-gray-800 dark:text-white hover:bg-cta-color dark:hover:bg-cta-color hover:text-white hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] transition-all duration-300 active:scale-95 shadow-sm">
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
