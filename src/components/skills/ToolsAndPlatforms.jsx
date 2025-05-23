import React from "react";

const ToolsAndPlatforms = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Tools & Platforms</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* Tools */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Git</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Figma</h3>
            </div>
          </div>

          {/* Platforms / OS */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Linux</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Windows</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndPlatforms;
