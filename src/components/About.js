import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const About = () => {

  useEffect(() => {
    const carouselElement = document.getElementById('dealsCarousel');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 4000,
        ride: 'carousel'
      });
    }
  }, []);

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Ofertas destacadas</h2>

      {/* ================= IMAGES ROW (TOP) ================= */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8">
          <div
            id="dealsCarousel"
            className="carousel slide rounded shadow"
          >
            <div className="carousel-inner">

              {/* Deal 1 */}
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={require('../assets/images/iphone-deal.jpg')}
                  alt="iPhone Deal"
                  style={{ maxHeight: "48vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>iPhone 12 – Reacondicionado Premium</h5>
                  <p>Hasta 35% de descuento</p>
                </div>
              </div>

              {/* Deal 2 */}
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require('../assets/images/macbook-deal.jpg')}
                  alt="MacBook Deal"
                  style={{ maxHeight: "48vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>MacBook Pro – Reacondicionado</h5>
                  <p>Ahorra hasta $4,000 MXN</p>
                </div>
              </div>

              {/* Deal 3 */}
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require('../assets/images/ipad-deal.jpg')}
                  alt="iPad Deal"
                  style={{ maxHeight: "48vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>iPad 9na Gen – Como Nuevo</h5>
                  <p>Desde $3,999 MXN</p>
                </div>
              </div>

            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#dealsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#dealsCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= TEXT SECTION (BOTTOM) ================= */}
      <div className="text-center px-3">
        <h3 className="fw-bold mb-3">Ofertas que no puedes dejar pasar</h3>

        <p>
          En Retech seleccionamos los mejores dispositivos reacondicionados y te los ofrecemos 
          a precios increíbles. Smartphones, laptops y tablets con garantía y calidad certificada.
        </p>

        <p>
          Cada equipo pasa por un proceso de prueba de más de 20 puntos para asegurar el máximo rendimiento.  
          Calidad premium, precio justo.
        </p>

        <Link to="/deals" className="btn btn-success btn-lg mt-3">
          Ver todas las ofertas
        </Link>
      </div>
    </section>
  );
};

export default About;
