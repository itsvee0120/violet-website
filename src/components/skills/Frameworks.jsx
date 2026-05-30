import React from "react";

const Frameworks = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frameworks &amp; Libraries</h3>

      <div className="skills_box">
        {/* Frontend Frameworks */}
        <div className="skills_group">
          <h4 className="skills_subtitle">Frontend</h4>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">React.js</h3>
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
              <h3 className="skills_name">Tailwind CSS</h3>
            </div>
          </div>
        </div>

        {/* Backend Frameworks */}
        <div className="skills_group">
          <h4 className="skills_subtitle">Backend</h4>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">.NET Core</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Node.js</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Express</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">NestJS</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">TypeORM</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Socket.io</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
