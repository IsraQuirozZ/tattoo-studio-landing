const testimonials = [
  {
    name: 'Ana García',
    role: 'Fine Line · Brazo',
    initials: 'AG',
    stars: 5,
    text: 'Tenía mucho miedo de arrepentirme, pero desde la primera consulta me sentí completamente segura. Laura me ayudó a plasmar exactamente lo que tenía en mente. El resultado superó todas mis expectativas. Ya estoy pensando en el siguiente.',
  },
  {
    name: 'Miguel Torres',
    role: 'Blackwork · Pecho',
    initials: 'MT',
    stars: 5,
    text: 'Llevaba años buscando el artista correcto para una pieza grande. Carlos entendió mi visión desde el principio y la ejecutó con una precisión brutal. La limpieza del estudio es impecable. Totalmente recomendable.',
  },
  {
    name: 'Sofía Ruiz',
    role: 'Realismo · Espalda',
    initials: 'SR',
    stars: 5,
    text: 'Pedí un retrato de mi abuela y el resultado me hizo llorar de emoción. Marcos capturó cada detalle con una delicadeza increíble. El seguimiento post-tattoo también fue excelente. No iré a ningún otro estudio en mi vida.',
  },
  {
    name: 'David Martínez',
    role: 'Fine Line · Costillas',
    initials: 'DM',
    stars: 5,
    text: 'El servicio al cliente es de otro nivel. Me explicaron todo el proceso, los cuidados y me dieron confianza total. El tatuaje cicatrizó perfecto y se ve espectacular. Gracias, Ink & Soul.',
  },
  {
    name: 'Carla Sánchez',
    role: 'Blackwork · Muslo',
    initials: 'CS',
    stars: 5,
    text: 'Vine con una idea vaga y salí con la pieza más hermosa que he visto. El equipo tiene una paciencia y una pasión que se nota en cada detalle. El ambiente del estudio es acogedor y profesional a la vez.',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="section-label mb-4 justify-center">Lo que dicen</p>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            CLIENTES QUE
            <br />
            <span className="text-gold-gradient">CONFÍAN EN NOSOTROS</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <blockquote className="mt-4 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(201,168,76,0.1)]">
                <div
                  className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0b0b0b] font-bold text-sm flex-shrink-0"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#f5f5f5] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#c9a84c] text-xs tracking-wide">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center reveal">
          <div className="inline-flex items-center gap-4 px-8 py-5 border border-[rgba(201,168,76,0.25)] bg-[#111111]">
            <div>
              <div
                className="text-4xl font-black text-gold-gradient"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                5.0
              </div>
              <Stars count={5} />
            </div>
            <div className="w-px h-12 bg-[rgba(201,168,76,0.2)]" />
            <div className="text-left">
              <div className="text-[#f5f5f5] font-semibold">Puntuación media</div>
              <div className="text-gray-400 text-sm">Basada en +200 reseñas verificadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
