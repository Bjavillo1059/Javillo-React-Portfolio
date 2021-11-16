import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "react-bootstrap";

import Miscellaneous from "./components/pages/MiscMain";
import AboutMeMain from "./components/pages/AboutMeMain";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import ProjectsMain from "./components/pages/ProjectsMain";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Home />
          <ProjectsMain />
          <AboutMeMain />
          <Miscellaneous />                
        </Switch>
      </Router>
    </>
  );
}

export default App;
