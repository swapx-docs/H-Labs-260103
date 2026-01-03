import { Translations } from './types';
import { 
  Globe, Cpu, Trophy, Activity, Code, Megaphone, 
  BarChart3, ShieldCheck, Rocket, Network, Zap,
  Smartphone, Database, Lock, UserCheck, Briefcase
} from 'lucide-react';

export const STRATEGIC_PARTNERS = [
  { name: "Ondo Finance", domain: "ondo.finance" },
  { name: "Centrifuge", domain: "centrifuge.io" },
  { name: "Binance", domain: "binance.com" },
  { name: "OKX", domain: "okx.com" },
  { name: "MakerDAO", domain: "makerdao.com" },
  { name: "BlackRock", domain: "blackrock.com" },
  { name: "Monad", domain: "monad.xyz" },
  { name: "Berachain", domain: "berachain.com" },
  { name: "LayerZero", domain: "layerzero.network" },
  { name: "Solana", domain: "solana.com" },
  { name: "Uniswap", domain: "uniswap.org" },
  { name: "Curve", domain: "curve.fi" },
  { name: "Wintermute", domain: "wintermute.com" },
  { name: "Aave", domain: "aave.com" }
];

export const MEDIA_PARTNERS = [
  { name: "CoinDesk", domain: "coindesk.com" },
  { name: "Cointelegraph", domain: "cointelegraph.com" },
  { name: "The Block", domain: "theblock.co" },
  { name: "Bloomberg", domain: "bloomberg.com" },
  { name: "Foresight News", domain: "foresightnews.pro" },
  { name: "BlockBeats", domain: "theblockbeats.info" },
  { name: "Odaily", domain: "odaily.news" },
  { name: "TechFlow", domain: "techflowpost.com" },
];

