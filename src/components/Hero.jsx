import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video1 from "../data/video1.mp4";
import video2 from "../data//video2.mp4";
import video3 from "../data/video3.mp4";

const slides = [
  {
    video: video1,
    title: "Swastik Engineering",
    subtitle: "Innovative Engineering Solutions",
  },
  {
    video: video2,
    title: "Precision Manufacturing",
    subtitle: "Quality Components for Global Clients",
  },
  {
    video: video3,
    title: "Sustainable Growth",
    subtitle: "Building the Future with Technology",
  },
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.video
          key={slides[index].video}
          src={slides[index].video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center text-white px-4">
        <motion.div
          key={slides[index].title}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">{slides[index].title}</h1>
          <p className="mt-4 text-lg md:text-2xl">{slides[index].subtitle}</p>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition ${
              index === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
