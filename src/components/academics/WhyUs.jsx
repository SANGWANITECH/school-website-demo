// WhyUs.jsx
import { 
    FaStar,          // Top icon - "Why Us?"
    FaTrophy,        // Academic Excellence
    FaUsers,         // Community
    FaBookOpen,      // Curriculum
    FaHeart,         // Values
    FaChartLine      // Holistic Development
  } from "react-icons/fa";
  
  export default function WhyUs() {
    const reasons = [
      {
        icon: FaTrophy,
        title: "Academic Excellence",
        desc: "Our students consistently achieve outstanding MSCE results, with a 98% pass rate and top rankings in Malawi.",
      },
      {
        icon: FaUsers,
        title: "Supportive Community",
        desc: "A nurturing environment with dedicated teachers and staff who care about each student's personal and academic growth.",
      },
      {
        icon: FaBookOpen,
        title: "Comprehensive Curriculum",
        desc: "Malawian-based MSCE syllabus enhanced with modern subjects like Computer Studies and French starting 2026.",
      },
      {
        icon: FaHeart,
        title: "Strong Values",
        desc: "We instill discipline, hard work, creativity, and punctuality to shape responsible leaders for tomorrow.",
      },
      {
        icon: FaChartLine,
        title: "Holistic Development",
        desc: "Beyond academics, we offer sports, clubs, nutritious meals, and a safe campus for well-rounded success.",
      },
    ];
  
    return (
      <section className="w-full py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
         
  
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 md:mb-8">
            Why Sample?
          </h2>
  
          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-12 md:mb-16">
            Discover why Sample Private Secondary School is the ideal choice for your child's education and future success.
          </p>
  
          {/* Reasons Grid - With staggered zoom-in transition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group animate-zoomInDelay"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  {/* Teal Accent Bar - Grows on hover */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-teal-600 group-hover:w-full transition-all duration-300" />
  
                  {/* Content */}
                  <div className="p-6 md:p-8 text-center">
                    {/* Icon with pulse */}
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <Icon className="text-teal-600 text-4xl md:text-5xl animate-slow-pulse" />
                    </div>
  
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
  
                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  
        {/* Animations */}
        <style jsx>{`
          @keyframes slowPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
          .animate-slow-pulse {
            animation: slowPulse 4s ease-in-out infinite;
          }
  
          @keyframes zoomIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-zoomInDelay {
            opacity: 0;
            animation: zoomIn 0.8s ease-out forwards;
          }
        `}</style>
      </section>
    );
  }