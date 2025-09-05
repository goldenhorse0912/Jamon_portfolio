import React from "react";
import { useDarkMode } from "./DarkModeContext";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import UpperSection from "./components/UpperSection";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      {" "}
      <Navbar />
      <UpperSection />
      {/* <About /> */}
      <Skills />
      <Education />
      <Experience />
      <Projects />

      <Contact />
    </div>
  );
};

export default App;
