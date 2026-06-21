import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

const OFFICE_PHOTO =
  'https://i.ibb.co.com/vCsyWfKc/result-0.png';

export function About() {
  return (
    <section id="about" className="border-t border-ink-900/8 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Section label */}
        <Reveal>
          <p className="mb-16 font-serif text-xs uppercase tracking-[0.2em] text-ink-400">
            01 — About
          </p>
        </Reveal>

        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">

          {/* Photo column */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={OFFICE_PHOTO}
                    alt="Professional banking environment"
                    className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[420px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900/10 to-transparent" />
                </div>
                {/* Decorative outline */}
                <div className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-navy-900/15" />
              </div>

              {/* Quote pull-out */}
              <blockquote className="mt-8 border-l-2 border-navy-900 pl-5">
                <p className="font-serif text-lg italic leading-relaxed text-navy-900">
                  &ldquo;Building reliable financial systems and supporting organizational
                  growth through effective credit management.&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* Text column */}
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <h2 className="font-serif text-3xl font-light leading-snug tracking-tight text-ink-900 text-balance sm:text-4xl md:text-[2.5rem]">
                {profile.summary}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 text-[15px] leading-relaxed text-ink-600 md:text-base">
                {profile.longSummary}
              </p>
            </Reveal>

            {/* Values */}
            <Reveal delay={230}>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Value
                  title="Precision"
                  body="Every document verified. Every figure checked."
                />
                <Value
                  title="Compliance"
                  body="Regulatory standards upheld at each disbursement."
                />
                <Value
                  title="Efficiency"
                  body="Streamlined workflows that move at banking speed."
                />
              </div>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={310}>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-4">
                <Stat value="2" label="Positions" sub="Banking & BUMN" />
                <Stat value="1 yr+" label="CIMB Niaga" sub="Credit Admin" />
                <Stat value="3 mo" label="PNM Persero" sub="Account Officer" />
                <Stat value="9+" label="Core skills" sub="Finance & ops" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ title, body }: { title: string; body: string }) {
  return (
    <div className="group rounded-xl border border-ink-900/8 bg-sand/50 p-4 transition-colors duration-300 hover:border-navy-200 hover:bg-navy-50/40">
      <p className="text-sm font-semibold text-navy-900">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-500">{body}</p>
    </div>
  );
}

function Stat({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="bg-cream px-5 py-4 transition-colors duration-300 hover:bg-sand/50">
      <p className="font-serif text-3xl font-light text-navy-900">{value}</p>
      <p className="mt-0.5 text-sm font-medium text-ink-800">{label}</p>
      <p className="text-xs text-ink-400">{sub}</p>
    </div>
  );
}
