
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { NAV_ITEMS, LANGUAGES, PRODUCTS } from '../constants.tsx';
import { Menu, X, Globe, Cpu, Sun, Moon, Search, ArrowRight, Hash, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const currentPath = window.location.hash || '#/';

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const filteredProducts = searchTerm.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.slug.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg group-hover:scale-110 transition-transform">
                <Cpu className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-[#050505] dark:text-white">
                Siyah<span className="text-cyan-400">Kare</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  currentPath === `#${item.path}` ? 'text-cyan-400' : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {t(item.label)}
              </a>
            ))}

            <div className="flex items-center gap-4">
              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:border-cyan-500/50 transition-all bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-cyan-400 flex items-center gap-2 group"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
                <span className="text-[10px] font-mono opacity-50 hidden lg:block group-hover:opacity-100 transition-opacity">⌘K</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:border-cyan-500/50 transition-all bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-cyan-400"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 hover:border-cyan-500/50 transition-all bg-black/5 dark:bg-white/5"
                >
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs uppercase font-bold text-zinc-600 dark:text-zinc-400">{language}</span>
                </button>

                {showLangMenu && (
                  <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 p-2 shadow-2xl animate-in fade-in zoom-in duration-200">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${
                          language === lang.code ? 'text-cyan-400 bg-black/5 dark:bg-white/5' : 'text-zinc-600 dark:text-zinc-400'
                        }`}
                      >
                        <span>{lang.label}</span>
                        <span>{lang.flag}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400"
              >
                <Search className="w-5 h-5" />
              </button>
             <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
             <button
                onClick={() => setLanguage(language === 'en' ? 'tr' : language === 'tr' ? 'ru' : 'en')}
                className="p-2 rounded-full border border-black/10 dark:border-white/10 text-xs font-bold uppercase text-cyan-400"
              >
                {language}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-500 hover:text-[#050505] dark:hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Global Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/90 dark:bg-[#050505]/95 backdrop-blur-xl flex items-start justify-center pt-20 px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsSearchOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-white dark:bg-[#0a0a0a] rounded-[32px] border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-black/5 dark:border-white/5 flex items-center gap-4">
                <Search className="w-6 h-6 text-cyan-500" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t({ en: 'Search products by name or slug...', tr: 'Ürünleri ad veya slug ile ara...', ru: 'Поиск продуктов по названию или слагу...' })}
                  className="flex-1 bg-transparent border-none outline-none text-xl font-medium text-[#050505] dark:text-white placeholder:text-zinc-400"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-zinc-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                {searchTerm.trim() === '' ? (
                  <div className="py-12 text-center">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-6 h-6 text-cyan-500" />
                    </div>
                    <p className="text-zinc-500 font-medium">
                      {t({ en: 'Type something to explore our ecosystem', tr: 'Ekosistemimizi keşfetmek için bir şeyler yazın', ru: 'Введите что-нибудь, чтобы изучить нашу экосистему' })}
                    </p>
                  </div>
                ) : filteredProducts.length > 0 ? (
                  <div className="space-y-2">
                    {filteredProducts.map((p) => (
                      <a
                        key={p.id}
                        href={`#/products/${p.slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchTerm('');
                        }}
                        className="flex items-center justify-between group p-4 rounded-2xl hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-zinc-50 dark:bg-white/5 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
                            <Terminal className="w-5 h-5 text-zinc-400 group-hover:text-cyan-500" />
                          </div>
                          <div>
                            <div className="font-bold text-[#050505] dark:text-white group-hover:text-cyan-500 transition-colors flex flex-wrap items-center gap-3">
                              <span className="text-lg tracking-tight">{p.name}</span>
                              <span className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-black uppercase tracking-tighter bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full group-hover:bg-cyan-500/20 transition-all shadow-sm">
                                <Hash className="w-3 h-3" />
                                {p.slug}
                              </span>
                            </div>
                            <div className="text-xs text-zinc-500 line-clamp-1 mt-1 font-light">{t(p.description)}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Launch</span>
                           <ArrowRight className="w-4 h-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-zinc-500">{t({ en: 'No products found matching your search.', tr: 'Aramanızla eşleşen ürün bulunamadı.', ru: 'Продукты по вашему запросу не найдены.' })}</p>
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-zinc-50 dark:bg-white/5 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 bg-white dark:bg-[#050505] border border-black/10 dark:border-white/10 rounded text-[10px] font-mono shadow-sm text-zinc-500">esc</kbd>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">{t({ en: 'Close', tr: 'Kapat', ru: 'Закрыть' })}</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black hidden sm:block">
                  SiyahKare Unified Search Engine
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#050505] border-b border-black/5 dark:border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-medium text-zinc-500 dark:text-zinc-400 hover:text-cyan-400 border-b border-black/5 dark:border-white/5"
              >
                {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
