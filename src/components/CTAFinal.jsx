export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 50%, #0b0b0b 100%)',
      }}
    >
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[rgba(201,168,76,0.4)]" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[rgba(201,168,76,0.4)]" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[rgba(201,168,76,0.4)]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[rgba(201,168,76,0.4)]" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[rgba(201,168,76,0.05)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <div className="reveal">
          {/* Tagline */}
          <p
            className="text-[#c9a84c] text-sm tracking-widest uppercase mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            El momento es ahora
          </p>

          <h2
            className="text-[clamp(3rem,7vw,6rem)] font-black leading-none tracking-tight text-[#f5f5f5] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            TU PRÓXIMO
            <br />
            <span className="text-gold-anim">TATUAJE</span>
            <br />
            EMPIEZA AQUÍ
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Da el primer paso. Cuéntanos tu idea y te preparamos un diseño personalizado. Sin compromiso, solo arte.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/34600000000?text=Hola!%20Quiero%20reservar%20una%20cita%20en%20Ink%20%26%20Soul%20Tattoo%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-10 py-5 text-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar ahora por WhatsApp
            </a>
            <a href="mailto:hola@inksoultattoo.es" className="btn-outline text-base px-10 py-5 text-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Enviar email
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 justify-center text-gray-500 text-xs">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Consulta gratuita
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Sin compromiso
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Respuesta en menos de 24h
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Retoque incluido
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
