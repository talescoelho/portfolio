import React from 'react'
import { NavLink } from 'react-router-dom'
import "./css/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Tales Coelho</h1>
        <span>Estudante de Desenvolvimento Web</span>
        </div>
      <div className="right">
        <NavLink exact to="/portfolio" activeClassName='is-active' className="link">Sobre</NavLink>
        <NavLink exact to="/portfolio/projects" activeClassName='is-active' className="link">Projetos</NavLink>
        <NavLink exact to="/portfolio/skills" activeClassName='is-active' className="link">Skills</NavLink>
        <NavLink exact to="/portfolio/links" activeClassName='is-active' className="link">Links</NavLink>
      </div>
    </div>
  )
}

export default Navbar
