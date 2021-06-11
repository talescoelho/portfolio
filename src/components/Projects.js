import React from 'react'
import BoxProject from './BoxProject';
import './css/Show.css';
import './css/Projects.css';

function Projects() {
  const data = [ 
    {
      trybeWarts: {
      url: "https://raw.githubusercontent.com/tryber/sd-011-project-trybewarts/e8361258a88e7b3491babf50bc4c640e257e52bb/images/trybewarts-colored.svg",
      route: "https://github.com/tryber/sd-011-project-trybewarts/pull/113",
      }
    },
    {
      libraryCardCrud: {
        url: "",
      route: "",
      }
    }
  ]



  return (
    <div className="show">
      <h1>
        Projetos
      </h1>
      <div className="box-container">
        <BoxProject data={ data[0] } />
      </div>
    </div>
  )
}

export default Projects
