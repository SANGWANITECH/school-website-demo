// ContactCTA.jsx
export default function ContactCTA() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact1.png')" }}
      />

      {/* Dark overlays */}
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

      {/* Side gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full px-6 pb-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us Now
          </h2>

          <div className="flex flex-col items-center gap-4 mb-6">
            <a
              href="tel:+265995634210"
              className="text-lg md:text-xl font-semibold"
            >
              +265 (0) 995 634 210 | 884 354 562
            </a>

            <span className="opacity-80">Or send us an email</span>

            <a
              href="mailto:Sampleadmissions@school.ac.mw"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold
                         transform transition-transform duration-500"
              style={{ animation: "zoomInOut 2s ease-in-out infinite" }}
            >
              Sampleadmissions@school.ac.mw
            </a>
          </div>
        </div>
      </div>

      {/* Zoom animation keyframes */}
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>
    </section>
  );
}
