import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Dell Technologies',
    role: 'Software Engineering Intern',
    period: 'May 2025 – Aug 2025',
    location: 'Austin, TX',
    upcoming: true,
    description:
      "Joining Dell's PowerScale team to work on storage infrastructure software. Automating cryptographic inventory on OneFS — the distributed file system that powers Dell's enterprise NAS solutions — and building audit-compliant reporting tools.",
    highlights: [
      'Automating cryptographic inventory across PowerScale OneFS',
      'Building audit-compliant reporting pipelines',
      "Working within Dell's enterprise storage engineering team",
    ],
    tags: ['Go', 'Systems', 'Cryptography', 'Storage'],
  },
  {
    company: 'HiddenLayer',
    role: 'Software Engineering Intern',
    period: 'May 2024 – Jul 2024',
    location: 'Remote',
    description:
      'HiddenLayer is an AI security company protecting machine learning models from adversarial attacks and theft. Worked on the backend platform, focused on improving code quality and test coverage in Go.',
    highlights: [
      'Increased Go code coverage from 55% to 65% across the backend',
      'Improved backend development practices and testing discipline',
      'Contributed to the AI security platform used by enterprise clients',
    ],
    tags: ['Go', 'AI Security', 'Backend', 'Testing'],
  },
  {
    company: 'Druk Holdings & Investments',
    role: 'AI / ML Intern',
    period: 'Aug 2023',
    location: 'Thimphu, Bhutan',
    description:
      "Druk Holdings is Bhutan's largest state-owned enterprise. As an AI/ML intern, I worked on a computer vision project to monitor and analyze urban traffic — using the streets I grew up on as the dataset.",
    highlights: [
      'Co-developed a YOLOv5 traffic monitoring model achieving 87% precision',
      'Implemented computer vision pipelines for urban planning insights',
      'Collaborated with an international development team across time zones',
    ],
    tags: ['Python', 'YOLOv5', 'Computer Vision', 'Machine Learning'],
  },
  {
    company: 'Kirirom Institute of Technology',
    role: 'Software Intern & Code Camp Facilitator',
    period: 'Apr 2023 – Aug 2023',
    location: 'Phnom Penh, Cambodia',
    description:
      "KIT is a Japanese-Cambodian university focused on practical software education. I wore two hats: software intern and code camp facilitator for beginner programmers. Teaching was the more memorable half.",
    highlights: [
      'Facilitated Python code camps for 10+ beginner programmers',
      'Led 5 hands-on project builds from idea to working prototype',
      'Achieved >90% student pass rate across all sessions',
      'Developed curriculum tailored for students with zero prior experience',
    ],
    tags: ['Python', 'Teaching', 'Curriculum Design', 'Mentorship'],
  },
];

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-black/6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back
          </button>
          <div className="h-4 w-px bg-white/20" />
          <span className="text-xs font-semibold opacity-40 uppercase tracking-widest">
            Work Experience
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Page heading */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
            Where I've worked
          </h1>
          <p className="text-base opacity-50 max-w-xl leading-relaxed">
            Four internships across four countries — each one a different domain, a different
            timezone, and a different way of thinking about software.
          </p>
        </div>

        {/* Experience cards */}
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                exp.upcoming
                  ? 'bg-primary/8 border-primary/30'
                  : 'bg-card border-black/6 hover:border-black/12'
              }`}
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-xl font-black">{exp.company}</h2>
                    {exp.upcoming && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold uppercase tracking-wide border border-primary/30">
                        Upcoming
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold opacity-55">{exp.role}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 text-xs opacity-40 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm opacity-65 leading-relaxed mb-5">{exp.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="opacity-70">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/6">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/5 border border-black/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer nudge */}
        <div className="mt-12 pt-8 border-t border-black/6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm opacity-35">Want to know more or work together?</p>
          <a
            href="mailto:udent@whitman.edu"
            className="flex items-center gap-2 text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity group"
          >
            udent@whitman.edu
            <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
