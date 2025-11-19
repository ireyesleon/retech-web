import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import CelularesList from './components/CelularesList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/retech" element={<About />}></Route>
        <Route path="/" element={<About />}></Route>
        <Route path="/deals/celulares" element={<CelularesList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
