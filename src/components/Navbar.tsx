import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Catalog', href: '/catalog' },
    { name: 'About', href: '/#about' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Reviews', href: '/#reviews' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-[#0A1628] text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/5',
        scrolled ? 'py-2 shadow-xl' : 'py-3'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <Link to="/" className="flex flex-col">
            <span className="font-display text-xl md:text-2xl tracking-tight leading-none uppercase">
              Sai Dev
            </span>
            <span className="text-[8px] md:text-[10px] text-gray-500 dark:text-white/70 tracking-widest uppercase font-medium mt-0.5">
              Trading Company
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-white hover:text-cta-color transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4 pl-6 border-l border-gray-200 dark:border-white/20">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link 
              to="/#contact"
              className="flex items-center space-x-2 bg-cta-color text-white px-4 py-2 rounded-none font-medium text-xs hover:bg-[#ff8559] hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <Phone size={14} className="relative z-10" />
              <span className="relative z-10 uppercase tracking-wide">Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-900 dark:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0A1628] border-t border-gray-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-cta-color transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-cta-color text-white px-5 py-3 rounded-none font-medium mt-4"
              >
                <Phone size={18} />
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
