
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, FileText, BarChart, Globe, Mail, MessageSquare, Play, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Investors: React.FC = () => {
  const { t } = useLanguage();

  const partnerBenefits = [
    {
      icon: Cpu,
      title: { en: 'Access to Cutting-Edge Tech', tr: 'İleri Teknolojiye Erişim', ru: 'Доступ к передовым технологиям' },
      desc: { 
        en: 'Gain exclusive access to our proprietary AI engines and high-frequency blockchain automation protocols.',
        tr: 'Tescilli yapay zeka motorlarımıza ve yüksek frekanslı blok zinciri otomasyon protokollerimize özel erişim sağlayın.',
        ru: 'Получите эксклюзивный доступ к нашим собственным движкам ИИ и высокочастотным протоколам автоматизации блокчейна.'
      }
    },
    {
      icon: Globe,
      title: { en: 'Global Reach', tr: 'Küresel Erişim', ru: 'Глобальный охват' },
      desc: { 
        en: 'Leverage our decentralized infrastructure of 42k+ nodes spanning over 120 countries for your deployment.',
        tr: 'Dağıtımlarınız için 120\'den fazla ülkeye yayılan 42 binden fazla düğümden oluşan merkeziyetsiz altyapımızdan yararlanın.',
        ru: 'Используйте нашу децентрализованную инфраструктуру из 42к+ узлов, охватывающую более 120 стран, для вашего развертывания.'
      }
    },
    {
      icon: TrendingUp,
      title: { en: 'Revenue Growth Opportunities', tr: 'Gelir Artış Fırsatları', ru: 'Возможности роста доходов' },
      desc: { 
        en: 'Participate in sophisticated revenue-sharing models integrated into our institutional API and DAO framework.',
        tr: 'Kurumsal API ve DAO çerçevemize entegre edilmiş sofistike gelir paylaşımı modellerine katılın.',
        ru: 'Участвуйте в сложных моделях разделения доходов, интегрированных в нашу институциональную структуру API и DAO.'
      }
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-8 leading-tight text-[#050505] dark:text-white">
                {t({ en: 'Partner with the Future of Web3 Infrastructure', tr: 'Web3 Altyapısının Geleceği ile Ortak Olun', ru: 'Станьте партнером будущего инфраструктуры Web3' })}
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10">
                {t({ 
                  en: 'SiyahKare is seeking strategic alliances to scale our automated blockchain solutions globally.',
                  tr: 'SiyahKare, otomatik blok zinciri çözümlerimizi küresel ölçekte büyütmek için stratejik ortaklıklar aramaktadır.',
                  ru: 'SiyahKare ищет стратегические союзы для масштабирования наших автоматизированных блокчейн-решений по всему миру.'
                })}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#/contact"
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-black rounded-xl hover:bg-zinc-800 dark:hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-xl"
                >
                  <MessageSquare className="w-5 h-5" />
                  {t({ en: 'Request a Consultation', tr: 'Danışmanlık Talep Edin', ru: 'Запросить консультацию' })}
                </a>
                <a 
                  href="#/contact"
                  className="px-8 py-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 font-bold rounded-xl hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  {t({ en: 'Request a Demo', tr: 'Demo İste', ru: 'Запросить демо' })}
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Pitch Deck 2025', size: '12.4 MB', icon: FileText },
                { title: 'Revenue Model', size: '4.8 MB', icon: BarChart },
                { title: 'Technical Roadmap', size: '18.2 MB', icon: Globe },
                { title: 'Legal Framework', size: '2.1 MB', icon: Download }
              ].map((doc, i) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-cyan-500/30 transition-all group cursor-pointer shadow-sm">
                  <doc.icon className="w-8 h-8 text-cyan-500 mb-4" />
                  <h3 className="font-bold mb-1 text-[#050505] dark:text-white">{doc.title}</h3>
                  <p className="text-xs text-zinc-500 uppercase font-bold mb-4">{doc.size}</p>
                  <div className="flex items-center gap-2 text-sm text-cyan-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Download <Download className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* New "Partner With Us" Section */}
        <div className="mb-32">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#050505] dark:text-white">
              {t({ en: 'Partner With Us', tr: 'Bizimle Ortak Olun', ru: 'Партнерство с нами' })}
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              {t({ 
                en: 'Explore the strategic advantages of integrating with the SiyahKare ecosystem.',
                tr: 'SiyahKare ekosistemiyle entegrasyonun stratejik avantajlarını keşfedin.',
                ru: 'Изучите стратегические преимущества интеграции с экосистемой SiyahKare.'
              })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="mb-8 p-5 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 w-fit group-hover:scale-110 transition-transform shadow-sm">
                  <benefit.icon className="w-10 h-10 text-cyan-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#050505] dark:text-white group-hover:text-cyan-500 transition-colors">
                  {t(benefit.title)}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
                  {t(benefit.desc)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/5 dark:border-white/5 pt-24">
          {[
            { 
              label: { en: 'Growth', tr: 'Büyüme', ru: 'Рост' }, 
              val: '240%', 
              sub: { en: 'Year-over-year revenue increase', tr: 'Yıllık gelir artışı', ru: 'Рост выручки за год' } 
            },
            { 
              label: { en: 'Efficiency', tr: 'Verimlilik', ru: 'Эффективность' }, 
              val: '40x', 
              sub: { en: 'Average cost reduction per tx', tr: 'İşlem başına ortalama maliyet düşüşü', ru: 'Снижение затрат на транзакцию' } 
            },
            { 
              label: { en: 'Reach', tr: 'Erişim', ru: 'Охват' }, 
              val: '1.2M+', 
              sub: { en: 'Monthly API calls served', tr: 'Aylık servis edilen API çağrıları', ru: 'Ежемесячных вызовов API' } 
            }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan-500 font-black mb-4">{t(stat.label)}</div>
              <div className="text-6xl font-bold mb-4 tracking-tighter text-[#050505] dark:text-white leading-none">{stat.val}</div>
              <p className="text-zinc-500 text-sm">{t(stat.sub)}</p>
            </div>
          ))}
        </div>

        {/* Contact IR Call to Action */}
        <motion.div 
          {...fadeIn}
          className="mt-32 p-12 md:p-20 rounded-[60px] bg-[#050505] text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f3ff10,transparent_70%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Mail className="w-16 h-16 text-cyan-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t({ en: 'Direct Investor Access', tr: 'Doğrudan Yatırımcı Erişimi', ru: 'Прямой доступ для инвесторов' })}
            </h2>
            <p className="text-zinc-400 text-xl mb-12 font-light">
              {t({
                en: 'Contact our investor relations team for deep-dive technical reviews and financial projections.',
                tr: 'Derinlemesine teknik incelemeler ve finansal projeksiyonlar için yatırımcı ilişkileri ekibimizle iletişime geçin.',
                ru: 'Свяжитесь с нашей командой по связям с инвесторами для глубокого технического анализа и финансовых прогнозов.'
              })}
            </p>
            <a href="mailto:invest@siyahkare.com" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 transition-all text-lg">
              <Mail className="w-5 h-5" />
              invest@siyahkare.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Investors;
