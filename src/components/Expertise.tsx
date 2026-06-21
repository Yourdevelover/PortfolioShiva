import { CheckCircle2 } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import { Reveal } from './Reveal';

const SKILLS_PHOTO =
  'https://i.ibb.co.com/21xHMCP8/861c7e1e-1572-49f8-b23c-77da5db3c998.jpg';

const proficiencies = [
  { label: 'Credit Documentation', pct: 95 },
  { label: 'Regulatory Compliance', pct: 90 },
  { label: 'Financial Data Analysis', pct: 85 },
  { label: 'Microsoft Excel', pct: 88 },
  { label: 'Risk Mitigation', pct: 82 },
  { label: 'Client Communication', pct: 80 },
];

export function Expertise() {
  return (
    <section id="expertise" className="bg-sand/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Section header */}
        <Reveal>
          <p className="mb-5 font-serif text-xs uppercase tracking-[0.2em] text-ink-400">
            03 — Expertise
          </p>
        </Reveal>

        <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
          <Reveal>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-900 md:text-5xl">
              Skills,<br /><span className="font-semibold">in context.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-sm leading-relaxed text-ink-600 md:max-w-sm md:ml-auto">
              Every capability earned through direct banking experience — not a course,
              but a daily responsibility.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-12">

          {/* Proficiency bars + photo */}
          <div className="md:col-span-5 space-y-6">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-cream p-7 shadow-sm">
                <h3 className="font-serif text-base font-medium text-ink-900">Core Proficiencies</h3>
                <p className="mt-1 text-xs text-ink-400">Self-assessed from active role experience.</p>
                <ul className="mt-7 space-y-5">
                  {proficiencies.map((p, i) => (
                    <li key={p.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-medium text-ink-800">{p.label}</span>
                        <span className="text-ink-400">{p.pct}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-900/8">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-navy-700 to-navy-500 transition-all duration-1000"
                          style={{ width: `${p.pct}%`, transitionDelay: `${i * 80}ms` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Photo accent */}
            <Reveal delay={100}>
              <div className="relative overflow-hidden rounded-2xl h-52">
                <img
                  src={SKILLS_PHOTO}
                  alt="Professional financial environment"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-serif text-lg text-cream">Analytical. Precise. Reliable.</p>
                  <p className="mt-1 text-xs text-navy-200">Credit Administration at CIMB Niaga</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Skill group cards */}
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, gi) => (
                <Reveal key={group.title} delay={gi * 90}>
                  <div className="group h-full rounded-2xl border border-ink-900/10 bg-cream p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-md">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-base font-semibold text-navy-900">{group.title}</h3>
                        <p className="mt-0.5 text-xs text-ink-500">{group.description}</p>
                      </div>
                      <span className="font-serif text-2xl font-light text-ink-200">
                        {String(gi + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-navy-600" />
                          <div>
                            <p className="text-sm font-medium text-ink-900">{item.name}</p>
                            <p className="text-xs text-ink-400">{item.context}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}

              {/* Tools dark card */}
              <Reveal delay={270}>
                <div className="group h-full rounded-2xl bg-navy-950 p-6 text-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-950/30 sm:col-span-2">
                  <h3 className="font-serif text-base font-semibold">Daily Tools & Systems</h3>
                  <p className="mt-0.5 text-xs text-ink-300">Operated across both roles.</p>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { tool: 'Microsoft Excel', note: 'Daily reporting' },
                      { tool: 'Banking Core', note: 'Integrated ops' },
                      { tool: 'Collateral Mgmt', note: 'Document control' },
                      { tool: 'Credit System', note: 'Lifecycle tracking' },
                    ].map((t) => (
                      <div
                        key={t.tool}
                        className="rounded-xl border border-ink-700/60 bg-ink-900/50 p-3 transition-colors duration-300 hover:border-navy-600"
                      >
                        <p className="text-xs font-medium text-cream">{t.tool}</p>
                        <p className="mt-0.5 text-[10px] text-ink-400">{t.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
