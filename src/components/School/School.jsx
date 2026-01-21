// SchoolLife.jsx
import { useState, useEffect, useRef } from "react";
import { FaFutbol, FaVolleyballBall, FaUtensils, FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SchoolLife() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const activities = [
    {
      title: "Sports: Netball",
      desc: "Our girls excel in netball with regular training and inter-school competitions. Teamwork, discipline, and fitness are at the heart of our netball program.",
      date: "Ongoing Training & Matches",
      img: "/netball.jpg",
      icon: FaVolleyballBall,
    },
    {
      title: "Sports: Football",
      desc: "Football is a passion at Sample. Both boys and girls teams compete at district level, building leadership, stamina, and school spirit.",
      date: "Season: March - November",
      img: "/football.jpg",
      icon: FaFutbol,
    },
    {
      title: "Boarding & Nourishment",
      desc: "We provide balanced, nutritious meals three times daily. Our menu includes nsima, vegetables, proteins, and rice to support growth and learning.",
      date: "Daily Healthy Meals",
      img: "/meals.jpg",
      icon: FaUtensils,
    },
    {
      title: "Learning Environment",
      desc: "Modern classrooms, well-equipped science labs, and a serene campus create the ideal atmosphere for focused studying and personal growth.",
      date: "Conducive & Inspiring Spaces",
      img: "/classroom.png",
      icon: FaBookReader,
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), activities.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [activities.length]);

  return (
    <section className="w-full py-12 md:py-20 bg-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Top Icon */}
        <div className="mb-6 md:mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
            <FaFutbol className="text-teal-600 text-3xl md:text-4xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          School Life On Campus
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 md:mb-12">
          We Have Different Clubs And Sports Activities For Everyone.
        </p>

        {/* Cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 md:grid md:grid-cols-4 md:overflow-visible md:snap-none scrollbar-hide"
          >
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[85%] md:w-full bg-teal-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image - Compact on desktop */}
                <div className="h-48 md:h-48 overflow-hidden">
                  <img
                    src={activity.img}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-6 text-white">
                  <h3 className="text-xl md:text-xl font-bold mb-3 text-center">
                    {activity.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-100 leading-relaxed text-justify">
                    {activity.desc}
                  </p>

                  {/* Icon + Date - Only on mobile */}
                  <p className="text-xs md:hidden opacity-90 flex items-center justify-center gap-2 italic mt-4">
                    <activity.icon className="text-lg" />
                    {activity.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-3 mt-6 md:hidden">
            {activities.map((_, idx) => (
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

      {/* Animation */}
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