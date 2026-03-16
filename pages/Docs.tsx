
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Code, Terminal, Zap, Shield, Key, Database, Play, Copy, Check } from 'lucide-react';
import { executeMockQuery } from '../lib/graphql';

const Docs: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'rest' | 'graphql'>('rest');
  const [query, setQuery] = useState(`query {
  products {
    id
    name
    slug
    description
  }
}`);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRunQuery = async () => {
    setLoading(true);
    const res = await executeMockQuery(query, language);
    setResult(res);
    setLoading(false);
  };

  useEffect(() => {
    handleRunQuery();
  }, [language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(query);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [
    {
      title: { en: 'Getting Started', tr: 'Başlangıç', ru: 'Начало работы' },
      icon: Book,
      links: [
        { label: { en: 'Introduction to SiyahKare', tr: 'SiyahKare\'ye Giriş', ru: 'Введение в SiyahKare' } },
        { label: { en: 'Quick Start Guide', tr: 'Hızlı Başlangıç Kılavuzu', ru: 'Быстрый старт' } },
        { label: { en: 'Authentication Flow', tr: 'Kimlik Doğrulama Akışı', ru: 'Процесс аутентификации' } }
      ]
    },
    {
      title: { en: 'Rest API', tr: 'Rest API', ru: 'Rest API' },
      icon: Code,
      links: [
        { label: { en: 'MicroBot API', tr: 'MicroBot API', ru: 'MicroBot API' } },
        { label: { en: 'Nexus Insights Webhooks', tr: 'Nexus Insights Webhook\'ları', ru: 'Nexus Insights Webhooks' } },
        { label: { en: 'Transfer Protocol V3', tr: 'Transfer Protokolü V3', ru: 'Протокол перевода V3' } }
      ]
    },
    {
      title: { en: 'GraphQL Engine', tr: 'GraphQL Motoru', ru: 'GraphQL Движок' },
      icon: Database,
      links: [
        { label: { en: 'Schema Definition', tr: 'Şema Tanımı', ru: 'Определение схемы' } },
        { label: { en: 'Product Queries', tr: 'Ürün Sorguları', ru: 'Запросы продуктов' } },
        { label: { en: 'Custom Resolvers', tr: 'Özel Çözümleyiciler', ru: 'Кастомные резолверы' } }
      ]
    },
    {
      title: { en: 'Legal & Compliance', tr: 'Hukuk ve Uyumluluk', ru: 'Юридические вопросы' },
      icon: Shield,
      links: [
        { label: { en: 'BVI Incorporation Guide', tr: 'BVI Kuruluş Kılavuzu', ru: 'Руководство по регистрации на БВО' }, path: '#/legal' },
        { label: { en: 'DAO Legal Framework', tr: 'DAO Hukuki Çerçevesi', ru: 'Юридическая база DAO' }, path: '#/legal#mem-arts' },
        { label: { en: 'Compliance Standards', tr: 'Uyumluluk Standartları', ru: 'Стандарты соответствия' } }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Content */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t({ en: 'Developer Hub', tr: 'Geliştirici Merkezi', ru: 'Центр разработчиков' })}</h1>
              <p className="text-zinc-400 text-lg mb-12">
                {t({
                  en: 'Access industrial-grade APIs and SDKs. We now support GraphQL for more efficient data fetching across our ecosystem.',
                  tr: 'Endüstriyel düzeyde API\'lere ve SDK\'lara erişin. Ekosistemimiz genelinde daha verimli veri alımı için artık GraphQL\'i destekliyoruz.',
                  ru: 'Доступ к API и SDK промышленного уровня. Теперь мы поддерживаем GraphQL для более эффективного получения данных в нашей экосистеме.'
                })}
              </p>

              {/* API Mode Selector */}
              <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl w-fit mb-12">
                <button 
                  onClick={() => setActiveTab('rest')}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'rest' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
                >
                  REST
                </button>
                <button 
                  onClick={() => setActiveTab('graphql')}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'graphql' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
                >
                  GraphQL
                </button>
              </div>

              {activeTab === 'rest' ? (
                <div className="space-y-8">
                  {categories.filter((_, i) => i !== 2).map((cat, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5">
                      <div className="flex items-center gap-4 mb-6">
                        <cat.icon className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-2xl font-bold">{t(cat.title)}</h2>
                      </div>
                      <ul className="space-y-4">
                        {cat.links.map((link, j) => (
                          <li key={j}>
                            <a href={link.path || '#'} className="flex items-center justify-between group p-3 rounded-xl hover:bg-white/5 transition-all">
                              <span className="text-zinc-400 group-hover:text-white transition-colors">{t(link.label)}</span>
                              <Zap className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 transition-all opacity-0 group-hover:opacity-100" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-[#0a0a0a] border border-cyan-500/20"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <Database className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-2xl font-bold">GraphQL Playground</h2>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={copyToClipboard}
                          className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <button 
                          onClick={handleRunQuery}
                          disabled={loading}
                          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all disabled:opacity-50"
                        >
                          {loading ? <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /> : <Play className="w-4 h-4" />}
                          Run
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
                      <div className="flex flex-col bg-black rounded-xl border border-white/5 overflow-hidden">
                        <div className="px-4 py-2 border-b border-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Query Editor</div>
                        <textarea 
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          className="flex-1 p-4 bg-transparent text-cyan-400 font-mono text-sm outline-none resize-none"
                        />
                      </div>
                      <div className="flex flex-col bg-black rounded-xl border border-white/5 overflow-hidden">
                        <div className="px-4 py-2 border-b border-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">JSON Result</div>
                        <pre className="flex-1 p-4 text-green-400/80 font-mono text-xs overflow-auto">
                          {JSON.stringify(result, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </motion.div>

                  <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5">
                    <h3 className="text-xl font-bold mb-4">{t({ en: 'Why GraphQL?', tr: 'Neden GraphQL?', ru: 'Почему GraphQL?' })}</h3>
                    <p className="text-zinc-500 leading-relaxed mb-6">
                      {t({
                        en: 'SiyahKare GraphQL API allows you to request exactly what you need and nothing more. This reduces the number of network requests and improves performance for data-heavy applications.',
                        tr: 'SiyahKare GraphQL API, tam olarak ihtiyacınız olanı ve fazlasını talep etmenize olanak tanır. Bu, ağ isteklerinin sayısını azaltır ve veri yoğunluklu uygulamalar için performansı artırır.',
                        ru: 'SiyahKare GraphQL API позволяет запрашивать именно то, что вам нужно, и ничего больше. Это сокращает количество сетевых запросов и повышает производительность приложений с большим объемом данных.'
                      })}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['No Overfetching', 'Single Endpoint', 'Strictly Typed'].map(benefit => (
                        <div key={benefit} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-center text-zinc-400">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: Code Preview / Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0d0d0d] border border-white/5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="text-[10px] text-zinc-600 ml-4 font-mono uppercase tracking-widest">sk-api-test.js</span>
                </div>
                <pre className="text-xs text-cyan-400/80 font-mono leading-relaxed overflow-x-auto">
                  {activeTab === 'rest' ? `const SiyahKare = require('@siyahkare/sdk');

const sk = new SiyahKare({
  apiKey: process.env.SK_KEY,
  environment: 'mainnet'
});

async function runNexus() {
  const signal = await sk.nexus.getWhaleSignals({
    chain: 'ton',
    minVolume: 100000
  });
  
  console.log('Detected activity:', signal);
}

runNexus();` : `// GraphQL Implementation
const { request, gql } = require('graphql-request');

const query = gql\`
  query GetProducts {
    products {
      name
      slug
      features
    }
  }
\`;

request('https://api.siyahkare.com/graphql', query)
  .then((data) => console.log(data));`}
                </pre>
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                      <Key className="w-5 h-5" />
                   </div>
                   <h3 className="font-bold text-sm">Auth Headers</h3>
                </div>
                <p className="text-xs text-zinc-500 font-mono bg-black p-3 rounded-lg border border-white/5">
                  Authorization: Bearer sk_live_...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
