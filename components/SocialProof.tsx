import React from 'react';
import { motion } from 'framer-motion';
import { Translations, Testimonial } from '../types';
import { TrendingUp, Award, Quote, Building, Wallet, Zap } from 'lucide-react';
import { STRATEGIC_PARTNERS } from '../constants';

const Marquee: React.FC<{ items: typeof STRATEGIC_PARTNERS; reverse?: boolean }> = ({ items, reverse = false }) => {
  return (
    <div className="relative flex overflow-x-hidden group">
       <div className={`${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} flex gap-12 whitespace-nowrap py-4`}>
          {/* Double the list to create seamless loop */}
          {[...items, ...items].map((partner, i) => (
             <div key={i} className="flex items-center justify-center shrink-0 w-[160px]">
                <img 
                   src={`https://logo.clearbit.com/${partner.domain}`}
                   alt={partner.name}
                   className="h-10 w-auto object-contain transition-all duration-300 opacity-50 grayscale brightness-0 invert hover:grayscale-0 hover:brightness-100 hover:invert-0 hover:opacity-100"
                   onError={(e) => {
                      // Fallback if logo fails
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-white/50 uppercase tracking-widest hover:text-white transition-colors cursor-default">${partner.name}</span>`;
                   }}
                />
             </div>
          ))}
       </div>
       <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
       <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  )
}

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <div className="w-[400px] shrink-0 bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 relative mx-4 hover:border-brand-cyan/30 transition-colors">
     <Quote className="absolute top-6 right-6 text-gray-700 opacity-50" size={40} />
     <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed min-h-[80px] whitespace-normal">"{item.content}"</p>
     <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan font-bold shrink-0">
           {item.author.charAt(0)}
        </div>
        <div>
           <div className="font-bold text-white">{item.author}</div>
           <div className="text-xs text-brand-gold font-mono">{item.role}</div>
        </div>
     </div>
  </div>
);

export const CaseStudiesSection: React.FC<{ t: Translations }> = ({ t }) => {
   // Split partners for two rows
   const half = Math.ceil(STRATEGIC_PARTNERS.length / 2);
   const row1 = STRATEGIC_PARTNERS.slice(0, half);
   const row2 = STRATEGIC_PARTNERS.slice(half);

  return (
    <section id="cases" className="py-32 bg-black relative">
       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,20,20,0)_0%,rgba(0,240,255,0.05)_100%)] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-20">
             <span className="text-brand-cyan font-mono text-sm tracking-widest">02.5 / PROVEN RESULTS</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">{t.caseStudies.title}</h2>
             <p className="text-gray-400 mt-2">{t.caseStudies.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
             {t.caseStudies.items.map((item, i) => {
                const icon = i === 0 ? <TrendingUp size={24} /> : i === 1 ? <Building size={24} /> : <Zap size={24} />;
                const colorClass = i === 0 ? 'text-brand-cyan' : i === 1 ? 'text-blue-400' : 'text-brand-gold';
                const bgClass = i === 0 ? 'bg-brand-cyan/10' : i === 1 ? 'bg-blue-400/10' : 'bg-brand-gold/10';

                return (
                   <motion.div 
                     key={i}
                     className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-brand-cyan/30 transition-all group"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.2 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -5 }}
                   >
                      <div className="flex justify-between items-start mb-6">
                         <div className={`w-12 h-12 rounded-xl ${bgClass} ${colorClass} flex items-center justify-center`}>
                            {icon}
                         </div>
                         <span className="text-xs font-mono border border-gray-700 rounded px-2 py-1 text-gray-400 uppercase">{item.tag}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
                      
                      <div className="mb-6 p-4 bg-black rounded-lg border border-gray-800/50">
                         <div className={`text-3xl font-black ${colorClass} mb-1`}>{item.stats}</div>
                         <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">{item.statsLabel}</div>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                   </motion.div>
                )
             })}
          </div>

          {/* Strategic Partners Section */}
          <div className="border-t border-gray-900 pt-20">
             <div className="text-left mb-12">
                <span className="text-brand-gold font-bold tracking-widest uppercase mb-2 block text-sm">{t.partners.topTitle}</span>
                <h3 className="text-4xl font-bold text-white mb-4">{t.partners.title}</h3>
                <p className="text-gray-500 max-w-2xl">{t.partners.description}</p>
             </div>
             <div className="flex flex-col gap-8">
               <Marquee items={row1} />
               <Marquee items={row2} reverse />
             </div>
          </div>
       </div>
    </section>
  );
};

export const TestimonialsSection: React.FC<{ t: Translations }> = ({ t }) => {
   return (
      <section className="py-24 bg-brand-dark border-b border-gray-900 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-white">{t.testimonials.title}</h2>
         </div>
            
         <div className="relative flex overflow-x-hidden group">
            <div className="animate-scroll-slow flex py-8">
               {[...t.testimonials.items, ...t.testimonials.items].map((item, i) => (
                  <TestimonialCard key={i} item={item} />
               ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
         </div>
      </section>
   );
};