import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Twitter, Send, Mail, Disc } from 'lucide-react';
import { Translations, Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  t: Translations;
  lang: Language;
  setLang: (l: Language) => void;
}

export const Navbar: React.FC<{ t: Translations; lang: Language; setLang: (l: Language) => void }> = ({ t, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-brand-cyan rounded-tr-xl rounded-bl-xl flex items-center justify-center relative overflow-hidden group">
             <span className="text-black font-black text-2xl relative z-10">H</span>
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
          </div>
          <span className="font-bold text-xl md:text-2xl tracking-tighter text-white">LABS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {t.nav.map((link) => (
            <a 
              key={link.key} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-400 hover:text-brand-cyan transition-colors uppercase tracking-widest relative group cursor-pointer"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-cyan transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'cn' ? 'en' : 'cn')}
            className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-white border border-gray-800 px-3 py-1 rounded hover:border-brand-cyan transition-all"
          >
            <Globe size={14} />
            {lang.toUpperCase()}
          </button>
          <button className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-brand-cyan transition-colors skew-x-[-10deg]">
             <span className="block skew-x-[10deg]">CONNECT</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {t.nav.map((link) => (
                <a 
                  key={link.key} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)} 
                  className="text-lg text-gray-300 hover:text-brand-cyan cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                 <span className="text-gray-500 text-sm">Language</span>
                 <button 
                    onClick={() => setLang(lang === 'cn' ? 'en' : 'cn')}
                    className="flex items-center gap-2 text-white"
                  >
                    <Globe size={16} /> {lang === 'cn' ? 'English' : '中文'}
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer: React.FC<{ t: Translations }> = ({ t }) => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 tracking-tighter glow-text">H LABS</h2>
            <p className="text-gray-400 font-mono text-sm max-w-md">{t.footer.slogan}</p>
          </div>
          <div className="flex gap-6">
            {[Twitter, Send, Disc, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-brand-cyan hover:text-black transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-600 font-mono">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, t, lang, setLang }) => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan selection:text-black font-sans">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>{children}</main>
      <Footer t={t} />
    </div>
  );
};