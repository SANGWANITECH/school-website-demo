// NewsUpdates.jsx
import { useState, useEffect, useRef } from "react";
import { FaNewspaper, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewsUpdates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const news = [
    {
      title: "French Language Coming in 2026",
      desc: "Exciting news! Starting in 2026, Sample Private Secondary School will introduce French as part of our curriculum to give students a global advantage.",
      date: "Announcement: January 2026",
      img: "/french-class.png",
    },
    {
      title: "Class of 2025 Graduation",
      desc: "Our latest graduates shone brightly, marking another successful year with excellent MSCE results and memorable moments shared with family and staff.",
      date: "14 December, 2025",
      img: "/grad3.jpg",
    },
    {
      title: "Alumnus Launches a Tech Company",
      desc: "Proud moment! Former Sample student, now at University of Malawi, co-founded RAMTECH, a tech company offering innovative digital solutions across Malawi.",
      date: "Launched: November 2025",
      img: "/ramtech.jpg",
    },
    {
      title: "2024 Graduation Ceremony",
      desc: "We celebrated the outstanding achievements of our 2024 graduates in a joyful ceremony filled with pride, speeches, and celebration of their hard work.",
      date: "15 December, 2024",
      img: "/grad2.jpg",
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), news.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [news.length]);

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Top Icon */}
        <div className="mb-6 md:mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
            <FaNewspaper className="text-teal-600 text-3xl md:text-4xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          News & Updates
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 md:mb-12">
          We Offer News Updates & Announcements About Our School Sample Secondary School.
        </p>

        {/* News Cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 md:grid md:grid-cols-4 md:overflow-visible md:snap-none scrollbar-hide"
          >
            {news.map((item, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[85%] md:w-full bg-teal-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 text-white">
                  <h3 className="text-xl md:text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-100 mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-xs md:text-sm opacity-90 flex items-center gap-2">
                    <FaCalendarAlt className="text-lg" />
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-3 mt-6 md:hidden">
            {news.map((_, idx) => (
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

      {/* Pulse Animation */}
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