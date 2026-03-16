
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, MessageSquare, Mail, Globe, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-bold mb-8">{t({ en: 'Let\'s Connect', tr: 'İletişime Geçin', ru: 'Свяжитесь с нами' })}</h1>
            <p className="text-xl text-zinc-400 mb-12">
              {t({ 
                en: 'Have questions about our APIs, products, or strategic opportunities? Our global team is ready to assist.',
                tr: 'API\'lerimiz, ürünlerimiz veya stratejik fırsatlarımız hakkında sorularınız mı var? Küresel ekibimiz yardıma hazır.',
                ru: 'Есть вопросы по API, продуктам или стратегическим возможностям? Наша команда готова помочь.'
              })}
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-zinc-500">core@siyahkare.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="p-4 rounded-2xl bg-green-500/10 text-green-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Telegram</h3>
                  <p className="text-zinc-500">@SiyahKareSupport</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="p-4 rounded-2xl bg-white/5 text-zinc-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Headquarters</h3>
                  <p className="text-zinc-500">Decentralized Autonomous Collective</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 rounded-3xl bg-white/5 border border-cyan-500/30 text-center animate-in zoom-in duration-300">
                <CheckCircle2 className="w-20 h-20 text-cyan-400 mb-6" />
                <h2 className="text-2xl font-bold mb-4">{t({ en: 'Message Received', tr: 'Mesaj Alındı', ru: 'Сообщение получено' })}</h2>
                <p className="text-zinc-500">{t({ en: 'Our nodes are processing your request. We will reach out shortly.', tr: 'Node\'larımız talebinizi işliyor. Kısa süre içinde iletişime geçeceğiz.', ru: 'Наши узлы обрабатывают ваш запрос. Мы скоро свяжемся.' })}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400 ml-1">Full Name</label>
                    <input required type="text" className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400 ml-1">Work Email</label>
                    <input required type="email" className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 transition-all outline-none" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 ml-1">Subject</label>
                  <select className="w-full px-4 py-4 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 transition-all outline-none">
                    <option>Product Inquiry</option>
                    <option>Strategic Partnership</option>
                    <option>Investment Opportunity</option>
                    <option>Developer Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 ml-1">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 transition-all outline-none resize-none" placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="w-full py-5 bg-white text-black font-black rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2">
                  {t({ en: 'Transmit Message', tr: 'Mesajı Gönder', ru: 'Отправить сообщение' })}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
