import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { experiences } from '@/data/experiences';

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
              className="rounded-2xl p-6 sm:p-8 border transition-all bg-card border-black/6 hover:border-black/12"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-xl font-black">{exp.company}</h2>
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
