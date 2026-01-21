// SchoolClubs.jsx
import { useState, useEffect, useRef } from "react";
import { FaCross, FaMicrophoneAlt, FaLeaf, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SchoolClubs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const clubs = [
    {
      title: "SCOM (Christian Fellowship)",
      desc: "SCOM builds Sample and spiritual growth through Bible study, prayer, fellowship, and outreach activities that strengthen Christian values.",
      date: "Weekly Meetings & Events",
      img: "/scom.JPG",
      icon: FaCross,
    },
    {
      title: "CCAPSO (CCAP Church Youth Club)",
      desc: "CCAPSO is a vibrant church-based club for CCAP members, fostering spiritual growth, leadership, community service, and fellowship through youth activities and discussions.",
      date: "Regular Gatherings & Service",
      img: "/ccapo.jpeg",
      icon: FaCross,  // Same icon since it's also church-related
    },
    {
      title: "WILDLIFE (Environmental Club)",
      desc: "WILDLIFE promotes conservation, nature awareness, and environmental stewardship through tree planting, clean-ups, and eco-education.",
      date: "Ongoing Projects & Outings",
      img: "/wildlife.jpg",
      icon: FaLeaf,
    },
    {
      title: "TECH-HUB (Technology & Coding)",
      desc: "TECH-HUB explores coding, robotics, innovation, and digital skills, preparing students for the future with hands-on projects.",
      date: "Weekly Sessions & Challenges",
      img: "/tech.png",
      icon: FaLaptopCode,
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), clubs.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [clubs.length]);

  return (
    <section className="w-full py-12 md:py-20 bg-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Top Icon */}
        <div className="mb-6 md:mb-10">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
            <FaLaptopCode className="text-teal-600 text-3xl md:text-4xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          School Clubs On Campus
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 md:mb-12">
          Join Our Vibrant Clubs: SCOM, CCAPSO, WILDLIFE, and TECH-HUB to Develop Skills, Sample, Leadership, and Creativity.
        </p>

        {/* Cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 md:grid md:grid-cols-4 md:overflow-visible md:snap-none scrollbar-hide"
          >
            {clubs.map((club, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[85%] md:w-full bg-teal-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image - Compact on desktop */}
                <div className="h-48 md:h-48 overflow-hidden">
                  <img
                    src={club.img}
                    alt={club.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-6 text-white">
                  <h3 className="text-xl md:text-xl font-bold mb-3 text-center">
                    {club.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-100 leading-relaxed text-justify">
                    {club.desc}
                  </p>

                  {/* Icon + Date - Only on mobile */}
                  <p className="text-xs md:hidden opacity-90 flex items-center justify-center gap-2 italic mt-4">
                    <club.icon className="text-lg" />
                    {club.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-3 mt-6 md:hidden">
            {clubs.map((_, idx) => (
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