import React, { useState } from "react";
import { projects } from "./Data";

const Works = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <>
      <div className="filter_buttons">
        {allTags.map((tag, idx) => (
          <button
            key={idx}
            className={`filter_btn ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects_grid">
        {filteredProjects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="project_card"
          >
            <div className="project_image_wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project_image"
              />
            </div>

            <div className="project_info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project_tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Works;
