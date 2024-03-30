import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./themes.css";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  useEffect(() => {
    // NOTE: This should be set based on some kind of toggle or theme selector.
    // I've added this here for demonstration purposes
    localStorage.setItem("theme", "dark");

    // If the user has selected a theme, use that
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
      // Else if the users OS preferences prefers dark mode
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
      // Else use light mode
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Hero />
      <div className="gradient-wrapper clip-path-gradient ">
        <Skills />
      </div>
    </>
  );
};

export default App;
