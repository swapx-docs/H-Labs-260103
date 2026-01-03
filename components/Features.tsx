import React from 'react';
import { motion } from 'framer-motion';
import { Translations } from '../types';
import { ICONS as IconsMap } from '../constants';
import { ArrowRight, CheckCircle2, Zap, Terminal, Code2, Cpu, Database } from 'lucide-react';

const CodeLine = ({ num, children }: { num: number, children: React.ReactNode }) => (
  <div className="flex hover:bg-white/5 -mx-6 px-6 transition-colors leading-6">
    <span className="text-gray-700 w-8 select-none text-right pr-4 shrink-0 font-mono text-xs pt-[2px]">{num}</span>
    <span className="font-mono text-sm whitespace-pre">{children}</span>
  </div>
);

const CodeBlock = () => (
  <div className="w-full rounded-xl bg-[#0d1117] border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs md:text-sm relative group transform transition-transform hover:scale-[1.01] duration-500">
    {/* Window Controls */}
    <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-gray-800 shrink-0">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="text-gray-500 text-xs flex items-center gap-2 opacity-60 font-sans">
         <Terminal size={12} />
         <span>H_Labs_RWA_Protocol.sol</span>
      </div>
      <div className="w-10"></div> {/* Spacer for center alignment */}
    </div>
    
    {/* Code Content */}
    <div className="p-6 text-gray-300 relative overflow-x-auto custom-scrollbar bg-[#0d1117]">
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
         <div className="text-[10px] text-brand-cyan/50 font-bold border border-brand-cyan/20 px-2 py-1 rounded bg-brand-cyan/5 backdrop-blur-sm">Solidity 0.8.20</div>
      </div>
      
      <div className="space-y-0.5">
        <CodeLine num={1}><span className="text-pink-400">contract</span> <span className="text-yellow-200">HLabsIncubator</span> <span className="text-pink-400">is</span> <span className="text-green-400">Ownable</span> {'{'}</CodeLine>
        <CodeLine num={2}><span className="text-gray-500 italic">// Core RWA Asset Tokenization Logic</span></CodeLine>
        <CodeLine num={3}><span className="text-pink-400">mapping</span>(<span className="text-green-400">address</span> {`=>`} <span className="text-green-400">uint256</span>) <span className="text-pink-400">public</span> <span className="text-blue-300">_stakedAssets</span>;</CodeLine>
        <CodeLine num={4}> </CodeLine>
        <CodeLine num={5}><span className="text-pink-400">function</span> <span className="text-yellow-200">mintDerivative</span>(<span className="text-green-400">uint256</span> <span className="text-orange-300">amount</span>) <span className="text-pink-400">external</span> <span className="text-pink-400">payable</span> {'{'}</CodeLine>
        <CodeLine num={6}>  <span className="text-pink-400">require</span>(<span className="text-orange-300">msg.value</span> {`>=`} <span className="text-blue-300">MIN_DEPOSIT</span>, <span className="text-green-300">"Insufficient"</span>);</CodeLine>
        <CodeLine num={7}>  <span className="text-blue-300">_mint</span>(<span className="text-orange-300">msg.sender</span>, <span className="text-orange-300">amount</span>);</CodeLine>
        <CodeLine num={8}>  <span className="text-pink-400">emit</span> <span className="text-yellow-200">ValueLocked</span>(<span className="text-orange-300">msg.sender</span>, <span className="text-orange-300">amount</span>);</CodeLine>
        <CodeLine num={9}>  <span className="text-blue-300">_distributeYield</span>(<span className="text-orange-300">msg.sender</span>);</CodeLine>
        <CodeLine num={10}>{'}'}</CodeLine>
        <CodeLine num={11}><span className="text-pink-400">function</span> <span className="text-yellow-200">crossChainBridge</span>() <span className="text-pink-400">external</span> <span className="text-pink-400">view</span> {'{'}</CodeLine>
        <CodeLine num={12}>  <span className="text-blue-300">_layerZeroEndpoint</span>.send();</CodeLine>
        <CodeLine num={13}>{'}'}</CodeLine>
        <CodeLine num={14}>{'}'}</CodeLine>
      </div>
      
      {/* Blinking Cursor */}
      <motion.div 
        className="w-2 h-4 bg-brand-cyan absolute bottom-12 left-10 shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  </div>
);

