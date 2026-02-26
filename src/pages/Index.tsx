import { Mail, Github, Linkedin, Download, MapPin, Youtube, Globe } from 'lucide-react';
import AnimeQuizCard from '@/components/AnimeQuizCard';
import WorldMapCard from '@/components/WorldMapCard';

const headshotImage = '/headshot.jpg';

const experiences = [
  { company: 'Dell Technologies', role: 'Software Engineering Intern', period: 'May–Aug 2025', detail: 'Automated cryptographic inventory on PowerScale OneFS' },
  { company: 'HiddenLayer', role: 'Software Engineering Intern', period: 'May–Jul 2024', detail: 'Increased Go code coverage 55% → 65%' },
  { company: 'Druk Holdings & Investments', role: 'AI/ML Intern', period: 'Aug 2023', detail: 'YOLOv5 traffic monitoring model — 87% precision' },
  { company: 'Kirirom Institute of Technology', role: 'Software Intern & Code Camp Facilitator', period: 'Apr–Aug 2023', detail: 'Taught Python to 10+ students; >90% pass rate' },
];

const skills = [
  'Python', 'Go', 'Java', 'JavaScript', 'SQL', 'Haskell',
  'Assembly', 'REST APIs', 'GitHub', 'JIRA', 'TMUX',
  'Machine Learning', 'Data Science', 'Computer Vision', 'YOLOv5',
];

const stats = [
  { val: '3.85', label: 'GPA' },
  { val: '4', label: 'Countries' },
  { val: '3+', label: 'Internships' },
  { val: '10+', label: 'Students Taught' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-3 md:p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">

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
              CS & Economics @ Whitman College
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Software Engineering', 'AI / ML', 'Open to Work'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-black/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 2. STRIPE CARD — decorative, 1 col */}
        <div className="col-span-1 bento-stripe rounded-2xl min-h-[200px]" />

        {/* 3. LINKS CARD — dark, 1 col */}
        <div className="col-span-1 bg-card rounded-2xl p-5 flex flex-col justify-between min-h-[200px]">
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

        {/* 4. PHOTO CARD — 1 col */}
        <div className="col-span-1 rounded-2xl overflow-hidden min-h-[220px]">
          <img src={headshotImage} alt="Tenzin Uden" className="w-full h-full object-cover object-top" />
        </div>

        {/* 5. ABOUT CARD — cream, 2 cols */}
        <div className="col-span-2 bento-cream rounded-2xl p-6 flex flex-col justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-2">About</div>
          <p className="text-sm md:text-base leading-relaxed opacity-80 flex-1">
            CS & Economics student with international experience across the{' '}
            <strong>U.S., Australia, Bhutan, and Cambodia</strong>. Passionate about building scalable
            software, exploring AI/ML, and sharing knowledge through teaching and mentorship.
          </p>
          <div className="flex gap-6 mt-4 pt-4 border-t border-black/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black">{s.val}</div>
                <div className="text-[10px] font-medium opacity-50 uppercase tracking-wide mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. ANIME QUIZ CARD — dark, 1 col */}
        <div className="col-span-1 bg-card rounded-2xl p-5 min-h-[240px]">
          <AnimeQuizCard />
        </div>

        {/* 7. SKILLS CARD — cream, 2 cols */}
        <div className="col-span-2 bento-cream rounded-2xl p-6">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-4">Skills & Tools</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-full text-xs font-semibold bg-black/10 hover:bg-black/15 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 8. EXPERIENCE CARD — dark, 2 cols */}
        <div className="col-span-2 bg-card rounded-2xl p-6">
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

        {/* 9. EDUCATION CARD — dark, 1 col */}
        <div className="col-span-1 bg-card rounded-2xl p-5">
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
          </div>
        </div>

        {/* 10. LEADERSHIP CARD — cream, 1 col */}
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

        {/* 11. CONTACT CARD — dark, 2 cols */}
        <div className="col-span-2 bg-card rounded-2xl p-6">
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

        {/* 12. WORLD MAP CARD — cream, 2 cols */}
        <div className="col-span-2 bento-cream rounded-2xl p-5 min-h-[260px]">
          <WorldMapCard />
        </div>

        {/* 13. JOURNEY CARD — dark, 1 col */}
        <div className="col-span-1 bg-card rounded-2xl p-5 flex flex-col gap-3">
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Her Journey</div>
          <p className="text-xs leading-relaxed opacity-75 flex-1">
            From the monasteries of <strong>Bhutan</strong> to coding camps in <strong>Cambodia</strong>,
            classrooms in <strong>Australia</strong>, and rice fields in <strong>Japan</strong> — Tenzin's
            path has never been a straight line. Each country taught her something no textbook could.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
            {['🇧🇹 Bhutan', '🇰🇭 Cambodia', '🇦🇺 Australia', '🇯🇵 Japan', '🇮🇳 India', '🇺🇸 USA'].map((c) => (
              <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-white/8 opacity-80">{c}</span>
            ))}
          </div>
        </div>

        {/* 14. YOUTUBE CARD — stripe accent, 1 col */}
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

      </div>
    </div>
  );
};

export default Index;
