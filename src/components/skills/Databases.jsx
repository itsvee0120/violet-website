import React from "react";

const Databases = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Databases</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">MySQL</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">PostgreSQL</h3>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Supabase</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Databases;
