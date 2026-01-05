import React from 'react';
import { motion } from 'framer-motion';
import { Translations } from '../types';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const StatsTicker: React.FC<{ t: Translations }> = ({ t }) => {
  return (
    <div className="w-full border-y border-white/10 bg-black/80 backdrop-blur-md overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/10">
          {t.metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center md:items-start md:pl-8">
              <div className="flex items-baseline gap-1 mb-2">
                 {metric.prefix && <span className="text-2xl md:text-3xl text-brand-cyan font-mono">{metric.prefix}</span>}
                 <motion.span 
                   className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   viewport={{ once: true }}
                 >
                   {metric.value}
                 </motion.span>
                 {metric.suffix && <span className="text-xl md:text-2xl text-brand-gold font-mono">{metric.suffix}</span>}
              </div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">{metric.label}</p>
              <p className="text-xs text-gray-500 font-mono mt-1">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC<{ t: Translations }> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-0 overflow-hidden bg-brand-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Deep space bg */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(5,10,30,1)_0%,_rgba(0,0,0,1)_100%)]" />
        
        {/* Animated Particles/Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]" />
        
        {/* Grid Floor */}
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[linear-gradient(to_top,rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_top,black,transparent)] perspective-[1000px] rotate-x-60 transform origin-bottom" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center md:text-left flex-grow flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-6 justify-center md:justify-start"
        >
           <div className="h-[1px] w-12 bg-brand-cyan" />
           <span className="text-brand-cyan font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
             EST. 2017 Shenzhen · Upgrade 2025
           </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.hero.headline.split(' ').map((word, i) => (
             <span key={i} className={i === 2 || word === 'Web3' ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white" : ""}>
               {word} {' '}
             </span>
          ))}
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl text-gray-300 font-light mb-4 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.hero.subHeadline}
        </motion.p>

        <motion.p 
          className="text-sm md:text-lg text-brand-gold/80 font-mono mb-12 max-w-2xl border-l-2 border-brand-gold pl-4 py-2 bg-brand-gold/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t.hero.slogan}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
             onClick={() => window.open('https://t.me/hlabs_ai', '_blank')}
             className="group relative px-8 py-4 bg-brand-cyan text-black font-bold uppercase tracking-widest text-sm skew-x-[-12deg] hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3 skew-x-[12deg]">
              {t.hero.ctaPrimary} <ArrowRight size={18} />
            </span>
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm skew-x-[-12deg] hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 backdrop-blur-sm">
            <span className="block skew-x-[12deg]">{t.hero.ctaSecondary}</span>
          </button>
        </motion.div>
      </div>
      
      <div className="mt-16 relative z-20">
         <StatsTicker t={t} />
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20 z-10 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};