import React from 'react'
import { Switch, Route } from "react-router-dom";
import Portfolio from "./Portfolio"
import Projects from "./Projects"
import Skills from "./Skills"
import Links from "./Links"

import './css/Pages.css'

function Pages() {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/portfolio/">
          <Portfolio />
        </Route>
        <Route path="/portfolio/projects">
          <Projects />
        </Route>
        <Route path="/portfolio/skills">
          <Skills />
        </Route>
        <Route path="/portfolio/links">
          <Links />
        </Route>
      </Switch>
    </div>
  )
}

export default Pages
