
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Shield, 
  Cpu, 
  Users, 
  Globe, 
  ChevronRight, 
  Zap, 
  Gavel, 
  Code,
  Layers,
  BarChart3,
  Network,
  History,
  Lock,
  Workflow,
  Search,
  Activity,
  ArrowDown
} from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const timeline = [
    { year: '1999', event: { en: 'Genesis: The first phantom node is established.', tr: 'Başlangıç: İlk hayalet düğüm kuruldu.', ru: 'Генезис: Создан первый фантомный узел.' } },
    { year: '2009', event: { en: 'Web3 Integration: Adoption of early blockchain protocols.', tr: 'Web3 Entegrasyonu: İlk blok zinciri protokollerinin benimsenmesi.', ru: 'Интеграция Web3: Принятие ранних блокчейн-протоколов.' } },
    { year: '2018', event: { en: 'Nexus Protocol: Launch of the institutional automation layer.', tr: 'Nexus Protokolü: Kurumsal otomasyon katmanının lansmanı.', ru: 'Протокол Nexus: Запуск уровня институциональной автоматизации.' } },
  ];

  const howItWorksSteps = [
    {
      icon: Network,
      title: { en: 'Network Entry', tr: 'Ağ Girişi', ru: 'Вход в сеть' },
      desc: { 
        en: 'Connect to our global decentralized node infrastructure via the SiyahKare stealth protocol.',
        tr: 'SiyahKare gizlilik protokolü aracılığıyla küresel merkeziyetsiz düğüm altyapımıza bağlanın.',
        ru: 'Подключитесь к нашей глобальной децентрализованной инфраструктуре узлов через стелс-протокол SiyahKare.'
      }
    },
    {
      icon: Cpu,
      title: { en: 'Deep Logic Processing', tr: 'Derin Mantıksal İşleme', ru: 'Глубокая обработка логики' },
      desc: { 
        en: 'High-performance Nexus algorithms analyze on-chain behavioral data and market dynamics in real-time.',
        tr: 'Yüksek performanslı Nexus algoritmaları, zincir içi davranış verilerini ve piyasa dinamiklerini gerçek zamanlı olarak analiz eder.',
        ru: 'Высокопроизводительные алгоритмы Nexus анализируют данные поведения в сети и динамику рынка в реальном времени.'
      }
    },
    {
      icon: Zap,
      title: { en: 'Precision Execution', tr: 'Hassas Yürütme', ru: 'Точное выполнение' },
      desc: { 
        en: 'Deploy atomic sub-second transactions with integrated MEV shielding and gas optimization.',
        tr: 'Entegre MEV koruması ve gaz optimizasyonu ile atomik saniye altı işlemleri gerçekleştirin.',
        ru: 'Выполняйте атомарные транзакции за доли секунды с интегрированной защитой от MEV и оптимизацией газа.'
      }
    },
    {
      icon: Gavel,
      title: { en: 'Consensus Proof', tr: 'Mutabakat Kanıtı', ru: 'Подтверждение консенсуса' },
      desc: { 
        en: 'Verify every action through the SiyahKare DAO ledger, ensuring cryptographic transparency and trust.',
        tr: 'Kriptografik şeffaflık ve güven sağlayan SiyahKare DAO defteri aracılığıyla her eylemi doğrulayın.',
        ru: 'Проверяйте каждое действие через реестр SiyahKare DAO, обеспечивая криптографическую прозрачность и доверие.'
      }
    }
  ];

  const values = [
    { 
      name: { en: 'Absolute Privacy', tr: 'Mutlak Gizlilik', ru: 'Абсолютная приватность' }, 
      icon: Lock, 
      desc: { 
        en: 'We prioritize code integrity and user anonymity above all. In our ecosystem, your identity is your choice, but your security is our mandate.', 
        tr: 'Her şeyden önce kod dürüstlüğüne ve kullanıcı anonimliğine öncelik veriyoruz. Ekosistemimizde kimliğiniz sizin seçiminizdir, ancak güvenliğiniz bizim görevimizdir.', 
        ru: 'Мы ставим целостность кода и анонимность пользователя выше всего. В нашей экосистеме ваша личность — это ваш выбор, но ваша безопасность — наша обязанность.' 
      } 
    },
    { 
      name: { en: 'Algorithmic Truth', tr: 'Algoritmik Gerçeklik', ru: 'Алгоритмическая истина' }, 
      icon: Code, 
      desc: { 
        en: 'Trust is not earned; it is mathematically proven. Our systems rely on immutable logic and transparent execution.', 
        tr: 'Güven kazanılmaz; matematiksel olarak kanıtlanır. Sistemlerimiz değişmez mantığa ve şeffaf yürütmeye dayanır.', 
        ru: 'Доверие не заслуживается; оно доказывается математически. Наши системы полагаются на неизменную логику и прозрачное исполнение.' 
      } 
    },
    { 
      name: { en: 'Resilient Scalability', tr: 'Dayanıklı Ölçeklenebilirlik', ru: 'Устойчивая масштабируемость' }, 
      icon: Workflow, 
      desc: { 
        en: 'Engineering for the infinite. Our modular architecture adapts to the ever-changing landscape of the global digital economy.', 
        tr: 'Sonsuzluk için mühendislik. Modüler mimarimiz, küresel dijital ekonominin sürekli değişen ortamına uyum sağlar.', 
        ru: 'Проектирование для бесконечности. Наша модульная архитектура адаптируется к постоянно меняющемуся ландшафту глобальной цифровой экономики.' 
      } 
    },
    { 
      name: { en: 'Technological Sovereignty', tr: 'Teknolojik Egemenlik', ru: 'Технологический суверенитет' }, 
      icon: Zap, 
      desc: { 
        en: 'Empowering individuals and institutions to own their data and financial future through decentralized tools.', 
        tr: 'Merkeziyetsiz araçlar aracılığıyla bireylerin ve kurumların verilerine ve finansal geleceklerine sahip olmalarını sağlamak.', 
        ru: 'Расширение возможностей людей и институтов владеть своими данными и финансовым будущим с помощью децентрализованных инструментов.' 
      } 
    }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f3ff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-bold uppercase tracking-widest text-cyan-500 dark:text-cyan-400 mb-8"
          >
            SiyahKare // {t({ en: 'The Narrative', tr: 'Hikaye', ru: 'Нарратив' })}
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9] text-[#050505] dark:text-white">
            {t({ en: 'The Infinite', tr: 'Sonsuz', ru: 'Бесконечная' })} <br/>
            <span className="gradient-text">{t({ en: 'Collective', tr: 'Kolektif', ru: 'Коллектив' })}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            {t({
              en: 'Since 1999, we have engineered the invisible architecture of the digital world. SiyahKare is a global phantom network of architects, developers, and visionaries.',
              tr: '1999\'dan beri dijital dünyanın görünmez mimarisini tasarlıyoruz. SiyahKare sadece bir şirket değil; mimarlar, geliştiriciler ve vizyonerlerden oluşan küresel bir hayalet ağdır.',
              ru: 'С 1999 года мы проектируем невидимую архитектуру цифрового мира. SiyahKare — это не просто компания, это глобальная фантомная сеть архитекторов, разработчиков и визионеров.'
            })}
          </p>
        </motion.div>

        {/* Vision & Mission Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
          <motion.div 
            {...fadeIn} 
            className="p-10 md:p-14 rounded-[40px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 relative group hover:border-cyan-500/30 transition-all overflow-hidden"
          >
            <div className="relative z-10">
              <div className="p-4 bg-cyan-500/10 rounded-2xl w-fit mb-8">
                <Eye className="w-10 h-10 text-cyan-500 dark:text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-[#050505] dark:text-white">{t({ en: 'Our Vision', tr: 'Vizyonumuz', ru: 'Наше видение' })}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                {t({
                  en: 'To establish a global standard for autonomous systems where code is the ultimate law and decentralization is the absolute foundation. We envision a world where technological sovereignty is accessible to every node in the network.',
                  tr: 'Kodun en yüksek yasa, merkeziyetsizliğin ise mutlak temel olduğu otonom sistemler için küresel bir standart oluşturmak. Teknolojik egemenliğin ağdaki her düğüm için erişilebilir olduğu bir dünya hayal ediyoruz.',
                  ru: 'Установить глобальный стандарт для автономных систем, где код является высшим законом, а децентрализация — абсолютной основой. Мы видим мир, в котором технологический суверенитет доступен каждому узлу сети.'
                })}
              </p>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
              <Eye className="w-64 h-64 text-[#050505] dark:text-white" />
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            className="p-10 md:p-14 rounded-[40px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 relative group hover:border-green-500/30 transition-all overflow-hidden"
          >
            <div className="relative z-10">
              <div className="p-4 bg-green-500/10 rounded-2xl w-fit mb-8">
                <Target className="w-10 h-10 text-green-500 dark:text-green-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-[#050505] dark:text-white">{t({ en: 'Our Mission', tr: 'Misyonumuz', ru: 'Наша миссия' })}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                {t({
                  en: 'Deploying high-frequency automation, elite-grade APIs, and secure tokenization frameworks that empower the new digital economy. We build the tools that bridge the gap between human ambition and algorithmic efficiency.',
                  tr: 'Yeni dijital ekonomiyi güçlendiren yüksek frekanslı otomasyon, üst düzey API\'ler ve güvenli tokenizasyon çerçeveleri sunmak. İnsan hırsı ile algoritmik verimlilik arasındaki boşluğu dolduran araçlar üretiyoruz.',
                  ru: 'Внедрение высокочастотной автоматизации, API элитного уровня и безопасных структур токенизации, расширяющих возможности новой цифровой экономики. Мы создаем инструменты, которые сокращают разрыв между человеческими амбициями и алгоритмической эффективностью.'
                })}
              </p>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
              <Target className="w-64 h-64 text-[#050505] dark:text-white" />
            </div>
          </motion.div>
        </div>

        {/* How It Works Section */}
        <div className="mb-40">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Workflow className="w-10 h-10 text-cyan-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-[#050505] dark:text-white">{t({ en: 'How It Works', tr: 'Nasıl Çalışır', ru: 'Как это работает' })}</h2>
            <p className="text-zinc-500">{t({ en: 'A step-by-step breakdown of SiyahKare’s technology workflow.', tr: 'SiyahKare teknolojisinin iş akışının adım adım özeti.', ru: 'Пошаговый разбор технологического процесса SiyahKare.' })}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden lg:block -z-10" />
            
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-[32px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 hover:border-cyan-500/40 transition-all flex flex-col items-center text-center shadow-sm"
              >
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-cyan-500" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-cyan-500 text-black font-black flex items-center justify-center text-[10px] shadow-lg">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#050505] dark:text-white">{t(step.title)}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">{t(step.desc)}</p>
                {i < howItWorksSteps.length - 1 && (
                  <div className="mt-8 text-cyan-500/30 group-hover:text-cyan-500 transition-colors lg:hidden">
                    <ArrowDown className="w-6 h-6 animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="mb-40">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <History className="w-10 h-10 text-cyan-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-[#050505] dark:text-white">{t({ en: 'Evolution Timeline', tr: 'Gelişim Zaman Çizelgesi', ru: 'История эволюции' })}</h2>
            <p className="text-zinc-500">{t({ en: 'The journey from a single node to a global powerhouse.', tr: 'Tek bir düğümden küresel bir güç merkezine uzanan yolculuk.', ru: 'Путь от одного узла к глобальному центру силы.' })}</p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 w-full text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-3xl font-black text-cyan-500 mb-2 block">{item.year}</span>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">{t(item.event)}</p>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] border-4 border-white dark:border-[#050505]" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-40">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#050505] dark:text-white">{t({ en: 'Our Core Values', tr: 'Temel Değerlerimiz', ru: 'Наши основные ценности' })}</h2>
            <p className="text-zinc-500">{t({ en: 'The philosophical pillars that guide our every execution.', tr: 'Her operasyonumuza rehberlik eden felsefi sütunlar.', ru: 'Философские столпы, которыми мы руководствуемся в каждом действии.' })}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[32px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm dark:shadow-none">
                  <v.icon className="w-8 h-8 text-zinc-400 group-hover:text-cyan-500 transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#050505] dark:text-white">{t(v.name)}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">{t(v.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Collective Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-center">
          <motion.div {...fadeIn}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-20 bg-cyan-500" />
              <h2 className="text-5xl font-bold mb-8 text-[#050505] dark:text-white leading-tight">
                {t({ en: 'Anonymity as a ', tr: 'Bir Güç Olarak ', ru: 'Анонимность как ' })} <br/>
                <span className="text-cyan-400">{t({ en: 'Superpower', tr: 'Anonimlik', ru: 'Суперсила' })}</span>
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed mb-8 font-light">
              {t({
                en: 'In an era of surveillance, SiyahKare prioritizes code integrity over personal identity. Our collective spans 12+ timezones, unified by a shared DAO framework and the pursuit of technological sovereignty.',
                tr: 'Gözetim çağında SiyahKare, kişisel kimlik yerine kod dürüstlüğüne öncelik verir. Kolektifimiz, ortak bir DAO çerçevesi ve teknolojik egemenlik arayışıyla birleşmiş 12\'den fazla zaman dilimine yayılmıştır.',
                ru: 'В эпоху слежки SiyahKare ставит целостность кода выше личности. Наш коллектив охватывает более 12 часовых поездов, объединенных общей структурой DAO и стремлением к технологическому суверенитету.'
              })}
            </p>
            <div className="flex gap-4">
              <a href="#/contact" className="px-8 py-4 rounded-xl bg-black dark:bg-white/5 border border-black/10 dark:border-white/10 text-white font-bold hover:bg-zinc-800 dark:hover:bg-white/10 transition-all flex items-center gap-2">
                {t({ en: 'Join the Network', tr: 'Ağa Katıl', ru: 'Присоединиться' })}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-[80px]" />
            <div className="relative h-full w-full flex items-center justify-center p-6 md:p-12">
               <div className="relative h-full w-full rounded-[60px] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-xl flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl dark:shadow-none">
                  <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                  <Users className="w-24 h-24 text-zinc-200 dark:text-zinc-800 mb-8" />
                  <div className="space-y-4">
                    <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest font-bold">Active Nodes</p>
                    <p className="text-4xl md:text-5xl font-bold text-[#050505] dark:text-white tracking-tighter">42,891</p>
                    <div className="h-px w-20 bg-zinc-200 dark:bg-zinc-800 mx-auto" />
                    <p className="text-xs font-mono text-cyan-500/50 dark:text-cyan-500/50 uppercase tracking-widest font-bold">Global Status: Online</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Investor & Partner Call to Action */}
        <motion.div 
          {...fadeIn}
          className="p-10 md:p-20 rounded-[60px] bg-zinc-50 dark:bg-gradient-to-br dark:from-cyan-500/10 dark:to-green-500/10 border border-black/5 dark:border-white/10 text-center relative overflow-hidden group shadow-sm dark:shadow-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00000003_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <Gavel className="w-16 h-16 text-cyan-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#050505] dark:text-white">{t({ en: 'Governance & Strategic Growth', tr: 'Yönetişim ve Stratejik Büyüme', ru: 'Управление и стратегический рост' })}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {t({
              en: 'We invite strategic partners and institutional investors to explore our DAO frameworks and the future of the SiyahKare ecosystem.',
              tr: 'Stratejik ortakları ve kurumsal yatırımcıları DAO çerçevelerimizi ve SiyahKare ekosisteminin geleceğini keşfetmeye davet ediyoruz.',
              ru: 'Мы приглашаем стратегических партнеров и институциональных инвесторов изучить наши структуры DAO и будущее экосистемы SiyahKare.'
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#/investors" className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-black font-black rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
              {t({ en: 'Investor Resources', tr: 'Yatırımcı Kaynakları', ru: 'Ресурсы для инвесторов' })}
            </a>
            <a href="#/dao" className="w-full sm:w-auto px-10 py-4 border border-black/10 dark:border-white/10 text-[#050505] dark:text-white font-bold rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all">
              {t({ en: 'Governance Portal', tr: 'Yönetişim Portalı', ru: 'Портал управления' })}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
