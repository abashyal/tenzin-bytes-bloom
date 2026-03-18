import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Download, MapPin, Youtube, Globe } from 'lucide-react';
import AnimeQuizCard from '@/components/AnimeQuizCard';
import WorldMapCard from '@/components/WorldMapCard';

const headshotImage = '/headshot.jpg';

const experiences = [
  {
    company: 'Dell Technologies',
    role: 'Software Engineering Intern',
    period: 'May–Aug 2025',
    location: 'Austin, TX',
    detail: 'Automated cryptographic inventory on PowerScale OneFS',
    upcoming: true,
    action: 'INCOMING!',
  },
  {
    company: 'HiddenLayer',
    role: 'Software Engineering Intern',
    period: 'May–Jul 2024',
    location: 'Remote',
    detail: 'Increased Go code coverage 55% → 65%; contributed to AI security platform',
    action: 'LEVEL UP!',
  },
  {
    company: 'Druk Holdings & Investments',
    role: 'AI/ML Intern',
    period: 'Aug 2023',
    location: 'Thimphu, Bhutan',
    detail: 'Built YOLOv5 traffic monitoring model — 87% precision',
    action: 'ZAP!',
  },
  {
    company: 'Kirirom Institute of Technology',
    role: 'Software Intern & Code Camp Facilitator',
    period: 'Apr–Aug 2023',
    location: 'Phnom Penh, Cambodia',
    detail: 'Taught Python to 10+ students; >90% pass rate',
    action: 'POW!',
  },
];

const skills = [
  'Python', 'Go', 'Java', 'JavaScript', 'SQL', 'Haskell', 'Assembly', 'HTML',
  'REST APIs', 'Machine Learning', 'Computer Vision', 'YOLOv5', 'Data Science',
  'GitHub', 'JIRA', 'TMUX', 'Virtual Machines',
];

const journeyPanels = [
  {
    flag: '🇧🇹',
    country: 'Bhutan',
    caption: 'Born in the mountains of the Himalayas…',
    bg: 'hsl(40 70% 90%)',
    action: 'ORIGIN!',
    num: 1,
  },
  {
    flag: '🇯🇵',
    country: 'Japan',
    caption: 'High school in the Alps of Nagano. A new world unlocked.',
    bg: 'hsl(355 60% 92%)',
    action: 'LEVEL UP!',
    num: 2,
  },
  {
    flag: '🇺🇸',
    country: 'USA',
    caption: 'Across the Pacific — CS & Economics at Whitman College.',
    bg: 'hsl(210 60% 90%)',
    action: 'ADVENTURE!',
    num: 3,
  },
  {
    flag: '🇦🇺',
    country: 'Australia',
    caption: 'A semester down under at the Univ. of Melbourne.',
    bg: 'hsl(30 60% 90%)',
    action: 'EXPLORE!',
    num: 4,
  },
  {
    flag: '🇰🇭',
    country: 'Cambodia',
    caption: 'Teaching Python in Phnom Penh. The classroom keeps changing.',
    bg: 'hsl(150 40% 88%)',
    action: 'TEACH!',
    num: 5,
  },
];

