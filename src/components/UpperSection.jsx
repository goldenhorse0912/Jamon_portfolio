import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaRocket,
  FaEnvelope,
  FaDownload,
  FaFileAlt,
  FaDiscord,
} from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/me.png";
import resume from "../assets/David_Resume.pdf";
import { useDarkMode } from "../DarkModeContext";

const UpperSection = () => {
  const { darkMode } = useDarkMode();
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const dynamicTexts = [
    "Fullstack Software Developer",
    "Node,Python,.NET Backend Developer",
    "React and its frameworks Specialist",
    "AI-Powered App Builder",
    "Scalable System Designer",
  ];

  useEffect(() => {
    const currentText = dynamicTexts[currentTextIndex];
    let timeout;

    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="home" className="relative mt-12">
      <div
        className={`min-h-screen flex items-center relative py-20 transition-colors duration-300 ${darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 to-white text-gray-900"
          }`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 ${darkMode ? "bg-[#2c3e50]" : "bg-[#4ca1af]"
              }`}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 ${darkMode ? "bg-[#4ca1af]" : "bg-[#2c3e50]"
              }`}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 lg:px-12 relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Profile Image */}
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-2/5 order-2 lg:order-1"
            >
              <div className="relative">
                <motion.img
                  src={profile}
                  alt="David Vincent"
                  className="p-12 rounded-full w-76 h-72 lg:w-80 lg:h-80 object-cover mx-auto shadow-lg"
                  {...floatAnimation}
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                    transition: { duration: 0.3 },
                  }}
                />
                <motion.div
                  className="absolute -top-4 -right-4 p-3 rounded-full bg-[#4ca1af] text-white shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaCode size={16} />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 p-3 rounded-full bg-[#2c3e50] text-white shadow-lg"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <FaRocket size={16} />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="w-full lg:w-3/5 text-center lg:text-left order-1 lg:order-2">
              <motion.div variants={fadeInUp} className="mb-4">
                <span
                  className={`text-xl font-medium ${darkMode ? "text-[#4ca1af]" : "text-[#2c3e50]"
                    }`}
                >
                  Hello, I'm
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-[#4ca1af] to-[#2c3e50] bg-clip-text text-transparent">
                  Frank Joseph Jamon
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                variants={fadeInUp}
                className="text-xl lg:text-2xl font-medium mb-6 h-8 flex items-center justify-center lg:justify-start"
              >
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {typedText}
                  <span className="inline-block w-0.5 h-6 bg-blue-600 ml-1 animate-pulse" />
                </span>
              </motion.div>

              {/* Bio/Description */}
              <motion.p
                variants={fadeInUp}
                className={`text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Full Stack Developer with over 10 years of experience delivering
                end-to-end web solutions across diverse industries. Skilled in both
                front-end technologies (React, Next.js, Angular, Vue.js, TypeScript,
                Tailwind CSS) and back-end frameworks (Node.js, Express, Django,
                .NET Core, PHP/Laravel), with strong expertise in building scalable
                RESTful and GraphQL APIs. Adept at designing secure architectures,
                optimizing performance, and integrating third-party services to
                enhance application capabilities.
                {/* Experienced in cloud deployments on AWS, Azure, and Vercel,
                leveraging Docker, Kubernetes,
                and CI/CD pipelines for efficient
                releases. Strong background in
                Agile collaboration, code reviews,
                and mentoring, ensuring
                high-quality deliverables and
                maintainable codebases.
                Passionate about creating reliable,
                user-centric applications that
                balance functionality,
                performance, and scalability. */}
              </motion.p>

              {/* Social Links */}

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  className="px-8 py-3 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white font-medium rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-105"
                  onClick={() => handleScroll("projects")}
                >
                  View My Work
                </button>
                <button
                  className={`px-8 py-3 font-medium rounded-full cursor-pointer transition-all duration-200 hover:scale-105 ${darkMode
                    ? "border-2 border-gray-600 text-gray-300 hover:border-[#4ca1af] hover:text-[#4ca1af]"
                    : "border-2 border-gray-300 text-gray-700 hover:border-[#2c3e50] hover:text-[#2c3e50]"
                    }`}
                  onClick={() => handleScroll("contact")}
                >
                  Get In Touch
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div >
    </section >
  );
};

export default UpperSection;
