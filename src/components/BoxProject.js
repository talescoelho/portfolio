import React from 'react';
import './css/Show.css';
import './css/Projects.css';

function BoxProject(props) {
  return (
    <div>
      <a
        href={ props.data.route }
        target="_blank"
        rel="noopener noreferrer"
        className="project-box link"
      >
        <img className="img-container" src={ props.data.url } alt="TrybeWarts"></img>
      </a>
    </div>
  );
}

export default BoxProject;
