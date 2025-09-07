import { motion } from "framer-motion";
import machiningImg from "../assets/machining.jpg";
import designImg from "../assets/design.jpg";
import dieCastingImg from "../assets/die.jpg";

import assemblyImg from "../assets/assembly.jpg";

const services = [
  {
    title: "Precision Machining",
    description: "High-quality CNC and VMC machining for accurate components.",
    image: machiningImg,
  },
  {
    title: "Product Design",
    description: "Innovative and sustainable engineering designs for diverse industries.",
    image: designImg,
  },
 {
    title: "Die Casting Solutions",
    description: "End-to-end die casting services with precision and reliability.",
    image: dieCastingImg,
  },
  {
    title: "Assembly & Testing",
    description: "Complete assembly, inspection, and testing solutions for products.",
    image: assemblyImg,
  },
];

export const Services = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Our <span className="text-gray-800">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
