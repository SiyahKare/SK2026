
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Gavel, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Dao: React.FC = () => {
  const { t } = useLanguage();

  const data = [
    { name: 'Community', value: 45 },
    { name: 'Treasury', value: 25 },
    { name: 'Team', value: 15 },
    { name: 'Advisors', value: 10 },
    { name: 'Public', value: 5 }
  ];

  const COLORS = ['#00f3ff', '#39ff14', '#1a1a1a', '#333333', '#444444'];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">SiyahKare <span className="text-cyan-400">DAO</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t({
              en: 'Decentralized governance powering the next generation of software products. Join our collective decision-making process.',
              tr: 'Yazılım ürünlerinin yeni neslini güçlendiren merkezi olmayan yönetim. Kolektif karar alma sürecimize katılın.',
              ru: 'Децентрализованное управление, поддерживающее программные продукты следующего поколения. Присоединяйтесь к нашему коллективному процессу принятия решений.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="p-3 bg-cyan-500/20 rounded-xl h-fit">
                <Gavel className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t({ en: 'Governance Proposals', tr: 'Yönetişim Teklifleri', ru: 'Предложения по управлению' })}</h3>
                <p className="text-zinc-500">{t({ en: 'Stakeholders can propose changes to product roadmaps, fee structures, and treasury allocations.', tr: 'Paydaşlar, ürün yol haritaları, ücret yapıları ve hazine tahsislerinde değişiklik teklif edebilir.', ru: 'Заинтересованные стороны могут предлагать изменения в дорожных картах продуктов, структурах комиссий и распределении казначейских средств.' })}</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="p-3 bg-green-500/20 rounded-xl h-fit">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t({ en: 'Global Collective', tr: 'Küresel Kolektif', ru: 'Глобальный коллектив' })}</h3>
                <p className="text-zinc-500">{t({ en: 'Our community spans over 120 countries, bringing diverse technical and strategic expertise.', tr: 'Topluluğumuz 120\'den fazla ülkeyi kapsıyor ve çeşitli teknik ve stratejik uzmanlıklar getiriyor.', ru: 'Наше сообщество охватывает более 120 стран, объединяя разнообразный технический и стратегический опыт.' })}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5"
          >
            <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-zinc-500">{t({ en: 'Token Allocation', tr: 'Token Tahsisi', ru: 'Распределение токенов' })}</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #333' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {data.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-xs text-zinc-400 font-medium">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-6">{t({ en: 'Ready to Participate?', tr: 'Katılmaya Hazır mısınız?', ru: 'Готовы участвовать?' })}</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            {t({ en: 'Staking SK-TOKEN grants voting rights and priority access to all SiyahKare MiniApps and APIs.', tr: 'SK-TOKEN stake etmek, tüm SiyahKare MiniApp ve API\'lerine öncelikli erişim ve oylama hakları sağlar.', ru: 'Стейкинг SK-TOKEN дает право голоса и приоритетный доступ ко всем мини-приложениям и API SiyahKare.' })}
          </p>
          <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all">
            {t({ en: 'Enter Staking Portal', tr: 'Staking Portalına Gir', ru: 'Войти в портал стейкинга' })}
          </button>
          <div className="mt-8">
            <a href="#/legal" className="text-zinc-500 hover:text-cyan-400 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              {t({ en: 'View DAO Legal Framework & BVI Guide', tr: 'DAO Hukuki Çerçevesi ve BVI Kılavuzunu Görüntüle', ru: 'Посмотреть юридическую базу DAO и руководство по БВО' })}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dao;
