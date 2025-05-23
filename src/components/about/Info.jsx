import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="uil uil-graduation-cap about_icon"></i>
        <h3 className="about_title">Student</h3>
        <span className="about_subtitle">
          {" "}
          <a
            className="about_link"
            href="https://northseattle.edu/programs/application-development/application-development-bachelor-applied-science-bas-degree"
            target="_blank"
            rel="noopener noreferrer"
          >
            BAS Application Development
          </a>{" "}
          at North Seattle College.
        </span>
      </div>

      <div className="about_box">
        <i className="uil uil-code-branch about_icon"></i>
        <h3 className="about_title">Coder</h3>
        <span className="about_subtitle">
          Crafting clean code from UI to backend.
        </span>
      </div>

      <div className="about_box">
        <i className="uil uil-lightbulb-alt about_icon"></i>
        <h3 className="about_title">Creator</h3>
        <span className="about_subtitle">
          Driven by curiosity and big ideas.
        </span>
      </div>
    </div>
  );
};

export default Info;
