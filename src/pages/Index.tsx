import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Github, Linkedin, Download, MapPin, Youtube, Globe, ArrowRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
  },
  {
    company: 'HiddenLayer',
    role: 'Software Engineering Intern',
    period: 'May–Jul 2024',
    location: 'Remote',
    detail: 'Increased Go code coverage 55% → 65%; contributed to AI security platform',
  },
  {
    company: 'Druk Holdings & Investments',
    role: 'AI/ML Intern',
    period: 'Aug 2023',
    location: 'Thimphu, Bhutan',
    detail: 'Built YOLOv5 traffic monitoring model — 87% precision',
  },
  {
    company: 'Kirirom Institute of Technology',
    role: 'Software Intern & Code Camp Facilitator',
    period: 'Apr–Aug 2023',
    location: 'Phnom Penh, Cambodia',
    detail: 'Taught Python to 10+ students; >90% pass rate',
  },
];

const education = [
  {
    school: 'Whitman College',
    degree: 'BA — Computer Science & Economics',
    location: 'Walla Walla, WA',
    period: '2022 – 2026',
    gpa: '3.85',
    current: true,
  },
  {
    school: 'University of Melbourne',
    degree: 'Study Abroad',
    location: 'Melbourne, Australia',
    period: 'Jul – Nov 2024',
  },
];

const skills = [
  'Python', 'Go', 'Java', 'JavaScript', 'SQL', 'Haskell', 'Assembly', 'HTML',
  'REST APIs', 'Machine Learning', 'Computer Vision', 'YOLOv5', 'Data Science',
  'GitHub', 'JIRA', 'TMUX', 'Virtual Machines',
];

