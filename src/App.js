import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/cliniia" element={<About />}></Route>
        <Route path="/" element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
