import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import CarouselFade from './components/Carousel';

function App() {
  return (
    <>
    <Header />
    <CarouselFade />
    <Projects />
    <Footer />
    </>
  );
}

export default App;
