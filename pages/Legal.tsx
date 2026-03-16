
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, Shield, Landmark, Scale, CheckCircle, Download, FileCheck, Globe } from 'lucide-react';

const Legal: React.FC = () => {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'incorporation',
      title: { en: 'Certificate of Incorporation', tr: 'Incorporation Sertifikası', ru: 'Свидетельство о регистрации' },
      icon: FileText,
      content: {
        en: 'The official document certifying the formation of the BVI Business Company. It includes the company name, registration number, and date of incorporation.',
        tr: 'BVI İş Şirketinin oluşumunu onaylayan resmi belge. Şirket adını, kayıt numarasını ve kuruluş tarihini içerir.',
        ru: 'Официальный документ, подтверждающий создание бизнес-компании БВО. Он включает название компании, регистрационный номер и дату регистрации.'
      },
      sample: `TERRITORY OF THE BRITISH VIRGIN ISLANDS
BVI BUSINESS COMPANIES ACT, 2004

CERTIFICATE OF INCORPORATION
(SECTION 7)

The REGISTRAR of CORPORATE AFFAIRS, of the British Virgin Islands
HEREBY CERTIFIES, that pursuant to the BVI Business Companies Act, 2004,
all the requirements of the Act in respect of incorporation having been
complied with,

[COMPANY NAME - e.g.: CRYPTO DAO LAUNCH SPV LIMITED]
BVI COMPANY NUMBER: [e.g. 1234567]
is incorporated in the BRITISH VIRGIN ISLANDS as a BVI BUSINESS COMPANY,
this [Date - e.g. 15th day of March, 2026].

for REGISTRAR OF CORPORATE AFFAIRS`
    },
    {
      id: 'mem-arts',
      title: { en: 'Memorandum & Articles', tr: 'Memorandum & Articles', ru: 'Меморандум и Устав' },
      icon: Landmark,
      content: {
        en: 'The constitutional documents of the company. For crypto projects, these are often tailored to include DAO governance rules and smart contract execution triggers.',
        tr: 'Şirketin anayasal belgeleri. Kripto projeleri için bunlar genellikle DAO yönetişim kurallarını ve akıllı sözleşme yürütme tetikleyicilerini içerecek şekilde uyarlanır.',
        ru: 'Учредительные документы компании. Для криптопроектов они часто адаптируются для включения правил управления DAO и триггеров выполнения смарт-контрактов.'
      },
      clauses: [
        {
          label: { en: 'DAO Governance Link', tr: 'DAO Yönetişim Bağlantısı', ru: 'Связь с управлением DAO' },
          text: '"The Directors shall act in accordance with resolutions passed by the governing body of the associated decentralized autonomous organization..."'
        },
        {
          label: { en: 'On-chain Execution', tr: 'Zincir Üstü Yürütme', ru: 'Ончейн выполнение' },
          text: '"Directors shall execute transfers only upon on-chain proposal approval from [DAO multisig address]"'
        }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyan-500/20 rounded-2xl">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{t({ en: 'Legal & Compliance', tr: 'Hukuk ve Uyumluluk', ru: 'Юридические вопросы' })}</h1>
          </div>
          <p className="text-zinc-400 text-lg max-w-3xl">
            {t({
              en: 'Detailed guide on BVI entity structures for crypto projects, DAOs, and offshore SPVs. Understanding your foundational documents.',
              tr: 'Kripto projeleri, DAO\'lar ve offshore SPV\'ler için BVI varlık yapıları hakkında detaylı kılavuz. Temel belgelerinizi anlama.',
              ru: 'Подробное руководство по структурам организаций БВО для криптопроектов, DAO и офшорных SPV. Понимание ваших учредительных документов.'
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {sections.map((section, idx) => (
              <motion.section 
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[32px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <section.icon className="w-32 h-32" />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <section.icon className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold">{t(section.title)}</h2>
                </div>
                
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {t(section.content)}
                </p>

                {section.sample && (
                  <div className="relative">
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Official Sample</div>
                    <pre className="p-6 rounded-2xl bg-black border border-white/10 font-mono text-xs text-cyan-400/80 leading-relaxed overflow-x-auto">
                      {section.sample}
                    </pre>
                  </div>
                )}

                {section.clauses && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">DAO-Specific Clauses</h3>
                    {section.clauses.map((clause, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-xs font-bold text-cyan-400 mb-2">{t(clause.label)}</div>
                        <div className="text-sm font-mono text-zinc-300 italic">{clause.text}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-8 rounded-[32px] bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                {t({ en: 'Checklist', tr: 'Kontrol Listesi', ru: 'Чек-лист' })}
              </h3>
              <ul className="space-y-4">
                {[
                  { en: 'KYC/AML Approval', tr: 'KYC/AML Onayı', ru: 'Одобрение KYC/AML' },
                  { en: 'Registered Agent Selection', tr: 'Kayıtlı Temsilci Seçimi', ru: 'Выбор регистрационного агента' },
                  { en: 'Mem & Arts Tailoring', tr: 'Mem & Arts Uyarlaması', ru: 'Адаптация Меморандума и Устава' },
                  { en: 'Digital Stamp Verification', tr: 'Dijital Mühür Doğrulaması', ru: 'Проверка цифровой печати' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-4">{t({ en: 'Next Steps', tr: 'Sonraki Adımlar', ru: 'Дальнейшие шаги' })}</h3>
              <p className="text-sm text-zinc-500 mb-6">
                {t({
                  en: 'Once you receive your stamped documents, you can proceed to bank account opening and token issuance.',
                  tr: 'Mühürlü belgelerinizi aldıktan sonra banka hesabı açma ve token ihracı işlemlerine devam edebilirsiniz.',
                  ru: 'После получения документов с печатью вы можете приступить к открытию банковского счета и выпуску токенов.'
                })}
              </p>
              <button className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                {t({ en: 'Download Sample Pack', tr: 'Örnek Paketi İndir', ru: 'Скачать примеры' })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
