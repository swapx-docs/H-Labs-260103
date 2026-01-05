import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useInView, Variants } from 'framer-motion';
import { Translations, MembershipTier } from '../types';
import { Network, Star, Zap, BarChart3, PieChart, Users, Radio, Globe2, CreditCard, Gem, ArrowRight, Share2, Megaphone, Target, Rocket, Wifi } from 'lucide-react';
import { PieChart as RePie, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts';
import { MEDIA_PARTNERS } from '../constants';

// Simple CountUp Component
const CountUp = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = count.set(value);
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplay(latest);
    });
  }, [rounded]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// 3D Membership Card with Real Aspect Ratio and Stand
const MembershipCard3D = ({ tier }: { tier: MembershipTier }) => {
   const isBlack = tier.color === 'black';
   const isGold = tier.color === 'gold';
   const isBlue = tier.color === 'blue';
   const [isHovered, setIsHovered] = useState(false);

   // Animation: Black card spins twice fast on hover, then stops.
   // On leave, it snaps back (duration: 0) to avoid spinning backwards.
   const cardVariants: Variants = {
      idle: { 
         rotateY: 0, 
         y: 0,
         scale: 1,
         transition: { 
            rotateY: { duration: isBlack ? 0 : 0.5 }, // Instant reset for black card to prevent back-spin
            default: { duration: 0.5, ease: "easeOut" }
         } 
      },
      hover: isBlack ? {
         rotateY: 720, // 2 full rotations (360 * 2)
         y: -20,
         scale: 1.05,
         transition: { 
            duration: 1.2, 
            ease: "easeInOut"
            // No repeat, so it stops at 720 (Front face)
         }
      } : {
         y: -15,
         rotateX: 10,
         scale: 1.05,
         transition: { duration: 0.3 }
      }
   };

   // Styling based on tier
   const cardStyle = isBlue 
      ? "bg-gradient-to-br from-blue-900 via-blue-950 to-[#020617] border-blue-500/30"
      : isGold
      ? "bg-gradient-to-br from-[#F5D061] via-[#D4AF37] to-[#8C6D1F] border-yellow-200/50"
      : "bg-[#0a0a0a] border-white/10 shadow-[inset_0_0_30px_rgba(0,0,0,1)]"; // Black Card Base

   const textColor = isGold ? "text-[#3E2C00]" : "text-white";
   const subTextColor = isGold ? "text-[#5C4000]" : "text-white/50";

   return (
      <div 
         className="perspective-[1200px] w-full flex flex-col items-center justify-end h-[300px] mb-4" 
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {/* Card Object */}
         <motion.div
            className={`relative w-[280px] h-[177px] rounded-xl shadow-2xl preserve-3d cursor-pointer z-20`} // Ratio ~1.58
            variants={cardVariants}
            initial="idle"
            animate={isHovered ? "hover" : "idle"}
            style={{ transformStyle: 'preserve-3d' }}
         >
            {/* Front Face */}
            <div className={`absolute inset-0 rounded-xl border-[1px] ${cardStyle} p-6 flex flex-col justify-between overflow-hidden backface-hidden`}>
               {/* Premium Textures */}
               {isBlack && (
                  <>
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />
                  </>
               )}
               {isBlue && <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,240,255,0.15),transparent_60%)]" />}
               {isGold && <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.3)_0%,transparent_40%,rgba(255,255,255,0.1)_100%)]" />}

               {/* Top Row: Chip & Logo */}
               <div className="flex justify-between items-start relative z-10">
                  <div className="w-11 h-8 bg-gradient-to-br from-[#d4af37] to-[#8c6d1f] rounded-md border border-[#8a6e46] flex items-center justify-center relative overflow-hidden shadow-inner">
                     {/* Chip Detail */}
                     <div className="absolute inset-0 border border-[#4a3b2a] opacity-30 rounded-md" />
                     <div className="w-full h-[1px] bg-[#4a3b2a] absolute top-1/2 -translate-y-1/2 opacity-50" />
                     <div className="h-full w-[1px] bg-[#4a3b2a] absolute left-1/3 opacity-50" />
                     <div className="h-full w-[1px] bg-[#4a3b2a] absolute right-1/3 opacity-50" />
                  </div>
                  <div className="text-right">
                     <div className={`font-black italic tracking-tighter text-lg ${textColor}`}>H LABS</div>
                     <div className="flex justify-end mt-1">
                        <Wifi size={14} className={`${textColor} opacity-60 rotate-90`} />
                     </div>
                  </div>
               </div>

               {/* Middle: Tier Name */}
               <div className="relative z-10 mt-2">
                  <div className={`text-[9px] font-mono uppercase tracking-[0.2em] mb-1 opacity-70 ${textColor}`}>MEMBERSHIP</div>
                  {isBlack ? (
                     <h3 className="text-2xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {tier.name}
                     </h3>
                  ) : (
                     <h3 className={`text-2xl font-black uppercase tracking-widest ${textColor} drop-shadow-sm`}>
                        {tier.name}
                     </h3>
                  )}
               </div>

               {/* Bottom: Info */}
               <div className="flex justify-between items-end relative z-10">
                  <div className={`text-[10px] font-mono ${subTextColor}`}>
                     {tier.subName} <br /> 
                     <span className="tracking-widest text-xs opacity-80">**** **** **** 8888</span>
                  </div>
                  {isBlack && (
                     <div className="border border-white/20 px-2 py-0.5 rounded text-[8px] font-bold text-white/80 tracking-widest bg-white/5 backdrop-blur shadow-lg">
                        INVITE ONLY
                     </div>
                  )}
               </div>
            </div>

            {/* Back Face (Visible on spin) */}
            <div className="absolute inset-0 rounded-xl bg-[#080808] border border-gray-800 p-6 flex flex-col justify-between transform rotate-y-180 backface-hidden overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
               <div className="absolute top-6 left-0 w-full h-10 bg-black/90" />
               <div className="mt-12 w-[80%] h-8 bg-white/10 flex items-center justify-end px-2 font-mono text-xs text-black italic bg-gradient-to-r from-gray-300 via-white to-gray-300">
                  CVV 123
               </div>
               <div className="text-[8px] text-gray-600 text-center mt-auto">
                  This card is property of H Labs Nexus.<br/>Non-transferable.
               </div>
            </div>
         </motion.div>

         {/* Display Stand / Pedestal (No Text) */}
         <div className="relative -mt-10 z-10 w-full flex justify-center pointer-events-none">
            {/* Top Ring */}
            <div className={`w-[220px] h-[50px] rounded-[100%] bg-gradient-to-b from-white/5 to-transparent blur-[1px] transform rotate-x-[65deg] border-t border-white/5`} />
            
            {/* Shadow Base */}
            <div className={`absolute top-4 w-[260px] h-[40px] bg-black blur-xl rounded-[100%] opacity-90`} />
            
            {/* Active Glow */}
            <motion.div 
               className={`absolute top-2 w-[180px] h-[30px] rounded-[100%] blur-xl transition-all duration-700
                  ${isBlue ? 'bg-blue-500/30' : ''}
                  ${isGold ? 'bg-yellow-500/30' : ''}
                  ${isBlack ? 'bg-white/10' : ''}
               `}
               animate={{ 
                  opacity: isHovered ? 1 : 0.4,
                  scale: isHovered ? 1.2 : 1
               }}
            />
         </div>
      </div>
   );
}

