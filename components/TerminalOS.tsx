import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Grid, Book, Gift, Wrench, FileText, BarChart2, 
  Zap, LogOut, Search, Bell, Menu, Shield, DollarSign,
  Monitor, Cpu, Activity, ChevronRight, User, CheckCircle2,
  Video, Youtube, Instagram, Twitter, Box, TrendingUp, MessageSquare
} from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

type TerminalPage = 'dashboard' | 'academy' | 'bounty' | 'delivery' | 'media' | 'assets' | 'intelligence';

const SIDEBAR_ITEMS: { id: TerminalPage; label: string; icon: any }[] = [
  { id: 'dashboard', label: '生态看板', icon: Grid },
  { id: 'academy', label: 'WEB3学院', icon: Book },
  { id: 'bounty', label: '賞金大厅', icon: Gift },
  { id: 'delivery', label: '交付工程', icon: Wrench },
  { id: 'media', label: '媒体矩阵', icon: FileText },
  { id: 'assets', label: '资管引擎', icon: BarChart2 },
  { id: 'intelligence', label: '情报追踪', icon: TrendingUp },
];

const NEON = '#99E5F8';

const PageHeader = ({ title, subtitle, rightElement }: { title: string, subtitle?: string, rightElement?: React.ReactNode }) => (
   <div className="flex justify-between items-end border-b border-gray-800 pb-6 mb-8">
      <div>
         <h2 className="text-3xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
            {title}
         </h2>
         {subtitle && <p className="text-gray-500 font-mono text-sm mt-2">{subtitle}</p>}
      </div>
      {rightElement}
   </div>
);

// --- Sub-Pages ---

