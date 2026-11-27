
import React, { useMemo, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../constants.tsx';
import { 
  Bot, 
  Activity, 
  Zap, 
  Layers, 
  Globe, 
  Cpu, 
  ArrowLeft, 
  ShieldCheck, 
  Code,
  Terminal,
  ExternalLink,
  TrendingUp,
  RefreshCw,
  Settings,
  Share2,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Server,
  FileCode
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  BarChart,
  Bar,
  Cell
} from 'recharts';

interface ProductDetailProps {
  slug: string;
}

const MiniSparkline: React.FC<{ baseValue: number; color: string }> = ({ baseValue, color }) => {
  const [data, setData] = useState<{ v: number }[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: 10 }).map(() => ({
      v: baseValue + (Math.random() * (baseValue * 0.2) - (baseValue * 0.1))
    }));
    setData(initial);

    const interval = setInterval(() => {
      setData(prev => {
        const next = [...prev];
        next.shift();
        next.push({ v: baseValue + (Math.random() * (baseValue * 0.2) - (baseValue * 0.1)) });
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [baseValue]);

  return (
    <div className="h-10 w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area 
            type="monotone" 
            dataKey="v" 
            stroke={color} 
            fill={`${color}33`} 
            strokeWidth={2} 
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const ProductDetail: React.FC<ProductDetailProps> = ({ slug }) => {
  const { t } = useLanguage();
  const product = useMemo(() => PRODUCTS.find(p => p.slug === slug), [slug]);
  
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const metricConfig = useMemo(() => {
    if (!product) return { base: 100, unit: '', label: { en: 'Performance', tr: 'Performans', ru: 'Производительность' } };
    switch(product.slug) {
      case 'microbot': 
        return { base: 5000, unit: 'TPS', label: { en: 'Throughput', tr: 'İşlem Hızı', ru: 'Пропускная способность' } };
      case 'nexus': 
        return { base: 94.2, unit: '%', label: { en: 'Accuracy', tr: 'Doğruluk', ru: 'Точность' } };
      case 'onlyvips': 
        return { base: 15, unit: 'Chains', label: { en: 'Connectivity', tr: 'Bağlantı', ru: 'Связанность' } };
      case 'arayis': 
        return { base: 5, unit: 'Classes', label: { en: 'Asset Scope', tr: 'Varlık Kapsamı', ru: 'Охват активов' } };
      case 'transfer': 
        return { base: 120, unit: 's', label: { en: 'Latency', tr: 'Gecikme', ru: 'Задержка' } };
      default: 
        return { base: 100, unit: '', label: { en: 'Metric', tr: 'Metrik', ru: 'Метрика' } };
    }
  }, [product]);

  const [chartData, setChartData] = useState<{time: string, value: number}[]>([]);
  const [nodeData, setNodeData] = useState<{name: string, value: number}[]>([]);
  const [currentMetricValue, setCurrentMetricValue] = useState(metricConfig.base);

  useEffect(() => {
    const initialData = [];
    const now = new Date();
    for (let i = 20; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 5000);
      const fluctuation = Math.random() * (metricConfig.base * 0.08) - (metricConfig.base * 0.04);
      initialData.push({
        time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        value: Math.floor((metricConfig.base + fluctuation) * 10) / 10
      });
    }
    setChartData(initialData);
    setCurrentMetricValue(metricConfig.base);

    const initialNodes = [
      { name: 'Alpha', value: metricConfig.base * 0.85 },
      { name: 'Beta', value: metricConfig.base * 1.05 },
      { name: 'Gamma', value: metricConfig.base * 0.92 },
      { name: 'Delta', value: metricConfig.base * 0.78 },
    ];
    setNodeData(initialNodes);
  }, [metricConfig.base]);

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = Math.random() * (metricConfig.base * 0.08) - (metricConfig.base * 0.04);
      const newVal = Math.floor((metricConfig.base + fluctuation) * 10) / 10;
      setCurrentMetricValue(newVal);
      
      setChartData(prev => {
        if (prev.length === 0) return prev;
        const newData = [...prev];
        const lastTime = new Date();
        newData.shift();
        newData.push({
          time: lastTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          value: newVal
        });
        return newData;
      });

      setNodeData(prev => prev.map(node => ({
        ...node,
        value: Math.max(0, node.value + (Math.random() * (metricConfig.base * 0.05) - (metricConfig.base * 0.025)))
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, [metricConfig.base]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <a href="#/products" className="text-cyan-400 hover:underline">Back to Ecosystem</a>
      </div>
    );
  }

  const iconMap: any = { Bot, Activity, Zap, Layers, Globe, Cpu };
  const Icon = iconMap[product.icon] || Cpu;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 dark:bg-[#0a0a0a]/90 border border-black/10 dark:border-white/10 p-3 rounded-xl shadow-2xl backdrop-blur-md">
          <p className="text-[10px] font-mono text-zinc-500 mb-1 uppercase tracking-widest">{payload[0].payload.name || payload[0].payload.time}</p>
          <p className="text-sm font-black text-cyan-500">
            {payload[0].value.toLocaleString()} {metricConfig.unit}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute inset-0 bg-grid-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.a 
          href="#/products"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-cyan-500 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t({ en: 'Back to Ecosystem', tr: 'Ekosisteme Geri Dön', ru: 'Назад к экосистеме' })}
        </motion.a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-5 bg-cyan-500/10 rounded-2xl w-fit border border-cyan-500/20">
                  <Icon className="w-12 h-12 text-cyan-500" />
                </div>
                <button 
                  onClick={handleShare}
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-500 hover:text-cyan-500 hover:border-cyan-500/30 transition-all flex items-center gap-2 group relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div key="check" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">{t({ en: 'Copied', tr: 'Kopyalandı', ru: 'Копировано' })}</span>
                      </motion.div>
                    ) : (
                      <motion.div key="share" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="flex items-center gap-2">
                        <Share2 className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">{t({ en: 'Share', tr: 'Paylaş', ru: 'Поделиться' })}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter text-[#050505] dark:text-white">{product.name}</h1>
              <div className="mb-10">
                <motion.div initial={false} animate={{ height: 'auto' }} className="overflow-hidden">
                  <p className="text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">{t(product.description)}</p>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-loose mt-4">
                        {t(product.longDescription)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <button onClick={() => setIsExpanded(!isExpanded)} className="mt-4 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-cyan-500 hover:text-cyan-400 transition-colors group">
                  {isExpanded ? <><span className="hidden sm:inline">{t({ en: 'Show Less', tr: 'Daha Az Göster', ru: 'Скрыть' })}</span><ChevronUp className="w-4 h-4" /></> : <><span className="hidden sm:inline">{t({ en: 'Show More', tr: 'Daha Fazla Göster', ru: 'Показать больше' })}</span><ChevronDown className="w-4 h-4" /></>}
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} href="#/contact" className="group relative px-10 py-6 bg-cyan-500 text-black font-black rounded-[24px] shadow-[0_0_40px_rgba(6,182,212,0.2)] flex items-center justify-center gap-3 transition-all hover:bg-cyan-400 flex-1">
                  <Settings className="w-6 h-6 animate-spin-slow group-hover:rotate-180 transition-transform" />
                  <span className="text-lg">{t({ en: 'Configure Solution', tr: 'Çözümü Yapılandır', ru: 'Настроить' })}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} href="#/docs" className="group relative px-10 py-6 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#050505] dark:text-white font-black rounded-[24px] flex items-center justify-center gap-3 transition-all flex-1">
                  <FileCode className="w-6 h-6 text-cyan-500" />
                  <span className="text-lg">{t({ en: 'Explore API', tr: 'API Keşfet', ru: 'Изучить API' })}</span>
                  <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </div>
            </div>

            <div className="space-y-6">
               <h2 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">Key Capabilities</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {t(product.features).map((feature, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5">
                     <ShieldCheck className="w-5 h-5 text-cyan-500" />
                     <span className="text-zinc-600 dark:text-zinc-400 font-medium">{feature}</span>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8 lg:sticky lg:top-32">
            <div className="p-8 rounded-[40px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 shadow-2xl transition-all">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">{t({ en: 'Technical Specifications', tr: 'Teknik Özellikler', ru: 'Технические характеристики' })}</h3>
              <div className="grid grid-cols-2 gap-8">
                {product.specs.map((spec, i) => {
                  const numValue = parseFloat(spec.value);
                  const isNumeric = !isNaN(numValue);
                  return (
                    <div key={i}>
                      <div className="text-xs text-zinc-500 uppercase font-bold mb-1">{t(spec.label)}</div>
                      <div className="text-2xl font-bold text-[#050505] dark:text-white tracking-tight">{spec.value}</div>
                      {isNumeric && <MiniSparkline baseValue={numValue} color={i % 2 === 0 ? '#06b6d4' : '#10b981'} />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-8 rounded-[40px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg"><Server className="w-5 h-5 text-green-500" /></div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">Node Load Balancer</h3>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={nodeData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" hide />
                    <YAxis hide domain={[0, metricConfig.base * 1.5]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {nodeData.map((_, index) => <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#06b6d4' : '#10b981'} fillOpacity={0.8} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-8 rounded-[40px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg"><TrendingUp className="w-5 h-5 text-cyan-500" /></div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">Engine Pulse</h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full">
                  <RefreshCw className="w-3 h-3 text-cyan-500 animate-spin" />
                  <span className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest">{t({ en: 'Simulated', tr: 'Simülasyon', ru: 'Симуляция' })}</span>
                </div>
              </div>
              <div className="h-[240px] w-full mb-8 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPulse" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/><stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="rgba(128,128,128,0.05)" />
                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={['dataMin - (metricConfig.base * 0.1)', 'dataMax + (metricConfig.base * 0.1)']} />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine y={metricConfig.base} stroke="#06b6d4" strokeDasharray="4 4" opacity={0.4} />
                    <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorPulse)" isAnimationActive={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-black/5 dark:border-white/5 pt-6">
                <span className="font-mono text-zinc-400 uppercase tracking-widest">{t(metricConfig.label)}</span>
                <motion.span key={currentMetricValue} className="font-mono text-cyan-400 text-xl font-black">
                  {currentMetricValue.toLocaleString()}{metricConfig.unit}
                </motion.span>
              </div>
            </div>

            <div className="p-8 rounded-[40px] bg-[#050505] text-white overflow-hidden relative group">
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4"><Code className="w-4 h-4 text-cyan-400" /><span className="text-xs font-mono text-zinc-500">implementation_v3.ts</span></div>
              <pre className="text-sm font-mono text-cyan-400/80 leading-relaxed overflow-x-auto">
{`import { sk_protocol } from '@sk/sdk';
const instance = sk_protocol.initialize({ productId: '${product.id}' });
await instance.execute({ mode: 'stealth' });`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