// P2: About H Labs
export const AboutSection: React.FC<{ t: Translations }> = ({ t }) => {
  return (
    <section id="about" className="py-32 bg-black relative border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-start">
           <div className="md:col-span-5">
              <span className="text-brand-cyan font-mono text-sm tracking-widest">01 / IDENTITY</span>
              <h2 className="text-5xl font-bold text-white mt-4 mb-6">{t.about.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{t.about.description}</p>
              
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-900 rounded border border-gray-800 text-brand-gold font-mono text-sm">
                 <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                 {t.about.history}
              </div>
           </div>
           
           <div className="md:col-span-7 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.about.items.map((item, i) => {
                const Icon = IconsMap[item.icon as keyof typeof IconsMap] || IconsMap.Globe;
                return (
                  <motion.div 
                    key={i}
                    className="p-6 rounded-xl border border-white/10 bg-gradient-to-b from-gray-900 to-black hover:border-brand-cyan/50 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-brand-cyan group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-4 h-10">{item.description}</p>
                    <div className="pt-4 border-t border-gray-800">
                       <span className="text-xs font-mono text-brand-gold">{item.details}</span>
                    </div>
                  </motion.div>
                )
              })}
           </div>
        </div>
      </div>
    </section>
  );
};

// P3 & P4: Incubation
export const IncubationSection: React.FC<{ t: Translations }> = ({ t }) => {
  return (
    <section id="incubation" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-cyan font-mono text-sm tracking-widest">02 / SERVICE LOGIC</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">{t.incubation.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.incubation.subtitle}</p>
        </div>

        {/* Process Steps Table-like Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-24">
          {t.incubation.steps.map((step, i) => (
            <motion.div 
              key={step.id}
              className="relative group h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-brand-cyan transition-colors p-6 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-xl font-bold text-white">{step.title}</h3>
                   <span className="text-4xl font-black text-white/5 group-hover:text-brand-cyan/20 transition-colors">{step.id}</span>
                </div>
                
                <div className="mb-6 flex-grow">
                   <h4 className="text-xs font-mono text-gray-500 uppercase mb-3">Core Tasks</h4>
                   <ul className="space-y-2">
                     {step.tasks.map((task, idx) => (
                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                         <div className="w-1 h-1 bg-brand-cyan rounded-full shrink-0" />
                         {task}
                       </li>
                     ))}
                   </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-800 bg-black/20 -mx-6 -mb-6 p-6">
                   <h4 className="text-xs font-mono text-brand-gold uppercase mb-2">Deliverables</h4>
                   <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d, idx) => (
                         <span key={idx} className="text-xs border border-gray-700 rounded px-2 py-1 text-gray-400">{d}</span>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack + Code Block Layout */}
        <div className="border-t border-gray-800 pt-20">
           <div className="flex items-center justify-between mb-12">
             <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Zap className="text-brand-cyan" /> {t.incubation.techTitle}
             </h3>
             <div className="hidden md:flex gap-2">
                {[Database, Cpu, Code2].map((Icon, i) => (
                   <div key={i} className="w-10 h-10 border border-gray-800 rounded flex items-center justify-center text-gray-600">
                      <Icon size={18} />
                   </div>
                ))}
             </div>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left: Tech Categories List */}
             <div className="flex flex-col gap-6">
                {t.incubation.techStack.map((stack, i) => {
                   const Icon = IconsMap[stack.icon as keyof typeof IconsMap] || IconsMap.Code;
                   return (
                      <div key={i} className="group relative bg-gray-900/30 border border-gray-800 hover:border-brand-cyan/50 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]">
                         <div className="flex items-start gap-5">
                            <div className="mt-1 w-12 h-12 rounded-lg bg-black border border-gray-800 flex items-center justify-center text-gray-500 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 transition-all">
                              <Icon size={24} />
                            </div>
                            <div className="flex-grow">
                               <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-between w-full group-hover:text-brand-cyan transition-colors">
                                  {stack.title}
                                  <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-cyan" />
                               </h4>
                               <div className="flex flex-wrap gap-2">
                                  {stack.items.map((item, idx) => (
                                     <span key={idx} className="text-xs font-mono text-gray-400 bg-black/50 border border-gray-800 px-3 py-1.5 rounded-md hover:border-gray-600 transition-colors">
                                        {item}
                                     </span>
                                  ))}
                               </div>
                            </div>
                         </div>
                      </div>
                   )
                })}
             </div>

             {/* Right: Code Block */}
             <div className="relative">
                <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] opacity-20 pointer-events-none rounded-full" />
                <CodeBlock />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// P10: Competencies
export const CompetenciesSection: React.FC<{ t: Translations }> = ({ t }) => {
   return (
      <section className="py-24 bg-gray-900 border-t border-black">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">{t.competencies.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {t.competencies.items.map((item, i) => (
                  <motion.div 
                     key={i}
                     className="bg-black p-8 text-center border-t-4 border-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/10 transition-all"
                     whileHover={{ y: -5 }}
                  >
                     <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}