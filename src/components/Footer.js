import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white py-4 mt-5"
      style={{
        background: "linear-gradient(90deg, #0f4740, #1a6f66)" // Retech green gradient
      }}
    >
      <div className="container text-center">

        {/* Logo */}
        <div className="mb-3">
          <h4 className="fw-bold">Retech</h4>
        </div>

        {/* Centered Links */}
        <div className="d-flex justify-content-center gap-4 mb-3 flex-wrap">
          <a href="/account" className="text-white text-decoration-none">Mi cuenta</a>
          <a href="/orders" className="text-white text-decoration-none">Mis compras</a>
          <a href="/help" className="text-white text-decoration-none">Ayuda</a>
          <a href="/about" className="text-white text-decoration-none">Acerca de</a>
        </div>

        {/* Copy */}
        <p className="mb-0 text-center">
          © {new Date().getFullYear()} Retech – Electrónicos reacondicionados con garantía.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