// Reusable Marquee Component for Ecosystem
const Marquee: React.FC<{ items: typeof MEDIA_PARTNERS }> = ({ items }) => {
   return (
     <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll flex gap-12 whitespace-nowrap py-8">
           {[...items, ...items].map((partner, i) => (
              <div key={i} className="flex items-center justify-center shrink-0 w-[160px]">
                 <img 
                    src={`https://logo.clearbit.com/${partner.domain}`}
                    alt={partner.name}
                    className="h-10 w-auto object-contain transition-all duration-300 opacity-50 grayscale brightness-0 invert hover:grayscale-0 hover:brightness-100 hover:invert-0 hover:opacity-100"
                    onError={(e) => {
                       e.currentTarget.style.display = 'none';
                       e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-white/50 uppercase tracking-widest hover:text-white transition-colors cursor-default">${partner.name}</span>`;
                    }}
                 />
              </div>
           ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
     </div>
   )
 }

const FactorySection: React.FC<{ data: Translations['media']['factory'], partnerTitle: string }> = ({ data, partnerTitle }) => {
   const pieData = [
      { name: 'Own Media', value: 30, color: '#00f0ff' }, // Brand Cyan
      { name: 'Partners', value: 40, color: '#3b82f6' }, // Blue
      { name: 'Community', value: 30, color: '#ffd700' }, // Gold
   ];

   return (
      <div className="mb-32">
         <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
               {/* Left: Content */}
               <div>
                  <div className="flex items-center gap-3 mb-4">
                     <Target className="text-brand-cyan" size={24} />
                     <h3 className="text-2xl font-bold text-white">{data.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">{data.desc}</p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                     {data.stats.map((stat, i) => (
                        <div key={i} className="bg-black/40 border border-gray-700 rounded-lg p-4 text-center">
                           <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                           <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                     ))}
                  </div>

                  <div className="bg-brand-cyan/10 border border-brand-cyan/20 p-4 rounded-lg flex items-start gap-3">
                     <Gem className="text-brand-cyan shrink-0 mt-1" size={18} />
                     <p className="text-sm text-brand-cyan/80 font-mono">{data.marketingPoint}</p>
                  </div>
               </div>

               {/* Right: Chart Visual */}
               <div className="h-[300px] w-full relative bg-black/50 rounded-2xl border border-gray-800 p-4">
                  <div className="absolute top-4 left-4 text-xs text-gray-500 font-mono">TRAFFIC SOURCE COMPOSITION</div>
                  <ResponsiveContainer width="100%" height="100%">
                     <RePie>
                        <Pie
                           data={pieData}
                           innerRadius={60}
                           outerRadius={100}
                           paddingAngle={5}
                           dataKey="value"
                           stroke="none"
                        >
                           {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                        </Pie>
                        <Tooltip 
                           contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                           itemStyle={{ color: '#fff' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                     </RePie>
                  </ResponsiveContainer>
                  {/* Center Text overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-center pointer-events-none">
                     <div className="text-3xl font-black text-white">100%</div>
                     <div className="text-[10px] text-gray-500">COVERAGE</div>
                  </div>
               </div>
            </div>

            {/* Media Partners Marquee */}
            <div className="mt-16 pt-12 border-t border-gray-800/50">
               <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white uppercase tracking-tight">{partnerTitle}</h4>
               </div>
               <Marquee items={MEDIA_PARTNERS} />
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none" />
         </div>
      </div>
   )
}


const KOLSection: React.FC<{ data: Translations['media']['kol'] }> = ({ data }) => {
  // Mock data for "Fan Growth" chart
  const growthData = [
    { month: 'M1', fans: 2000 },
    { month: 'M2', fans: 4500 },
    { month: 'M3', fans: 8000 },
    { month: 'M4', fans: 15000 },
    { month: 'M5', fans: 25000 },
    { month: 'M6', fans: 45000 },
  ];

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-32">
       {/* Left: Visual & Title */}
       <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-brand-gold/10 to-black border border-brand-gold/30 rounded-2xl p-8 lg:p-12 relative overflow-hidden flex-grow flex flex-col justify-center">
             <Star className="absolute top-6 right-6 text-brand-gold/20 w-32 h-32 rotate-12" />
             <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center text-brand-gold mb-6">
                   <Users size={28} />
                </div>
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{data.title}</h3>
                <p className="text-brand-gold/70 font-mono text-sm mb-6">{data.subtitle}</p>
                <button className="flex items-center gap-2 bg-brand-gold text-black font-bold px-6 py-3 rounded hover:bg-white transition-colors w-max">
                   {data.cta} <ArrowRight size={18} />
                </button>
             </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-4">
             {data.metrics.map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
                   <div className="text-2xl font-black text-white mb-1"><CountUp value={item.value} suffix={item.suffix} /></div>
                   <div className="text-[9px] text-gray-500 uppercase font-bold">{item.label}</div>
                </div>
             ))}
          </div>
       </div>

       {/* Right: Features & Chart */}
       <div className="lg:col-span-7 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="grid gap-6 relative z-10">
             {data.features.map((feat, i) => (
                <div key={i} className="flex gap-4 group">
                   <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 text-xs font-mono shrink-0 group-hover:bg-brand-gold group-hover:text-black transition-colors">0{i+1}</div>
                   <div>
                      <h4 className="text-white font-bold mb-1 group-hover:text-brand-gold transition-colors">{feat.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                   </div>
                </div>
             ))}
          </div>

          {/* Bottom Chart Overlay */}
          <div className="mt-8 h-[200px] w-full border-t border-gray-800 pt-4">
             <div className="text-[10px] text-gray-500 mb-2 font-mono uppercase">Avg. KOL Growth Trajectory (6 Months)</div>
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                   <defs>
                      <linearGradient id="colorFans" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#ffd700" stopOpacity={0.3}/>
                         <stop offset="95%" stopColor="#ffd700" stopOpacity={0}/>
                      </linearGradient>
                   </defs>
                   <Area type="monotone" dataKey="fans" stroke="#ffd700" fillOpacity={1} fill="url(#colorFans)" strokeWidth={2} />
                </AreaChart>
             </ResponsiveContainer>
          </div>
       </div>
    </div>
  )
}

const BrandOpsSection: React.FC<{ data: Translations['media']['brand'] }> = ({ data }) => {
   // Comparison Chart Data
   const compareData = [
      { name: 'Cost', traditional: 100, hlabs: 50 },
      { name: 'Reach', traditional: 40, hlabs: 100 },
      { name: 'Conv.', traditional: 30, hlabs: 85 },
   ];

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
       {/* Left: Features & Chart */}
       <div className="lg:col-span-7 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 order-2 lg:order-1 flex flex-col">
          <div className="grid gap-6 mb-8">
             {data.features.map((feat, i) => (
                <div key={i} className="bg-black/40 border border-gray-800 p-4 rounded-xl hover:border-brand-cyan/40 transition-colors">
                   <div className="flex items-center gap-3 mb-2">
                      <Rocket className="text-brand-cyan" size={18} />
                      <h4 className="text-white font-bold text-sm">{feat.title}</h4>
                   </div>
                   <p className="text-gray-400 text-xs leading-relaxed">{feat.desc}</p>
                </div>
             ))}
          </div>

          <div className="mt-auto h-[200px] w-full border-t border-gray-800 pt-4 relative">
             <div className="text-[10px] text-gray-500 mb-2 font-mono uppercase flex justify-between">
                <span>Performance Comparison</span>
                <div className="flex gap-2">
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-gray-600 rounded-full"></div> Market Avg</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-brand-cyan rounded-full"></div> H Labs</span>
                </div>
             </div>
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={compareData} barGap={4}>
                   <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} />
                   <Bar dataKey="traditional" fill="#333" radius={[4, 4, 0, 0]} barSize={20} />
                   <Bar dataKey="hlabs" fill="#00f0ff" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
             </ResponsiveContainer>
          </div>
       </div>

       {/* Right: Visual & Title */}
       <div className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2">
          <div className="bg-gradient-to-bl from-brand-cyan/10 to-black border border-brand-cyan/30 rounded-2xl p-8 lg:p-12 relative overflow-hidden flex-grow flex flex-col justify-center">
             <Megaphone className="absolute top-6 right-6 text-brand-cyan/20 w-32 h-32 -rotate-12" />
             <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center text-brand-cyan mb-6">
                   <Share2 size={28} />
                </div>
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{data.title}</h3>
                <p className="text-brand-cyan/70 font-mono text-sm mb-6">{data.subtitle}</p>
                
                <div className="flex flex-wrap gap-2">
                   {['Global PR', 'Crisis Mgmt', 'Viral Marketing'].map((tag, i) => (
                     <span key={i} className="px-3 py-1 border border-brand-cyan/30 text-brand-cyan text-xs font-mono rounded bg-brand-cyan/5">
                        {tag}
                     </span>
                   ))}
                </div>
             </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-4">
             {data.metrics.map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
                   <div className="text-2xl font-black text-white mb-1"><CountUp value={item.value} suffix={item.suffix} /></div>
                   <div className="text-[9px] text-gray-500 uppercase font-bold">{item.label}</div>
                </div>
             ))}
          </div>
       </div>
    </div>
  )
}

