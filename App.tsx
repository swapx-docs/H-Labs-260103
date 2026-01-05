import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { AboutSection, IncubationSection, CompetenciesSection } from './components/Features';
import { MediaEcosystem, CapitalSection } from './components/Ecosystem';
import { CaseStudiesSection, TestimonialsSection } from './components/SocialProof';
import { TerminalOS } from './components/TerminalOS';
import { CONTENT } from './constants';
import { Language, ViewMode } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('cn');
  const [view, setView] = useState<ViewMode>('landing');
  const t = CONTENT[lang];

  if (view === 'terminal') {
    return <TerminalOS onBack={() => setView('landing')} />;
  }

  return (
    <Layout t={t} lang={lang} setLang={setLang} onOpenTerminal={() => setView('terminal')}>
      <Hero t={t} />
      <AboutSection t={t} />
      <IncubationSection t={t} />
      <CaseStudiesSection t={t} />
      <MediaEcosystem t={t} />
      <CapitalSection t={t} />
      <CompetenciesSection t={t} />
      <TestimonialsSection t={t} />
      
      {/* Call to Action Bar */}
      <section className="py-20 bg-brand-cyan relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">
              {lang === 'cn' ? '做 Web3 头部品牌，找 H Labs' : 'Make Web3 Great Again with H Labs'}
            </h2>
            <button 
               onClick={() => window.open('https://t.me/hlabs_ai', '_blank')}
               className="bg-black text-white px-10 py-4 font-bold text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
            >
               {t.footer.cta}
            </button>
         </div>
      </section>
    </Layout>
  );
};

export default App;