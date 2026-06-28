import { motion, Variants } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
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

export function Contact() {
  return (
    <section id="contact" className="py-16 relative overflow-hidden bg-black/5 dark:bg-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-6">
            Contact <span className="text-cta-color">Us</span>
          </h2>
          <div className="w-[60px] h-[1px] bg-cta-color mx-auto mb-6"></div>
          <p className="text-muted-color font-medium uppercase tracking-widest text-sm">Reach out for industrial solutions</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
        >
          {/* Amit Kumar Card */}
          <motion.div variants={scaleIn} className="bg-white dark:bg-[#0D1B2A] border border-gray-100 dark:border-white/10 border-t-4 border-t-cta-color p-8 group relative overflow-hidden flex flex-col items-center text-center text-gray-900 dark:text-white shadow-2xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cta-color/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-16 h-16 bg-cta-color text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition-all duration-300">
              <Phone size={24} />
            </div>
            
            <h3 className="font-display text-2xl uppercase tracking-wider mb-2">Amit Kumar</h3>
            <div className="w-8 h-[2px] bg-cta-color mb-6 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col space-y-3 w-full">
              <a href="tel:+918126085044" className="bg-cta-color text-white hover:bg-[#ff8559] hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] py-3 px-4 font-mono font-semibold transition-all duration-300 active:scale-95">
                +91 8126085044
              </a>
              <a href="tel:+917668743206" className="bg-cta-color text-white hover:bg-[#ff8559] hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] py-3 px-4 font-mono font-semibold transition-all duration-300 active:scale-95">
                +91 7668743206
              </a>
            </div>
          </motion.div>

          {/* Sanjay Goyal Card */}
          <motion.div variants={scaleIn} className="bg-white dark:bg-[#0D1B2A] border border-gray-100 dark:border-white/10 border-t-4 border-t-cta-color p-8 group relative overflow-hidden flex flex-col items-center text-center text-gray-900 dark:text-white shadow-2xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cta-color/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-16 h-16 bg-cta-color text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition-all duration-300">
              <Phone size={24} />
            </div>
            
            <h3 className="font-display text-2xl uppercase tracking-wider mb-2">Sanjay Goyal</h3>
            <div className="w-8 h-[2px] bg-cta-color mb-6 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col space-y-3 w-full">
              <a href="tel:+918630006168" className="bg-cta-color text-white hover:bg-[#ff8559] hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] py-3 px-4 font-mono font-semibold transition-all duration-300 active:scale-95">
                +91 8630006168
              </a>
              <a href="tel:+918445469598" className="bg-cta-color text-white hover:bg-[#ff8559] hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] py-3 px-4 font-mono font-semibold transition-all duration-300 active:scale-95">
                +91 8445469598
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div variants={scaleIn} className="bg-white dark:bg-[#0D1B2A] border border-gray-100 dark:border-white/10 border-t-4 border-t-cta-color p-8 group relative overflow-hidden flex flex-col items-center text-center text-gray-900 dark:text-white shadow-2xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cta-color/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-16 h-16 bg-cta-color text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition-all duration-300">
              <Mail size={24} />
            </div>
            
            <h3 className="font-display text-2xl uppercase tracking-wider mb-2">Email</h3>
            <div className="w-8 h-[2px] bg-cta-color mb-6 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col space-y-3 w-full">
              <a href="mailto:saidev.stg@gmail.com" className="bg-[#FFD700] text-[#0A1628] hover:bg-[#FFC000] hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] py-3 px-4 font-semibold text-sm transition-all duration-300 break-all active:scale-95">
                saidev.stg@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Location Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRight}
          className="bg-white dark:bg-[#0D1B2A] text-gray-900 dark:text-white shadow-2xl overflow-hidden border-t-4 border-t-cta-color"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <div className="w-12 h-12 bg-cta-color/10 rounded-full flex items-center justify-center text-cta-color mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-display text-3xl uppercase tracking-tight mb-4">Headquarters</h3>
              <p className="text-lg font-medium leading-relaxed mb-8">
                Vill Tharu Bhagori, Bijti Road,<br />
                Sitarganj, Gorikhera,<br />
                Uttarakhand 262405
              </p>
              <a 
                href="https://www.google.com/maps/place/Sai+dev+trading+company/@28.9166382,79.7166289,17z/data=!3m1!4b1!4m6!3m5!1s0x39a067002636f9c5:0x270d452c5b6210ae!8m2!3d28.9166335!4d79.7192038!16s%2Fg%2F11y67hx959?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-cta-color text-white px-6 py-3 font-semibold text-sm hover:bg-[#ff8559] hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] transition-all duration-300 w-max active:scale-95"
              >
                <MapPin size={16} />
                <span>Get Directions</span>
              </a>
            </div>
            <div className="h-[400px] lg:h-auto lg:col-span-2 relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://maps.google.com/maps?q=28.9166335,79.7192038&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Dev Trading Company Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
