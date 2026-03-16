
import { 
  Bot, 
  Activity, 
  Zap, 
  Layers, 
  Globe, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  ChevronRight, 
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../constants.tsx';
import React, { useState } from 'react';

const LiveTicker = () => {
  const { t } = useLanguage();
  const alerts = [
    { en: 'MEV SHIELD: PROTECTED 0.42 ETH ON MAINNET', tr: 'MEV KALKANI: ANA AĞDA 0.42 ETH KORUNDU', ru: 'MEV SHIELD: ЗАЩИЩЕНО 0.42 ETH В СЕТИ' },
    { en: 'NEXUS: WHALE MOVEMENT DETECTED ON SOLANA', tr: 'NEXUS: SOLANA ÜZERİNDE BALİNA HAREKETİ TESPİT EDİLDİ', ru: 'NEXUS: ОБНАРУЖЕНО ДВИЖЕНИЕ КИТОВ В SOLANA' },
    { en: 'MICROBOT: AVG LATENCY DROPPED TO 12MS', tr: 'MICROBOT: ORT. GECİKME 12MS\'YE DÜŞTÜ', ru: 'MICROBOT: СРЕДНЯЯ ЗАДЕРЖКА УПАЛА ДО 12 МС' },
    { en: 'DAO: PROPOSAL #842 REACHED QUORUM', tr: 'DAO: TEKLİF #842 YETER SAYIYA ULAŞTI', ru: 'DAO: ПРЕДЛОЖЕНИЕ №842 ДОСТИГЛО КВОРУМА' },
    { en: 'INFRA: TON NETWORK FINALITY REACHED IN <1S', tr: 'ALTYAPI: TON AĞI KESİNLİĞİ <1S İÇİNDE SAĞLANDI', ru: 'ИНФРА: ФИНАЛЬНОСТЬ СЕТИ TON ДОСТИГНУТА <1С' }
  ];

  return (
    <div className="w-full bg-cyan-500/5 border-y border-cyan-500/10 py-3 overflow-hidden whitespace-nowrap mb-12 relative group">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10" />
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {[...alerts, ...alerts, ...alerts].map((alert, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 text-[10px] font-mono font-black text-cyan-600 dark:text-cyan-400 tracking-widest">
            <Activity className="w-3 h-3 animate-pulse" />
            {t(alert)}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const ProtocolStack: React.FC<{ activeFilter: string, onFilterChange: (id: string) => void }> = ({ activeFilter, onFilterChange }) => {
  const { t } = useLanguage();
  
  const tiers = [
    {
      id: 'automation',
      name: { en: 'Execution Layer', tr: 'Yürütme Katmanı', ru: 'Уровень исполнения' },
      icon: Zap,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      desc: { en: 'High-speed atomic transactions', tr: 'Yüksek hızlı atomik işlemler', ru: 'Высокоскоростные транзакции' }
    },
    {
      id: 'analytics',
      name: { en: 'Intelligence Layer', tr: 'Zeka Katmanı', ru: 'Уровень аналитики' },
      icon: Activity,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      desc: { en: 'Real-time on-chain insights', tr: 'Gerçek zamanlı zincir içi içgörüler', ru: 'Ончейн-аналитика в реальном времени' }
    },
    {
      id: 'infrastructure',
      name: { en: 'Foundation Layer', tr: 'Temel Katman', ru: 'Базовый уровень' },
      icon: Shield,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      desc: { en: 'Decentralized access & RWA', tr: 'Merkeziyetsiz erişim ve RWA', ru: 'Доступ и RWA' }
    }
  ];

  return (
    <div className="mb-24 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent hidden lg:block -translate-x-1/2" />
      
      <div className="flex flex-col items-center gap-6">
        {tiers.map((tier, idx) => (
          <motion.button
            key={tier.id}
            onClick={() => onFilterChange(activeFilter === tier.id ? 'all' : tier.id)}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`relative w-full max-w-2xl p-6 rounded-[32px] border transition-all duration-500 flex items-center gap-6 text-left group
              ${activeFilter === tier.id 
                ? `${tier.bg} ${tier.border} shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-none` 
                : 'bg-white dark:bg-[#0a0a0a] border-black/5 dark:border-white/5 opacity-60 hover:opacity-100'
              }`}
          >
            <div className={`p-4 rounded-2xl ${tier.bg} ${tier.color}`}>
              <tier.icon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#050505] dark:text-white mb-1">
                {t(tier.name)}
              </h3>
              <p className="text-sm text-zinc-500">{t(tier.desc)}</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
               <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select</div>
               <ChevronRight className={`w-5 h-5 transition-transform duration-500 ${activeFilter === tier.id ? 'rotate-90 text-cyan-500' : 'text-zinc-400'}`} />
            </div>
            
            {idx < tiers.length - 1 && (
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
                <div className="w-px h-6 bg-gradient-to-b from-zinc-200 dark:from-zinc-800 to-transparent" />
                <motion.div 
                  animate={{ y: [0, 24], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-500"
                />
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const iconMap: any = {
    Bot: Bot,
    Activity: Activity,
    Zap: Zap,
    Layers: Layers,
    Globe: Globe,
    Cpu: Cpu
  };

  const getProductCategory = (slug: string) => {
    if (['microbot', 'transfer'].includes(slug)) return 'automation';
    if (['nexus'].includes(slug)) return 'analytics';
    if (['onlyvips', 'arayis'].includes(slug)) return 'infrastructure';
    return 'all';
  };

  const filteredProducts = PRODUCTS.filter(p => filter === 'all' || getProductCategory(p.slug) === filter);

  const chainCompatibilityMap: any = {
    microbot: ['ETH', 'BSC', 'BASE', 'TON'],
    nexus: ['ETH', 'SOL', 'TON', 'ARB'],
    onlyvips: ['ETH', 'MATIC', 'OP'],
    arayis: ['ETH', 'POL', 'BASE'],
    transfer: ['ALL CHAINS']
  };

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-40">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[10px] font-black uppercase tracking-widest text-cyan-500 mb-6"
          >
            <Cpu className="w-3 h-3" />
            {t({ en: 'Modular Web3 Stack', tr: 'Modüler Web3 Yığını', ru: 'Модульный стек Web3' })}
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-[#050505] dark:text-white">
            {t({ en: 'Explore', tr: 'Keşfet', ru: 'Изучить' })} <br/>
            <span className="gradient-text">{t({ en: 'The Stack', tr: 'Yığını', ru: 'Стек' })}</span>
          </h1>
        </div>

        <LiveTicker />

        <ProtocolStack activeFilter={filter} onFilterChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => {
              const Icon = iconMap[product.icon] || Cpu;
              const chains = chainCompatibilityMap[product.slug] || ['ETH'];
              
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative p-8 rounded-[40px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 hover:border-cyan-500/30 hover:bg-zinc-100 dark:hover:bg-[#111111] transition-all flex flex-col"
                >
                  <div className="absolute top-8 right-8 flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black">Operational</span>
                  </div>
                  
                  <div className="mb-10 p-5 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 w-fit group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-10 h-10 text-cyan-500" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-[#050505] dark:text-white group-hover:text-cyan-500 transition-colors flex items-center gap-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-500 mb-8 leading-relaxed font-light text-sm line-clamp-2">
                    {t(product.description)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {chains.map((chain: string) => (
                      <span key={chain} className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[9px] font-mono font-black text-zinc-500 uppercase tracking-tighter">
                        {chain}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-10">
                    {t(product.features).slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        <ShieldCheck className="w-4 h-4 text-cyan-500 opacity-60" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5 flex gap-4">
                    <a href={`#/products/${product.slug}`} className="flex-1 py-4 bg-[#050505] dark:bg-white text-white dark:text-black font-black rounded-2xl text-center text-xs hover:scale-[1.02] transition-transform">
                      {t({ en: 'Configure System', tr: 'Sistemi Yapılandır', ru: 'Настроить систему' })}
                    </a>
                    <a href="#/docs" className="p-4 rounded-2xl border border-black/10 dark:border-white/10 text-zinc-400 hover:text-cyan-500 transition-colors bg-white dark:bg-transparent">
                      <Terminal className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-12 md:p-24 rounded-[60px] bg-[#050505] text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f3ff15,transparent_70%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center gap-6 mb-12">
               <div className="p-4 rounded-full bg-white/5 border border-white/10"><Globe className="w-8 h-8 text-cyan-400" /></div>
               <div className="p-4 rounded-full bg-white/5 border border-white/10"><Zap className="w-8 h-8 text-green-400" /></div>
               <div className="p-4 rounded-full bg-white/5 border border-white/10"><Layers className="w-8 h-8 text-purple-400" /></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              {t({ en: 'Scale with SiyahKare', tr: 'SiyahKare ile Ölçeklenin', ru: 'Масштабируйтесь с SiyahKare' })}
            </h2>
            <p className="text-zinc-400 text-xl mb-12 font-light leading-relaxed">
              {t({
                en: 'Join institutional partners leveraging our protocol for high-performance decentralized operations.',
                tr: 'Yüksek performanslı merkeziyetsiz operasyonlar için protokolümüzü kullanan kurumsal ortaklara katılın.',
                ru: 'Присоединяйтесь к институциональным партнерам, использующим наш протокол для децентрализованных операций.'
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#/contact" className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 transition-all text-lg shadow-2xl">
                {t({ en: 'Request API Suite', tr: 'API Seti İste', ru: 'Запросить пакет API' })}
              </a>
              <a href="#/docs" className="px-12 py-5 border border-white/20 rounded-2xl font-bold hover:bg-white/5 transition-all text-lg backdrop-blur-md">
                {t({ en: 'Read Whitepaper', tr: 'Teknik Belgeyi Oku', ru: 'Читать Whitepaper' })}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
