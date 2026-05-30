import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ProjectDetail = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hasContent =
    project.body ||
    project.details ||
    (project.sections && project.sections.length > 0) ||
    (project.features && project.features.length > 0);

  return (
    <div className="project_detail">
      <button className="project_back_btn" onClick={onBack}>
        ← Back to Projects
      </button>

      <div className="project_detail_image_wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project_detail_image"
        />
      </div>

      <h2 className="project_detail_title">{project.title}</h2>

      <div className="project_tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {!hasContent && (
        <p className="project_detail_coming_soon">Details coming soon</p>
      )}

      {project.body && (
        <div className="project_detail_markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {project.body}
          </ReactMarkdown>
        </div>
      )}

      {project.details && (
        <p className="project_detail_text">{project.details}</p>
      )}

      {project.sections &&
        project.sections.map((section, si) => (
          <div className="project_detail_section" key={si}>
            {section.heading && <h3>{section.heading}</h3>}
            {section.content.map((block, bi) =>
              Array.isArray(block) ? (
                <ul key={bi}>
                  {block.map((item, ii) => (
                    <li key={ii}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={bi} className="project_detail_text">
                  {block}
                </p>
              )
            )}
          </div>
        ))}

      {project.features && project.features.length > 0 && (
        <div className="project_detail_features">
          <h3>Highlights</h3>
          <ul>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="project_detail_links">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project_detail_btn"
          >
            View Project on GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project_detail_btn project_detail_btn--secondary"
          >
            Web Live Demo
          </a>
        )}
        {project.pypi && (
          <a
            href={project.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="project_detail_btn project_detail_btn--secondary"
          >
            PyPI Vaux CLI
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