export const CONTENT: Record<'cn' | 'en', Translations> = {
  cn: {
    nav: [
      { key: 'about', label: '关于 H', href: '#about' },
      { key: 'incubation', label: '孵化体系', href: '#incubation' },
      { key: 'cases', label: '成功案例', href: '#cases' },
      { key: 'media', label: 'H Media', href: '#media' },
      { key: 'capital', label: 'H FUND & NEXUS', href: '#capital' },
    ],
    hero: {
      headline: "由技术驱动的 Web3 全案孵化专家",
      subHeadline: "从 0 到 1，助力每一次价值跃迁",
      slogan: "知行合一。创造伟大品牌，提供商业制胜之道。",
      ctaPrimary: "申请孵化",
      ctaSecondary: "加入生态",
    },
    metrics: [
      { label: "实战经验", value: "10", suffix: "年+", description: "深耕行业" },
      { label: "服务案例", value: "600", suffix: "+", description: "全球布局" },
      { label: "破亿项目", value: "100", suffix: "+", description: "头部标杆" },
      { label: "精英团队", value: "50", suffix: "+", description: "国际化配置" },
    ],
    about: {
      title: "The Power of H",
      description: "2017 年创立于深圳，2025 年战略升级，立足金边，辐射全球。",
      history: "2017 深圳 · 2021 新加坡 · 2025 金边全球总部",
      items: [
        { title: "Hub 枢纽", description: "连接东南亚与全球 Web3 核心资源", icon: "Globe", details: "资源聚合中心" },
        { title: "Hybrid 复合", description: "技术 + 传媒 + 资本的闭环增长模型", icon: "Cpu", details: "全链路赋能" },
        { title: "High-end 高端", description: "致力于打造行业破亿级头部标杆", icon: "Trophy", details: "顶级交付标准" },
      ]
    },
    incubation: {
      title: "H-Incubator 全案孵化体系",
      subtitle: "标准化的“四步走”战略，解决项目全生命周期痛点",
      steps: [
        { 
          id: "01", 
          title: "战略立项", 
          tasks: ["3C 深度分析", "Tokenomics 设计"], 
          deliverables: ["商业白皮书", "经济模型", "战略 Roadmap"] 
        },
        { 
          id: "02", 
          title: "技术落地", 
          tasks: ["智能合约", "DApp 开发", "RWA 底层"], 
          deliverables: ["代码审计报告", "产品 Demo", "GitHub 库"] 
        },
        { 
          id: "03", 
          title: "市场启动", 
          tasks: ["推特全托管", "KOL 联动", "AMA 策划"], 
          deliverables: ["30天推特运营流", "5场 Space", "共识池构建"] 
        },
        { 
          id: "04", 
          title: "辅助上所", 
          tasks: ["CEX/DEX 对接", "市值管理建议"], 
          deliverables: ["交易所挂牌", "AVE 点亮", "流动性部署"] 
        },
      ],
      techTitle: "硬核技术支持",
      techStack: [
        { title: "RWA 赛道", items: ["美股代币化", "资产上链底层协议", "流动性池部署"], icon: "Database" },
        { title: "流量与 Meme", items: ["Pump 类发射平台", "Meme 代币定制", "TG Bot 开发"], icon: "Rocket" },
        { title: "基础设施", items: ["定制公链", "跨链桥", "RPC 接口", "开发者 SDK"], icon: "Code" },
      ]
    },
    caseStudies: {
      title: "成功案例",
      subtitle: "从 0 到 1 的实战记录",
      items: [
        { title: "Project Alpha", tag: "DeFi", stats: "$50M", statsLabel: "30天 TVL 增长", desc: "从 0 起步，通过 H Labs 经济模型设计与流动性策略，实现首月爆发式增长。" },
        { title: "EstateToken", tag: "RWA", stats: "$20M", statsLabel: "资产代币化规模", desc: "成功将美国商业地产引入链上，提供完整的合规结构与技术底层支持。" },
        { title: "DogeX", tag: "Meme", stats: "100k+", statsLabel: "持币地址数", desc: "利用 H Media 影响力矩阵进行病毒式传播，达成现象级 Meme 营销。" },
      ]
    },
    partners: {
      title: "我们携手，共创标杆",
      topTitle: "我们的合作伙伴",
      description: "荣获 400 多家行业领军企业的鼎力支持",
      mediaTitle: "战略合作媒体"
    },
    testimonials: {
      title: "合作伙伴评价",
      items: [
        { content: "H Labs 提供了我们在 RWA 赛道所需的关键基础设施，技术实力令人印象深刻。", author: "Alex C.", role: "CEO of RealChain" },
        { content: "他们的媒体矩阵在一夜之间引爆了我们的用户增长，宣发效率极高。", author: "Sarah L.", role: "Founder of MemeKing" },
        { content: "从白皮书到上所，H Labs 的全流程服务非常专业，帮我们节省了大量试错成本。", author: "David K.", role: "Co-Founder of DeFiNext" },
        { content: "社区运营极其出色，为我们的 GameFi 项目带来了第一批高粘性忠实玩家。", author: "Elena R.", role: "Producer at StarQuest" },
        { content: "H Fund 的战略投资不仅仅是资金，更是背后强大的行业资源网络。", author: "Michael T.", role: "Partner at NextGen VC" },
        { content: "他们的 KOL 孵化体系非常完善，让我在三个月内成为了赛道头部的意见领袖。", author: "CryptoJ", role: "Web3 Influencer" },
      ]
    },
    media: {
      title: "H Media 影响力矩阵",
      subtitle: "自有流量工厂 + KOL 影响力学院 + 品牌全案",
      factory: {
        title: "H Media 自有流量工厂",
        desc: "精准覆盖 100w+ 月活用户，链接全球 200+ 顶级媒体。",
        stats: [
           { label: "自有流量占比", value: "30%" },
           { label: "月活跃用户", value: "100W+" },
           { label: "合作媒体", value: "200+" }
        ],
        marketingPoint: "超级符号营销：拒绝无效传播，通过符号化设计降低 50% 以上品牌获客成本。"
      },
      kol: {
        title: "KOL 影响力学院",
        subtitle: "从素人到 Web3 顶流的孵化路径",
        features: [
           { title: "IP 定向孵化", desc: "挖掘投研、Meme、交互类博主，重构个人 IP 超级符号。" },
           { title: "实战培训体系", desc: "内容工厂：标准化脚本、视频爆发逻辑、AI 创作辅助；增长黑客技术。" },
           { title: "商业赋能", desc: "孵化 KOL 优先获得 H Labs 旗下项目宣发额度，实现即时变现。" }
        ],
        metrics: [
          { value: 100, suffix: "+", label: "毕业 KOL" },
          { value: 10, suffix: "K+", label: "平均粉丝增量" },
          { value: 100, suffix: "K+", label: "数据引流" },
        ],
        cta: "申请加入学院"
      },
      brand: {
        title: "品牌宣发全托管",
        subtitle: "一站式品牌声量管理",
        features: [
           { title: "推特 (X) 深度运营", desc: "人格化建模 + 每日精细化内容产出 + 增长黑客手段。" },
           { title: "高频交互 (Space/AMA)", desc: "策划、邀约、主持、会后总结一站式闭环。" },
           { title: "全球高端路演", desc: "迪拜、新加坡、香港等核心枢纽的商务沙龙、展会与投资峰会定制。" }
        ],
        metrics: [
          { value: 200, suffix: "+", label: "合作媒体" },
          { value: 50, suffix: "%", label: "获客成本降低" },
          { value: 5, suffix: "M+", label: "全网曝光量" },
        ]
      }
    },
    capital: {
      title: "资本与生态",
      fund: {
        title: "H Fund 资产管理",
        desc: "总规模 500 万美金，首期 50 万美金样板基金。资产配置的“减震器” + 一级市场“门票”。",
        modelName: "80/10/10 投资模型",
        allocation: [
          { name: "主流资产 (BTC/ETH/RWA)", value: 80, color: "#3b82f6", desc: "基石资产" },
          { name: "孵化 Alpha", value: 10, color: "#00f0ff", desc: "原始份额" },
          { name: "流动性对冲", value: 10, color: "#ffd700", desc: "风险管理" },
        ]
      },
      nexus: {
        title: "H-Nexus 会员计划",
        desc: "金边高净值人群的“线下社交+线上配置”一站式中心",
        tiers: [
          { 
            name: "蓝卡", subName: "Academic", color: "blue", audience: "Web3 从业者",
            features: ["Web3 系统培训", "一级项目跟投权", "行业研报推送"] 
          },
          { 
            name: "金卡", subName: "Qualified", color: "gold", audience: "合格投资人",
            features: ["私募额度优先", "线下沙龙特权", "投资策略内参"] 
          },
          { 
            name: "黑卡", subName: "Sovereign", color: "black", audience: "顶层精英 (邀请制)",
            features: ["1对1 资产配置", "全球精英社交", "IP 联名孵化"] 
          },
        ]
      }
    },
    competencies: {
      title: "我们的核心竞争力",
      items: [
        { title: "知行合一", desc: "百余个破亿项目实操，从顶层设计到落地执行。" },
        { title: "流量壁垒", desc: "自有 KOL 学院，宣发成本比市场低 30%-40%。" },
        { title: "技术深度", desc: "RWA 与底层链开发能力，确保硬核生存能力。" },
        { title: "资源枢纽", desc: "基金+传媒+技术，构建 Web3 最强成长温床。" },
      ]
    },
    footer: {
      slogan: "做 Web3 头部品牌，找 H Labs。",
      cta: "立即联系我们",
      copyright: "© 2026 H Labs. All rights reserved."
    }
  },
  en: {
    nav: [
      { key: 'about', label: 'About H', href: '#about' },
      { key: 'incubation', label: 'Incubation', href: '#incubation' },
      { key: 'cases', label: 'Case Studies', href: '#cases' },
      { key: 'media', label: 'H Media', href: '#media' },
      { key: 'capital', label: 'H FUND & NEXUS', href: '#capital' },
    ],
    hero: {
      headline: "Tech-Driven Web3 Full-Service Incubation Expert",
      subHeadline: "From 0 to 1, Empowering Every Value Leap",
      slogan: "Knowledge & Action Unity. Building Great Brands.",
      ctaPrimary: "Apply Now",
      ctaSecondary: "Join Ecosystem",
    },
    metrics: [
      { label: "Experience", value: "10", suffix: "Y+", description: "Industry Depth" },
      { label: "Cases", value: "600", suffix: "+", description: "Global Reach" },
      { label: "High-Value Projects", value: "100", suffix: "+", description: "> $100M Valuation" },
      { label: "Elite Team", value: "50", suffix: "+", description: "International" },
    ],
    about: {
      title: "The Power of H",
      description: "Founded in Shenzhen (2017), Global Upgrade in Phnom Penh (2025).",
      history: "2017 Shenzhen · 2021 Singapore · 2025 Phnom Penh HQ",
      items: [
        { title: "Hub", description: "Connecting SE Asia to Global Web3 Resources", icon: "Globe", details: "Resource Aggregator" },
        { title: "Hybrid", description: "Tech + Media + Capital Closed Loop", icon: "Cpu", details: "Full Empowerment" },
        { title: "High-end", description: "Creating Billion-Dollar Industry Benchmarks", icon: "Trophy", details: "Top Standards" },
      ]
    },
    incubation: {
      title: "H-Incubator System",
      subtitle: "Standardized 4-Step Strategy solving full lifecycle pain points",
      steps: [
        { 
          id: "01", 
          title: "Strategy", 
          tasks: ["3C Analysis", "Tokenomics Design"], 
          deliverables: ["Business Whitepaper", "Economic Model", "Strategic Roadmap"] 
        },
        { 
          id: "02", 
          title: "Technology", 
          tasks: ["Smart Contracts", "DApp Dev", "RWA Protocol"], 
          deliverables: ["Audit Reports", "Product Demo", "GitHub Repo"] 
        },
        { 
          id: "03", 
          title: "Marketing", 
          tasks: ["Twitter Managed", "KOL Matrix", "AMA Planning"], 
          deliverables: ["30-Day Ops Plan", "5 Spaces", "Consensus Building"] 
        },
        { 
          id: "04", 
          title: "Listing", 
          tasks: ["CEX/DEX Listing", "Market Making"], 
          deliverables: ["Exchange Listing", "AVE Listing", "Liquidity Setup"] 
        },
      ],
      techTitle: "Hardcore Tech Support",
      techStack: [
        { title: "RWA Track", items: ["Stock Tokenization", "On-chain Assets", "Liquidity Pools"], icon: "Database" },
        { title: "Traffic & Meme", items: ["Pump Launchpads", "Meme Tokenization", "TG Bot Dev"], icon: "Rocket" },
        { title: "Infrastructure", items: ["Custom Chains", "Cross-chain Bridges", "RPC & SDKs"], icon: "Code" },
      ]
    },
    caseStudies: {
      title: "Success Cases",
      subtitle: "From 0 to 1 Real World Results",
      items: [
        { title: "Project Alpha", tag: "DeFi", stats: "$50M", statsLabel: "30-Day TVL Growth", desc: "Achieved explosive growth in the first month through H Labs' economic model design and liquidity strategy." },
        { title: "EstateToken", tag: "RWA", stats: "$20M", statsLabel: "Asset Tokenized", desc: "Successfully brought US commercial real estate on-chain with full compliance structure." },
        { title: "DogeX", tag: "Meme", stats: "100k+", statsLabel: "Holders", desc: "Viral marketing campaign leveraging H Media matrix to achieve phenomenon status." },
      ]
    },
    partners: {
      title: "We Join Hands to Create Benchmarks",
      topTitle: "Our Partners",
      description: "Supported by 400+ industry-leading enterprises",
      mediaTitle: "Strategic Media Partners"
    },
    testimonials: {
      title: "Partner Reviews",
      items: [
        { content: "H Labs provided the critical RWA infrastructure we needed. Their tech stack is impressive.", author: "Alex C.", role: "CEO of RealChain" },
        { content: "Their media matrix exploded our user base overnight. Highly effective launch strategy.", author: "Sarah L.", role: "Founder of MemeKing" },
        { content: "From whitepaper to listing, H Labs' full-service was professional and saved us huge trial costs.", author: "David K.", role: "Co-Founder of DeFiNext" },
        { content: "Outstanding community ops brought our GameFi project its first batch of loyal players.", author: "Elena R.", role: "Producer at StarQuest" },
        { content: "H Fund's strategic investment was more than capital; it was a network of powerful resources.", author: "Michael T.", role: "Partner at NextGen VC" },
        { content: "Their KOL incubation system is perfect. I became a top opinion leader in just 3 months.", author: "CryptoJ", role: "Web3 Influencer" },
      ]
    },
    media: {
      title: "H Media Matrix",
      subtitle: "Proprietary Traffic Factory + KOL Academy + Brand Ops",
      factory: {
        title: "Proprietary Traffic Factory",
        desc: "Reaching 1M+ MAU precisely, connecting 200+ global top media.",
        stats: [
           { label: "Own Traffic", value: "30%" },
           { label: "MAU", value: "1M+" },
           { label: "Media Partners", value: "200+" }
        ],
        marketingPoint: "Super Symbol Marketing: Reduce CAC by 50%+ through symbolic design."
      },
      kol: {
        title: "KOL Influence Academy",
        subtitle: "Path from Amateur to Top Web3 Influencer",
        features: [
           { title: "IP Incubation", desc: "Mining Research/Meme/Interaction bloggers, restructuring Super Symbols." },
           { title: "Combat Training", desc: "Content Factory: Scripts, AI tools; Growth Hacking tech." },
           { title: "Empowerment", desc: "Priority access to H Labs projects for instant monetization." }
        ],
        metrics: [
          { value: 100, suffix: "+", label: "Graduated KOLs" },
          { value: 10, suffix: "K+", label: "Avg. Fan Growth" },
          { value: 100, suffix: "K+", label: "Traffic Volume" },
        ],
        cta: "Apply to Join"
      },
      brand: {
        title: "Brand Ops Management",
        subtitle: "One-stop Brand Voice Management",
        features: [
           { title: "Twitter Deep Ops", desc: "Persona Modeling + Daily Content + Growth Hacking." },
           { title: "High-Freq Interaction", desc: "Space/AMA Planning, Hosting, and Summary." },
           { title: "Global Roadshows", desc: "Custom summits in Dubai, Singapore, Hong Kong." }
        ],
        metrics: [
          { value: 200, suffix: "+", label: "Media Partners" },
          { value: 50, suffix: "%", label: "Cost Reduction" },
          { value: 5, suffix: "M+", label: "Total Reach" },
        ]
      }
    },
    capital: {
      title: "Capital & Ecosystem",
      fund: {
        title: "H Fund Asset Management",
        desc: "$5M Total Size, $500k Initial. The 'Shock Absorber' of Asset Allocation.",
        modelName: "80/10/10 Investment Model",
        allocation: [
          { name: "Mainstream (BTC/ETH/RWA)", value: 80, color: "#3b82f6", desc: "Cornerstone" },
          { name: "Incubated Alpha", value: 10, color: "#00f0ff", desc: "Early Access" },
          { name: "Hedging", value: 10, color: "#ffd700", desc: "Risk Management" },
        ]
      },
      nexus: {
        title: "H-Nexus Membership",
        desc: "One-stop 'Offline Social + Online Allocation' Center for Elites",
        tiers: [
          { 
            name: "Blue Card", subName: "Academic", color: "blue", audience: "Web3 Builders",
            features: ["Systematic Training", "Alpha Co-investment", "Industry Reports"] 
          },
          { 
            name: "Gold Card", subName: "Qualified", color: "gold", audience: "Accredited Investors",
            features: ["Priority Allocation", "Offline Salons", "Investment Insights"] 
          },
          { 
            name: "Black Card", subName: "Sovereign", color: "black", audience: "Elite (Invite Only)",
            features: ["1-on-1 Allocation", "Global Elite Social", "IP Co-branding"] 
          },
        ]
      }
    },
    competencies: {
      title: "Core Competencies",
      items: [
        { title: "Knowledge-Action", desc: "100+ Successful Projects. From Top Design to Execution." },
        { title: "Traffic Barrier", desc: "Proprietary KOL Academy. 30-40% Lower Marketing Costs." },
        { title: "Tech Depth", desc: "RWA & Underlying Chain Dev Capabilities." },
        { title: "Resource Hub", desc: "Fund + Media + Tech = Strongest Growth Soil." },
      ]
    },
    footer: {
      slogan: "Make Web3 Great Again with H Labs.",
      cta: "Contact Us Now",
      copyright: "© 2026 H Labs. All rights reserved."
    }
  }
};

export const ICONS = {
  Globe, Cpu, Trophy, Activity, Code, Megaphone, 
  BarChart3, ShieldCheck, Rocket, Network, Zap,
  Smartphone, Database, Lock, UserCheck, Briefcase
};