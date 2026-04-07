export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(201,168,76,0.3)] to-transparent ml-10 hidden lg:block" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(201,168,76,0.3)] to-transparent mr-10 hidden lg:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 text-center lg:text-left">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="section-label mb-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animation: 'fadeInUp 0.8s 0.2s ease forwards' }}>
            <span>Tattoo Studio Premium · Madrid</span>
          </div>

          {/* Main headline */}
          <h1
            className="text-[clamp(3rem,8vw,7rem)] font-black leading-none tracking-tight mb-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              opacity: 0,
              animation: 'fadeInUp 0.8s 0.4s ease forwards',
            }}
          >
            CONVIERTE TU
            <br />
            <span className="text-gold-anim">IDEA EN UNA</span>
            <br />
            OBRA PERMANENTE
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg lg:text-xl text-gray-300 mt-6 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              opacity: 0,
              animation: 'fadeInUp 0.8s 0.6s ease forwards',
            }}
          >
            Tatuajes personalizados con artistas especializados.
            No es solo tinta — <span className="text-[#c9a84c] font-medium">es tu identidad</span>.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            style={{ opacity: 0, animation: 'fadeInUp 0.8s 0.8s ease forwards' }}
          >
            <a href="#contacto" className="btn-gold text-base px-8 py-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 12h-5v5h-2v-5H5v-2h5V5h2v5h5v2z"/>
              </svg>
              Reservar cita ahora
            </a>
            <a href="#portfolio" className="btn-outline text-base px-8 py-4">
              Ver portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Trust badge */}
          <div
            className="mt-12 flex items-center gap-6 justify-center lg:justify-start flex-wrap"
            style={{ opacity: 0, animation: 'fadeInUp 0.8s 1s ease forwards' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c9a84c">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-[#f5f5f5] font-semibold text-sm">+500 clientes satisfechos</span>
            </div>
            <div className="w-px h-5 bg-[rgba(201,168,76,0.3)] hidden sm:block" />
            <span className="text-gray-400 text-sm">8+ años de experiencia</span>
            <div className="w-px h-5 bg-[rgba(201,168,76,0.3)] hidden sm:block" />
            <span className="text-gray-400 text-sm">Artistas certificados</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-gray-500 tracking-widest uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent" />
      </div>
    </section>
  );
}
