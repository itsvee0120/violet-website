import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import ProjectPage from "./components/projects/ProjectPage";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
  <>
    <Header />

    <main className="main">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
  </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
