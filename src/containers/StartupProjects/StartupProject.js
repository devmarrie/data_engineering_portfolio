import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  <div className="project-detail">
                    <h3
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h3>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.architecture.title}
                    </h5>
                    {project.architecture.architectureImage ? (
                      <div className="project-image">
                        <img
                          src={project.architecture.architectureImage}
                          alt={project.architecture.title}
                          // className="card-image"
                        ></img>
                      </div>
                    ) : null}
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.technologies.title}
                    </h5>
                    <p
                   className={
                    isDark ? "dark-mode card-subtitle" : "card-subtitle"
                  }
                    >{project.technologies.stack}</p> 
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.dashboard.title}
                    </h5>
                    {project.dashboard.dashboardImage ? (
                      <div className="project-image">
                        <img
                          src={project.dashboard.dashboardImage}
                          alt={project.dashboard.title}
                          className="card-image"
                        ></img>
                      </div>
                    ) : null}
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.achievements.title}
                    </h5>
                    <p
                      className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}
                    >
                      {project.achievements.desc.map((point, index) => (
                        <span key={index}>
                          - {point}
                          <br />
                        </span>
                      ))}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openProjectInNewWindow(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