const DashboardPage = () => {
   const [logs, setLogs] = useState([
      { time: '14:20:03', type: 'SUCCESS', msg: '理财 0h-shield 安全确认...', color: NEON },
      { time: '14:20:03', type: 'INFO', msg: 'H-Alpha 盈利預測模型更新', color: 'white' },
      { time: '14:19:55', type: 'WARN', msg: 'XOne 跨链桥节点同步延迟 12ms', color: '#fbbf24' },
      { time: '14:18:22', type: 'INFO', msg: 'SwapX 流动性池注入 $500,000', color: 'white' },
      { time: '14:17:10', type: 'SUCCESS', msg: 'NEXUS 赏金任务发放完毕', color: NEON },
      { time: '14:15:00', type: 'INFO', msg: '系统自检完成: 所有模块正常', color: 'white' },
      { time: '14:14:45', type: 'WARN', msg: '检测到高频访问 IP (Rate Limit)', color: '#fbbf24' },
   ]);

   return (
      <div className="space-y-8">
         {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1f1f1f] border border-gray-800 p-6 rounded-xl relative overflow-hidden group hover:border-[#99E5F8] transition-colors">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap size={60} color={NEON} />
               </div>
               <div className="text-gray-500 text-xs font-mono uppercase mb-2">H-POINTS 生态积分</div>
               <div className="text-4xl font-bold text-white mb-2">12,450</div>
               <div className="text-xs font-mono" style={{ color: NEON }}>+1,200 今日连续积分</div>
            </div>

             {/* Card 2 */}
             <div className="bg-[#1f1f1f] border border-gray-800 p-6 rounded-xl relative overflow-hidden group hover:border-[#99E5F8] transition-colors">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield size={60} color={NEON} />
               </div>
               <div className="text-gray-500 text-xs font-mono uppercase mb-2">WEB3 等级勋章</div>
               <div className="text-4xl font-bold mb-4" style={{ color: NEON }}>Lv.2</div>
               <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#99E5F8] w-[70%]" />
               </div>
               <div className="text-[10px] text-gray-500 mt-2 text-right">140/200 PTS TO UPGRADE</div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1f1f1f] border border-gray-800 p-6 rounded-xl relative overflow-hidden group hover:border-[#99E5F8] transition-colors">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <DollarSign size={60} color={NEON} />
               </div>
               <div className="text-gray-500 text-xs font-mono uppercase mb-2">RWA 资产组合收益</div>
               <div className="text-4xl font-bold text-white mb-2">+$420</div>
               <div className="text-xs font-mono text-blue-400">金叉的K线操盘开仓建议</div>
            </div>
         </div>

         {/* Log Feed */}
         <div className="bg-black border border-gray-800 rounded-xl overflow-hidden flex flex-col h-[400px]">
            <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex justify-between items-center">
               <span className="text-xs font-mono text-gray-400 uppercase">SYSTEM GROWTH FEED / 实时日志</span>
               <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
               </div>
            </div>
            <div className="p-4 font-mono text-sm overflow-y-auto flex-grow custom-scrollbar space-y-2">
               {logs.map((log, i) => (
                  <div key={i} className="flex gap-3">
                     <span className="text-gray-600 shrink-0">[{log.time}]</span>
                     <span className="uppercase shrink-0 w-16" style={{ color: log.type === 'WARN' ? '#fbbf24' : log.type === 'SUCCESS' ? NEON : 'gray' }}>{log.type}:</span>
                     <span style={{ color: log.color }}>{log.msg}</span>
                  </div>
               ))}
               <div className="flex gap-3 animate-pulse">
                  <span className="text-gray-600">[{new Date().toLocaleTimeString('en-US', {hour12: false})}]</span>
                  <span className="text-[#99E5F8]">_</span>
               </div>
            </div>
         </div>
      </div>
   );
};

const AcademyPage = () => (
   <div className="space-y-12">
      <PageHeader 
         title="H-ACADEMY CURRICULUM" 
         subtitle="WEB2 → WEB3 全套後駭培養路徑"
         rightElement={
            <div className="text-right">
               <div className="text-sm font-mono text-gray-400 mb-1">当前学习进度</div>
               <div className="text-xl font-bold" style={{ color: NEON }}>24.5%</div>
            </div>
         }
      />

      {/* Stage 01 */}
      <div>
         <div className="flex items-center gap-4 mb-6">
            <span className="bg-gray-800 text-white px-3 py-1 text-xs font-bold rounded">STAGE 01</span>
            <h3 className="text-xl font-bold text-white">资产安全与入门</h3>
            <span className="text-sm font-mono" style={{ color: NEON }}>核安第一課程</span>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            {[
               { title: "三分钟创建你的首个 Web3 钱包", dur: "2M", pts: "+56 PTS", desc: "安全配置第一步骤..." },
               { title: "H-Shield 安全课程: 防钓鱼攻破", dur: "3M", pts: "+88 PTS", desc: "安全培训课程..." },
               { title: "Gas Fee 到底是什么?", dur: "2M", pts: "+48 PTS", desc: "理解区块链交易成本..." },
            ].map((course, i) => (
               <div key={i} className="bg-[#1a1a1a] border border-gray-800 hover:border-[#99E5F8] p-6 rounded-xl transition-all group">
                  <div className="flex justify-between items-start mb-4">
                     <span className="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded">{course.dur}</span>
                     <span className="text-xs font-bold" style={{ color: NEON }}>{course.pts}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-snug h-14">{course.title}</h4>
                  <p className="text-sm text-gray-500 mb-6 h-10">{course.desc}</p>
                  <button className="w-full border border-[#99E5F8] text-[#99E5F8] py-2 text-xs font-bold uppercase hover:bg-[#99E5F8] hover:text-black transition-colors rounded-sm flex items-center justify-center gap-2">
                     START <ChevronRight size={12} />
                  </button>
               </div>
            ))}
         </div>
      </div>

       {/* Stage 02 */}
       <div>
         <div className="flex items-center gap-4 mb-6">
            <span className="bg-gray-800 text-white px-3 py-1 text-xs font-bold rounded">STAGE 02</span>
            <h3 className="text-xl font-bold text-white">交互与收益增长</h3>
            <span className="text-sm font-mono text-yellow-500">从基层到导师</span>
         </div>
         <div className="grid md:grid-cols-2 gap-6">
            {[
               { title: "DEX 与 SwapX: 首次链上交易", dur: "5M", pts: "+120 PTS" },
               { title: "Staking 与质押: 资产自动增值", dur: "4M", pts: "+100 PTS" },
            ].map((course, i) => (
               <div key={i} className="bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500 p-6 rounded-xl transition-all flex items-center justify-between">
                  <div>
                     <h4 className="text-lg font-bold text-white mb-2">{course.title}</h4>
                     <div className="flex gap-3 text-xs text-gray-500">
                        <span>{course.dur}</span>
                        <span className="text-yellow-500">{course.pts}</span>
                     </div>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition-colors">
                     <ChevronRight size={18} />
                  </button>
               </div>
            ))}
         </div>
      </div>
   </div>
);

const BountyPage = () => {
   const bounties = [
      { id: 1, platform: 'TikTok', icon: Video, title: 'NEXUS L2 主网启动短视频挑战赛', level: 'LV.2+', reward: '200 USDT + 500 H-POINTS', progress: '12/50' },
      { id: 2, platform: 'Twitter', icon: Twitter, title: 'SWAPX 交易引擎机制深度推文组', level: 'LV.1+', reward: '100 USDT + 2% TOKEN BONUS', progress: '45/100' },
      { id: 3, platform: 'Instagram', icon: Instagram, title: 'H-SHIELD 摇杆极速测评 (REELS)', level: 'LV.2+', reward: '150 USDT + 300 H-POINTS', progress: '8/30' },
      { id: 4, platform: 'YouTube', icon: Youtube, title: 'RWA 实物资产上链流程长视频', level: 'LV.4', reward: '500 USDT + 1200 H-POINTS', progress: '2/5' },
   ];

   return (
      <div className="space-y-8">
         <PageHeader 
            title="BOUNTY HALL / 赏金大厅" 
            subtitle="完最价值的即时务赏中报"
            rightElement={
               <div className="px-4 py-2 bg-gray-900 border border-gray-800 rounded text-sm text-gray-300">
                  赏计奖励池金额: <span className="font-bold text-white">$1,240,500</span>
               </div>
            }
         />

         <div className="grid gap-4">
            {bounties.map((b) => (
               <div key={b.id} className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 hover:border-[#99E5F8] transition-colors group">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#99E5F8] transition-colors">
                     <b.icon size={24} />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                     <h4 className="text-lg font-bold text-white mb-1">{b.title}</h4>
                     <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-gray-500">
                        <span>{b.platform}</span>
                        <span className="px-1.5 py-0.5 border border-gray-700 rounded text-[10px] text-gray-400">MIN LEVEL: {b.level}</span>
                     </div>
                  </div>
                  <div className="text-center md:text-right min-w-[200px]">
                     <div className="text-sm font-bold mb-1" style={{ color: NEON }}>{b.reward}</div>
                     <div className="text-xs text-gray-600 font-mono">CLAIMED: {b.progress}</div>
                  </div>
                  <button className="px-6 py-2 bg-[#99E5F8] text-black font-bold text-sm rounded hover:bg-white transition-colors">
                     领取
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
};

const DeliveryPage = () => {
   const projects = [
      { name: 'XONE', sub: 'CROSS-CHAIN / RUST/IBC', metric: 'TVL $210M+', tags: ['L0 BRIDGE', 'SETTLEMENT'], lead: '3 MONTHS' },
      { name: 'SWAPX', sub: 'DEFI ENGINE / SOLIDITY/GO', metric: 'Vol $1.2B+', tags: ['BONDING CURVE', 'MEV-RESIST'], lead: '4 MONTHS' },
      { name: 'RAINLINK', sub: 'ORACLE / MPC/OCR', metric: 'Latency <1s', tags: ['REAL-TIME DATA', 'RWA ORACLE'], lead: '2 MONTHS' },
      { name: '算盘 (SUANPAN)', sub: 'SETTLEMENT / ZK-PROOFS', metric: 'Daily 50k tx', tags: ['ACCOUNTING', 'TRANSPARENCY'], lead: '5 MONTHS' },
      { name: 'WOPAY', sub: 'PAYMENT / AA WALLET', metric: '40+ Fiats', tags: ['FIAT GATEWAY', 'CONSUMER APP'], lead: '4 MONTHS' },
      { name: 'AAVE INT.', sub: 'LENDING / SMART CONTRACT', metric: 'Extra Yield +4.2%', tags: ['LIQUIDITY', 'DEFI'], lead: 'ONGOING' },
   ];

   return (
      <div className="space-y-8">
         <PageHeader 
            title="DELIVERY SHOWCASE / 工程档案" 
            rightElement={
               <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs font-mono border border-green-900 rounded">SUCCESS RATE: 100%</span>
            }
         />

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
               <div key={i} className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl flex flex-col hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                     <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                        <Box size={20} className="text-gray-500" />
                     </div>
                     <CheckCircle2 size={16} color={NEON} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-1">{p.name}</h3>
                  <div className="text-[10px] text-gray-500 font-mono uppercase mb-4">{p.sub}</div>
                  
                  <div className="text-white font-serif italic border-l-2 border-[#99E5F8] pl-3 mb-6">
                     {p.metric}
                  </div>

                  <div className="mt-auto">
                     <div className="flex flex-wrap gap-2 mb-4">
                        {p.tags.map(t => (
                           <span key={t} className="text-[9px] bg-gray-900 text-gray-400 px-2 py-1 rounded border border-gray-800">{t}</span>
                        ))}
                     </div>
                     <div className="pt-4 border-t border-gray-800 text-[10px] text-gray-500 font-mono flex justify-between">
                        <span>LEAD TIME</span>
                        <span className="text-white">{p.lead}</span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

const MediaPage = () => {
   const categories = [
      { title: 'GLOBAL WEB3', reach: '45K+ MONTHLY REACH', items: ['CoinDesk', 'Cointelegraph', 'The Block', 'Decrypt'] },
      { title: '华语核心', reach: '28K+ MONTHLY REACH', items: ['Odaily 星球日报', 'Foresight News', 'PANews', '金色财经'] },
      { title: 'MAINSTREAM', reach: '180K+ MONTHLY REACH', items: ['Bloomberg', 'Forbes', 'TechCrunch', 'Yahoo Finance'] },
   ];

   return (
      <div className="space-y-8">
         <PageHeader 
            title="GLOBAL PR HUB / 宣发矩阵" 
            rightElement={
               <button className="text-xs text-[#99E5F8] border border-[#99E5F8] px-4 py-2 rounded hover:bg-[#99E5F8] hover:text-black transition-colors">
                  申请稿发全案
               </button>
            }
         />

         <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
               <div key={i} className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden">
                  <div className="p-8 text-center border-b border-gray-800 bg-gray-900/50">
                     <div className="w-16 h-16 rounded-full border border-[#99E5F8] bg-[#99E5F8]/10 flex items-center justify-center mx-auto mb-4">
                        <Monitor size={32} color={NEON} />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                     <p className="text-[10px] font-mono text-gray-400 tracking-widest">{cat.reach}</p>
                  </div>
                  <div className="p-6">
                     <ul className="space-y-4">
                        {cat.items.map((item, idx) => (
                           <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-[#99E5F8] rounded-full" />
                              {item}
                           </li>
                        ))}
                     </ul>
                     <button className="w-full mt-8 py-3 text-xs text-gray-500 hover:text-white border-t border-gray-800 transition-colors flex items-center justify-center gap-2">
                        View All Partners <ChevronRight size={12} />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

const GrowthIntelligencePage = () => {
   const trendData = [
      { project: '#NexusL2', kols: 82, volume: '125.4K', sentiment: 'BULLISH', color: NEON },
      { project: '#RWA_Summer', kols: 45, volume: '84.2K', sentiment: 'NEUTRAL', color: '#fbbf24' },
      { project: '#BondingCurve', kols: 29, volume: '62.1K', sentiment: 'BULLISH', color: NEON },
   ];

   const alphaFeeds = [
      { 
         source: 'ALPHA WHALE ELITE', 
         content: '大户们正在讨论 Nexus L2 的活动/激励，情绪很强。',
         color: NEON
      },
      { 
         source: 'DEV CORE LAB', 
         content: '关于 SwapX 路由算法优化与反夹手机制的技术讨论占白皮书。',
         color: '#8b5cf6'
      },
   ];

   return (
      <div className="space-y-8">
         <PageHeader 
            title="GROWTH INTELLIGENCE / 情报追踪" 
            subtitle="实时追踪 Web3 趋势与社区洞察"
         />

         <div className="grid lg:grid-cols-2 gap-8">
            {/* X Trend Radar */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
               <div className="flex items-center gap-2 mb-6">
                  <Twitter size={18} className="text-[#1DA1F2]" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">X TREND RADAR</h3>
               </div>

               <div className="space-y-4">
                  {trendData.map((trend, i) => (
                     <div 
                        key={i} 
                        className="bg-black/40 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
                     >
                        <div className="flex items-center justify-between mb-2">
                           <h4 className="text-white font-bold text-lg">{trend.project}</h4>
                           <span 
                              className="text-xs font-bold px-2 py-1 rounded"
                              style={{ 
                                 color: trend.color,
                                 backgroundColor: trend.sentiment === 'BULLISH' ? 'rgba(153, 229, 248, 0.1)' : 'rgba(251, 191, 36, 0.1)'
                              }}
                           >
                              {trend.sentiment}
                           </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                           <span className="text-gray-500 font-mono">KOLs: {trend.kols}</span>
                           <span 
                              className="font-bold"
                              style={{ color: trend.color }}
                           >
                              {trend.volume}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* TG Alpha Summarizer */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
               <div className="flex items-center gap-2 mb-6">
                  <MessageSquare size={18} style={{ color: NEON }} />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">TG ALPHA SUMMARIZER</h3>
               </div>

               <div className="space-y-6">
                  {alphaFeeds.map((feed, i) => (
                     <div 
                        key={i}
                        className="border-l-4 pl-4 py-2"
                        style={{ borderColor: feed.color }}
                     >
                        <div 
                           className="text-xs font-bold uppercase mb-2 tracking-wider"
                           style={{ color: feed.color }}
                        >
                           {feed.source}
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                           {feed.content}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

const AssetsPage = () => {
   const data = [
      { name: 'CORNERSTONE', value: 80, fill: NEON },
      { name: 'ALPHA', value: 10, fill: '#3b82f6' },
      { name: 'HEDGE', value: 10, fill: '#6b7280' },
   ];

   return (
      <div className="space-y-8">
         <PageHeader 
            title="ALPHA STRATEGY / 资管引擎" 
            subtitle="基于智慧信用与技术驱动的冲防榜揭"
            rightElement={
               <span className="text-xs font-mono text-gray-400 border border-gray-700 px-3 py-1 rounded">STRATEGY 80/10/10 DYNAMIC</span>
            }
         />

         <div className="grid lg:grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-[#1a1a1a] border border-gray-800 rounded-xl p-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-b border-gray-800 pb-8">
                  <div>
                     <div className="text-xs text-gray-500 font-mono mb-1">TOTAL TVL</div>
                     <div className="text-2xl font-bold text-white">$125.4M</div>
                  </div>
                  <div>
                     <div className="text-xs text-gray-500 font-mono mb-1">NET ROI (YTD)</div>
                     <div className="text-2xl font-bold" style={{ color: NEON }}>+18.42%</div>
                  </div>
                  <div>
                     <div className="text-xs text-gray-500 font-mono mb-1">SHARPE</div>
                     <div className="text-2xl font-bold text-white">2.41</div>
                  </div>
                  <div>
                     <div className="text-xs text-gray-500 font-mono mb-1">PHYSICAL BACKING</div>
                     <div className="text-2xl font-bold text-blue-500">100%</div>
                  </div>
               </div>

               <div className="h-[300px] w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={data} layout="vertical">
                        <XAxis type="number" hide />
                        <Bar dataKey="value" barSize={40} radius={[0, 4, 4, 0]} background={{ fill: '#111' }} label={{ position: 'right', fill: '#fff', fontSize: 12 }}>
                           {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                           ))}
                        </Bar>
                     </BarChart>
                  </ResponsiveContainer>
                  {/* Custom Labels Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between py-8 pointer-events-none pl-4">
                     {data.map((d, i) => (
                        <div key={i} className="flex flex-col justify-center h-1/3">
                           <span className="text-xs font-bold text-white">{d.name}</span>
                           <span className="text-[10px] text-gray-500">{d.value}% ALLOCATION</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Philosophy Panel */}
            <div className="bg-gray-100 text-black rounded-xl p-8 flex flex-col">
               <div className="flex items-center gap-2 mb-8">
                  <Shield size={20} />
                  <h3 className="font-bold tracking-tight">INVESTMENT PHILOSOPHY</h3>
               </div>
               
               <div className="space-y-6 flex-grow">
                  <div>
                     <h4 className="font-bold text-sm mb-1">物理底層 / PHYSICAL HUB</h4>
                     <p className="text-xs text-gray-600 leading-relaxed">利用基础资产如RWA (RWA 协议)、黄金 Web3 存产证...</p>
                  </div>
                  <div>
                     <h4 className="font-bold text-sm mb-1">技术57/ TECH CONTROL</h4>
                     <p className="text-xs text-gray-600 leading-relaxed">通过 AI-Tech 交互核心检验...</p>
                  </div>
                  <div>
                     <h4 className="font-bold text-sm mb-1">流量回环 / GROWTH LOOP</h4>
                     <p className="text-xs text-gray-600 leading-relaxed">VOL 协同牛市动力及合规量直接转注...</p>
                  </div>
               </div>

               <button className="w-full mt-8 py-3 font-bold text-sm rounded transition-colors hover:opacity-90" style={{ backgroundColor: NEON }}>
                  查看資产透明报告
               </button>
            </div>
         </div>
      </div>
   );
};


// --- Main Layout ---

export const TerminalOS: React.FC<{ onBack: () => void }> = ({ onBack }) => {
   const [activePage, setActivePage] = useState<TerminalPage>('dashboard');
   const [isSidebarOpen, setSidebarOpen] = useState(true);

   // Animation for page switch
   const pageVariants = {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 }
   };

   return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans flex overflow-hidden selection:bg-[#99E5F8] selection:text-black">
         {/* Left Sidebar */}
         <motion.aside 
            className="w-64 bg-[#111] border-r border-gray-800 flex flex-col shrink-0"
            initial={{ x: -264 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
         >
            {/* Logo Area */}
            <div className="h-16 flex items-center px-6 border-b border-gray-800 bg-[#0a0a0a]">
               <div className="w-8 h-8 bg-brand-cyan rounded-tr-lg rounded-bl-lg flex items-center justify-center relative overflow-hidden group mr-3">
                  <span className="text-black font-black text-lg relative z-10">H</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
               </div>
               <span className="font-bold text-white tracking-wider text-lg">H-LABS</span>
            </div>

            {/* Menu Items */}
            <nav className="flex-grow p-4 space-y-2">
               {SIDEBAR_ITEMS.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                     <button
                        key={item.id}
                        onClick={() => setActivePage(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200
                           ${isActive 
                              ? 'bg-[#99E5F8]/10 text-[#99E5F8] border border-[#99E5F8]/50' 
                              : 'text-gray-500 hover:text-white hover:bg-white/5'
                           }`}
                     >
                        <item.icon size={18} />
                        <span className="font-medium">{item.label}</span>
                        {isActive && <motion.div layoutId="active-indicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-[#99E5F8]" />}
                     </button>
                  )
               })}
            </nav>

            {/* User Profile (Bottom) */}
            <div className="p-4 border-t border-gray-800">
               <div className="flex items-center gap-3 p-2 rounded-lg bg-[#050505] border border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                     <User size={14} />
                  </div>
                  <div className="overflow-hidden">
                     <div className="text-xs font-bold text-white truncate">@GROWTH_ARCHITECT</div>
                     <div className="text-[10px] uppercase font-bold" style={{ color: NEON }}>GROWTH ELITE</div>
                  </div>
               </div>
            </div>
         </motion.aside>

         {/* Main Content Area */}
         <div className="flex-grow flex flex-col h-screen overflow-hidden">
            {/* Top Navigation */}
            <header className="h-16 border-b border-gray-800 flex items-center justify-between px-8 bg-[#0a0a0a]">
               <div className="flex items-center gap-2">
                   <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">H-LABS INTEGRATED OS v2.0</div>
               </div>
               
               <div className="flex items-center gap-8">
                  <div className="h-6 w-[1px] bg-gray-800 mx-2" />

                  <button 
                     onClick={onBack}
                     className="px-4 py-1.5 bg-white text-black text-xs font-bold rounded hover:bg-gray-200 transition-colors"
                  >
                     返回官網
                  </button>
               </div>
            </header>

            {/* Scrollable Page Content */}
            <main className="flex-grow overflow-y-auto p-8 terminal-scrollbar relative bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={activePage}
                     variants={pageVariants}
                     initial="initial"
                     animate="animate"
                     exit="exit"
                     transition={{ duration: 0.3 }}
                     className="max-w-6xl mx-auto pb-20"
                  >
                     {activePage === 'dashboard' && <DashboardPage />}
                     {activePage === 'academy' && <AcademyPage />}
                     {activePage === 'bounty' && <BountyPage />}
                     {activePage === 'delivery' && <DeliveryPage />}
                     {activePage === 'media' && <MediaPage />}
                     {activePage === 'assets' && <AssetsPage />}
                     {activePage === 'intelligence' && <GrowthIntelligencePage />}
                  </motion.div>
               </AnimatePresence>
            </main>
         </div>
      </div>
   );
};