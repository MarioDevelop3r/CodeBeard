import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Section from './components/Section';
import Whatsapp from './components/Whatsapp';

const App = () => {
  return (
    <>
      <Router>
        <Whatsapp />
        <div>
          <Header />
          <Section />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

