import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "react-bootstrap";

import Miscellaneous from "./components/Misc";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/misc" component={Miscellaneous} />           
        </Switch>
      </Router>
    </>
  );
}

export default App;
