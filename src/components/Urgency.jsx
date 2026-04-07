export default function Urgency() {
  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden">
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[rgba(201,168,76,0.06)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <div className="reveal">
          {/* Warning icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full border-2 border-[#c9a84c] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                <path d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
              </svg>
            </div>
          </div>

          <p
            className="text-[#c9a84c] text-sm tracking-widest uppercase font-medium mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Plazas limitadas cada mes
          </p>

          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-tight text-[#f5f5f5] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            LA AGENDA SE LLENA RÁPIDO
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Trabajamos con un número limitado de clientes al mes para garantizar la máxima calidad y atención personalizada.{' '}
            <strong className="text-[#f5f5f5]">Reserva con antelación para asegurar tu plaza.</strong>
          </p>

          {/* Slots indicator */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <div className="bg-[#0b0b0b] border border-[rgba(201,168,76,0.3)] px-6 py-4 flex items-center gap-4">
              <div className="flex gap-1.5">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-8 rounded-sm ${i < 6 ? 'bg-[#c9a84c] opacity-40' : 'bg-[#c9a84c]'}`}
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Solo 2 plazas libres</div>
                <div className="text-gray-500 text-xs">Este mes — Abril 2025</div>
              </div>
            </div>
          </div>

          <a href="#contacto" className="btn-gold text-base px-10 py-4">
            Asegurar mi plaza ahora
          </a>

          <p className="text-gray-500 text-xs mt-4">Sin compromiso · Consulta inicial gratuita</p>
        </div>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
    </section>
  );
}
