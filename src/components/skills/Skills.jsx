import React, { useEffect, useRef } from "react";
import "./skills.css";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import ToolsAndPlatforms from "./ToolsAndPlatforms";

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skills_in-view");
          } else {
            entry.target.classList.remove("skills_in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = container.querySelectorAll(".skills_content");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Skill Set</span>
      <div className="skills_container container" ref={containerRef}>
        <Languages />
        <Frameworks />
        <Databases />
        <ToolsAndPlatforms />
      </div>
    </section>
  );
};

export default Skills;
