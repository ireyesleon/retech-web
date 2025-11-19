import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import CelularesList from "./components/CelularesList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        {/* Home / landing */}
        <Route path="/" element={<About />} />

        {/* Alias opcional: /about también muestra About */}
        <Route path="/about" element={<About />} />

        {/* Rutas de deals */}
        <Route path="/deals/celulares" element={<CelularesList />} />

        {/* Cualquier cosa rara → About */}
        <Route path="*" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
