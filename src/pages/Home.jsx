import { motion } from "framer-motion";
import factoryVideo from "../data/factory.mp4"; // Your video
import { Hero } from "../components/Hero";
import { FaCogs, FaLightbulb, FaGlobe } from "react-icons/fa"; // Icons for highlights

export const Home = () => {
  const highlights = [
    { title: "Precision Engineering", desc: "High-quality manufacturing with advanced tools.", icon: <FaCogs className="text-4xl text-blue-600 mb-4" /> },
    { title: "Innovation", desc: "Constantly improving designs for future demands.", icon: <FaLightbulb className="text-4xl text-blue-600 mb-4" /> },
    { title: "Global Clients", desc: "Trusted by industries worldwide.", icon: <FaGlobe className="text-4xl text-blue-600 mb-4" /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Video Section */}
      <section className="relative py-24 bg-gray-100 flex items-center justify-center">
        <video
          src={factoryVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our State-of-the-Art Facilities
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Cutting-edge machinery and skilled workforce ensuring world-class manufacturing.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Why <span className="text-green-600">Choose Us?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
