// src/components/Results/ExamResults.jsx
import { FaFilePdf, FaEye, FaDownload, FaTrophy } from "react-icons/fa";

const resultsData = [
  {
    year: 2025,
    highlight: "92% Pass Rate!",
    items: [
      {
        title: "MSCE Results – 2025",
        description: "Official MSCE results for Sample Secondary School.",
        file: "/results/msce-2025.pdf",
        type: "msce",
      },
      {
        title: "JCE Results – 2025",
        description: "Junior Certificate of Education results.",
        file: "/results/jce-2025.pdf",
        type: "jce",
      },
      {
        title: "University Selection – 2025",
        description: "Students selected to public and private universities across Malawi.",
        file: "/results/university-2025.pdf",
        type: "university",
      },
    ],
  },
  {
    year: 2024,
    highlight: "95% Pass Rate",
    items: [
      {
        title: "MSCE Results – 2024",
        description: "Official MANEB MSCE results.",
        file: "/results/msce-2024.pdf",
        type: "msce",
      },
      {
        title: "JCE Results – 2024",
        description: "Junior Certificate of Education results.",
        file: "/results/jce-2024.pdf",
        type: "jce",
      },
      {
        title: "University Selection – 2024",
        description: "University placements for our graduates.",
        file: "/results/university-2024.pdf",
        type: "university",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title: "MSCE Results – 2023",
        description: "Official MANEB MSCE results.",
        file: "/results/msce-2023.pdf",
        type: "msce",
      },
      {
        title: "JCE Results – 2023",
        description: "Junior Certificate of Education results.",
        file: "/results/jce-2023.pdf",
        type: "jce",
      },
      {
        title: "University Selection – 2023",
        description: "Students selected to public and private universities across Malawi.",
        file: "/results/university-2025.pdf",
        type: "university",
      },
      
    ],
  },
];

export default function ExamResults() {
  const getTypeStyles = (type) => {
    switch (type) {
      case "msce":
        return {
          bg: "bg-blue-50",
          iconColor: "text-blue-600",
          border: "border-blue-200",
        };
      case "jce":
        return {
          bg: "bg-green-50",
          iconColor: "text-green-600",
          border: "border-green-200",
        };
      case "university":
        return {
          bg: "bg-purple-50",
          iconColor: "text-purple-600",
          border: "border-purple-200",
        };
      default:
        return {
          bg: "bg-gray-50",
          iconColor: "text-teal-600",
          border: "border-teal-200",
        };
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Header Section */}
        <div className="text-center mb-16">
        
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Academic Excellence & Examination Results
          </h1>
          
        </div>

        {/* Results by Year */}
        <div className="space-y-12">
          {resultsData.map((yearBlock) => (
            <div
              key={yearBlock.year}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-teal-600 text-white py-6 px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {yearBlock.year} Results
                </h2>
                {yearBlock.highlight && (
                  <p className="text-xl mt-3 flex items-center justify-center gap-3">
                    {yearBlock.highlight}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 justify-items-center">
                {yearBlock.items.map((item, index) => {
                  const styles = getTypeStyles(item.type);
                  return (
                    <div
                      key={index}
                      className={`${styles.bg} ${styles.border} border rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow max-w-md w-full`}
                    >
                      <FaFilePdf className={`text-5xl ${styles.iconColor} mx-auto mb-4`} />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {item.description}
                      </p>
                      <div className="flex justify-center gap-4">
  <a
    href={item.file}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition text-sm md:text-base"
  >
    <FaEye className="text-lg" />
    View Online
  </a>
  <a
    href={item.file}
    download  // This forces download — keep it only for the Download button
    className="flex items-center gap-2 bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition text-sm md:text-base"
  >
    <FaDownload className="text-lg" />
    Download
  </a>
</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}