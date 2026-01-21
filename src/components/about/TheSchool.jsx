// TheSchool.jsx
import { useState, useEffect, useRef } from "react";
import { FaSchool } from "react-icons/fa";

export default function TheSchool() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { final: 12, label: "Subjects ", position: "left" },
    { final: 20, label: "Teachers Available", position: "right" },
    { final: 400, label: "Students", position: "left" },
    { final: 4, label: "Form 1 - 4", position: "right" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stats.forEach((stat, idx) => {
            let count = 0;
            const target = stat.final;
            const increment = target / 60;
            const timer = setInterval(() => {
              count += increment;
              if (count >= target) {
                count = target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[idx] = Math.floor(count);
                return newCounts;
              });
            }, 25);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Top Icon with zoom in/out */}
        <div className="mb-6 md:mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
            <FaSchool className="text-teal-600 text-3xl md:text-4xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          The School
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12">
          What Comprises Sample Secondary School
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Teal Bar - Left or Right */}
              <div
                className={`absolute top-0 bottom-0 w-6 bg-teal-600 rounded-l-2xl ${
                  stat.position === "right" ? "right-0 rounded-r-2xl rounded-l-none" : "left-0"
                }`}
              />

              {/* Number + "+" - Smaller and centered */}
              <div className="py-6 md:py-8 text-center">
                <p className="text-4xl md:text-5xl font-bold text-gray-900 inline-flex items-baseline">
                  {counts[idx]}
                  <span className="text-3xl md:text-4xl text-teal-600 ml-1">+</span>
                </p>
              </div>

              {/* Label - Centered, no stretch */}
              <p className="text-base md:text-lg font-semibold text-gray-800 pb-6 md:pb-8 text-center px-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slow Pulse Animation */}
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .animate-slow-pulse {
          animation: slowPulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}