import React from 'react';
import { NavLink } from "react-router-dom";
import { FaUser, FaBoxOpen, FaQuestionCircle, FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-3 py-2 d-flex align-items-center"
  style={{
    background: "linear-gradient(90deg, #0C5A5A 0%, #1A7A76 50%, #4BA09A 100%)"
  }}>

  {/* Logo izquierda */}
  <NavLink className="navbar-brand d-flex align-items-center me-4" to="/">
    <img
      id="logo-pic"
      src={require('../assets/images/retech-logo.png')}
      alt="logo"
      style={{ width: "120px", height: "auto", borderRadius: "10px"}}
    />
  </NavLink>

  {/* Search bar CENTRADA */}
  <div className="flex-grow-1 d-none d-lg-flex justify-content-center">
    <div className="input-group" style={{ maxWidth: "450px", width: "100%" }}>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Buscar smartphones, laptops, tablets..."
      />
      <button className="btn btn-warning">
        <FaSearch size={18} />
      </button>
    </div>
  </div>

  {/* Opciones DERECHA */}
  <div className="d-flex align-items-center gap-4 ms-auto">

    {/* Mi cuenta */}
    <NavLink to="/account" className="text-dark text-decoration-none d-flex align-items-center gap-2 nav-icon">
      <FaUser size={20} />
      <span className="d-none d-md-inline">Mi cuenta</span>
    </NavLink>

    {/* Mis compras */}
    <NavLink to="/orders" className="text-dark text-decoration-none d-flex align-items-center gap-2 nav-icon">
      <FaBoxOpen size={20} />
      <span className="d-none d-md-inline">Mis compras</span>
    </NavLink>

    {/* Ayuda */}
    <NavLink to="/help" className="text-dark text-decoration-none d-flex align-items-center gap-2 nav-icon">
      <FaQuestionCircle size={20} />
      <span className="d-none d-md-inline">Ayuda</span>
    </NavLink>

  </div>

</nav>
  );
};

export default Nav;
