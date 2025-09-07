import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import logo from "../data/Swastik-logo.png"; // Ensure your logo is in src/assets

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Swastik Logo" className="h-10 w-10 rounded-full" />
           <div className="flex flex-col items-start">
  <span className="text-xl font-bold">Swastik Engineering</span>
  <span>Pune</span>
</div>

            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/about" className="hover:text-gray-200">About</Link>
            <Link to="/services" className="hover:text-gray-200">Services</Link>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
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
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-700">
          <Link onClick={() => setIsOpen(false)} to="/" className="block hover:text-gray-200">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="block hover:text-gray-200">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/services" className="block hover:text-gray-200">Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="block hover:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}
