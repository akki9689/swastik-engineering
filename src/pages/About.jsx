import { motion } from "framer-motion";
import aboutImg from "../data/swastik-logo.png";

export const About = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            alt="Swastik Engineering"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-green-600">Swastik Engineering</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Swastik Engineering is a trusted name in precision manufacturing and 
            innovative engineering solutions. With a focus on quality and technology, 
            we deliver world-class components and services to industries worldwide.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-3"></span>
              Over 20 years of industry expertise
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-3"></span>
              Cutting-edge CNC and VMC machining facilities
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-3"></span>
              Dedicated team of skilled engineers and technicians
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-3"></span>
              Commitment to sustainable and innovative practices
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
