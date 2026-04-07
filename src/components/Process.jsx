const steps = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    desc: 'Contáctanos con tu concepto, referencias visuales y la zona del cuerpo. Sin filtros — queremos escuchar todo lo que imaginas.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Diseñamos contigo',
    desc: 'Tu artista asignado crea bocetos personalizados. Revisamos juntos hasta que el diseño sea exactamente lo que soñabas.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Sesión profesional',
    desc: 'Llegamos el día y nos ponemos manos a la obra. Ambiente relajado, música de tu elección y todo el cuidado que mereces.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Seguimiento post-tattoo',
    desc: 'Te acompañamos en la cicatrización con guía personalizada y revisión gratuita a las 4 semanas. Tu inversión está protegida.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      {/* BG pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(201,168,76,0.5) 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(201,168,76,0.5) 0px, transparent 1px, transparent 60px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4 justify-center">Sin misterios</p>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            EL PROCESO
            <br />
            <span className="text-gold-gradient">ES SIMPLE</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Sabemos que dar el primer paso puede dar vértigo. Por eso lo hacemos tan fácil como esto:
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line — desktop */}
          <div className="absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-[rgba(201,168,76,0.6)] to-[rgba(201,168,76,0.1)] hidden lg:block" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal flex flex-col items-center text-center relative"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Step number circle */}
              <div className="step-number mb-6 relative z-10">
                <span>{step.number}</span>
              </div>

              {/* Icon */}
              <div className="text-[#c9a84c] mb-4">{step.icon}</div>

              <h3
                className="text-lg font-semibold text-[#f5f5f5] mb-3"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.02em' }}
              >
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <a href="#contacto" className="btn-gold px-8 py-4 text-base">
            Empieza ahora — Es gratis la consulta
          </a>
        </div>
      </div>
    </section>
  );
}