// P5, P6, P7: Media Main Section
export const MediaEcosystem: React.FC<{ t: Translations }> = ({ t }) => {
  return (
    <section id="media" className="py-32 bg-brand-dark relative overflow-hidden">
       <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
           <span className="text-brand-cyan font-mono text-sm tracking-widest">03 / H MEDIA</span>
           <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">{t.media.title}</h2>
           <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{t.media.subtitle}</p>
        </div>

        <FactorySection data={t.media.factory} partnerTitle={t.partners.mediaTitle} />
        <KOLSection data={t.media.kol} />
        <div className="my-16 border-t border-gray-900"></div>
        <BrandOpsSection data={t.media.brand} />
      </div>
    </section>
  );
};

// P8, P9: Capital & Membership
export const CapitalSection: React.FC<{ t: Translations }> = ({ t }) => {
  return (
    <section id="capital" className="py-32 bg-black relative">
       <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-24">
             <span className="text-brand-gold font-mono text-sm tracking-widest">04 / H FUND & NEXUS</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">{t.capital.title}</h2>
          </div>

          {/* Fund Section */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400" />
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h3 className="text-3xl font-bold text-white mb-4">{t.capital.fund.title}</h3>
                   <p className="text-gray-400 mb-8 leading-relaxed">{t.capital.fund.desc}</p>
                   
                   <div className="space-y-4">
                      <h4 className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-6">{t.capital.fund.modelName}</h4>
                      {t.capital.fund.allocation.map((item, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-black rounded-lg border border-gray-800">
                            <div className="flex items-center gap-3">
                               <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                               <div>
                                  <div className="text-white font-bold">{item.name}</div>
                                  <div className="text-xs text-gray-500">{item.desc}</div>
                               </div>
                            </div>
                            <div className="text-xl font-mono font-bold" style={{ color: item.color }}>{item.value}%</div>
                         </div>
                      ))}
                   </div>
                </div>

                <div className="h-[300px] w-full relative">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                         <div className="text-xs text-gray-500 uppercase">Total Size</div>
                         <div className="text-3xl font-bold text-white">$5M</div>
                      </div>
                   </div>
                   <ResponsiveContainer width="100%" height="100%">
                      <RePie>
                         <Pie
                            data={t.capital.fund.allocation as any[]}
                            innerRadius={100}
                            outerRadius={140}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={4}
                         >
                            {t.capital.fund.allocation.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                         </Pie>
                         <Tooltip 
                           contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                           itemStyle={{ color: '#fff' }}
                        />
                      </RePie>
                   </ResponsiveContainer>
                </div>
             </div>
          </div>
          
       </div>
    </section>
  );
};