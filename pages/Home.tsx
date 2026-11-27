
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../constants.tsx';
import { ArrowRight, Bot, Activity, Zap, Shield, Globe, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const HeroBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // Ultra-smooth spring physics for performance
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 150 });

  // Parallax depth values
  const layer1X = useTransform(smoothX, [0, 2000], [-10, 10]);
  const layer1Y = useTransform(smoothY, [0, 1000], [-10, 10]);
  
  const layer2X = useTransform(smoothX, [0, 2000], [30, -30]);
  const layer2Y = useTransform(smoothY, [0, 1000], [30, -30]);

  const layer3X = useTransform(smoothX, [0, 2000], [-60, 60]);
  const layer3Y = useTransform(smoothY, [0, 1000], [-60, 60]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#fdfdfd] dark:bg-[#050505]"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Radial Glow - Reactive to Mouse */}
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full bg-cyan-500/[0.04] dark:bg-cyan-500/[0.08] blur-[160px] z-0"
        style={{
          x: useTransform(smoothX, (val) => val - 600),
          y: useTransform(smoothY, (val) => val - 600),
        }}
      />

      {/* Layer 1: The Deep Geometric Matrix */}
      <motion.div 
        style={{ x: layer1X, y: layer1Y, perspective: 1000 }}
        className="absolute inset-0 z-0 opacity-40 dark:opacity-80"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f3ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00f3ff0a_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f3ff06_1.5px,transparent_1.5px)] bg-[size:40px_40px]" />
      </motion.div>

      {/* Layer 2: High-Speed Data Streams (Logic Flow) */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
            style={{ left: `${(i + 1) * 8}%` }}
          >
            <motion.div
              className="absolute w-[3px] h-40 bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              initial={{ top: "-30%" }}
              animate={{ top: "130%" }}
              transition={{ 
                duration: 3 + Math.random() * 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 8
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Layer 3: Particle Neural Web (Deep Depth) */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </motion.div>

      {/* Layer 4: Interactive Code Clusters (Parallax Nodes) */}
      <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute inset-0 z-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute flex items-center justify-center"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          >
            <div className="relative group">
              <div className="w-2 h-2 bg-cyan-500 rounded-sm shadow-[0_0_20px_rgba(6,182,212,1)]" />
              <div className="absolute -inset-4 border border-cyan-500/10 rounded-full animate-pulse" />
              <motion.div 
                className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-10 dark:opacity-20"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-black">
                  {['0x_AUTH', 'PULSE_SK', 'TX_NODE', 'SYNC_DAO', 'MEV_SHIELD', 'NEX_INTEL'][i]}
                </span>
              </motion.div>
              
              {/* Connecting Lines (Vector Style) */}
              <svg className="absolute w-[400px] h-[400px] -top-[200px] -left-[200px] opacity-[0.05] pointer-events-none">
                <line x1="200" y1="200" x2="350" y2="280" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
                <line x1="200" y1="200" x2="50" y2="120" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 5: Floating Data Packets (Binary Fragments) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`pkt-${i}`}
            className="absolute font-mono text-[8px] text-cyan-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.4, 0],
              x: i % 2 === 0 ? [0, 50] : [0, -50]
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20
            }}
          >
            {Math.random() > 0.5 ? '101101' : '0xDEADBEEF'}
          </motion.div>
        ))}
      </div>

      {/* Cyber-Horizon Laser Scanning (Atmospheric) */}
      <motion.div 
        className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent z-40"
        animate={{ top: ["20%", "80%", "20%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const Home: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const iconMap: any = {
    Bot: Bot,
    Activity: Activity,
    Zap: Zap,
    Layers: Cpu,
    Globe: Globe
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 lg:pt-32 overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors">
        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            style={{ opacity: opacityHero, y: yHero }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-500 dark:text-cyan-400 text-sm font-medium mb-10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              {t({ en: 'Nexus V3 Protocol is Live', tr: 'Nexus V3 Protokolü Yayında', ru: 'Протокол Nexus V3 запущен' })}
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 bg-gradient-to-b from-[#050505] dark:from-white via-[#050505] dark:via-white to-black/40 dark:to-white/40 bg-clip-text text-transparent leading-[0.9] lg:leading-[0.85]">
              {t({ 
                en: 'Engineering the Future of Crypto & AI', 
                tr: 'Kripto ve Yapay Zekanın Geleceğini İnşa Ediyoruz', 
                ru: 'Проектируем будущее криптографии и ИИ' 
              })}
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
              {t({ 
                en: 'SiyahKare is a global software powerhouse blending Web3, automation, and AI into cutting-edge digital systems.', 
                tr: 'SiyahKare, Web3, otomasyon ve yapay zekayı son teknoloji dijital sistemlerle birleştiren küresel bir yazılım güç merkezidir.', 
                ru: 'SiyahKare — это глобальный программный центр, объединяющий Web3, автоматизацию и ИИ в передовые цифровые системы.' 
              })}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#/contact" 
                className="w-full sm:w-auto px-12 py-5 bg-cyan-500 text-black font-black rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
              >
                {t({ en: 'Request Demo', tr: 'Demo İste', ru: 'Запросить демо' })}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
                href="#/investors" 
                className="w-full sm:w-auto px-12 py-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#050505] dark:text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                {t({ en: 'Investor Deck', tr: 'Yatırımcı Sunumu', ru: 'Для инвесторов' })}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Floating Status Dashboard Decoration */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 1000], [0, -180]) }}
          className="absolute left-[5%] bottom-[12%] hidden xl:block opacity-30 pointer-events-none z-30"
        >
           <div className="p-8 rounded-3xl border border-cyan-500/20 bg-white/20 dark:bg-black/50 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                 <span className="text-[11px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em]">status.network.live</span>
              </div>
              <div className="flex gap-2 h-14 items-end">
                 {[...Array(14)].map((_, i) => (
                    <motion.div 
                       key={i} 
                       className="w-1.5 bg-cyan-500/50 rounded-t-sm" 
                       animate={{ height: [15, 45, 25, 55, 15] }}
                       transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: i * 0.1 }}
                    />
                 ))}
              </div>
              <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span className="uppercase tracking-widest">Latency</span>
                <span className="text-cyan-400 font-bold">14.2ms</span>
              </div>
           </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-32 border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-[#080808]/90 relative transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-[#050505] dark:text-white leading-none">
                {t({ en: 'The Core Ecosystem', tr: 'Çekirdek Ekosistem', ru: 'Основная экосистема' })}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-500 text-xl font-light">
                {t({ en: 'Modular tools engineered for high-frequency decentralised operations.', tr: 'Yüksek frekanslı merkezi olmayan operasyonlar için tasarlanmış modüler araçlar.', ru: 'Модульные инструменты для высокочастотных децентрализованных операций.' })}
              </p>
            </div>
            <a href="#/products" className="flex items-center gap-3 text-cyan-500 dark:text-cyan-400 font-black group px-8 py-4 rounded-2xl bg-cyan-500/5 hover:bg-cyan-500/10 transition-all border border-cyan-500/20">
              {t({ en: 'Explore Stack', tr: 'Yığını Keşfet', ru: 'Исследовать стек' })} 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRODUCTS.slice(0, 3).map((product, idx) => {
              const Icon = iconMap[product.icon] || Cpu;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group relative p-12 rounded-[40px] bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 hover:border-cyan-500/40 transition-all overflow-hidden shadow-xl dark:shadow-none"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.15] transition-opacity">
                    <Icon className="w-40 h-40 text-[#050505] dark:text-white" />
                  </div>
                  <div className="mb-10 p-6 rounded-2xl bg-cyan-500/10 w-fit group-hover:bg-cyan-500/20 transition-colors relative z-10">
                    <Icon className="w-12 h-12 text-cyan-500 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 relative z-10 text-[#050505] dark:text-white tracking-tight">{product.name}</h3>
                  <p className="text-zinc-600 dark:text-zinc-500 mb-10 line-clamp-2 relative z-10 text-lg font-light leading-relaxed">{t(product.description)}</p>
                  <ul className="space-y-4 mb-12 relative z-10">
                    {t(product.features).map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`#/products/${product.slug}`} className="text-sm font-black text-[#050505] dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 flex items-center gap-3 relative z-10 transition-colors">
                    {t({ en: 'Technical Specs', tr: 'Teknik Detaylar', ru: 'Технические хар-ки' })}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-48 bg-[#050505] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_130%,#00f3ff25,transparent_60%)]" />
         <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="mb-10 p-5 rounded-3xl bg-white/5 border border-white/10 w-fit mx-auto"
               >
                 <Cpu className="w-12 h-12 text-cyan-400" />
               </motion.div>
               <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter leading-tight">
                  {t({ 
                    en: 'Ready to build on the edge of innovation?', 
                    tr: 'İnovasyonun eşiğinde inşa etmeye hazır mısınız?', 
                    ru: 'Готовы строить на грани инноваций?' 
                  })}
               </h2>
               <p className="text-zinc-400 text-xl md:text-2xl mb-20 font-light max-w-2xl mx-auto leading-relaxed">
                  {t({
                    en: 'Join thousands of developers and institutions using our protocol to automate the digital economy.',
                    tr: 'Dijital ekonomiyi otomatikleştirmek için protokolümüzü kullanan binlerce geliştiriciye ve kuruma katılın.',
                    ru: 'Присоединяйтесь к тысячам разработчиков и организаций, использующих наш протокол для автоматизации цифровой экономики.'
                  })}
               </p>
               <div className="flex flex-col sm:flex-row gap-10 justify-center">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#/docs" 
                    className="px-14 py-6 bg-white text-black font-black rounded-3xl hover:bg-cyan-400 transition-all text-xl shadow-2xl"
                  >
                    {t({ en: 'View Documentation', tr: 'Dokümantasyonu Gör', ru: 'Документация' })}
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#/contact" 
                    className="px-14 py-6 border border-white/20 hover:border-white/50 rounded-3xl font-bold transition-all text-xl backdrop-blur-md"
                  >
                    {t({ en: 'Talk to Engineering', tr: 'Mühendislikle Konuş', ru: 'Связаться с инженерами' })}
                  </motion.a>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
