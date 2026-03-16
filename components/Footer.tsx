
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Twitter, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-black/5 dark:border-white/5 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 tracking-tighter text-[#050505] dark:text-white">
              Siyah<span className="text-cyan-400">Kare</span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-500 max-w-sm mb-8">
              {t({
                en: 'Engineering the future of crypto, automation, and Web3 through cutting-edge digital systems and AI.',
                tr: 'Kripto, otomasyon ve Web3 dünyasının geleceğini en son teknoloji dijital sistemler ve yapay zeka ile tasarlıyoruz.',
                ru: 'Проектируем будущее криптографии, автоматизации и Web3 с помощью передовых цифровых систем и ИИ.'
              })}
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, MessageCircle, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all border border-black/5 dark:border-white/5 text-zinc-600 dark:text-zinc-400">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#050505] dark:text-white mb-6 uppercase tracking-wider text-sm">
              {t({ en: 'Company', tr: 'Şirket', ru: 'Компания' })}
            </h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-500">
              <li><a href="#/about" className="hover:text-cyan-400 transition-colors">{t({ en: 'About Us', tr: 'Hakkımızda', ru: 'О нас' })}</a></li>
              <li><a href="#/dao" className="hover:text-cyan-400 transition-colors">DAO</a></li>
              <li><a href="#/investors" className="hover:text-cyan-400 transition-colors">{t({ en: 'Investors', tr: 'Yatırımcılar', ru: 'Инвесторы' })}</a></li>
              <li><a href="#/blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#050505] dark:text-white mb-6 uppercase tracking-wider text-sm">
              {t({ en: 'Resources', tr: 'Kaynaklar', ru: 'Ресурсы' })}
            </h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-500">
              <li><a href="#/docs" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#/api" className="hover:text-cyan-400 transition-colors">API Keys</a></li>
              <li><a href="#/terms" className="hover:text-cyan-400 transition-colors">Legal</a></li>
              <li><a href="#/support" className="hover:text-cyan-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>© 1999 - 2025 SiyahKare. Global Blockchain Collective.</p>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Decentralized Node Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
