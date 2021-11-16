import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
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
          <Route path='/projects' component={Projects} />
          <Route path='/contactInfo' component={ContactInfo} />
          <Route path='/miscInfo' component={Misc} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
