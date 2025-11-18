import React from 'react';
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-3 py-2 bg-light">
      
      {/* Logo */}
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img
          id="logo-pic"
          src={require('../assets/images/clinIA.png')}
          alt="logo"
          style={{ width: "120px", height: "auto" }}
        />
      </NavLink>

      {/* Search bar centrada */}
      <div className="d-none d-lg-flex flex-grow-1 mx-4">
        <div className="input-group">
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

      {/* Iconos lado derecho */}
      <div className="d-flex align-items-center gap-3">
        <NavLink to="/account" className="nav-icon">
          <FaUser size={20} />
        </NavLink>

        <NavLink to="/cart" className="nav-icon position-relative">
          <FaShoppingCart size={20} />
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Menú inferior de categorías */}
      <div className="collapse navbar-collapse mt-2" id="navbarNav">
        <ul className="navbar-nav mx-auto" id="nav-options">

          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/smartphones">Smartphones</NavLink>
          </li>

          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/laptops">Laptops</NavLink>
          </li>

          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/tablets">Tablets</NavLink>
          </li>

          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/accesorios">Accesorios</NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Nav;
