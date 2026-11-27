
import { Language, NavItem, Product } from './types';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: { en: 'Home', tr: 'Ana Sayfa', ru: 'Главная' }, path: '/' },
  { label: { en: 'Products', tr: 'Ürünler', ru: 'Продукты' }, path: '/products' },
  { label: { en: 'DAO', tr: 'DAO', ru: 'DAO' }, path: '/dao' },
  { label: { en: 'About', tr: 'Hakkımızda', ru: 'О нас' }, path: '/about' },
  { label: { en: 'Investors', tr: 'Yatırımcılar', ru: 'Инвесторам' }, path: '/investors' },
  { label: { en: 'Docs', tr: 'Belgeler', ru: 'Доки' }, path: '/docs' },
  { label: { en: 'Contact', tr: 'İletişim', ru: 'Контакты' }, path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'MicroBot',
    slug: 'microbot',
    icon: 'Bot',
    description: {
      en: 'High-frequency micro-transaction automation for advanced DeFi strategies.',
      tr: 'Gelişmiş DeFi stratejileri için yüksek frekanslı mikro işlem otomasyonu.',
      ru: 'Высокочастотная автоматизация микротранзакций для продвинутых DeFi-стратегий.'
    },
    longDescription: {
      en: 'MicroBot is the pinnacle of automated blockchain interaction. Designed for high-frequency trading and complex multi-step DeFi maneuvers, it leverages our proprietary low-latency node network to ensure execution speeds that outpace the competition. Whether it is frontrunning prevention, cross-DEX arbitrage, or automated yield harvesting, MicroBot provides the atomic precision required by modern digital finance.',
      tr: 'MicroBot, otomatik blok zinciri etkileşiminin zirvesidir. Yüksek frekanslı ticaret ve karmaşık çok adımlı DeFi manevraları için tasarlanan bu araç, rakiplerini geride bırakan yürütme hızlarını garanti etmek için tescilli düşük gecikmeli düğüm ağımızdan yararlanır. Önden çalıştırma (frontrunning) önleme, çapraz DEX arbitrajı veya otomatik verim toplama olsun, MicroBot modern dijital finansın gerektirdiği atomik hassasiyeti sağlar.',
      ru: 'MicroBot — это вершина автоматизированного взаимодействия с блокчейном. Разработанный для высокочастотной торговли и сложных многоэтапных маневров DeFi, он использует нашу собственную сеть узлов с низкой задержкой для обеспечения скорости исполнения, опережающей конкурентов. Будь то предотвращение опережения (frontrunning), межбиржевой арбитраж или автоматический сбор прибыли, MicroBot обеспечивает атомарную точность, необходимую современным цифровым финансам.'
    },
    features: {
      en: ['Arb-optimization', 'Gas-efficient routing', 'Multi-DEX integration', 'MEV Shielding', 'Sub-second Finality'],
      tr: ['Arbitraj optimizasyonu', 'Gaz verimli yönlendirme', 'Çoklu DEX entegrasyonu', 'MEV Koruması', 'Saniye Altı Kesinlik'],
      ru: ['Арбитражная оптимизация', 'Маршрутизация с экономией газа', 'Интеграция с несколькими DEX', 'Защита от MEV', 'Финальность за доли секунды']
    },
    specs: [
      { label: { en: 'Avg Latency', tr: 'Ort. Gecikme', ru: 'Сред. задержка' }, value: '24ms' },
      { label: { en: 'Max Throughput', tr: 'Maks. İşlem', ru: 'Макс. пропускная способность' }, value: '5k TPS' },
      { label: { en: 'Audit Status', tr: 'Denetim Durumu', ru: 'Статус аудита' }, value: 'Planned' },
      { label: { en: 'Language', tr: 'Dil', ru: 'Язык' }, value: 'Rust / C++' }
    ]
  },
  {
    id: '2',
    name: 'Nexus Insights',
    slug: 'nexus',
    icon: 'Activity',
    description: {
      en: 'Real-time on-chain behavioral analysis and whale tracking engine.',
      tr: 'Gerçek zamanlı zincir içi davranış analizi ve balina takip motoru.',
      ru: 'Анализ поведения в сети в реальном времени и механизм отслеживания китов.'
    },
    longDescription: {
      en: 'Nexus Insights transforms raw blockchain data into actionable intelligence. By monitoring hundreds of thousands of wallets and protocol events in real-time, Nexus identifies emerging trends, massive capital movements, and potential market shifts before they hit the headlines. Our machine learning layer filters noise to provide clear signals for institutional traders and risk managers.',
      tr: 'Nexus Insights, ham blok zinciri verilerini eyleme geçirilebilir zekaya dönüştürür. Gerçek zamanlı olarak yüz binlerce cüzdanı ve protokol olayını izleyen Nexus, ortaya çıkan trendleri, devasa sermaye hareketlerini ve potansiyel pazar değişimlerini manşetlere düşmeden önce tanımlar. Makine öğrenimi katmanımız, kurumsal tüccarlar ve risk yöneticileri için net sinyaller sağlamak üzere gürültüyü filtreler.',
      ru: 'Nexus Insights превращает необработанные данные блокчейна в полезную информацию. Отслеживая сотни тысяч кошельков и событий протоколов в режиме реального времени, Nexus выявляет возникающие тенденции, массовые движения капитала и потенциальные рыночные сдвиги еще до того, как они попадут в заголовки газет. Наш уровень машинного обучения фильтрует шум, обеспечивая четкие сигналы для институциональных трейдеров и риск-менеджеров.'
    },
    features: {
      en: ['Smart money tracking', 'Predictive alerts', 'Sentiment scoring', 'Custom Webhooks', 'Historical Backtesting'],
      tr: ['Akıllı para takibi', 'Tahmine dayalı uyarılar', 'Duygu puanlaması', 'Özel Webhook\'lar', 'Geçmiş Backtest'],
      ru: ['Отслеживание умных денег', 'Прогнозные оповещения', 'Оценка настроений', 'Кастомные вебхуки', 'Историческое тестирование']
    },
    specs: [
      { label: { en: 'Data Refresh', tr: 'Veri Yenileme', ru: 'Обновление данных' }, value: 'Real-time' },
      { label: { en: 'Monitored Assets', tr: 'İzlenen Varlıklar', ru: 'Активы под мониторингом' }, value: '10k+' },
      { label: { en: 'AI Model', tr: 'AI Modeli', ru: 'Модель ИИ' }, value: 'BERT-Nexus' }
    ]
  },
  {
    id: '3',
    name: 'OnlyVips',
    slug: 'onlyvips',
    icon: 'Zap',
    description: {
      en: 'Tiered Web3 access control and exclusive community gating system.',
      tr: 'Kademeli Web3 erişim kontrolü ve özel topluluk geçiş sistemi.',
      ru: 'Многоуровневый контроль доступа Web3 и эксклюзивная система шлюзов сообщества.'
    },
    longDescription: {
      en: 'OnlyVips is the definitive infrastructure for digital exclusivity. It allows projects and creators to build tiered ecosystems where access is dynamically governed by NFT ownership, token balances, or DAO reputation. Seamlessly integrated with major social platforms and dApps, OnlyVips ensures that your most valuable community members get the premium experience they deserve.',
      tr: 'OnlyVips, dijital ayrıcalık için kesin altyapıdır. Projelerin ve içerik oluşturucuların, erişimin NFT sahipliği, token bakiyeleri veya DAO itibarı tarafından dinamik olarak yönetildiği kademeli ekosistemler oluşturmasına olanak tanır. Başlıca sosyal platformlar ve dApp\'lerle sorunsuz bir şekilde entegre olan OnlyVips, en değerli topluluk üyelerinizin hak ettikleri premium deneyimi almalarını sağlar.',
      ru: 'OnlyVips — это окончательная инфраструктура для цифровой эксклюзивности. Она позволяет проектам и создателям создавать многоуровневые экосистемы, где доступ динамически регулируется владением NFT, балансом токенов или репутацией в DAO. Плавно интегрируясь с основными социальными платформами и dApps, OnlyVips гарантирует, что ваши самые ценные члены сообщества получат премиальный опыт, которого они заслуживают.'
    },
    features: {
      en: ['NFT utility gating', 'Revenue sharing', 'DAO governance sync', 'Multi-chain verification', 'Custom branding'],
      tr: ['NFT yardımcı programı geçişi', 'Gelir paylaşımı', 'DAO yönetişim senkronizasyonu', 'Çok zincirli doğrulama', 'Özel markalama'],
      ru: ['NFT гейтинг', 'Распределение доходов', 'Синхронизация управления DAO', 'Мультичейн верификация', 'Кастомный брендинг']
    },
    specs: [
      { label: { en: 'Integrations', tr: 'Entegrasyonlar', ru: 'Интеграции' }, value: 'Discord/TG' },
      { label: { en: 'Verification', tr: 'Doğrulama', ru: 'Верификация' }, value: 'Zero-Knowledge' },
      { label: { en: 'Chains', tr: 'Zincirler', ru: 'Сети' }, value: '15+' },
      { label: { en: 'Setup Time', tr: 'Kurulum Süresi', ru: 'Время настройки' }, value: '< 5 mins' }
    ]
  },
  {
    id: '4',
    name: 'Arayış Evreni',
    slug: 'arayis',
    icon: 'Globe',
    description: {
      en: 'Immersive meta-discovery platform for tokenized real-world assets.',
      tr: 'Tokenlaştırılmış gerçek dünya varlıkları için sürükleyici meta-keşif platformu.',
      ru: 'Иммерсивная платформа мета-поиска для токенизированных активов реального мира.'
    },
    longDescription: {
      en: 'Arayış Evreni bridges the gap between the physical and digital realms. This spatial discovery platform allows users to explore and interact with tokenized real-world assets (RWA) in a rich 3D environment. From real estate to fine art, Arayış provides the visual transparency and cryptographic proof needed to trade physical value on-chain with confidence.',
      tr: 'Arayış Evreni, fiziksel ve dijital alemler arasındaki boşluğu doldurur. Bu mekansal keşif platformu, kullanıcıların zengin bir 3B ortamda tokenlaştırılmış gerçek dünya varlıklarını (RWA) keşfetmelerine ve onlarla etkileşim kurmalarına olanak tanır. Gayrimenkulden güzel sanatlara kadar Arayış, fiziksel değeri zincir üzerinde güvenle alıp satmak için gereken görsel şeffaflığı ve kriptografik kanıtı sağlar.',
      ru: 'Arayış Evreni сокращает разрыв между физическим и цифровым мирами. Эта платформа пространственного поиска позволяет пользователям исследовать токенизированные активы реального мира (RWA) и взаимодействовать с ними в насыщенной 3D-среде. От недвижимости до изобразительного искусства, Arayış обеспечивает визуальную прозрачность и криптографические доказательства, необходимые для уверенной торговли физическими ценностями в сети.'
    },
    features: {
      en: ['RWA tokenization', 'Spatial data viz', 'Asset marketplace', 'Legal compliance layer', 'Fractional ownership'],
      tr: ['RWA tokenizasyonu', 'Mekansal veri viz', 'Varlık pazarı', 'Yasal uyum katmanı', 'Kısmi mülkiyet'],
      ru: ['Токенизация RWA', 'Визуализация данных', 'Маркетплейс активов', 'Слой юридического соответствия', 'Дробное владение']
    },
    specs: [
      { label: { en: 'Visualization', tr: 'Görselleştirme', ru: 'Визуализация' }, value: 'Unreal Engine 5' },
      { label: { en: 'RWA Standard', tr: 'RWA Standardı', ru: 'Стандарт RWA' }, value: 'ERC-3643' },
      { label: { en: 'Compliance', tr: 'Uyum', ru: 'Комплаенс' }, value: 'KYC/AML' },
      { label: { en: 'Asset Classes', tr: 'Varlık Sınıfları', ru: 'Классы активов' }, value: '5 Classes' }
    ]
  },
  {
    id: '5',
    name: 'Transfer Bot',
    slug: 'transfer',
    icon: 'Layers',
    description: {
      en: 'Institutional-grade cross-chain asset bridging and liquidity movement.',
      tr: 'Kurumsal düzeyde çapraz zincir varlık köprüleme ve likidite hareketi.',
      ru: 'Межсетевой мост активов институционального уровня и движение ликвидности.'
    },
    longDescription: {
      en: 'Transfer Bot is the ultimate orchestrator for global liquidity. Designed for institutions managing capital across diverse ecosystems, it automates the complex process of bridging assets while optimizing for speed, cost, and security. Its atomic swap architecture ensures that assets are never left in limbo during the transfer process.',
      tr: 'Transfer Bot, küresel likidite için nihai düzenleyicidir. Çeşitli ekosistemlerde sermaye yöneten kurumlar için tasarlanan bu araç, varlıkları köprülemenin karmaşık sürecini otomatikleştirirken hız, maliyet ve güvenlik açısından optimizasyon sağlar. Atomik takas mimarisi, transfer süreci sırasında varlıkların asla belirsizlikte kalmamasını sağlar.',
      ru: 'Transfer Bot — это совершенный оркестратор глобальной ликвидности. Разработанный для институтов, управляющих капиталом в различных экосистемах, он автоматизирует сложный процесс моста активов, оптимизируя скорость, стоимость и безопасность. Его архитектура атомарных свопов гарантирует, что активы никогда не окажутся в «подвешенном» состоянии в процессе перевода.'
    },
    features: {
      en: ['Atomic swaps', 'Low-latency bridging', 'Security audits', 'Risk management dash', 'Liquidity routing'],
      tr: ['Atomik takaslar', 'Düşük gecikmeli köprüleme', 'Güvenlik denetimleri', 'Risk yönetimi paneli', 'Likidite yönlendirme'],
      ru: ['Атомарные свопы', 'Мосты с низкой задержкой', 'Аудит безопасности', 'Панель управления рисками', 'Маршрутизация ликвидности']
    },
    specs: [
      { label: { en: 'Cross-Chain', tr: 'Çapraz Zincir', ru: 'Кросс-чейн' }, value: 'Omnichain' },
      { label: { en: 'Avg Speed', tr: 'Ort. Hız', ru: 'Сред. скорость' }, value: '< 2 mins' },
      { label: { en: 'Security', tr: 'Güvenlik', ru: 'Безопасность' }, value: 'Threshold Sig' },
      { label: { en: 'TVL Capacity', tr: 'TVL Kapasitesi', ru: 'Емкость TVL' }, value: 'Unlimited' }
    ]
  }
];
