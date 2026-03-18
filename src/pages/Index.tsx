import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Download, MapPin, Youtube, Globe, PenLine, X, Calendar } from 'lucide-react';
import AnimeQuizCard from '@/components/AnimeQuizCard';
import WorldMapCard from '@/components/WorldMapCard';
import { experiences, type Experience } from '@/data/experiences';
import { translations, type Lang } from '@/data/translations';

const headshotImage = '/headshot.jpg';

const funFacts = [
  { emoji: '⚽', actionWord: 'GOAAAL!', titleKey: 'fact1Title' as const, bodyKey: 'fact1' as const },
  { emoji: '🗣️', actionWord: 'ZAP!',     titleKey: 'fact3Title' as const, bodyKey: 'fact3' as const },
];

const skills = [
  'Python', 'Go', 'Java', 'JavaScript', 'SQL', 'Haskell', 'Assembly', 'HTML',
  'REST APIs', 'Machine Learning', 'Computer Vision', 'YOLOv5', 'Data Science',
  'GitHub', 'JIRA', 'TMUX', 'Virtual Machines',
];

const journeyPanels = [
  { flag: '🇧🇹', country: 'Bhutan',    bg: 'hsl(40 70% 90%)',   action: 'ORIGIN!',     num: 1, captionKey: 'bhutanCaption'    as const },
  { flag: '🇯🇵', country: 'Japan',     bg: 'hsl(355 60% 92%)',  action: 'LEVEL UP!',   num: 2, captionKey: 'japanCaption'     as const },
  { flag: '🇺🇸', country: 'USA',       bg: 'hsl(210 60% 90%)',  action: 'ADVENTURE!',  num: 3, captionKey: 'usaCaption'       as const },
  { flag: '🇦🇺', country: 'Australia', bg: 'hsl(30 60% 90%)',   action: 'EXPLORE!',    num: 4, captionKey: 'australiaCaption' as const },
  { flag: '🇰🇭', country: 'Cambodia',  bg: 'hsl(150 40% 88%)',  action: 'TEACH!',      num: 5, captionKey: 'cambodiaCaption'  as const },
];

