import React from "react";
import { useDarkMode } from "../DarkModeContext"; // Import the dark mode context
import GeorgiaLogo from "../assets/georgia.png"; // Import your logo image 
import WebLogo from "../assets/web.jpg"; // Import your logo image 

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the East Manila",
    location: "Manila, Philippines",
    duration: "2012 - 2016",
    status: "Graduated",
    gpa: "GPA 1.0/1.0",
    logo: GeorgiaLogo,

    highlights: [
      "Specialized in Data Structures & Algorithms, Database Management Systems",
      "Advanced coursework in Operating Systems, Computer Networks, and AI/ML",
      "Active contributor to open-source projects and coding competitions",
      "Strong foundation in software engineering principles and practices"
    ],
    type: "undergraduate"
  },
  // {
  //   id: 2,
  //   degree: "Continued Education & Web Technologies",
  //   institution: "Self-Directed Learning & Online Courses",
  //   location: "Atlanta, GA, USA",
  //   duration: "2016-2018",
  //   status: "Continuing",
  //   gpa: "77.8%",
  //   logo: WebLogo,
  //   semester: "",
  //   highlights: [
  //     "Built hands-on experience with modern web technologies through personal projects and continuous learning",
  //     "Completed courses and tutorials on platforms like Udemy, freeCodeCamp, and YouTube covering",
  //     "Self learning asian languages like Japanese, and Chinese",
  //   ],
  //   type: "secondary"
  // },
];

const Education = () => {
  // Custom icon components using SVG
  const { darkMode } = useDarkMode();
  const GraduationCapIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );

  const TrophyIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4v5c0 1.1-.9 2-2 2h-1.54c-.55 2.3-2.43 4.1-4.81 4.38V18H15c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h2.35v-2.62C9.03 15.1 7.45 13.3 6.54 11H5c-1.1 0-2-.9-2-2V4h4zM5 6v3h1.54c.32 1.04.82 1.99 1.46 2.79V6H5zm12 5.79c.64-.8 1.14-1.75 1.46-2.79H20V6h-3v5.79z" />
    </svg>
  );

  return (
    <section
      id="education"
      className={`px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 w-full transition-all duration-500 ${darkMode
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="w-8 h-8">
              <GraduationCapIcon />
            </div>
          </div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up transition-colors duration-300 ${darkMode ? 'text-white' : 'text-[#2C3E50]'
            }`}>
            Edu<span className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] bg-clip-text text-transparent">cation</span>

          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 hidden md:block ${darkMode ? "bg-gradient-to-b from-blue-500 to-purple-500" : "bg-gradient-to-b from-blue-400 to-purple-400"
            }`}></div>

          <div className="space-y-12">
            {educationDetails.map((edu, index) => (
              <div key={edu.id} className="relative group">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 hidden md:block z-10 ${darkMode
                  ? "bg-blue-500 border-slate-800 shadow-lg"
                  : "bg-blue-500 border-white shadow-md"
                  }`}></div>

                {/* Education Card */}
                <div className={`ml-0 md:ml-20 transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${darkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 hover:border-blue-500/50 shadow-xl hover:shadow-2xl"
                  : "bg-white border border-gray-200/50 hover:border-blue-400/50 shadow-lg hover:shadow-xl"
                  } rounded-2xl p-8`}>

                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                          {edu.degree}
                        </h3>
                        {edu.type === "undergraduate" && (
                          <span className={`px-3 py-1 text-xs font-medium rounded-full animate-pulse ${darkMode
                            ? "bg-green-900/30 text-green-400"
                            : "bg-green-100 text-green-800"
                            }`}>
                            Completed
                          </span>
                        )}
                      </div>

                      <p className={`text-lg font-semibold mb-3 ${darkMode ? "text-blue-400" : "text-blue-600"
                        }`}>
                        {edu.institution}
                      </p>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        {edu.location && (
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              <LocationIcon />
                            </div>
                            <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                              {edu.location}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            <CalendarIcon />
                          </div>
                          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* GPA/Score Card */}
                    <div className={`mt-4 lg:mt-0 lg:ml-6 p-4 rounded-xl border-2 border-dashed min-w-[140px] text-center transition-colors ${darkMode
                      ? "border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20"
                      : "border-blue-400/30 bg-blue-50 hover:bg-blue-100"
                      }`}>
                      <img src={edu.logo} alt="Georgia State University" className=" mx-auto h-18 rounded-full object-fit" />
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-500"
                        }`}></div>
                      Key Highlights
                    </h4>
                    <div className="grid gap-3">
                      {edu.highlights.map((point, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:scale-[1.01] ${darkMode
                            ? "bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/30"
                            : "bg-gray-50 hover:bg-gray-100 border border-gray-200/50"
                            }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${darkMode ? "bg-blue-400" : "bg-blue-500"
                            }`}></div>
                          <p className="text-sm lg:text-base leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className={`text-center mt-16 p-6 rounded-lg ${darkMode
          ? "bg-slate-800/50 border border-slate-700/50"
          : "bg-gray-50 border border-gray-200/50"
          }`}>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Committed to continuous learning and academic excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;