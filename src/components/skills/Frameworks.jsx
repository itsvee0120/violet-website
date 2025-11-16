import React from "react";

const Frameworks = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frameworks</h3>

      <div className="skills_box">
        {/* Frontend Frameworks */}
        <div className="skills_group">
          <h4 className="skills_subtitle">Frontend</h4>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">React</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Next.js</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Expo Go</h3>
            </div>
          </div>
        </div>

        {/* Backend Frameworks */}
        <div className="skills_group">
          <h4 className="skills_subtitle">Backend</h4>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Nest.js</h3>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Expo Router</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
