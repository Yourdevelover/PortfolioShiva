import { ArrowUpRight, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { Reveal } from './Reveal';

const CIMB_PHOTO =
  'https://i.ibb.co.com/qLYR6cCP/result-0.png';
const PNM_PHOTO =
  'https://i.ibb.co.com/4Z05CSqP/result-0-1.jpg';

const photos: Record<string, string> = {
  cimb: CIMB_PHOTO,
  pnm: PNM_PHOTO,
};

const companyColors: Record<string, string> = {
  cimb: 'bg-red-600',
  pnm: 'bg-blue-500',
};

const companyInitials: Record<string, string> = {
  cimb: 'CIMB',
  pnm: 'PNM',
};

export function Experience() {
  return (
    <section id="experience" className="bg-ink-950 py-24 text-cream md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-ink-300">
              02 — Experience
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
              A path through<br />
              <span className="font-medium">Indonesian finance.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm leading-relaxed text-ink-300 md:text-right md:max-w-xs md:ml-auto">
              From a state-owned enterprise empowering MSMEs to a commercial bank
              safeguarding the entire credit lifecycle.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-navy-700 via-ink-700 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 140}>
              <div className="group relative rounded-2xl border border-ink-800/60 bg-ink-900/40 p-1 transition-all duration-500 hover:border-navy-700/60 hover:bg-ink-900/70 md:ml-0">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-8 hidden h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-navy-700 bg-ink-950 md:flex">
                  {exp.present && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  )}
                </div>

                <div className="grid gap-0 overflow-hidden rounded-xl md:grid-cols-12">
                  {/* Photo panel */}
                  <div className="relative md:col-span-4 md:row-span-1">
                    <div className="relative h-44 overflow-hidden md:h-full md:min-h-[220px]">
                      <img
                        src={photos[exp.id]}
                        alt={exp.company}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-900/60 md:bg-gradient-to-b md:from-transparent md:to-ink-900/30" />
                      {exp.present && (
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-2.5 py-1 text-xs font-medium text-cream backdrop-blur-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Present
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="md:col-span-8 p-6 md:p-8">
                    {/* Company badge + meta */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl text-[11px] font-bold text-white ${companyColors[exp.id]}`}>
                          {companyInitials[exp.id]}
                        </span>
                        <div>
                          <h3 className="font-serif text-xl font-semibold leading-tight text-cream md:text-2xl">
                            {exp.role}
                          </h3>
                          <p className="mt-0.5 text-sm text-navy-300">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-ink-200">{exp.period}</p>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-ink-400">
                          <MapPin size={11} />
                          {exp.location.split('·')[0].trim()}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-ink-200">
                      {exp.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-navy-400" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1 text-xs text-ink-100 transition-colors duration-300 group-hover:border-navy-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href="https://www.linkedin.com/in/haryanshiva-putri-093339417"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-2 rounded-full border border-ink-700 px-5 py-2.5 text-sm text-navy-300 transition-all duration-300 hover:border-navy-500 hover:text-cream"
          >
            Full history on LinkedIn
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
