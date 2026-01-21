// Leadership.jsx
import { useState, useEffect, useRef } from "react";
import { FaUsers } from "react-icons/fa";

export default function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const leaders = [
    {
      name: "Mr. D Kanyimbo",
      role: "the Director",
      img: "/director.png",
    },
    {
      name: "Mr Kalinga",
      role: "The Head Teacher",
      img: "/head.png",
    },
    {
      name: "Mr Charles Mapanga",
      role: "Senior Teacher",
      img: "/senior-teacher.jpg",
    },
    {
      name: "Miss Rose Chilindeni",
      role: "Teacher",
      img: "/secretary.png",
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), leaders.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [leaders.length]);

  return (
    <section className="w-full py-12 md:py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Top Icon with pulse */}
        <div className="mb-6 md:mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
            <FaUsers className="text-teal-600 text-3xl md:text-4xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Leadership
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto">
          Who Runs The Affairs Of School? Here's The List Of Our Trusted Leaders...
        </p>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 md:grid md:grid-cols-4 md:overflow-visible md:snap-none scrollbar-hide"
          >
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[85%] md:w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Image - Taller on mobile to avoid cutting faces */}
                <div className="h-64 md:h-56 overflow-hidden">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top" // object-top helps keep face in view
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 text-center">
                  <p className="text-base md:text-lg font-semibold text-teal-600 mb-1">
                    {leader.role}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-900">
                    {leader.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex justify-center gap-3 mt-6 md:hidden">
            {leaders.map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  idx === activeIndex ? "bg-teal-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slow Pulse Animation */}
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-slow-pulse {
          animation: slowPulse 4s ease-in-out infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}