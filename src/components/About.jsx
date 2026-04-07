const stats = [
  { value: '+500', label: 'Clientes satisfechos' },
  { value: '8+', label: 'Años de experiencia' },
  { value: '100%', label: 'Diseño personalizado' },
  { value: '3', label: 'Artistas especializados' },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: image */}
          <div className="reveal-left relative">
            <div
              className="aspect-[4/5] relative overflow-hidden"
              style={{ background: '#1a1a1a' }}
            >
              <img
                src="https://images.unsplash.com/photo-1590246814883-57c511e4f36e?w=800&q=80"
                alt="Tatuador experto trabajando en el estudio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#c9a84c]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#c9a84c]" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-[#c9a84c] text-[#0b0b0b] p-5 hidden sm:block"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <div className="text-4xl font-black leading-none">8+</div>
              <div className="text-xs font-bold tracking-widest mt-1">AÑOS<br/>EXPERIENCIA</div>
            </div>
          </div>

          {/* Right: content */}
          <div className="reveal">
            <p className="section-label mb-4">Sobre el estudio</p>
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tight mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ARTE QUE
              <br />
              <span className="text-gold-gradient">HABLA DE TI</span>
            </h2>
            <div className="section-divider mb-8" />

            <p className="text-gray-400 leading-relaxed mb-4">
              En <strong className="text-[#f5f5f5]">Ink & Soul</strong>, creemos que cada tatuaje es una historia única. Nuestro equipo de artistas certificados combina técnica de alta precisión con sensibilidad artística para darte un resultado que supere tus expectativas.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Desde diseños de fine line delicados hasta piezas de realismo impresionantes, cada trazo está hecho para durar una vida. Higiene certificada, materiales premium y un proceso de asesoramiento completo — porque tu seguridad y satisfacción son nuestra prioridad.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="pl-4 border-l-2 border-[#c9a84c]">
                    <div
                      className="text-3xl font-black text-gold-gradient"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
