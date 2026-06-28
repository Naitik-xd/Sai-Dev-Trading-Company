import { motion, Variants, useInView, animate } from 'motion/react';
import { MapPin, Star, ShieldCheck } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Counter({ from, to, decimals = 0, className = "" }: { from: number, to: number, decimals?: number, className?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals);
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, decimals]);

  return <span ref={nodeRef} className={className}>{from.toFixed(decimals)}</span>;
}

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -50, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function About() {
  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRight}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">
            Industrial Credibility
          </h2>
          <div className="w-[60px] h-[1px] bg-cta-color mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="bg-white dark:bg-[#0D1B2A] text-gray-900 dark:text-white shadow-2xl p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300 border-l-4 border-l-cta-color">
              <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-[#FFD700]" size={24} fill="currentColor" />
              </div>
              <Counter from={0} to={5.0} decimals={1} className="text-4xl font-display mb-2 text-[#FFD700]" />
              <span className="text-sm text-gray-500 dark:text-white/70 uppercase tracking-wider font-semibold">Average Rating</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white dark:bg-[#0D1B2A] text-gray-900 dark:text-white shadow-2xl p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300 border-l-4 border-l-cta-color">
              <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-cta-color" size={24} />
              </div>
              <Counter from={0} to={10} decimals={0} className="text-4xl font-display mb-2 text-[#FFD700]" />
              <span className="text-sm text-gray-500 dark:text-white/70 uppercase tracking-wider font-semibold">Verified Reviews</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white dark:bg-[#0D1B2A] text-gray-900 dark:text-white shadow-2xl p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300 border-l-4 border-l-cta-color">
              <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="text-cta-color" size={24} />
              </div>
              <span className="text-2xl font-display mb-2 uppercase text-[#FFD700]">Sitarganj</span>
              <span className="text-sm text-gray-500 dark:text-white/70 uppercase tracking-wider font-semibold">Uttarakhand</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const pillars = [
    {
      title: "Expert Knowledge",
      description: "Owner have sound knowledge of industrial products.",
      icon: "01"
    },
    {
      title: "Competitive Pricing",
      description: "Best rate in town.",
      icon: "02"
    },
    {
      title: "Quality Products",
      description: "I brought safety shoes with nano carbon toe from here.",
      icon: "03"
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-black/5 dark:bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRight}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight max-w-2xl">
            Why Choose <br /><span className="text-cta-color">Sai Dev</span>
          </h2>
          <div className="w-[60px] h-[1px] bg-cta-color mt-6"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              variants={slideUp}
              className="bg-white dark:bg-[#0D1B2A] text-gray-900 dark:text-white shadow-2xl p-10 group relative overflow-hidden border-l-4 border-l-cta-color hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-display opacity-15 text-cta-color group-hover:scale-110 group-hover:opacity-25 transition-all duration-500 pointer-events-none">
                {pillar.icon}
              </div>
              
              <h3 className="text-2xl font-display uppercase tracking-wider mb-6 relative z-10">
                {pillar.title}
              </h3>
              
              <div className="w-8 h-[2px] bg-cta-color mb-6 transition-all duration-300 group-hover:w-16"></div>
              
              <p className="text-muted-color font-medium italic relative z-10">
                "{pillar.description}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
