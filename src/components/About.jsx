import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaAward,
  FaCoffee,
  FaHeart,
  FaRocket
} from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";
import { FaMeta } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";

const About = () => {
  const { darkMode } = useDarkMode();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "8+ yrs", label: "Experience", icon: FaCode },
    { number: "3 yrs", label: "Web Development!", icon: FaRocket },
    { number: "2+ yrs", label: "Meta", icon: FaMeta },
    { number: "3 yrs", label: "Netflix", icon: RiNetflixFill },
  ];

  const values = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Working effectively in teams to deliver exceptional results through communication.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Constantly learning new technologies and finding creative solutions to complex problems.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaGraduationCap,
      title: "Growth",
      description: "Committed to continuous learning and professional development in the tech industry.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen py-16 transition-colors duration-500 ${darkMode
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-[#2C3E50]"
                }`}
            >
              About{" "}
              <span className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3
                className={`text-2xl lg:text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                My Story
              </h3>
              <div className="space-y-4">
                <p
                  className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  My name is Frank Joseph Jamon - a passionate developer who loves building scalable, high-performance, and user-friendly web applications. I specialize in Python, Django, FastAPI, React, Next.js, and modern full-stack technologies, with over 10 years of experience delivering impactful solutions across fintech, SaaS, and e-commerce platforms.

                </p>
                <p
                  className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                > I enjoy mentoring junior developers, improving developer experience with tools like Storybook and CI/CD pipelines, and exploring modern trends like vector databases, RAG, and AI-powered solutions. I’m fluent in English, proud to be Filipino, and always excited to collaborate on remote projects that challenge me to grow and innovate.
                </p>
                {/* <p
                  className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  I specialize in React, Node.js, and modern
                  web technologies, always staying current with industry trends and best practices, also
                  I speak Japanese, dabble in Chinese, and I’m always up for remote projects.
                </p> */}

              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3
                className={`text-2xl lg:text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${darkMode
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                      }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-3">
                        <stat.icon size={20} />
                      </div>
                      <div
                        className={`text-2xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {stat.number}
                      </div>
                      <div
                        className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3
              className={`text-2xl lg:text-3xl font-bold text-center mb-12 ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${darkMode
                    ? "bg-gray-800 border border-gray-700 hover:border-gray-600"
                    : "bg-white border border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${value.color} text-white mb-4`}>
                      <value.icon size={24} />
                    </div>
                    <h4
                      className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                      {value.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div
              className={`p-8 rounded-2xl shadow-lg ${darkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600"
                : "bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200"
                }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Let's Create Something Amazing Together
              </h3>
              <p
                className={`text-lg mb-6 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                I'm always excited to work on new projects and collaborate with
                passionate people. Whether you have a specific project in mind or
                just want to chat about technology, I'd love to hear from you.
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white font-semibold rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;