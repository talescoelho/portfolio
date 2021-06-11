import React from 'react';
import './css/Show.css';
import './css/Projects.css';

function BoxProject(props) {
  const { project } = props.data;
  return (
    <div>
      <a
        href={ project.route }
        target="_blank"
        rel="noopener noreferrer"
        className="project-box link"
      >
        <img className="img-container" src={ project.url } alt={ project.name }></img>
      </a>
    </div>
  );
}

export default BoxProject;
