import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Violet Nguyen</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="#blogs" className="footer_link">
              Blogs
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://github.com/itsvee0120"
            className="footer_social-icon"
            target="blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/violetnguyen0120/"
            className="footer_social-icon"
            target="blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Violet Nguyen. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