const Index = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
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
    <div className="min-h-screen bg-background p-3 md:p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">

        {/* ── ROW 1 ──────────────────────────────────────────── */}

        {/* 1. NAME CARD — cream, 2 cols */}
        <div className="col-span-2 bento-cream rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">
            Portfolio · 2026
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tight">
              Tenzin Uden
            </h1>
            <p className="text-sm md:text-base font-medium opacity-55 mt-2">
              CS & Economics @ Whitman College · Walla Walla, WA
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['From Bhutan 🏔️', 'Builder', 'Open to Work'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-black/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 2. NOW PLAYING CARD — sage */}
        <div className="col-span-1 bento-sage rounded-2xl p-5 flex flex-col justify-between min-h-[200px]">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Now Playing</div>
          <div className="flex flex-col gap-3">
            {/* Vinyl record */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-700 via-stone-900 to-stone-700 flex items-center justify-center animate-spin" style={{ animationDuration: '4s' }}>
                  <div className="w-4 h-4 rounded-full bg-stone-800 border-2 border-stone-600" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm leading-snug truncate">Karselma</div>
                <div className="text-xs opacity-50 truncate">Pema Deki, Dechen Kezang</div>
              </div>
            </div>
            {/* Progress bar */}
            <div className="space-y-1">
              <div className="h-1 rounded-full bg-black/10 overflow-hidden">
                <div className="h-full w-2/5 rounded-full bg-primary opacity-80" />
              </div>
              <div className="flex justify-between text-[10px] opacity-30">
                <span>1:24</span>
                <span>3:47</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] opacity-40">Dzongkha · Bhutan</span>
          </div>
        </div>

        {/* 3. LINKS CARD — dark, 1 col */}
        <div className="col-span-1 bg-card text-card-foreground rounded-2xl p-5 flex flex-col justify-between min-h-[200px]">
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
            className="flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </button>
        </div>

        {/* ── ROW 2 ──────────────────────────────────────────── */}

        {/* 4. PHOTO CARD — 1 col */}
        <div className="col-span-1 rounded-2xl overflow-hidden min-h-[240px]">
          <img src={headshotImage} alt="Tenzin Uden" className="w-full h-full object-cover object-top" />
        </div>

        {/* 5. LIVE TIME CARD — lavender (left of education) */}
        <div className="col-span-1 bento-lavender rounded-2xl p-5 flex flex-col justify-between min-h-[240px]">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${isDay ? 'bg-amber-400' : 'bg-indigo-400'}`} />
            <span className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Live</span>
          </div>
          <div>
            <div className="flex items-center gap-1 opacity-45 text-xs mb-2">
              <MapPin className="h-3 w-3" /> Walla Walla, WA
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight font-mono leading-none">
              {wallaClock}
            </div>
            <div className="text-xs opacity-40 mt-1.5">{wallaDate}</div>
            <div className="text-xs opacity-30 mt-0.5">Pacific Time</div>
          </div>
          <div className="text-3xl">{isDay ? '☀️' : '🌙'}</div>
        </div>

        {/* 6. EDUCATION CARD — dark, 2 cols */}
        <div className="col-span-2 bg-card text-card-foreground rounded-2xl p-5">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-3">Education</div>
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
              <div className="font-bold text-sm">United World College, International School of Asia Karuizawa</div>
              <div className="text-xs opacity-55">High School, International Baccalaureate</div>
              <div className="text-xs opacity-35 mt-0.5 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Nagano, Japan · 2020–2022
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 3 ──────────────────────────────────────────── */}

        {/* 7. LEADERSHIP CARD — cream, 1 col (left) */}
        <div className="col-span-1 bento-cream rounded-2xl p-5 flex flex-col justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Leadership</div>
          <div className="mt-3">
            <div className="font-bold text-sm">Finance Committee</div>
            <div className="text-xs opacity-55 mt-0.5">ASWC · Whitman College</div>
            <div className="text-xs opacity-40 mt-0.5">Jan – May 2024</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-black/10">
            <div className="text-center">
              <div className="text-lg font-black">$800K</div>
              <div className="text-[10px] opacity-45 uppercase tracking-wide">Budget</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-black">1,500+</div>
              <div className="text-[10px] opacity-45 uppercase tracking-wide">Students</div>
            </div>
          </div>
        </div>

        {/* 8. EXPERIENCE CARD — dark, 3 cols (right) */}
        <div className="col-span-3 bg-card text-card-foreground rounded-2xl p-6">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-4">Experience</div>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i} className="flex justify-between items-start pb-3 border-b border-white/10 last:border-0 last:pb-0">
                <div className="flex-1 min-w-0 pr-3">
                  <div className="font-bold text-sm">{exp.company}</div>
                  <div className="text-xs opacity-55">{exp.role}</div>
                  <div className="text-xs opacity-40 mt-0.5">{exp.detail}</div>
                </div>
                <div className="text-xs opacity-35 whitespace-nowrap shrink-0">{exp.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 4 ──────────────────────────────────────────── */}

        {/* 10. JOURNEY STORY CARD — cream, 4 cols */}
        <div className="col-span-4 bento-cream rounded-2xl p-6 flex flex-col justify-between min-h-[240px]">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">The Journey</div>
          <p className="text-sm md:text-base leading-relaxed opacity-85 flex-1 mt-3">
            Grew up in <strong>Bhutan</strong>. High school in a UWC in <strong>Japan</strong>. College in the{' '}
            <strong>US</strong>. A semester in <strong>Australia</strong> and working as a code camp facilitator at Cambodia. Each country handed me
            something different, a new language, a new way of seeing, a new version of myself.
            If there's one thing all that moving around taught me, it's that life is just one long
            lesson, and the classroom keeps changing. 
          </p>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10 mt-4">
            {['🇧🇹 Bhutan', '🇯🇵 Japan', '🇺🇸 USA', '🇦🇺 Australia', '🇰🇭 Cambodia', '🇮🇳 India'].map((c) => (
              <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-black/10 font-medium">{c}</span>
            ))}
          </div>
        </div>

        {/* ── ROW 5 ──────────────────────────────────────────── */}

        {/* 11. SKILLS CARD — cream, 4 cols */}
        <div className="col-span-4 bento-cream rounded-2xl p-6">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-4">Skills & Tools</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-full text-xs font-semibold bg-black/10 hover:bg-black/15 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── ROW 6 — YouTube + Anime left, Map right ──────── */}

        {/* 12. YOUTUBE CARD — stripe accent, 1 col */}
        <div className="col-span-1 bento-stripe rounded-2xl p-5 flex flex-col justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">YouTube</div>
          <div className="flex flex-col gap-2">
            <Youtube className="h-8 w-8 text-white" />
            <div className="font-bold text-white text-base leading-snug">@tenzinla_<br />mountaingoat</div>
            <p className="text-xs text-white/70 leading-relaxed">
              Life at the crossroads of mountains & code. Travel, culture & adventures.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@tenzinla_mountaingoat/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-xs font-semibold text-white"
          >
            <Globe className="h-3.5 w-3.5" /> Visit Channel →
          </a>
        </div>

        {/* 13. ANIME QUIZ CARD — dark, 1 col */}
        <div className="col-span-1 bg-card text-card-foreground rounded-2xl p-5">
          <AnimeQuizCard />
        </div>

        {/* 14. WORLD MAP CARD — cream, 2 cols × 2 rows (right) */}
        <div className="col-span-2 row-span-2 bento-cream rounded-2xl p-5 min-h-[260px]">
          <WorldMapCard />
        </div>

        {/* ── ROW 7 — Contact left, Map continues right ─────── */}

        {/* 15. CONTACT CARD — dark, 2 cols */}
        <div className="col-span-2 bg-card text-card-foreground rounded-2xl p-6">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-4">Get In Touch</div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="mailto:udent@whitman.edu" className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex-1">
              <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold opacity-50">Email</div>
                <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">udent@whitman.edu</div>
              </div>
            </a>
            <a href="https://github.com/Tenzinyo" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex-1">
              <Github className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold opacity-50">GitHub</div>
                <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">github.com/Tenzinyo</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/tenzin-uden" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex-1">
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
    </div>
  );
};

export default Index;
