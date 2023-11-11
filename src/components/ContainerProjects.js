import React from "react";

const ProjectItem = ({ name, link, description, repository, skills }) => (
  <div>
    <h5 className="w3-opacity">
      <b>{name}</b>
    </h5>
    <a
      href={link}
      className="w3-margin-right"
      target="_blank"
      rel="noopener noreferrer"
      title="Visit Website"
    >
      <span className="w3-tag w3-teal w3-round">
        <i className={`w3-padding-8 w3-large fa fa-external-link`}></i>
      </span>
    </a>
    <a
      href={repository}
      target="_blank"
      rel="noopener noreferrer"
      title="Repository"
    >
      <span className="w3-tag w3-teal w3-round">
        <i className={`w3-padding-8 w3-large fa fa-github`}></i>
      </span>
    </a>
    <p>Description: {description}</p>
    <p>Skills: {skills}</p>
    <hr />
  </div>
);

function ContainerProjects({ projects }) {
  return (
    <>
      {projects.map((project) => {
        return <ProjectItem key={project.id} {...project} />;
      })}
    </>
  );
}

export default ContainerProjects;
