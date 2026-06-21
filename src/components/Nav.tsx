import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolio';
import { useActiveSection, useScrollProgress } from '../hooks/useScroll';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/85 backdrop-blur-md border-b border-ink-900/8' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => go('top')}
          className="group flex items-center gap-3"
          aria-label="Go to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-900 font-serif text-base font-semibold text-cream transition-transform duration-300 group-hover:-translate-y-0.5">
            H
          </span>
          <span className="hidden font-serif text-[15px] font-medium tracking-tight text-ink-900 sm:block">
            Haryanshiva Putri
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                active === item.id
                  ? 'text-navy-900'
                  : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute inset-x-4 -bottom-px h-px bg-navy-900" />
              )}
            </button>
          ))}
        </nav>

        <button
          className="grid h-9 w-9 place-items-center rounded-lg text-ink-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className="origin-left h-px bg-navy-900/40"
        style={{ transform: `scaleX(${progress})` }}
      />

      {open && (
        <div className="border-t border-ink-900/8 bg-cream md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`py-3 text-left text-sm ${
                  active === item.id ? 'text-navy-900' : 'text-ink-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
