import React, { useState, useEffect, useRef } from "react";
import "./about.css";
import Violet_transparent from "../../assets/Violet_transparent.png";
import Info from "./Info";
import Resume from "../../assets/Resume.pdf";

const About = () => {
  const [showResume, setShowResume] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageLayerRef = useRef(null);

  const resumeViewUrl =
    "https://drive.google.com/file/d/1fFYUB77KEFsH7hQfoUmcTAAs9WISzdq3/preview";
  const resumeDownloadUrl = Resume;

  const openResume = () => {
    if (window.innerWidth <= 768) {
      window.open(
        "https://drive.google.com/file/d/1fFYUB77KEFsH7hQfoUmcTAAs9WISzdq3/view",
        "_blank"
      );
    } else {
      setShowResume(true);
    }
  };

  const closeResume = () => setShowResume(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowResume(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!imageLayerRef.current) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      // Use an array of thresholds to catch visibility changes more precisely
      threshold: [0, 0.4],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // entry.isIntersecting is true when element crosses threshold going in viewport
        // false when crossing threshold going out viewport
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.4);
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(imageLayerRef.current);

    return () => {
      if (imageLayerRef.current) {
        observer.unobserve(imageLayerRef.current);
      }
    };
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Journey</span>

      <div className="about_container container grid">
        <div className="image_layer" ref={imageLayerRef}>
          <img
            src={Violet_transparent}
            alt="Violet Subject"
            className={`subject_img ${isVisible ? "scroll-animated" : ""}`}
          />
        </div>

        <div className="about_data">
          <Info />
          <p className="about_description">
            I thrive on authenticity and innovation—whether building software or
            exploring new ideas, I love turning curiosity into creation.{" "}
            <a href="#projects" className="about_link">
              Check out my projects!
            </a>
          </p>

          <button onClick={openResume} className="button button--flex">
            <span className="button-content">
              Violet's Resume <i className="uil uil-file-alt"></i>
            </span>
          </button>
        </div>
      </div>

      {showResume && (
        <div className="resume-viewer-overlay">
          <a
            href={resumeDownloadUrl}
            className="resume-download-button fixed-left"
            download="Violet_Anh_Nguyen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-import"></i> Download
          </a>

          <button
            onClick={closeResume}
            className="resume-close-button fixed-right"
          >
            <i className="uil uil-times"></i>
          </button>

          <div className="resume-preview-wrapper">
            <iframe
              src={resumeViewUrl}
              className="resume-iframe"
              allowFullScreen
              title="Violet's Resume"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
