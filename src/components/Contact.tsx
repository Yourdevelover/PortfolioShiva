import { ArrowUpRight, Linkedin, MapPin, MessageSquare } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

const CONTACT_PHOTO =
  'https://i.ibb.co.com/Qvwjkpgs/result-0.jpg';

const topicsOpen = [
  'Credit Administration',
  'Banking Compliance',
  'Financial Risk Mgmt',
  'Document Verification',
  'Career Opportunities',
  'Professional Network',
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink-950 py-24 text-cream md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="mb-5 font-serif text-xs uppercase tracking-[0.2em] text-ink-300">
              05 — Contact
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
              Let&rsquo;s<br /><span className="font-semibold">connect.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-sm leading-relaxed text-ink-300 md:max-w-xs md:ml-auto">
              Open to conversations about credit administration, banking operations,
              financial compliance, and career opportunities.
            </p>
          </Reveal>
        </div>

        {/* Main content */}
        <div className="grid gap-8 md:grid-cols-12">

          {/* Photo + topics */}
          <div className="md:col-span-5 space-y-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl h-56 md:h-64">
                <img
                  src={CONTACT_PHOTO}
                  alt="Professional team environment"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg text-cream">{profile.name}</p>
                  <p className="mt-0.5 text-xs text-ink-200">{profile.role} · {profile.company}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare size={14} className="text-navy-400" />
                  <p className="text-xs font-medium text-ink-200">Open to discussing</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {topicsOpen.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1 text-xs text-ink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact cards */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <Reveal delay={120}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-ink-800 bg-ink-900/40 p-6 transition-all duration-300 hover:border-navy-700 hover:bg-ink-900/70 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-ink-700 bg-[#0A66C2]/20 text-[#0A66C2]">
                    <Linkedin size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-400">Connect on</p>
                    <p className="mt-0.5 font-medium text-cream">LinkedIn</p>
                    <p className="mt-0.5 text-xs text-ink-300 break-all">{profile.linkedinHandle}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="flex-shrink-0 text-ink-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                />
              </a>
            </Reveal>

            <Reveal delay={190}>
              <div className="flex items-center gap-4 rounded-2xl border border-ink-800 bg-ink-900/40 p-6">
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border border-ink-700 bg-navy-800/40 text-navy-300">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-xs text-ink-400">Based in</p>
                  <p className="mt-0.5 font-medium text-cream">{profile.location}</p>
                  <p className="mt-0.5 text-xs text-ink-400">On-site · Full-time</p>
                </div>
              </div>
            </Reveal>

            {/* CTA block */}
            <Reveal delay={260}>
              <div className="rounded-2xl border border-navy-800/60 bg-gradient-to-br from-navy-900 to-navy-950 p-7">
                <p className="font-serif text-xl font-light text-cream">
                  Interested in working together?
                </p>
                <p className="mt-2 text-sm text-navy-200">
                  Reach out via LinkedIn — I&rsquo;m always open to meaningful
                  professional conversations.
                </p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-navy-950 transition-all duration-300 hover:bg-sand hover:-translate-y-0.5"
                >
                  Send a message
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Footer */}
        <Reveal>
          <footer className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <p>{profile.role} · {profile.company} · Jakarta, Indonesia</p>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
