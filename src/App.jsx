import { BrowserRouter as Router } from 'react-router-dom';


import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Whatsapp from './components/Whatsapp';
import Home from './components/Home';
import Servicios from './components/Services';

const App = () => {
  return (
    <>
      <Router>
        <Whatsapp />
        <div>
          <Header />
          <Home />
          <Portfolio />
          <Contact />
          <Servicios />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

