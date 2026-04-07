import { useState } from 'react';

const faqs = [
  {
    q: '¿Cuánto tarda en cicatrizar un tatuaje?',
    a: 'La cicatrización superficial ocurre en 2–4 semanas. La cicatrización completa de la piel puede tardar entre 2 y 6 meses, dependiendo del tamaño, la zona y tu tipo de piel. Te acompañamos en todo el proceso con guía personalizada.',
  },
  {
    q: '¿El proceso duele mucho?',
    a: 'El nivel de dolor varía según la zona y cada persona. Las costillas, codos y pecho suelen ser más sensibles. Para zonas delicadas, podemos usar crema anestésica tópica. La mayoría de nuestros clientes lo describen como "tolerable" con buena preparación.',
  },
  {
    q: '¿Puedo traer mi propio diseño?',
    a: '¡Por supuesto! Puedes traer referencias, bocetos o incluso una idea verbal. Lo adaptamos a un diseño que funcione perfectamente como tatuaje. También podemos crear el concepto desde cero si prefieres.',
  },
  {
    q: '¿Cuánto cuesta un tatuaje?',
    a: 'El precio depende del tamaño, complejidad y horas de trabajo. Piezas pequeñas desde 80€, medianas desde 200€ y piezas grandes por sesión/hora. Consulta gratuita para obtener tu presupuesto personalizado sin compromiso.',
  },
  {
    q: '¿Es seguro si tengo la piel sensible?',
    a: 'Sí. Usamos únicamente pigmentos certificados, hipoalergénicos y libres de metales pesados. Si tienes alguna condición de piel, te recomendamos mencionarlo en la consulta previa para valorar juntos la mejor opción.',
  },
  {
    q: '¿Hacéis retoques?',
    a: 'Sí. Todos nuestros tatuajes incluyen una sesión de retoque gratuita a las 6–8 semanas (una vez cicatrizado completamente). Queremos que el resultado sea perfecto y duradero.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        className="w-full flex items-center justify-between py-5 gap-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="text-base font-medium text-[#f5f5f5] group-hover:text-[#c9a84c] transition-colors"
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.02em' }}
        >
          {q}
        </span>
        <span
          className={`text-[#c9a84c] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </span>
      </button>
      <div
        className="faq-answer"
        style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0, paddingBottom: open ? '1.25rem' : '0' }}
      >
        <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#0b0b0b]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="section-label mb-4 justify-center">Tienes dudas</p>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            PREGUNTAS
            <br />
            <span className="text-gold-gradient">FRECUENTES</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="reveal">
          {faqs.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center reveal">
          <p className="text-gray-400 mb-4">¿No encuentras lo que buscas?</p>
          <a
            href="https://wa.me/34600000000?text=Hola!%20Tengo%20una%20pregunta%20sobre%20vuestros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
