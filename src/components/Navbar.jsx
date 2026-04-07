import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span
            className="text-gold-gradient font-bold tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem' }}
          >
            INK & SOUL
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-widest uppercase text-gray-400 hover:text-[#c9a84c] transition-colors duration-300"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contacto" className="hidden lg:inline-flex btn-gold text-sm px-5 py-3">
          Reservar Cita
        </a>

        {/* Burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#f5f5f5] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#f5f5f5] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#f5f5f5] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 bg-[#0b0b0b] border-b border-[rgba(201,168,76,0.2)] transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-[#c9a84c] transition-colors duration-300"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="px-6 pt-3 pb-4">
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="btn-gold w-full justify-center text-sm py-3">
              Reservar Cita
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
