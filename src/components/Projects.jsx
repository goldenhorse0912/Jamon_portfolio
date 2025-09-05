import React, { useState } from "react";
import { useDarkMode } from "../DarkModeContext"; // Import the hook
import homepage1 from "../assets/project1_homepage.jpg";
import homepage0 from "../assets/project0.jpg";
import homepage022 from "../assets/22.png";
import homepage011 from "../assets/11.jpg";
import homepage2 from "../assets/project2_homepage.jpg";
import homepage3 from "../assets/project6_homepage.png";
import homepage4 from "../assets/project4_homepage.png";
import homepage5 from "../assets/project5_homepage.png";
import homepage6 from "../assets/project6_homepage.jpg";
const Projects = () => {
  const { darkMode } = useDarkMode();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "TeleHealth Appointment Scheduling System",
      subtitle: "Modern web & mobile application",
      description: "A secure and HIPAA-compliant telehealth platform with appointment scheduling, patient-doctor communication, automated reminders, and real-time analytics.",
      details: [
        "Appointment scheduling with booking calendars, patient dashboards, and doctor schedules",
        "Role-based authentication and access control using Firebase Auth",
        "Automated SMS/email reminders reducing no-show rates",
        "Doctor analytics dashboards with patient retention metrics",
        "Optimized backend on AWS EC2 with MongoDB for scalable performance",
      ],
      technologies: ["Angular", "SCSS", "Node.js", "Express", "MongoDB", "Firebase Auth"],
      image: homepage0,
      link: "https://www.simplepractice.com/",
      category: "Backend",
      status: "Live"
    },
    {
      id: 1,
      title: "E-Commerce Order Tracking & Admin Portal",
      subtitle: "Modern web & mobile application",
      description: "A mobile-first e-commerce platform with real-time order tracking, Stripe-powered checkout, and a secure role-based admin dashboard.",
      details: [
        "Secure RESTful APIs for authentication, orders, and product catalog",
        "Stripe integration with webhook support for real-time payment confirmation",
        "Live order tracking and status updates using WebSockets",
        "Scalable PostgreSQL schema for inventory and order management",
      ],
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Stripe API", "WebSockets"],
      image: homepage022,
      link: "https://www.allbirds.com/",
      category: "Backend",
      status: "Live"
    },
    {
      id: 1,
      title: "Online Learning & Course Management Platform",
      subtitle: "Modern web application",
      description: "A responsive online learning platform with course creation, progress tracking, and personalized student and instructor dashboards.",
      details: [
        "Student and instructor dashboards with dynamic, responsive Vue.js interfaces",
        "Admin panel with course creation tools and AWS S3 content upload",
        "Role-based authentication and access control using JWT in .NET Core",
      ],
      technologies: ["Vue.js", "Vuex", ".NET Core (C#)", "ASP.NET Web API", "PostgreSQL", "AWS S3", "Tailwind CSS"],
      image: homepage011,
      link: "https://openclassrooms.com/",
      category: "Backend",
      status: "Live"
    },
    {
      id: 2,
      title: "Talent Trail",
      subtitle: "Modern job board application",
      description: "Talent Trail is a modern job board application built with **Next.js**, **Tailwind CSS**, and **ShadCN UI**. It connects job seekers and employers seamlessly, offering advanced features like job filtering.",
      details: [
        "Course Management for creation, enrollment, and progress tracking",
        "Advanced job filtering and search functionality",
        "various page layouts and components using ShadCN UI",
        "Responsive design for optimal viewing on all devices",
        "Real-time updates and notifications for job seekers and employers",
      ],
      technologies: ["JavaScript", "Node.js", "Next.js", "ShadCN UI", "Tailwind CSS"],
      image: homepage1,
      link: "https://next-job-board-module.vercel.app/",
      category: "Frontend",
      status: "Live"
    },
    {
      id: 3,
      title: "Car Finder App",
      subtitle: "Automotive Discovery",
      description: "An interactive car discovery application with advanced search, wishlist functionality, and smooth animations.",
      details: [
        "Search cars by name or apply advanced filters to find specific models",
        "Save favorite cars to a wishlist for easy access and comparison",
        "Smooth Animations: Enhanced user experience with Framer Motion transitions",
        "Fetch car data dynamically from an external API or mock data source",
      ],
      technologies: ["React", "Framer Motion", "API Integration", "Tailwind CSS"],
      image: homepage3,
      link: "https://car-finder-app-seven.vercel.app/",
      category: "Frontend",
      status: "Live"
    },

    {
      id: 4,
      title: "ShopHub",
      subtitle: "E-Commerce Platform",
      description: "A dynamic and responsive e-commerce website with advanced filtering, cart management, and seamless user experience.",
      details: [
        "Built a dynamic and responsive e-commerce website using Next.js and Tailwind CSS",
        "Product listing and dynamic product detail pages",
        "Enabled product filtering and search functionality",
        "Add to cart and remove from cart functionality",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Context API", "Local Storage"],
      image: homepage4,
      link: "https://e-commerce-rust-six-77.vercel.app/",
      category: "Frontend",
      status: "Live"
    },

    {
      id: 5,
      title: "Real-time Chat",
      subtitle: "React Real-Time Chat Application",
      description: "A real-time chat application with Node.js, Prisma, GraphQL, Next.js, React.js and Apollo",
      details: [
        "Real-time messaging with Socket.io for instant communication",
        "grey-theme and responsive design for a modern look",
        "User authentication and session management",
        "User-friendly interface with smooth animations",
        "Supports multiple chat rooms and private messaging",
        "Private conversations, Group conversations",
        "Search by conversations, users and messages",
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Apollio", "GraphQL", "Prisma"],
      image: homepage2,
      link: "https://real-time-chat-prisma-dg.vercel.app/", // Add actual link when available
      category: "Frontend + Backend",
      status: "Live"
    },
    {
      id: 6,
      title: "Student Registration Dashboard",
      subtitle: "Management System",
      description: "A comprehensive student registration system with course management, filtering capabilities, and intuitive dashboard interface.",
      details: [
        "Manage course types like Group, Individual, Special",
        "Create and organize courses such as Hindi, English, Urdu",
        "Combine and control course offerings like Group Hindi",
        "Register students and filter by course type",
      ],
      technologies: ["React", "CSS3", "JavaScript", "Local Storage"],
      image: homepage5,
      link: "https://student-registration-amber.vercel.app/",
      category: "Frontend",
      status: "Live"
    },
    {
      id: 7,
      title: "Simple Todo Application (Vue.js)",
      subtitle: "Todo App",
      description: "A light and simple todo application built with Vue.js, featuring basic CRUD operations and local storage.",
      details: [
        "Manages todo items with create, read, update, and delete operations",
        "Uses local storage for data persistence",
        "Responsive design with a clean and minimalistic UI",
        "Supports basic todo functionalities like marking as complete and deleting",
        "Includes a filter to view all, completed, or pending todos",
      ],
      technologies: ["Vue.js", "CSS3", "JavaScript", "Local Storage"],
      image: homepage6,
      link: "https://simple-todo-app-vue-dg.netlify.app/",
      category: "Frontend + Firebase",
      status: "Live"
    },

  ];

  // Custom Icons
  const ExternalLinkIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );

  const CodeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z" />
    </svg>
  );

  const RocketIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.5 2C15.5 2 18 4.5 18 7.5c0 1.17-.33 2.27-.9 3.22L21 14.5l-2.5 2.5-3.78-3.9c-.95.57-2.05.9-3.22.9-3 0-5.5-2.5-5.5-5.5 0-1.17.33-2.27.9-3.22L2 1.5 4.5-1l3.78 3.9C9.23 2.33 10.33 2 11.5 2z" />
    </svg>
  );

  return (
    <section
      id="projects"
      className={`px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 w-full transition-all duration-500 ${darkMode
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
            <RocketIcon />
          </div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up transition-colors duration-300 ${darkMode ? 'text-white' : 'text-[#2C3E50]'
            }`}>
            Featured <span className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            A showcase of innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 ${darkMode
                ? "bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl"
                : "bg-white border border-gray-200/50 hover:border-purple-400/50 shadow-lg hover:shadow-2xl"
                }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-fit transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === "Live"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-black"
                    }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${darkMode ? "bg-slate-800/80 text-gray-200" : "bg-white/80 text-gray-700"
                    }`}>
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white"
                  >
                    <span>View Live</span>
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-medium ${darkMode ? "text-purple-400" : "text-purple-600"
                    }`}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-md transition-colors ${darkMode
                          ? "bg-slate-700 text-gray-300 hover:bg-slate-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2 py-1 text-xs rounded-md ${darkMode ? "bg-slate-700 text-gray-400" : "bg-gray-100 text-gray-500"
                        }`}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features - Expandable */}
                <div className={`transition-all duration-300 overflow-hidden ${hoveredProject === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className={`pt-4 border-t ${darkMode ? "border-slate-600" : "border-gray-200"
                    }`}>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <CodeIcon />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`text-xs flex items-start gap-2 ${darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                          <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${darkMode ? "bg-purple-400" : "bg-purple-500"
                            }`}></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200/50">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:underline ${darkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-700"
                      }`}
                  >
                    <span>View Project</span>
                    <ExternalLinkIcon />
                  </a>
                  <div className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    Project #{index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className={`text-center mt-20 p-8 rounded-2xl ${darkMode
          ? "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50"
          : "bg-gradient-to-r from-gray-50 to-white border border-gray-200/50"
          }`}>
          <h3 className="text-xl font-bold mb-2">Glad you visited my portfolio—thank you!</h3>

        </div>
      </div>
    </section>
  );
};

export default Projects;
