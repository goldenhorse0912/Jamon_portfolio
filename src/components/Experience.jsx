import React from "react";
import { useDarkMode } from "../DarkModeContext"; // Import the dark mode context
import { FaSpotify } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { BsMeta } from "react-icons/bs";
const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Softwave Systems",

    location: "Austin, TX",
    duration: "March 2022 - June 2025",
    type: "Full time - Remote",
    technologies: ["React.js", "Node.js", "Python", "Typescript", "Material UI", "AWS"],
    description: [
      "Developed and maintained React and Material UI dashboards, improving modularity and speeding up feature delivery",
      "Implemented backend services in Node.js and Express, enabling synthetic data generation and GDPR compliance",

    ],
    icon: < FaSpotify />, // Custom icon component
    achievements: [
      "Enhanced frontend performance, reducing dashboard render time by 25% with code-splitting and lazy loading",
      "Contributed to cloud deployment pipelines on AWS (EC2, S3, CloudFront) with automated CI/CD workflows",
      "Conducted debugging and QA, resolving an average of 8–10 bugs per sprint, improving reliability"
    ]
  },
  {
    id: 2,
    role: "Front End Developer",
    company: "CodeCraft Labs",
    location: "Austin, TX",
    duration: "March 2018 - Feburary 2022",
    type: "Full Time - Remote",
    technologies: ["React.js", "Angular", "Next.js", "Vue.js", "REST", "GraphQL", "Google Maps APIs", "AWS", "Azure"],
    description: [
      "Engineered enterprise SaaS applications using React, Angular, Vue.js, and Next.js, focusing on scalability and responsiveness.",
      "Built RESTful and GraphQL APIs for real-time data exchange between services",
      "Designed component libraries from scratch, ensuring design consistency and faster feature rollout"
    ],
    icon: <BsMeta />, // Custom icon component
    achievements: [
      "Implemented Next.js SSR to improve SEO and reduce time-to-interactive for marketing websites",
      "Spearheaded migration from monolithic to microservices architecture, improving system scalability"
    ]
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "CloudConsole",

    location: "Austin, TX",
    duration: "August 2016 - Feburary 2018",
    type: "Full time - Onsite",
    technologies: ["Vue.js", "ASP.NET", "Web API", "Chart.js", "AWS"],
    description: [
      "Designed a mobile-first e-commerce platform supporting thousands of concurrent users",
      "Designed PostgreSQL schema for scalable inventory and order management",
      "Integrated Stripe with webhook support for real-time payment confirmation"
    ],
    icon: < SiNetflix />, // Custom icon component
    achievements: [
      "Deployed to AWS EC2 with CloudFront caching, reducing latency by 40%",
      "Reduced cart abandonment by 40% with real-time order updates and streamlined checkout"
    ]
  }
];

const Experience = () => {
  const { darkMode } = useDarkMode();

  // Custom icon components using SVG
  const BriefcaseIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 16V8a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1zM6 18h12V8H6v10zM4 6V4a2 2 0 012-2h12a2 2 0 012 2v2h2a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm2-2v2h12V4H6z" />
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

  const TechIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const AchievementIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );

  return (
    <section
      id="experience"
      className={`px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 w-full transition-all duration-500 ${darkMode
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
            <div className="w-8 h-8">
              <BriefcaseIcon />
            </div>
          </div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up transition-colors duration-300  ${darkMode ? 'text-white' : 'text-[#2C3E50]'
            }`}>
            Professional <span className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 hidden md:block ${darkMode ? "bg-gradient-to-b from-indigo-500 to-blue-500" : "bg-gradient-to-b from-indigo-400 to-blue-400"
            }`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 hidden md:block z-10 ${darkMode
                  ? "bg-indigo-500 border-slate-800 shadow-lg"
                  : "bg-indigo-500 border-white shadow-md"
                  }`}></div>

                {/* Experience Card */}
                <div className={`ml-0 md:ml-20 transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${darkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 hover:border-indigo-500/50 shadow-xl hover:shadow-2xl"
                  : "bg-white border border-gray-200/50 hover:border-indigo-400/50 shadow-lg hover:shadow-xl"
                  } rounded-2xl p-8`}>

                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                          {exp.role}
                        </h3>
                        <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <p className={`text-lg font-semibold ${darkMode ? "text-blue-400" : "text-indigo-600"
                          }`}>
                          {exp.company}
                        </p>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        {/* <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            <LocationIcon />
                          </div>
                          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                            {exp.location}
                          </span>
                        </div> */}
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            <CalendarIcon />
                          </div>
                          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Experience Icon */}
                    {/*                     <div className={`mt-4 lg:mt-0 lg:ml-6 p-4 rounded-xl ${
                      darkMode 
                        ? "bg-indigo-500/10 border border-indigo-500/30" 
                        : "bg-indigo-50 border border-indigo-200"
                    }`}>
                      <div className={`w-8 h-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"} ` }>
                        <p className="text-4xl m-auto"> {exp.icon}</p>
                       
                        
                      </div>
                    </div> */}
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full ${darkMode ? "bg-indigo-400" : "bg-indigo-500"
                        }`}></div>
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${darkMode
                            ? "bg-slate-700 text-slate-200 border border-slate-600/50 hover:border-indigo-500/50"
                            : "bg-gray-100 text-gray-700 border border-gray-200 hover:border-indigo-400/50"
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full ${darkMode ? "bg-indigo-400" : "bg-indigo-500"
                        }`}></div>
                      Key Responsibilities
                    </h4>
                    <div className="grid gap-3">
                      {exp.description.map((point, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:scale-[1.01] ${darkMode
                            ? "bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/30"
                            : "bg-gray-50 hover:bg-gray-100 border border-gray-200/50"
                            }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${darkMode ? "bg-indigo-400" : "bg-indigo-500"
                            }`}></div>
                          <p className="text-sm lg:text-base leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <div className={`w-4 h-4 ${darkMode ? "text-yellow-400" : "text-yellow-500"}`}>
                        <AchievementIcon />
                      </div>
                      Key Achievements
                    </h4>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-[1.01] ${darkMode
                            ? "bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-700/30 hover:border-yellow-600/50"
                            : "bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/50 hover:border-yellow-400/50"
                            }`}
                        >
                          <div className={`w-5 h-5 flex-shrink-0 mt-0.5 ${darkMode ? "text-yellow-400" : "text-yellow-500"}`}>
                            <TechIcon />
                          </div>
                          <p className="text-sm lg:text-base leading-relaxed font-medium">
                            {achievement}
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

        {/* Call to Action */}
        <div className={`text-center mt-16 p-8 rounded-xl ${darkMode
          ? "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50"
          : "bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/50"
          }`}>
          <h3 className="text-xl font-semibold mb-2">Ready for New Challenges</h3>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Passionate about creating innovative solutions and contributing to impactful projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
