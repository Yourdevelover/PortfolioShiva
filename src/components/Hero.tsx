import { ArrowDown, Linkedin, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

const PHOTO =
  'https://i.ibb.co.com/mFtFqBWp/result-0.jpg';

export function Hero() {
  return (
    <section id="top" className="grain relative min-h-screen overflow-hidden bg-cream">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -right-48 top-0 h-[44rem] w-[44rem] rounded-full bg-navy-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sand/80 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-6 pb-16 pt-28 md:grid-cols-2 md:gap-16 md:px-10 md:pb-24 md:pt-32">

        {/* ── Left: text */}
        <div>
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink-600 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Currently at CIMB Niaga
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-4 font-serif text-sm italic text-ink-500">
              {profile.role} · {profile.company}
            </p>
          </Reveal>

          <Reveal delay={130}>
            <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tightest text-ink-900 sm:text-6xl lg:text-7xl">
              {profile.name.split(' ')[0]}
              <br />
              <span className="font-semibold">{profile.name.split(' ').slice(1).join(' ')}</span>
            </h1>
          </Reveal>

          <Reveal delay={210}>
            <p className="mt-7 max-w-md font-serif text-lg font-light italic leading-relaxed text-navy-800/80 md:text-xl">
              &ldquo;{profile.tagline}&rdquo;
            </p>
          </Reveal>

          <Reveal delay={290}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-navy-700" />
                {profile.location}
              </span>
              <span className="h-3 w-px bg-ink-300" />
              <span>{profile.pronouns}</span>
            </div>
          </Reveal>

          <Reveal delay={370}>
            <div className="mt-10 flex items-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/20"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-medium text-ink-700 transition-all duration-300 hover:border-navy-900 hover:text-navy-900"
              >
                <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                Explore
              </button>
            </div>
          </Reveal>
        </div>

        {/* ── Right: portrait + floating cards */}
        <Reveal delay={180} className="relative flex justify-center md:justify-end">
          {/* portrait */}
          <div className="relative w-72 sm:w-80 md:w-full md:max-w-[380px]">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-900/15">
              <img
                src={PHOTO}
                alt="Professional portrait — Haryanshiva Putri"
                className="h-[480px] w-full object-cover object-top transition-transform duration-700 hover:scale-105 md:h-[540px]"
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>

            {/* decorative frame offset */}
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] border border-ink-900/10" />

            {/* Floating card — role */}
            <div className="absolute -left-6 bottom-10 rounded-2xl border border-ink-900/8 bg-cream/90 px-4 py-3 shadow-xl shadow-ink-900/10 backdrop-blur-md sm:-left-10">
              <p className="text-xs font-medium text-ink-900">Credit Administrator</p>
              <p className="mt-0.5 text-xs text-navy-700">CIMB Niaga · 2025–Present</p>
            </div>

            {/* Floating card — years */}
            <div className="absolute -right-4 top-10 rounded-2xl border border-ink-900/8 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6">
              <p className="font-serif text-3xl font-light text-cream">2+</p>
              <p className="text-xs text-navy-200">Roles in finance</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span className="block h-10 w-px origin-top animate-[grow_2s_ease-in-out_infinite] bg-gradient-to-b from-navy-900/40 to-transparent" />
      </div>
    </section>
  );
}
