// OurValues.jsx
import { FaCheck } from "react-icons/fa";

export default function OurValues() {
  const values = [
    { name: "Discipline", position: "left" },
    { name: "Punctuality", position: "right" },
    { name: "Hard Work", position: "left" },
    { name: "Creativity", position: "right" },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gray-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Top Icon with zoom in/out */}
        <div className="mb-6 md:mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
            <FaCheck className="text-teal-600 text-3xl md:text-4xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12">
          Our Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-2xl mx-auto">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Teal Bar - Left or Right */}
              <div
                className={`absolute top-0 bottom-0 w-6 bg-teal-600 rounded-l-2xl ${
                  value.position === "right" ? "right-0 rounded-r-2xl rounded-l-none" : "left-0"
                }`}
              />

              {/* Check Icon with zoom in/out */}
              <div className="flex justify-center py-6 md:py-8">
                <FaCheck className="text-3xl md:text-4xl text-gray-800 animate-slow-pulse" />
              </div>

              {/* Value Name */}
              <p className="text-xl md:text-2xl font-bold text-gray-900 pb-6 md:pb-8">
                {value.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slow Zoom In/Out Animation */}
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
        }
        .animate-slow-pulse {
          animation: slowPulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}