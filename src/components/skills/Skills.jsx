import React from "react";
import "./skills.css";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import ToolsAndPlatforms from "./ToolsAndPlatforms";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Skill Set</span>
      <div className="skills_container container grid">
        <Languages />
        <Frameworks />
        <Databases />
        <ToolsAndPlatforms />
      </div>
    </section>
  );
};

export default Skills;
