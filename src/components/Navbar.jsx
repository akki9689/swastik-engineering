import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../data/Swastik-logo.png"; 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 text-white shadow-md sticky top-0 z-50 font-poppins">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <img
  src={logo}
  alt="Swastik Logo"
  className="h-10 w-10 rounded-full transform transition-transform duration-500 hover:rotate-180"/>
           <div className="flex flex-col items-start">
  <span className="text-xl font-bold transform transition-transform duration-300 hover:translate-x-2">
    Swastik Engineering
  </span>
  <span>Pune</span>
</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group font-medium"
              >
                <span className="transition-colors duration-300 group-hover:text-orange-400">
                  {item}
                </span>
                {/* underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-600">
          <hr />
          {["Home", "About", "Services", "Contact"].map((item, i) => (
            <Link
              key={i}
              onClick={() => setIsOpen(false)}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block relative group font-medium"
            >
              <span className="transition-colors duration-300 group-hover:text-orange-400">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
