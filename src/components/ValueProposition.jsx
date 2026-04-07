const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Diseño 100% personalizado',
    desc: 'Cada tatuaje es único como tú. No usamos plantillas: tu idea se convierte en un diseño exclusivo creado desde cero.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Higiene certificada',
    desc: 'Material estéril, agujas de un solo uso y protocolos de bioseguridad estrictos. Tu salud es lo primero.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Asesoramiento experto',
    desc: 'Nuestros artistas te guían en cada decisión — desde el estilo hasta la colocación perfecta para tu piel y anatomía.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: 'Resultados de alta calidad',
    desc: 'Usamos los mejores pigmentos del mercado y técnicas avanzadas para que tu tatuaje se mantenga impresionante con el tiempo.',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 lg:py-32 bg-[#0b0b0b] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[rgba(201,168,76,0.04)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-end">
          <div className="reveal">
            <p className="section-label mb-4">Por qué elegirnos</p>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              LO QUE NOS
              <br />
              <span className="text-gold-gradient">HACE DIFERENTES</span>
            </h2>
          </div>
          <div className="reveal">
            <p className="text-gray-400 leading-relaxed">
              No todos los estudios son iguales. En Ink & Soul, cada detalle importa: desde la primera consulta hasta el seguimiento post-tattoo. Así creamos experiencias que dejan huella.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="reveal group p-8 border border-[rgba(201,168,76,0.15)] hover:border-[rgba(201,168,76,0.4)] transition-all duration-400 hover:-translate-y-1 bg-[#111111]"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                {v.icon}
              </div>
              <h3
                className="text-lg font-semibold text-[#f5f5f5] mb-3 leading-snug"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.02em' }}
              >
                {v.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
