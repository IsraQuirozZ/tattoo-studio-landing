import { useState } from 'react';

const categories = ['Todos', 'Fine Line', 'Blackwork', 'Realismo'];

const works = [
  {
    id: 1,
    title: 'Botanical Fine Line',
    style: 'Fine Line',
    img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80',
    artist: 'Laura M.',
  },
  {
    id: 2,
    title: 'Serpiente Geométrica',
    style: 'Blackwork',
    img: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=600&q=80',
    artist: 'Carlos R.',
  },
  {
    id: 3,
    title: 'Retrato Realista',
    style: 'Realismo',
    img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80',
    artist: 'Marcos V.',
  },
  {
    id: 4,
    title: 'Luna & Flores',
    style: 'Fine Line',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
    artist: 'Laura M.',
  },
  {
    id: 5,
    title: 'Mandala Oscuro',
    style: 'Blackwork',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    artist: 'Carlos R.',
  },
  {
    id: 6,
    title: 'Lobo Realista',
    style: 'Realismo',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    artist: 'Marcos V.',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? works : works.filter((w) => w.style === active);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="section-label mb-4 justify-center">Nuestro trabajo</p>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            PORTFOLIO
            <br />
            <span className="text-gold-gradient">DE ARTE</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Cada pieza cuenta una historia diferente. Explora nuestros trabajos y descubre el estilo que habla de ti.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                active === cat
                  ? 'bg-[#c9a84c] text-[#0b0b0b]'
                  : 'border border-[rgba(201,168,76,0.3)] text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c]'
              }`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((work, i) => (
            <div
              key={work.id}
              className="portfolio-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img src={work.img} alt={work.title} loading="lazy" />
              <div className="portfolio-card-overlay">
                <div>
                  <div
                    className="text-xs text-[#c9a84c] tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {work.style}
                  </div>
                  <div
                    className="text-white font-semibold text-lg leading-tight"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {work.title}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">Por {work.artist}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a href="#contacto" className="btn-gold px-8 py-4">
            Quiero un diseño único
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