const Index = () => {
  const [time, setTime] = useState(new Date());
  const gridRef = useRef<HTMLDivElement>(null);

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
      {/* Comic page header */}
      <div className="comic-page-header mb-3">✦ Tenzin Uden · Issue No. 1 · The Portfolio Arc ✦</div>

      <div ref={gridRef} className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">

        {/* ── ROW 1 ──────────────────────────────────────────── */}

        {/* 1. NAME CARD */}
        <div
          className="col-span-2 bento-cream rounded-xl p-6 flex flex-col justify-between min-h-[200px] comic-panel comic-reveal"
          style={{ animationDelay: '0.0s' }}
        >
          <div className="panel-badge">P.01</div>
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">
            Portfolio · 2026
          </div>
          <div>
            <h1 className="font-comic text-5xl sm:text-6xl lg:text-7xl leading-none" style={{ color: 'hsl(215 45% 12%)' }}>
              Tenzin Uden
            </h1>
            <div className="speech-bubble mt-3">
              CS &amp; Economics @ Whitman College · Walla Walla, WA
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {['From Bhutan 🏔️', 'Builder', 'Open to Work'].map((tag) => (
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
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Now Playing</div>
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
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Connect</div>
          <div className="flex flex-col gap-3">
            <a href="mailto:udent@whitman.edu" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
              <Mail className="h-4 w-4 shrink-0" /> Email
            </a>
            <a href="https://github.com/Tenzinyo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
              <Github className="h-4 w-4 shrink-0" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/tenzin-uden" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
              <Linkedin className="h-4 w-4 shrink-0" /> LinkedIn
            </a>
          </div>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-bold hover:opacity-90 transition-opacity border border-white/20"
          >
            <Download className="h-3.5 w-3.5" /> Resume
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
            <span className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Live</span>
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
          <div className="font-comic text-lg opacity-60 mb-3 tracking-widest">Education</div>
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
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Leadership</div>
          <div className="mt-3">
            <div className="font-bold text-sm">Finance Committee</div>
            <div className="text-xs opacity-55 mt-0.5">ASWC · Whitman College</div>
            <div className="text-xs opacity-40 mt-0.5">Jan – May 2024</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-black/10">
            <div className="text-center">
              <div className="font-comic text-2xl">$800K</div>
              <div className="text-[10px] opacity-45 uppercase tracking-wide">Budget</div>
            </div>
            <div className="text-center">
              <div className="font-comic text-2xl">1,500+</div>
              <div className="text-[10px] opacity-45 uppercase tracking-wide">Students</div>
            </div>
          </div>
        </div>

        {/* 8. EXPERIENCE CARD */}
        <div
          className="col-span-3 bg-card text-card-foreground rounded-xl p-6 comic-panel comic-reveal"
          style={{ animationDelay: '0.12s' }}
        >
          <div className="panel-badge" style={{ color: 'rgba(255,255,255,0.2)' }}>P.08</div>
          <div className="font-comic text-lg opacity-60 mb-4 tracking-widest">Experience</div>
          <div className="space-y-3">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="flex justify-between items-start pb-3 border-b border-white/10 last:border-0 last:pb-0 group"
              >
                <div className="flex-1 min-w-0 pr-3">
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-sm">{exp.company}</div>
                    {exp.upcoming && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 bg-primary/20 text-primary border border-primary/30 rounded uppercase tracking-wide">
                        upcoming
                      </span>
                    )}
                  </div>
                  <div className="text-xs opacity-55">{exp.role}</div>
                  <div className="text-xs opacity-40 mt-0.5">{exp.detail}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-xs opacity-35 whitespace-nowrap shrink-0">{exp.period}</div>
                  <span className="action-burst opacity-0 group-hover:opacity-100 transition-opacity">{exp.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 4 — JOURNEY COMIC STRIP ─────────────────────── */}

        <div
          className="col-span-4 bento-cream rounded-xl overflow-hidden comic-panel comic-reveal"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="panel-badge">P.09</div>
          {/* Strip header */}
          <div className="px-5 pt-4 pb-3 border-b-2 border-black/20 flex items-center justify-between">
            <div className="font-comic text-2xl tracking-widest" style={{ color: 'hsl(215 45% 12%)' }}>
              The Journey
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">
              Origin Story · Issue #1
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
                {/* Panel number */}
                <div className="text-[10px] font-bold opacity-30 mb-1">#{panel.num}</div>
                {/* Flag + action */}
                <div className="flex items-start justify-between">
                  <div className="text-4xl leading-none">{panel.flag}</div>
                  <div className="panel-action">{panel.action}</div>
                </div>
                {/* Country */}
                <div className="font-comic text-xl leading-tight" style={{ color: 'hsl(215 45% 12%)' }}>
                  {panel.country}
                </div>
                {/* Caption */}
                <div className="text-xs opacity-65 leading-snug mt-auto">{panel.caption}</div>
              </div>
            ))}
          </div>

          {/* Footer strip */}
          <div className="px-5 py-3 border-t-2 border-black/10 flex flex-wrap gap-2">
            {['🇧🇹 Bhutan', '🇯🇵 Japan', '🇺🇸 USA', '🇦🇺 Australia', '🇰🇭 Cambodia', '🇮🇳 India'].map((c) => (
              <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-black/10 border border-black/15 font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── ROW 5 — SKILLS ──────────────────────────────────── */}

        <div
          className="col-span-4 bento-cream rounded-xl p-6 comic-panel comic-reveal"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="panel-badge">P.10</div>
          <div className="font-comic text-lg opacity-60 mb-4 tracking-widest">Skills &amp; Tools</div>
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
              Life at the crossroads of mountains &amp; code. Travel, culture &amp; adventures.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@tenzinla_mountaingoat/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-xs font-bold text-white border border-white/30"
          >
            <Globe className="h-3.5 w-3.5" /> Visit Channel →
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
          <div className="font-comic text-lg opacity-60 mb-4 tracking-widest">Get In Touch</div>
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
          <p className="text-xs opacity-35 mt-4">Based in Walla Walla, WA · Open to remote opportunities worldwide</p>
        </div>

      </div>

      {/* Comic page footer */}
      <div className="comic-page-header mt-5">✦ To Be Continued… · Next Issue: The Build Arc ✦</div>
    </div>
  );
};

export default Index;
