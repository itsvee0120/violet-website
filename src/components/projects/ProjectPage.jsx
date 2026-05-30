import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./projects.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import ProjectDetail from "./ProjectDetail";
import { projects } from "./Data";

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  return (
    <>
      <Header />
      <main className="main">
        <section className="projects section">
          {project ? (
            <ProjectDetail
              project={project}
              onBack={() => navigate("/#projects")}
            />
          ) : (
            <div className="project_detail">
              <h2 className="project_detail_title">Project not found</h2>
              <Link to="/" className="project_detail_btn">
                Back to Home
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ProjectPage;
