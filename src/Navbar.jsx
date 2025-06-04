import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-white/90 text-blue-800 font-semibold px-5 py-2 rounded-full shadow-md transition"
      : "hover:bg-white/20 transition text-white px-4 py-2 rounded-full"


  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <style>{`
          @keyframes gradient-move {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animated-gradient-text {
            background: linear-gradient(
              270deg,
              #ffe4e6, /* light pink */
              #a3bffa, /* soft blue */
              #dbeafe, /* very light blue */
              #ffffff  /* white */
            );
            background-size: 600% 600%;
            animation: gradient-move 8s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
        `}</style>
        <div className="text-2xl font-bold select-none animated-gradient-text">
          SmartCards
        </div>

        <div className="hidden md:flex space-x-8 font-semibold">
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/learnwithflashcards" className={navLinkClass}>
            Study
          </NavLink>
          <NavLink to="/blogs" className={navLinkClass}>
            Blogs
          </NavLink>
          <NavLink to="/privacy-policy" className={navLinkClass}>
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-of-services" className={navLinkClass}>
            Terms of Services
          </NavLink>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-4 space-y-4 border-t border-blue-600">
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            About
          </NavLink>
          <NavLink
            to="/learnwithflashcards"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Study
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/privacy-policy"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-of-services"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Terms of Services
          </NavLink>
        </div>
      )}
    </nav>
  );
}
