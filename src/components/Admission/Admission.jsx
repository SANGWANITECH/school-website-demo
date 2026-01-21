import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";

export default function BecomeStudent() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    age: "",
    classJoining: "",
    sex: "",
    previousSchool: "",
    previousGrade: "",
    agreeTerms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      setError("Please agree to the school's terms and policy to proceed.");
      return;
    }
    setError("");

    const message = `New Student Registration:\n\nFirst Name: ${formData.firstName}\nSurname: ${formData.surname}\nAge: ${formData.age}\nClass Joining: ${formData.classJoining}\nSex: ${formData.sex}\nPrevious School: ${formData.previousSchool}\nPrevious Grade Performance: ${formData.previousGrade}`;

    const whatsappNumber = "265998837985";
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const inputClass =
    "w-full bg-gray-100 border border-teal-600 rounded-lg shadow-md p-4 text-base text-gray-800 focus:outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-700/20 transition";

  return (
    <section className="w-full py-12 md:py-20 bg-gray-200">
      <div className="max-w-md mx-auto px-6 text-center">

        {/* Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
            <FaUserGraduate className="text-teal-600 text-3xl" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Become our Student
        </h2>

        <p className="text-base text-gray-700 mb-10">
          Enter your details below to register at Sample Secondary School.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="firstName"
            placeholder="First Name e.g. Chimewewe"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="text"
            name="surname"
            placeholder="Surname e.g. Banda"
            value={formData.surname}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <div className="grid grid-cols-3 gap-4">
            <select name="age" value={formData.age} onChange={handleChange} className={inputClass} required>
              <option value="">Age</option>
              {[13,14,15,16,17,18,19,20].map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>

            <select name="classJoining" value={formData.classJoining} onChange={handleChange} className={inputClass} required>
              <option value="">Class</option>
              <option>Form 1</option>
              <option>Form 2</option>
              <option>Form 3</option>
              <option>Form 4</option>
            </select>

            <select name="sex" value={formData.sex} onChange={handleChange} className={inputClass} required>
              <option value="">Sex</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <input
            type="text"
            name="previousSchool"
            placeholder="Previous School"
            value={formData.previousSchool}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="text"
            name="previousGrade"
            placeholder="Previous Grade Performance e.g. Good"
            value={formData.previousGrade}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <div className="flex items-center text-gray-700 text-sm">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2 accent-teal-600"
            />
            <label>I agree to the school's terms and policy</label>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-bold py-4 rounded-full shadow-lg hover:bg-teal-500 transition"
          >
            Finish Registration
          </button>
        </form>
      </div>

      <style>{`
        @keyframes slowPulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-slow-pulse {
          animation: slowPulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
