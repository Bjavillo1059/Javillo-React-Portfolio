import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import ProjectsMain from './components/pages/ProjectsMain';
import ContactInfo from './components/pages/ContactInfo';
import Misc from './components/pages/Misc';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/projectsMain' exact component={ProjectsMain} />
          <Route path='/contactInfo' component={ContactInfo} />
          <Route path='/miscInfo' component={Misc} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
