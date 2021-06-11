import React from 'react'
import BoxProject from './BoxProject';
import './css/Show.css';
import './css/Projects.css';

function Projects() {
  const data = [ 
    {
      project: {
        name: "trybeWarts",
        url: "https://raw.githubusercontent.com/tryber/sd-011-project-trybewarts/e8361258a88e7b3491babf50bc4c640e257e52bb/images/trybewarts-colored.svg",
        route: "https://github.com/tryber/sd-011-project-trybewarts/pull/113",
      }
    },
    {
      project: {
        name: "libraryCardCrud",
        url: "https://raw.githubusercontent.com/talescoelho/portfolio/master/src/components/image/MovieListCrud.png",
      route: "https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/3",
      }
    }
  ]



  return (
    <div className="show">
      <h1>
        Projetos
      </h1>
      <div className="box-container">
        {data.map((element) => <BoxProject data={ element } />)}
      </div>
    </div>
  )
}

export default Projects
