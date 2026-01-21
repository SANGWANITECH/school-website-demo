// MSCEPerformance.jsx
import { FaTrophy, FaChartLine } from "react-icons/fa";

export default function MSCEPerformance() {
  const stats = [
    { value: "89%", label: "Pass Rate" },
    { value: "300 Students", label: "Passed MSCE" },
    { value: "8 Points", label: "Student" },
    { value: "Best Private School", label: "" },
  ];

  return (
    <section className="relative w-full h-auto overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/msce.png')" }}
      />

      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/70" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content - Optimized for mobile fit */}
      <div className="relative z-10 flex flex-col justify-center items-center px-6 py-12 md:py-20">
        {/* Upward Arrow Icon - Smaller on mobile */}
        <div className="mb-4 md:mb-10">
          <div className="w-14 h-14 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse-zoom">
            <FaChartLine className="text-teal-500 text-2xl md:text-3xl" />
          </div>
        </div>

        {/* Title - Smaller on mobile */}
        <h2 className="text-3xl md:text-6xl lg:text-6xl font-bold text-white text-center leading-tight mb-3 md:mb-8">
          Our 2025 MSCE
          <br />
          Performance
        </h2>

        {/* Subtitle - Compact on mobile */}
        <p className="text-base md:text-xl lg:text-2xl text-gray-200 text-center max-w-3xl mb-8 md:mb-16 px-4">
          We Had The Best Performance In Years. For The First Time We Had 8 Points Student.
        </p>

        {/* Stats Cards - 2 on mobile, 4 on desktop, compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl w-full px-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-teal-600/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-xl border border-teal-400/30"
            >
              <div className="animate-pulse-zoom mb-2">
                <FaTrophy className="text-white text-xl md:text-3xl" />
              </div>
              <p className="text-xl md:text-3xl font-bold text-white">
                {stat.value}
              </p>
              {stat.label && (
                <p className="text-xs md:text-base text-gray-100 mt-1">
                  {stat.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Continuous Gentle Zoom Animation */}
      <style jsx>{`
        @keyframes pulseZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .animate-pulse-zoom {
          animation: pulseZoom 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}