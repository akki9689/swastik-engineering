import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Contact <span className="text-gray-800">Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Company Details */}
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">Get in Touch</h3>
              <p className="text-gray-700">Swastik Engineering 
              </p>
              <p className="text-gray-700">ASHAPURAM SR. NO. 78/2, Dangat Estate, Shivane, Pune, Maharashtra 411023</p>
              <p className="text-gray-700">Phone:123456789 </p>
              <p className="text-gray-700">Email: swastikaenginnering@gmail.com</p>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Swastik Engineering Location"
                src=""
                className="w-full h-64 md:h-full"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