const langMeta: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  { code: 'ne', label: 'नेपाली', flag: '🇳🇵' },
  { code: 'bo', label: 'རྫོང་ཁ', flag: '🇧🇹' },
];

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [lang, setLang] = useState<Lang>('en');
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const t = (key: keyof typeof translations.en) =>
    (translations[lang] as typeof translations.en)[key] ?? translations.en[key];

  // Apply lang class to body for font switching
  useEffect(() => {
    document.body.className = document.body.className
      .replace(/lang-\w+/g, '')
      .trim();
    if (lang !== 'en') document.body.classList.add(`lang-${lang}`);
  }, [lang]);

  const openDrawer = (exp: Experience) => {
    setSelectedExp(exp);
    requestAnimationFrame(() => requestAnimationFrame(() => setDrawerVisible(true)));
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    setTimeout(() => setSelectedExp(null), 380);
  };

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Comic panel scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    const panels = gridRef.current?.querySelectorAll('.comic-reveal');
    panels?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const wallaClock = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
  }).format(time);

  const wallaDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'long', month: 'short', day: 'numeric',
  }).format(time);

  const wallaHour = parseInt(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles', hour: 'numeric', hour12: false,
    }).format(time)
  );
  const isDay = wallaHour >= 6 && wallaHour < 20;

  return (
    <div className="min-h-screen bg-background p-3 md:p-5">
      {/* Comic page header + language switcher */}
      <div className="max-w-7xl mx-auto mb-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="comic-page-header flex-1">{t('pageHeader')}</div>
        <div className="flex items-center gap-1 shrink-0">
          {langMeta.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-all flex items-center gap-1 ${
                lang === code
                  ? 'bg-black/80 text-white border-black/80 scale-105'
                  : 'bg-black/8 border-black/20 hover:bg-black/15'
              }`}
              title={label}
            >
              <span>{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div ref={gridRef} className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">

        {/* ── ROW 1 ──────────────────────────────────────────── */}

        {/* 1. NAME CARD */}
        <div
          className="col-span-2 bento-cream rounded-xl p-6 flex flex-col justify-between min-h-[200px] comic-panel comic-reveal"
          style={{ animationDelay: '0.0s' }}
        >
          <div className="panel-badge">P.01</div>
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">
            {t('portfolio')}
          </div>
          <div>
            <h1 className="font-comic text-5xl sm:text-6xl lg:text-7xl leading-none" style={{ color: 'hsl(215 45% 12%)' }}>
              Tenzin Uden
            </h1>
            <div className="speech-bubble mt-3">
              {t('subtitle')}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {([t('tagBhutan'), t('tagBuilder'), t('tagOpenToWork')] as string[]).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-bold bg-black/10 border border-black/20 hover:bg-black/15 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 2. NOW PLAYING CARD */}
        <div
          className="col-span-1 bento-sage rounded-xl p-5 flex flex-col justify-between min-h-[200px] comic-panel comic-reveal"
          style={{ animationDelay: '0.08s' }}
        >
          <div className="panel-badge">P.02</div>
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">{t('nowPlaying')}</div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-700 via-stone-900 to-stone-700 flex items-center justify-center animate-spin"
                  style={{ animationDuration: '4s' }}
                >
                  <div className="w-4 h-4 rounded-full bg-stone-800 border-2 border-stone-600" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm leading-snug truncate">Karselma</div>
                <div className="text-xs opacity-50 truncate">Pema Deki, Dechen Kezang</div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 rounded-full bg-black/10 overflow-hidden border border-black/20">
                <div className="h-full w-2/5 rounded-full bg-primary opacity-80" />
              </div>
              <div className="flex justify-between text-[10px] opacity-30">
                <span>1:24</span>
                <span>3:47</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] opacity-40">Dzongkha · Bhutan</span>
            <span className="action-burst ml-auto">♪ VIBE!</span>
          </div>
        </div>

        {/* 3. LINKS CARD */}
        <div
          className="col-span-1 bg-card text-card-foreground rounded-xl p-5 flex flex-col justify-between min-h-[200px] comic-panel comic-reveal"
          style={{ animationDelay: '0.16s' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.2)' }}>P.03</div>
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">{t('connect')}</div>
          <div className="flex flex-col gap-3">
            <a href="mailto:udent@whitman.edu" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
              <Mail className="h-4 w-4 shrink-0" /> {t('email')}
            </a>
            <a href="https://github.com/Tenzinyo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
              <Github className="h-4 w-4 shrink-0" /> {t('github')}
            </a>
            <a href="https://www.linkedin.com/in/tenzin-uden" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
              <Linkedin className="h-4 w-4 shrink-0" /> {t('linkedin')}
            </a>
            <a href="https://whitmanwire.com/staff_name/tenzin-uden/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
              <PenLine className="h-4 w-4 shrink-0" /> {t('writing')}
            </a>
          </div>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-bold hover:opacity-90 transition-opacity border border-white/20"
          >
            <Download className="h-3.5 w-3.5" /> {t('resume')}
          </button>
        </div>

        {/* ── ROW 2 ──────────────────────────────────────────── */}

        {/* 4. PHOTO CARD */}
        <div
          className="col-span-1 rounded-xl overflow-hidden min-h-[240px] comic-panel comic-reveal"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.3)', zIndex: 10 }}>P.04</div>
          <img src={headshotImage} alt="Tenzin Uden" className="w-full h-full object-cover object-top" />
        </div>

        {/* 5. LIVE TIME CARD */}
        <div
          className="col-span-1 bento-lavender rounded-xl p-5 flex flex-col justify-between min-h-[240px] comic-panel comic-reveal"
          style={{ animationDelay: '0.12s' }}
        >
          <div className="panel-badge">P.05</div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${isDay ? 'bg-amber-400' : 'bg-indigo-400'}`} />
            <span className="text-[10px] font-semibold uppercase tracking-widest opacity-40">{t('live')}</span>
          </div>
          <div>
            <div className="flex items-center gap-1 opacity-45 text-xs mb-2">
              <MapPin className="h-3 w-3" /> Walla Walla, WA
            </div>
            <div className="font-comic text-3xl sm:text-4xl leading-none tracking-wide">
              {wallaClock}
            </div>
            <div className="text-xs opacity-40 mt-1.5">{wallaDate}</div>
            <div className="text-xs opacity-30 mt-0.5">Pacific Time</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-3xl">{isDay ? '☀️' : '🌙'}</div>
            <span className="action-burst">{isDay ? 'SUNNY!' : 'NIGHT OWL!'}</span>
          </div>
        </div>

        {/* 6. EDUCATION CARD */}
        <div
          className="col-span-2 bg-card text-card-foreground rounded-xl p-5 comic-panel comic-reveal"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.2)' }}>P.06</div>
          <div className="font-comic text-lg opacity-60 mb-3 tracking-widest">{t('education')}</div>
          <div className="space-y-4">
            <div>
              <div className="font-bold text-sm">Whitman College</div>
              <div className="text-xs opacity-55">BA CS & Economics</div>
              <div className="text-xs opacity-35 mt-0.5 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Walla Walla, WA · 2022–2026
              </div>
              <div className="text-xs font-semibold opacity-55 mt-1">GPA 3.85</div>
            </div>
            <div className="pt-3 border-t border-white/10">
              <div className="font-bold text-sm">Univ. of Melbourne</div>
              <div className="text-xs opacity-55">Study Abroad</div>
              <div className="text-xs opacity-35 mt-0.5 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Melbourne, AU · 2024
              </div>
            </div>
            <div className="pt-3 border-t border-white/10">
              <div className="font-bold text-sm">United World College, ISAK Japan</div>
              <div className="text-xs opacity-55">High School, International Baccalaureate</div>
              <div className="text-xs opacity-35 mt-0.5 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Nagano, Japan · 2020–2022
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 3 ──────────────────────────────────────────── */}

        {/* 7. LEADERSHIP CARD */}
        <div
          className="col-span-1 bento-cream rounded-xl p-5 flex flex-col justify-between comic-panel comic-reveal"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="panel-badge">P.07</div>
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">{t('leadership')}</div>
          <div className="mt-3">
            <div className="font-bold text-sm">Finance Committee</div>
            <div className="text-xs opacity-55 mt-0.5">ASWC · Whitman College</div>
            <div className="text-xs opacity-40 mt-0.5">Jan – May 2024</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-black/10">
            <div className="text-center">
              <div className="font-comic text-2xl">$800K</div>
              <div className="text-[10px] opacity-45 uppercase tracking-wide">{t('budget')}</div>
            </div>
            <div className="text-center">
              <div className="font-comic text-2xl">1,500+</div>
              <div className="text-[10px] opacity-45 uppercase tracking-wide">{t('students')}</div>
            </div>
          </div>
        </div>

        {/* 8. EXPERIENCE CARD */}
        <div
          className="col-span-3 bg-card text-card-foreground rounded-xl p-6 comic-panel comic-reveal"
          style={{ animationDelay: '0.12s' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.2)' }}>P.08</div>
          <div className="font-comic text-lg opacity-60 mb-1 tracking-widest">{t('experience')}</div>
          {/* Tap hint callout */}
          <div className="flex items-center gap-2 mb-3 px-2 py-1.5 rounded-lg bg-white/10 border border-white/15">
            <span className="text-base">👆</span>
            <span className="text-[10px] font-semibold opacity-60 leading-tight">{t('tapHint')}</span>
          </div>
          <div className="space-y-2">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => openDrawer(exp)}
                className="w-full text-left flex justify-between items-start pb-2 border-b border-white/10 last:border-0 last:pb-0 group rounded-lg px-2 py-1.5 hover:bg-white/8 active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="flex-1 min-w-0 pr-3">
                  <div className="font-bold text-sm group-hover:opacity-100 transition-opacity">{exp.company}</div>
                  <div className="text-xs opacity-55">{exp.role}</div>
                  <div className="text-xs opacity-40 mt-0.5">{exp.detail}</div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <div className="text-xs opacity-35 whitespace-nowrap">{exp.shortPeriod}</div>
                  <span className="action-burst opacity-0 group-hover:opacity-100 transition-opacity">{exp.action}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── ROW 4 — JOURNEY COMIC STRIP (3 cols) + FUN FACTS (1 col, spans rows 4+5) ── */}

        <div
          className="col-span-3 bento-cream rounded-xl overflow-hidden comic-panel comic-reveal"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="panel-badge">P.09</div>
          {/* Strip header */}
          <div className="px-5 pt-4 pb-3 border-b-2 border-black/20 flex items-center justify-between">
            <div className="font-comic text-2xl tracking-widest" style={{ color: 'hsl(215 45% 12%)' }}>
              {t('theJourney')}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">
              {t('journeyIssue')}
            </div>
          </div>

          {/* Comic strip panels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {journeyPanels.map((panel) => (
              <div
                key={panel.num}
                className="journey-panel flex flex-col gap-2 p-4 min-h-[140px]"
                style={{ background: panel.bg }}
              >
                <div className="text-[10px] font-bold opacity-30 mb-1">#{panel.num}</div>
                <div className="flex items-start justify-between">
                  <div className="text-4xl leading-none">{panel.flag}</div>
                  <div className="panel-action">{panel.action}</div>
                </div>
                <div className="font-comic text-xl leading-tight" style={{ color: 'hsl(215 45% 12%)' }}>
                  {panel.country}
                </div>
                <div className="text-xs opacity-65 leading-snug mt-auto">
                  {t(panel.captionKey)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FUN FACTS — col-span-1 row-span-2 */}
        <div
          className="col-span-1 row-span-2 rounded-xl overflow-hidden comic-panel comic-reveal flex flex-col"
          style={{ animationDelay: '0.15s', background: 'hsl(215 32% 22%)' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.2)' }}>P.10</div>
          <div className="px-4 pt-4 pb-3 border-b-2 border-white/20">
            <div className="font-comic text-xl tracking-widest text-white">
              {t('funFacts')}
            </div>
          </div>
          <div className="flex flex-col divide-y-2 divide-white/10 flex-1">
            {funFacts.map((fact, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl leading-none">{fact.emoji}</div>
                  <div className="panel-action">{fact.actionWord}</div>
                </div>
                <div className="font-comic text-base leading-tight text-white">
                  {t(fact.titleKey)}
                </div>
                <div className="text-[11px] text-white/65 leading-snug">{t(fact.bodyKey)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 5 — SKILLS (3 cols, fun facts continues) ────── */}

        <div
          className="col-span-3 bento-cream rounded-xl p-6 comic-panel comic-reveal"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="panel-badge">P.11</div>
          <div className="font-comic text-lg opacity-60 mb-4 tracking-widest">{t('skillsTools')}</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag px-3 py-1 rounded-full text-xs font-semibold bg-black/10 border border-black/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── ROW 6 — YouTube + Anime left, Map right ──────── */}

        {/* 12. YOUTUBE CARD */}
        <div
          className="col-span-1 bento-stripe rounded-xl p-5 flex flex-col justify-between comic-panel comic-reveal"
          style={{ animationDelay: '0.0s' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.25)' }}>P.11</div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">YouTube</div>
          <div className="flex flex-col gap-2">
            <Youtube className="h-8 w-8 text-white" />
            <div className="font-comic text-xl text-white leading-snug tracking-wide">
              @tenzinla_<br />mountaingoat
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {t('ytCaption')}
            </p>
          </div>
          <a
            href="https://www.youtube.com/@tenzinla_mountaingoat/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-xs font-bold text-white border border-white/30"
          >
            <Globe className="h-3.5 w-3.5" /> {t('visitChannel')}
          </a>
        </div>

        {/* 13. ANIME QUIZ CARD */}
        <div
          className="col-span-1 bg-card text-card-foreground rounded-xl p-5 comic-panel comic-reveal"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.2)' }}>P.12</div>
          <AnimeQuizCard />
        </div>

        {/* 14. WORLD MAP CARD */}
        <div
          className="col-span-2 row-span-2 bento-cream rounded-xl p-5 min-h-[260px] comic-panel comic-reveal"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="panel-badge">P.13</div>
          <WorldMapCard />
        </div>

        {/* ── ROW 7 — Contact ───────────────────────────────── */}

        {/* 15. CONTACT CARD */}
        <div
          className="col-span-2 bg-card text-card-foreground rounded-xl p-6 comic-panel comic-reveal"
          style={{ animationDelay: '0.12s' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.2)' }}>P.14</div>
          <div className="font-comic text-lg opacity-60 mb-4 tracking-widest">{t('getInTouch')}</div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:udent@whitman.edu"
              className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex-1"
            >
              <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold opacity-50">Email</div>
                <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">udent@whitman.edu</div>
              </div>
            </a>
            <a
              href="https://github.com/Tenzinyo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex-1"
            >
              <Github className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold opacity-50">GitHub</div>
                <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">github.com/Tenzinyo</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/tenzin-uden"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex-1"
            >
              <Linkedin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold opacity-50">LinkedIn</div>
                <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">tenzin-uden</div>
              </div>
            </a>
          </div>
          <p className="text-xs opacity-35 mt-4">{t('openRemote')}</p>
        </div>

      </div>

      {/* Comic page footer */}
      <div className="comic-page-header mt-5">{t('pageFooter')}</div>

      {/* ── EXPERIENCE DETAIL DRAWER ───────────────────────── */}
      {selectedExp && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            style={{
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(3px)',
              opacity: drawerVisible ? 1 : 0,
              transition: 'opacity 0.25s ease',
            }}
            onClick={closeDrawer}
          />

          {/* Drawer panel */}
          <div
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl overflow-hidden"
            style={{
              background: selectedExp.accentColor,
              border: '3px solid #1a1a1a',
              borderBottom: 'none',
              boxShadow: '0 -5px 0 #1a1a1a',
              transform: drawerVisible ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.38s cubic-bezier(0.34, 1.28, 0.64, 1)',
              maxHeight: '82vh',
              overflowY: 'auto',
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-black/20" />
            </div>

            <div className="px-5 pb-8 pt-2">
              {/* Header row */}
              <div
                className="drawer-item flex items-start justify-between mb-4"
                style={{ animationDelay: '0.05s' }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="panel-action"
                      style={{ position: 'static', transform: 'rotate(-4deg)', animation: 'none' }}
                    >
                      {selectedExp.action}
                    </span>
                  </div>
                  <h2
                    className="font-comic leading-none"
                    style={{ fontSize: '2rem', color: 'hsl(215 45% 12%)' }}
                  >
                    {selectedExp.company}
                  </h2>
                  <p className="text-sm font-semibold opacity-60 mt-0.5">{selectedExp.role}</p>
                </div>
                <button
                  onClick={closeDrawer}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors border border-black/20 mt-1"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Meta row */}
              <div
                className="drawer-item flex flex-wrap gap-3 text-xs opacity-55 mb-4"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {selectedExp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {selectedExp.location}
                </span>
              </div>

              {/* Divider */}
              <div
                className="drawer-item border-t-2 border-black/15 mb-4"
                style={{ animationDelay: '0.13s' }}
              />

              {/* Description */}
              <p
                className="drawer-item text-sm leading-relaxed opacity-80 mb-5"
                style={{ animationDelay: '0.16s' }}
              >
                {selectedExp.description}
              </p>

              {/* Highlights label */}
              <div
                className="drawer-item font-comic text-base tracking-widest opacity-50 mb-2"
                style={{ animationDelay: '0.2s', color: 'hsl(215 45% 12%)' }}
              >
                {t('highlights')}
              </div>

              {/* Highlight items */}
              <ul className="space-y-2 mb-5">
                {selectedExp.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="highlight-item flex items-start gap-3 text-sm"
                    style={{ animationDelay: `${0.24 + j * 0.07}s` }}
                  >
                    <span className="shrink-0 mt-1 font-comic text-xs opacity-50">✦</span>
                    <span className="opacity-75 leading-snug">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-black/10">
                {selectedExp.tags.map((tag, j) => (
                  <span
                    key={tag}
                    className="tag-item px-3 py-1 rounded-full text-xs font-bold bg-black/10 border border-black/20"
                    style={{ animationDelay: `${0.36 + j * 0.05}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
