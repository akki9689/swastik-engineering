import { Navbar } from "./Navbar";

function App() {
  return (
    <div>
      

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
          Welcome to Swastik Engineering
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Delivering high-quality engineering solutions with innovation,
          precision, and reliability for industries worldwide.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#services"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          About Us
        </h2>
        <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
          Swastik Engineering specializes in providing custom engineering
          solutions, precision manufacturing, and advanced mechanical
          innovations. With years of expertise, we aim to deliver world-class
          products that empower industries.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Our Services
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Design</h3>
            <p className="mt-2 text-gray-600">
              Innovative engineering design solutions tailored to meet your
              needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Manufacturing</h3>
            <p className="mt-2 text-gray-600">
              Precision manufacturing with cutting-edge technology and
              excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Consulting</h3>
            <p className="mt-2 text-gray-600">
              Expert engineering consultation to improve productivity and
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700">Get in Touch</h2>
        <p className="mt-4 text-gray-700">
          Have a project in mind? Let’s work together to bring your ideas to
          life.
        </p>
        <a
          href="mailto:info@swastikengineering.com"
          className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Swastik Engineering. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
