import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    // { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },

    { name: "Contact", href: "#sontact", id: "contact" },
  ];

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 max-w-screen ${darkMode
        ? "bg-slate-900/90 text-gray-100 border-slate-700"
        : "bg-white/90 text-gray-800 border-gray-200"
        }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Portfolio Logo"
              className="h-12 w-12 rounded-full shadow-lg object-cover ring-2 ring-blue-500/20"
            />
            <div className="hidden sm:block">
              <span className="hidden sm:inline text-sm sm:text-base font-semibold 
                       bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]
                       bg-clip-text text-transparent
                       animate-gradient-x">
                Fullstack Developer | React Expert | Backend Developer
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeSection === link.id
                  ? darkMode
                    ? "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white shadow-lg"
                    : "bg-gradient-to-r from-[#4ca1af] to-[#2c3e50]  text-white shadow-lg"
                  : darkMode
                    ? "text-gray-300 hover:text-white hover:bg-slate-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Dark mode toggle and mobile menu button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${darkMode
                ? "text-yellow-400 hover:bg-slate-800"
                : "text-orange-500 hover:bg-gray-100"
                }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 mobile-menu-button ${darkMode ? "hover:bg-slate-800" : "hover:bg-gray-100"
                }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden mobile-menu transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className={`py-6 space-y-2 rounded-lg px-4  scroll-auto${darkMode ? "bg-slate-800/50" : "bg-gray-50/50"
            }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`block px-4 py-3 rounded-md text-base flex justify-center font-medium transition-all duration-200 ${activeSection === link.id
                  ? darkMode
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
                  : darkMode
                    ? "text-gray-300 hover:text-white hover:bg-slate-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;