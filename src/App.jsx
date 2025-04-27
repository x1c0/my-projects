import React, { useState, useEffect } from "react";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Intro from "./components/Intro";
import GradientDivider from "./components/GradientDivider";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import projectsData from "./data/projectsData";
import profileData from "./data/profileData";

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return storedTheme ? storedTheme : prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <main className="relative max-w-4xl mx-auto p-6 md:px-10 py-16 md:py-24">
        <ThemeToggleButton currentTheme={theme} onToggle={handleThemeToggle} />
        <Intro profile={profileData} />
        <GradientDivider />
        <Projects projects={projectsData} />
      </main>
      <Footer
        githubUrl={profileData.githubUrl}
        linkedInUrl={profileData.linkedInUrl}
      />
    </>
  );
}

export default App;
