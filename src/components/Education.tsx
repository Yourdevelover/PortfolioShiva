import { BookOpen, GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';
import { Reveal } from './Reveal';

const EDU_PHOTO =
  'https://i.ibb.co.com/mCgs6Zgy/result-0.jpg';

const courses = [
  'Business Strategy & Management',
  'Financial Accounting Principles',
  'Organizational Behaviour',
  'Marketing Management',
  'Business Communication',
  'Corporate Law & Compliance',
];

export function Education() {
  return (
    <section id="education" className="border-t border-ink-900/8 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        <Reveal>
          <p className="mb-16 font-serif text-xs uppercase tracking-[0.2em] text-ink-400">
            04 — Education
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-12 md:gap-14">

          {/* Photo + caption */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={EDU_PHOTO}
                  alt="University campus — Universitas Terbuka"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-serif text-xl text-cream">{education.institution}</p>
                  <p className="mt-1 text-xs text-navy-100">{education.period}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Details */}
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-navy-900 text-cream">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <p className="text-sm text-ink-500">{education.period}</p>
                  <h3 className="mt-1.5 font-serif text-2xl font-semibold text-ink-900 md:text-3xl">
                    {education.institution}
                  </h3>
                  <p className="mt-1.5 text-ink-600">{education.field}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 text-sm leading-relaxed text-ink-600">
                Pursuing a degree in Business Administration and Management through
                Universitas Terbuka — Indonesia&rsquo;s premier open and distance
                learning university. The program complements her practical banking
                career with foundational and advanced business theory.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-8 rounded-2xl border border-ink-900/10 bg-sand/40 p-6">
                <div className="flex items-center gap-2.5 mb-5">
                  <BookOpen size={16} className="text-navy-800" />
                  <h4 className="text-sm font-semibold text-ink-800">Program Focus Areas</h4>
                </div>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {courses.map((c) => (
                    <div
                      key={c}
                      className="rounded-lg border border-ink-900/8 bg-cream px-3 py-2.5 text-xs font-medium text-ink-700 transition-colors hover:border-navy-200 hover:text-navy-900"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
