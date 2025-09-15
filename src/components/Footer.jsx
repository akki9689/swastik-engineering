import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../data/swastik-logo.png"; // Ensure your logo is in src/assets

export const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-3 gap-12">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Swastik Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold">Swastik Engineering</span>
          </div>
          <p className="text-gray-300 text-sm">
            Providing world-class engineering solutions with innovation, precision, and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="/" className="hover:text-orange-400 transition">Home</a>
          <a href="#about" className="hover:text-orange-400 transition">About</a>
          <a href="#services" className="hover:text-orange-400 transition">Services</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
        </div>

        {/* Contact Info & Social */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-300">123 Industrial Road, City, State</p>
          <p className="text-gray-300">Phone: +91 98765 43210</p>
          <p className="text-gray-300">Email: info@swastikengineering.com</p>

          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-green-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Swastik Engineering. All rights reserved.
      </div>
    </footer>
  );
};
