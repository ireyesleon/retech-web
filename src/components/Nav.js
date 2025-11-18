import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-3">
      {/* Logo */}
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img
          id="logo-pic"
          src={require('../assets/images/clinIA.png')}
          alt="logo"
        />
      </NavLink>

      {/* Botón hamburguesa en móviles */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Opciones */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto" id="nav-options">
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Compañía
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Soluciones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Contáctanos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/resume" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Gobierno de datos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
