import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, FileText, Send, CalendarCheck, Brain, ShieldCheck,
  Coins, Scale as ScaleIcon, Award, Cpu, Scale, Wallet, ShieldAlert,
  Activity, Lock, Users, Sparkles, Hammer, CheckCircle2, RefreshCw,
  ChevronDown, Crown, Gavel, BookOpen,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { microNation } from '../content/microNation';

// Live Citizen Portal (SiyahKare Sanal Devleti, test network).
const CITIZEN_PORTAL_URL = 'https://siyahkare-sanal-devleti.vercel.app';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const card =
  'rounded-2xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03] backdrop-blur-sm';
const muted = 'text-zinc-600 dark:text-zinc-400';

const SectionTitle: React.FC<{ eyebrow?: string; title: React.ReactNode; sub?: string }> = ({ eyebrow, title, sub }) => (
  <motion.div {...fadeUp} className="mb-12 max-w-3xl">
    {eyebrow && (
      <div className="text-xs font-mono tracking-[0.2em] uppercase text-cyan-500 dark:text-cyan-400 mb-3">{eyebrow}</div>
    )}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
    {sub && <p className={`text-lg ${muted}`}>{sub}</p>}
  </motion.div>
);

const Dao: React.FC = () => {
  const { language } = useLanguage();
  const m = microNation[language] ?? microNation.en;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [doc, setDoc] = useState<'constitution' | 'whitepaper'>('constitution');

  const heroBullets = [
    { icon: Send, ...m.hero.bullets.telegram },
    { icon: CalendarCheck, ...m.hero.bullets.tasks },
    { icon: Brain, ...m.hero.bullets.ai },
    { icon: ShieldCheck, ...m.hero.bullets.actor },
  ];

  const layers = [
    { ...m.whatIs.layers.l1, icon: Crown, accent: 'border-l-white/60' },
    { ...m.whatIs.layers.l2, icon: Brain, accent: 'border-l-cyan-400' },
    { ...m.whatIs.layers.l3, icon: Coins, accent: 'border-l-green-400' },
    { ...m.whatIs.layers.l4, icon: Users, accent: 'border-l-cyan-700' },
    { ...m.whatIs.layers.l5, icon: Send, accent: 'border-l-zinc-500' },
  ];

  const benefits = [
    { ...m.benefits.b1, icon: Coins },
    { ...m.benefits.b2, icon: ScaleIcon },
    { ...m.benefits.b3, icon: Award },
  ];

  const economy = [
    { ...m.economy.cards.c1, icon: Activity },
    { ...m.economy.cards.c2, icon: Lock },
    { ...m.economy.cards.c3, icon: Wallet },
  ];

  const council = [
    { ...m.governance.cards.c1, icon: Cpu, color: 'text-cyan-400 bg-cyan-500/15' },
    { ...m.governance.cards.c2, icon: Scale, color: 'text-green-400 bg-green-500/15' },
    { ...m.governance.cards.c3, icon: Wallet, color: 'text-amber-400 bg-amber-500/15' },
    { ...m.governance.cards.c4, icon: ShieldAlert, color: 'text-red-400 bg-red-500/15' },
  ];

  const audiences = [
    { ...m.target.c1, icon: Users },
    { ...m.target.c2, icon: Sparkles },
    { ...m.target.c3, icon: Hammer },
  ];

  const phases = [m.roadmap.phases.p1, m.roadmap.phases.p2, m.roadmap.phases.p3, m.roadmap.phases.p4];
  const faqs = [m.faq.q1, m.faq.q2, m.faq.q3, m.faq.q4, m.faq.q5];

  const constitution = m.legal.content.constitution;
  const whitepaper = m.legal.content.whitepaper;
  const docSections =
    doc === 'constitution'
      ? [constitution.art1, constitution.art2, constitution.art3, constitution.art4]
      : [whitepaper.abstract, whitepaper.intro, whitepaper.tokenomics, whitepaper.governance, whitepaper.roadmap];

  const openDoc = (which: 'constitution' | 'whitepaper') => {
    setDoc(which);
    scrollTo('documents');
  };

  return (
    <div className="relative overflow-hidden">
      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 border-b border-black/5 dark:border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-green-500/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            {m.hero.phase}
          </motion.div>

          <motion.h1 {...fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            {m.hero.titlePrefix}
            <br className="hidden md:block" />{' '}
            <span className="gradient-text">{m.hero.titleHighlight}</span>
          </motion.h1>

          <motion.p {...fadeUp} className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 ${muted}`}>
            {m.hero.subtitle}
          </motion.p>

          <motion.div {...fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12 text-left">
            {heroBullets.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={`${card} p-4`}>
                <Icon className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mb-2" />
                <div className="font-semibold text-sm">{title}</div>
                <div className={`text-xs ${muted}`}>{desc}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CITIZEN_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all"
            >
              {m.hero.cta.enter}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => openDoc('whitepaper')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-black/10 dark:border-white/15 font-semibold hover:border-cyan-400 hover:text-cyan-500 transition-all"
            >
              <FileText className="mr-2 w-4 h-4" />
              {m.hero.cta.whitepaper}
            </button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ───────────── WHAT IS ───────────── */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{m.whatIs.title}</h2>
            <div className={`space-y-6 text-lg leading-relaxed ${muted}`}>
              <p>{m.whatIs.p1}</p>
              <p className="text-xl font-medium text-[#050505] dark:text-white pl-4 border-l-2 border-cyan-400">
                {m.whatIs.highlight}
              </p>
              <p>{m.whatIs.p2}</p>
              <p className="pt-2 text-sm font-mono text-zinc-500">{m.whatIs.stack}</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative space-y-3">
              {layers.map(({ title, sub, icon: Icon, accent }, i) => (
                <div
                  key={title}
                  className={`${card} border-l-4 ${accent} px-6 py-4 flex items-center justify-between hover:scale-[1.02] transition-transform`}
                  style={{ marginLeft: `${i * 12}px` }}
                >
                  <span className="flex items-center gap-3 font-bold tracking-wide">
                    <Icon className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                    {title}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 hidden sm:block">{sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ───────────── BENEFITS ───────────── */}
        <section className="py-24 border-t border-black/5 dark:border-white/5">
          <SectionTitle title={m.benefits.title} sub={m.benefits.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map(({ title, desc, details, icon: Icon }) => (
              <motion.div {...fadeUp} key={title} className={`${card} p-8 hover:border-cyan-400/40 transition-colors`}>
                <div className="p-3 bg-cyan-500/15 rounded-xl w-fit mb-6">
                  <Icon className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className={`mb-6 ${muted}`}>{desc}</p>
                <ul className="space-y-2">
                  {details.map((d: string) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                      <span className={muted}>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────── NASIP TASKS ───────────── */}
        <section className="py-24 border-t border-black/5 dark:border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div {...fadeUp} className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {m.tasks.title} <br />
              <span className="text-cyan-500 dark:text-cyan-400">{m.tasks.titleHighlight}</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${muted}`}>{m.tasks.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className={`${card} p-6 border-cyan-500/20`}>
                <h4 className="font-bold text-cyan-500 dark:text-cyan-400 mb-2">{m.tasks.cats.title}</h4>
                <p className={`text-sm ${muted}`}>{m.tasks.cats.desc}</p>
              </div>
              <div className={`${card} p-6 border-green-500/20`}>
                <h4 className="font-bold text-green-500 mb-2">{m.tasks.rewards.title}</h4>
                <p className={`text-sm ${muted}`}>{m.tasks.rewards.desc}</p>
              </div>
            </div>
            <p className={`text-sm ${muted}`}>
              {m.tasks.daily} <span className="font-mono font-bold text-green-500">{m.tasks.dailyVal}</span>
            </p>
          </motion.div>

          <motion.div {...fadeUp} className={`lg:col-span-5 ${card} p-8 neon-border`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">{m.tasks.loop.title}</h3>
              <RefreshCw className="w-5 h-5 text-cyan-400 animate-[spin_8s_linear_infinite]" />
            </div>
            <ol className="space-y-4">
              {m.tasks.loop.items.map((item: string, i: number) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-500 dark:text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className={muted}>{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10">
              <div className="text-xs font-mono tracking-widest text-zinc-500 mb-1">{m.tasks.loop.potential}</div>
              <div className="text-2xl font-bold gradient-text">{m.tasks.dailyVal}</div>
            </div>
          </motion.div>
        </section>

        {/* ───────────── NCR ECONOMY ───────────── */}
        <section className="py-24 border-t border-black/5 dark:border-white/5">
          <SectionTitle eyebrow="NCR" title={m.economy.title} sub={m.economy.desc} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {economy.map(({ title, desc, icon: Icon }) => (
              <motion.div {...fadeUp} key={title} className={`${card} p-8`}>
                <Icon className="w-6 h-6 text-green-500 mb-4" />
                <h3 className="font-mono font-bold text-lg mb-2">{title}</h3>
                <p className={muted}>{desc}</p>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => openDoc('whitepaper')}
            className="inline-flex items-center gap-2 text-cyan-500 dark:text-cyan-400 font-semibold hover:gap-3 transition-all"
          >
            {m.economy.cta} <ArrowRight className="w-4 h-4" />
          </button>
        </section>

        {/* ───────────── AI COUNCIL ───────────── */}
        <section className="py-24 border-t border-black/5 dark:border-white/5">
          <SectionTitle eyebrow="Governance" title={m.governance.title} sub={m.governance.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {council.map(({ name, role, desc, icon: Icon, color }) => (
              <motion.div {...fadeUp} key={name} className={`${card} p-6 hover:-translate-y-1 transition-transform`}>
                <div className={`p-3 rounded-xl w-fit mb-5 ${color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">{name}</h3>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">{role}</div>
                <p className={`text-sm ${muted}`}>{desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-black/5 dark:border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="p-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black">
              <Gavel className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{m.governance.human.title}</h3>
              <p className={muted}>{m.governance.human.desc}</p>
            </div>
          </motion.div>
        </section>

        {/* ───────────── TARGET ───────────── */}
        <section className="py-24 border-t border-black/5 dark:border-white/5">
          <SectionTitle title={m.target.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map(({ title, sub, desc, icon: Icon }) => (
              <motion.div {...fadeUp} key={title} className={`${card} p-8`}>
                <Icon className="w-7 h-7 text-cyan-500 dark:text-cyan-400 mb-5" />
                <h3 className="text-2xl font-bold">{title}</h3>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">{sub}</div>
                <p className={muted}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────── ROADMAP ───────────── */}
        <section className="py-24 border-t border-black/5 dark:border-white/5">
          <SectionTitle eyebrow={m.roadmap.title} title={m.roadmap.subtitle} />
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 via-green-400 to-transparent" />
            {phases.map((phase, i) => (
              <motion.div {...fadeUp} key={phase.name} className="relative">
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold mb-6 ${
                    i === 0
                      ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,243,255,0.5)]'
                      : 'bg-zinc-100 dark:bg-[#111] border border-black/10 dark:border-white/15 text-zinc-500'
                  }`}
                >
                  0{i + 1}
                </div>
                <div className={`${card} p-6 ${i === 0 ? 'border-cyan-400/40' : ''}`}>
                  <h3 className="text-xl font-bold mb-4">{phase.name}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item: string) => (
                      <li key={item} className={`text-sm flex gap-2 ${muted}`}>
                        <span className="text-cyan-500">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────── CONSTITUTION & WHITEPAPER ───────────── */}
        <section id="documents" className="py-24 border-t border-black/5 dark:border-white/5 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <motion.div {...fadeUp}>
              <div className="text-xs font-mono tracking-[0.2em] uppercase text-cyan-500 dark:text-cyan-400 mb-3">
                {m.legal.authority} · {m.legal.version} · {m.legal.updated}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {doc === 'constitution' ? m.legal.constTitle : m.legal.wpTitle}
              </h2>
            </motion.div>
            <div className="inline-flex p-1 rounded-xl border border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03]">
              {(['constitution', 'whitepaper'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDoc(d)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors ${
                    doc === d ? 'bg-cyan-500 text-black' : 'text-zinc-500 hover:text-cyan-500'
                  }`}
                >
                  {d === 'constitution' ? <BookOpen className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                  {d === 'constitution' ? m.nav.constitution : m.nav.whitepaper}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {docSections.map((s) => (
              <div key={s.title} className={`${card} p-8`}>
                <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                <p className={`leading-relaxed ${muted}`}>{s.body}</p>
              </div>
            ))}
          </div>
          {doc === 'constitution' && <p className="mt-6 text-xs text-zinc-500">{constitution.disclaimer}</p>}
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section className="py-24 border-t border-black/5 dark:border-white/5 max-w-4xl mx-auto">
          <SectionTitle title={m.faq.title} />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className={`${card} overflow-hidden`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left font-semibold"
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <ChevronDown className={`w-5 h-5 shrink-0 text-cyan-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className={`px-6 pb-6 leading-relaxed ${muted}`}>{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── CTA ───────────── */}
        <section className="pb-24">
          <motion.div {...fadeUp} className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-black/5 dark:border-white/10 text-center">
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-10 italic">{m.footer.claim}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CITIZEN_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all"
              >
                {m.hero.cta.enter}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => openDoc('constitution')}
                className="inline-flex items-center px-8 py-4 rounded-xl border border-black/10 dark:border-white/15 font-semibold hover:border-cyan-400 hover:text-cyan-500 transition-all"
              >
                <BookOpen className="mr-2 w-4 h-4" />
                {m.nav.constitution}
              </button>
            </div>
            <a
              href="#/legal"
              className="mt-8 text-zinc-500 hover:text-cyan-400 text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              {language === 'tr'
                ? 'DAO Hukuki Çerçevesi ve BVI Kılavuzu'
                : language === 'ru'
                  ? 'Юридическая база DAO и руководство по БВО'
                  : 'DAO Legal Framework & BVI Guide'}
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Dao;
