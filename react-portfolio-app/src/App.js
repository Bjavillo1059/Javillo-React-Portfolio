import './App.css';
import 'react-bootstrap';
import FooterBlock from './components/FooterBlock';
import Projects from './components/Projects';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
    <HeroSection />
    <FooterBlock />
    </Switch>
    </Router>
    </>
  );
}

export default App;
