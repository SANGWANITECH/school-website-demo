// Curriculum.jsx
import { 
    FaBrain,         // Biology
    FaSquareRootAlt, // Maths
    FaGlobe,         // Geography
    FaLaptopCode,    // Computer Studies
    FaTractor,       // Agriculture
    FaUsers,         // Social Studies
    FaHeart,         // Life Skills
    FaBookOpen,      // Chichewa + Top Icon
    FaHistory,       // History
    FaFlask,         // Chemistry
    FaAtom,          // Physics
    FaLanguage       // English
  } from "react-icons/fa";
  
  export default function Curriculum() {
    const subjects = [
      { icon: FaBrain, name: "Biology" },
      { icon: FaSquareRootAlt, name: "Maths" },
      { icon: FaGlobe, name: "Geography" },
      { icon: FaLaptopCode, name: "Computer Studies" },
      { icon: FaTractor, name: "Agriculture" },
      { icon: FaUsers, name: "Social Studies" },
      { icon: FaHeart, name: "Life Skills" },
      { icon: FaBookOpen, name: "Chichewa" },
      { icon: FaHistory, name: "History" },
      { icon: FaFlask, name: "Chemistry" },
      { icon: FaAtom, name: "Physics" },
      { icon: FaLanguage, name: "English" },
    ];
  
    return (
      <section className="w-full py-12 md:py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Top Icon with slow zoom in/out animation */}
          <div className="mb-6 md:mb-10">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-300 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
              <FaBookOpen className="text-teal-600 text-3xl md:text-4xl" />
            </div>
          </div>
  
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Curriculum
          </h2>
  
          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
            Our Curriculum Is Malawian Based, We Use The MSCE Syllabus. We Teach The Following.
          </p>
  
          {/* Subjects Grid - 3 on mobile, 6 on desktop - NO animation on subject icons */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-8 max-w-5xl mx-auto">
            {subjects.map((subject, idx) => {
              const Icon = subject.icon;
              return (
                <div
                  key={idx}
                  className="bg-teal-600 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Icon className="text-2xl md:text-4xl mb-2 md:mb-3" />
                  <p className="text-sm md:text-base font-semibold text-center">
                    {subject.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
  
        {/* Slow Breathing Animation for Top Icon Only */}
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
            animation: slowPulse 2s ease-in-out infinite;
          }
        `}</style>
      </section>
    );
  }