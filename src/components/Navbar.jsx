// Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "School Life", path: "/school-life" },
    { name: "Exam Results", path: "/results" },
  
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hamburgerIcon = menuOpen ? "×" : "☰";

  return (
    <>
      {/* Floating Header (overlays hero) */}
      <div
        className={`absolute top-0 left-0 right-0 z-40 transition-opacity duration-700 pointer-events-none ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="pointer-events-auto">
          {/* MOBILE FLOATING HEADER - Logo on top, text below, left-aligned */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:hidden">
            <div className="bg-gray-700/95 backdrop-blur-sm text-white px-6 pt-3 pb-6 rounded-b-3xl flex items-start justify-between overflow-hidden shadow-md">
              {/* Logo + Text - Left-aligned */}
              <div className="flex flex-col items-start">
                {/* Bigger Logo */}
                <img
                  src="/logo.png"
                  alt="Sample School Logo"
                  className="w-35 h-22 object-contain mb-1 -ml-8" // Bigger, visible text
                />

                {/* School Name Text Below */}
                <div className="text-left">
                  <p className="text-xl font-bold leading-tight">Sample Pvt</p>
                  <p className="text-xl font-bold leading-tight">Secondary School</p>
                  <p className="text-sm italic opacity-80 mt-1">
                    “Where Leadership Breeds”
                  </p>
                </div>
              </div>

              {/* Hamburger - Right-aligned */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white text-3xl focus:outline-none self-start"
              >
                {hamburgerIcon}
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="relative z-50 -mt-2 bg-white/95 backdrop-blur-sm rounded-b-3xl shadow-2xl p-6 flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-center text-xl font-semibold text-gray-800 hover:text-teal-600 py-4 border-b border-gray-200 last:border-0"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* DESKTOP FLOATING HEADER - Unchanged */}
          <div className="hidden md:block w-full bg-gray-800/90 backdrop-blur-sm shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-2">
              <div className="flex items-center gap-4">
                <img
                  src="/logo.png"
                  alt="Sample School Logo"
                  className="w-30 h-22 object-contain"
                />
                <div>
                  <p className="font-bold text-lg leading-tight text-gray-300">Sample Pvt</p>
                  <p className="font-bold text-lg leading-tight text-gray-300">Secondary School</p>
                </div>
              </div>
              <nav className="flex gap-10 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-gray-200 hover:text-teal-400 transition font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header (when scrolled) */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-md shadow-lg border-b border-teal-600/20 transition-all duration-500 ${
          scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 md:py-4 md:px-10">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Sample School Logo"
              className="w-30 h-18 -ml-3 md:w-25 md:h-20 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-base md:text-lg font-bold text-white leading-tight">Sample Pvt</p>
              <p className="text-base md:text-lg font-bold text-white leading-tight">Secondary School</p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-200 hover:text-teal-400 transition font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {hamburgerIcon}
          </button>
        </div>
      </div>

      {/* Mobile Menu when scrolled */}
      {menuOpen && scrolled && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-24 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm rounded-b-3xl shadow-2xl p-6 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-center text-xl font-semibold text-gray-800 hover:text-teal-600 py-4 border-b border-gray-200 last:border-0"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Spacer */}
      <div className={`transition-all duration-500 ${scrolled ? "h-20 md:h-20" : "h-0"}`} />
    </>
  );
}