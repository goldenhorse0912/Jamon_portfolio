import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode with the <html> element for global changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Apply dark mode to root element
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);
