import { useTheme } from './ThemeProvider';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const SCHEDULE = {
  0: { start: 9 * 60 + 30, end: 17 * 60, openTimeStr: "9:30 AM" },
  1: { start: 8 * 60 + 30, end: 18 * 60 + 30, openTimeStr: "8:30 AM" },
  2: { start: 9 * 60 + 30, end: 15 * 60, openTimeStr: "9:30 AM" },
  3: { start: 8 * 60 + 30, end: 18 * 60 + 30, openTimeStr: "8:30 AM" },
  4: { start: 8 * 60 + 30, end: 18 * 60 + 30, openTimeStr: "8:30 AM" },
  5: { start: 8 * 60 + 30, end: 18 * 60 + 30, openTimeStr: "8:30 AM" },
  6: { start: 8 * 60 + 30, end: 18 * 60 + 30, openTimeStr: "8:30 AM" },
} as const;

function computeIsOpen() {
  const now = new Date();
  const day = now.getDay() as keyof typeof SCHEDULE;
  const minutes = now.getHours() * 60 + now.getMinutes();
  
  const todaySchedule = SCHEDULE[day];
  const isOpen = minutes >= todaySchedule.start && minutes < todaySchedule.end;
  
  return {
    isOpen,
    nextOpenTime: todaySchedule.openTimeStr
  };
}

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [storeStatus, setStoreStatus] = useState(() => computeIsOpen());

  useEffect(() => {
    const interval = setInterval(() => {
      setStoreStatus(computeIsOpen());
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-[#050A12] text-gray-900 dark:text-white pt-20 pb-10 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-none uppercase mb-2">
              Sai Dev
            </h2>
            <h3 className="font-display text-2xl text-gray-500 dark:text-white/50 tracking-tight leading-none uppercase mb-6">
              सै देव ट्रेडिंग कंपनी
            </h3>
            <p className="text-gray-600 dark:text-white/70 max-w-sm mb-8 font-medium">
              A House of Complete Industrial Safety Solutions
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
              {storeStatus.isOpen ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-800 dark:text-white/80">Open Now</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-800 dark:text-white/80">Closed • Opens {storeStatus.nextOpenTime}</span>
                </>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-gray-900 dark:text-white/90">Contacts</h4>
            <ul className="space-y-4 text-gray-600 dark:text-white/70">
              <li>
                <a href="tel:+918126085044" className="hover:text-cta-color transition-colors flex items-center group">
                  <span>Amit Kumar: +91 8126085044</span>
                  <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              </li>
              <li>
                <a href="tel:+917668743206" className="hover:text-cta-color transition-colors flex items-center group">
                  <span>Amit Kumar: +91 7668743206</span>
                  <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              </li>
              <li className="pt-2">
                <a href="tel:+918630006168" className="hover:text-cta-color transition-colors flex items-center group">
                  <span>Kush: +91 8630006168</span>
                  <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-gray-900 dark:text-white/90">Connect</h4>
            <ul className="space-y-4 text-gray-600 dark:text-white/70">
              <li>
                <a href="mailto:saidev.stg@gmail.com" className="hover:text-cta-color transition-colors flex items-center group">
                  <span>saidev.stg@gmail.com</span>
                  <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-white/10">
          <p className="text-gray-500 dark:text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sai Dev Trading Company. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={scrollToTop}
              className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
