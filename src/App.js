import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import CelularesList from "./components/CelularesList";
import Laptops from "./components/Laptops";
import Tablets from "./components/Tablets";
import CarritoPage from "./components/CarritoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        {/* Home / About */}
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/retech" element={<About />} />

        {/* Listados */}
        <Route path="/deals/celulares" element={<CelularesList />} />
        <Route path="/deals/laptops" element={<Laptops />} />
        <Route path="/deals/tablets" element={<Tablets />} />

        {/* Carrito */}
        <Route path="/carrito" element={<CarritoPage />} />

        {/* Cualquier ruta rara → About */}
        <Route path="*" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
