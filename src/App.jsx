
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Curriculum from './components/Curriculum';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Section from './components/Section';
import Skills from './components/Skills';
import Home from './components/Home';
import ChatBox from './components/Chatbox';
import CallbellScript from './components/WhatsappApi';
import "./App.css";

const App = () => {
  return (
    <>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Section />
        <Portfolio />
        <Contact />
        <AboutMe />
        <Skills />
        <Curriculum />
        <ChatBox />
        <Footer />
        <CallbellScript />
       
      </div>
    </Router>
    <div>

<div>
      
</div>

<CallbellScript token="K1XCoQ5FeHZ29Mwo76zCiB9D" />
</div>


</>
  );
}

export default App;
