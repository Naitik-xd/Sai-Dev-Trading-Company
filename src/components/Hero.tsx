import { motion } from 'motion/react';
import { HeroScene } from './3d/HeroScene';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-[#F4F6F9] to-[#E2E8F0] dark:from-[#0A1628] dark:to-[#0D2137]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay dark:opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cta-color opacity-[0.05] dark:opacity-[0.1] blur-[100px]"></div>
      </div>

      <HeroScene />

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cta-color animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase">Premium Safety Supplier</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] max-w-5xl text-gray-900 dark:text-white opacity-100 relative z-30 [text-shadow:0_0_30px_rgba(255,107,53,0.2)] dark:[text-shadow:0_0_30px_rgba(255,107,53,0.4)]"
        >
          A House of <br />
          <span className="text-cta-color [text-shadow:none]">Complete</span> <br />
          Industrial Safety Solutions
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full max-w-2xl"
        >
          <a
            href="tel:+918126085044"
            className="w-full sm:w-auto bg-cta-color text-white hover:bg-[#ff8559] hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition-all duration-300 px-8 py-4 flex items-center justify-center space-x-3 group active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Phone size={16} />
            </div>
            <div className="flex flex-col items-start text-white">
              <span className="text-xs text-white/70 font-medium uppercase tracking-wider">Call Amit Kumar</span>
              <span className="font-semibold">+91 8126085044</span>
            </div>
          </a>

          <a
            href="tel:+918630006168"
            className="w-full sm:w-auto bg-cta-color text-white hover:bg-[#ff8559] hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition-all duration-300 px-8 py-4 flex items-center justify-center space-x-3 group active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Phone size={16} />
            </div>
            <div className="flex flex-col items-start text-white">
              <span className="text-xs text-white/70 font-medium uppercase tracking-wider">Call Kush</span>
              <span className="font-semibold">+91 8630006168</span>
            </div>
          </a>

          <a
            href="mailto:saidev.stg@gmail.com"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/20 transition-all duration-300 px-8 py-4 flex items-center justify-center space-x-3 group active:scale-95"
          >
            <Mail size={18} />
            <span className="font-semibold">Email Us</span>
          </a>

          <Link
            to="/catalog"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/20 transition-all duration-300 px-8 py-4 flex items-center justify-center space-x-3 group active:scale-95"
          >
            <span className="font-semibold uppercase tracking-wider">Our Catalog</span>
          </Link>

        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
        <span className="text-xs font-mono tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent"></div>
      </div>
    </section>
  );
}
