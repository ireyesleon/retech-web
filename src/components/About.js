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
      {/* ========== CATEGORY CARDS (NEW DESIGN) ========== */}
<div className="row g-4 mb-5 justify-content-center">

  {/* Celulares */}
  <div className="col-10 col-md-3">
    <Link
      to="/deals/celulares"
      className="text-decoration-none"
    >
      <div
        className="card shadow-sm border-0 text-center p-4 h-100 category-card"
        style={{ backgroundColor: "#f4fdf6" }}
      >
        <div className="fs-1 mb-2">📱</div>
        <h5 className="fw-bold text-dark">Celulares</h5>
        <p className="text-muted small mb-0">
          Los mejores equipos reacondicionados.
        </p>
      </div>
    </Link>
  </div>

  {/* Laptops */}
  <div className="col-10 col-md-3">
    <Link
      to="/deals/laptops"
      className="text-decoration-none"
    >
      <div
        className="card shadow-sm border-0 text-center p-4 h-100 category-card"
        style={{ backgroundColor: "#f2f7ff" }}
      >
        <div className="fs-1 mb-2">💻</div>
        <h5 className="fw-bold text-dark">Laptops</h5>
        <p className="text-muted small mb-0">
          Productividad, rendimiento y precio justo.
        </p>
      </div>
    </Link>
  </div>

  {/* Tablets */}
  <div className="col-10 col-md-3">
    <Link
      to="/deals/tablets"
      className="text-decoration-none"
    >
      <div
        className="card shadow-sm border-0 text-center p-4 h-100 category-card"
        style={{ backgroundColor: "#fff8f2" }}
      >
        <div className="fs-1 mb-2">📟</div>
        <h5 className="fw-bold text-dark">Tablets</h5>
        <p className="text-muted small mb-0">
          Portabilidad y desempeño para todos.
        </p>
      </div>
    </Link>
    
  </div>
  <Link to="/deals" className="btn btn-success btn-lg mt-3 col-12 col-sm-2 col-md-6 col-lg-4">
          Ver todas las ofertas
        </Link>
</div>


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
                  style={{ maxHeight: "55vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>iPhone 17 – Reacondicionado Premium</h5>
                  <p>Hasta 35% de descuento</p>
                </div>
              </div>

              {/* Deal 2 */}
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require('../assets/images/macbook-deal.jpg')}
                  alt="MacBook Deal"
                  style={{ maxHeight: "55vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>HP EliteBook 840 G6 – Reacondicionado</h5>
                  <p>Ahorra hasta $4,000 MXN</p>
                </div>
              </div>

              {/* Deal 3 */}
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require('../assets/images/ipad-deal.jpg')}
                  alt="iPad Deal"
                  style={{ maxHeight: "55vh", objectFit: "cover" }}
                />
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
      <div className="text-center px-3 mb-5">
        <h3 className="fw-bold mb-3">Ofertas que no puedes dejar pasar</h3>

        <p>
          En Retech seleccionamos los mejores dispositivos reacondicionados y te los ofrecemos 
          a precios increíbles. Smartphones, laptops y tablets con garantía y calidad certificada.
        </p>

        <p>
          Cada equipo pasa por un proceso de prueba de más de 20 puntos para asegurar el máximo rendimiento.  
          Calidad premium, precio justo.
        </p>
      </div>

      {/* ================= SUSTENTABILIDAD & PRODUCT EXCHANGE ================= */}
<div className="row g-4 align-items-stretch">

  {/* Sostenibilidad */}
  <div className="col-12 col-md-6">
    <div
      className="card h-100 shadow-sm border-0 p-3"
      style={{ backgroundColor: "#e9f7ef" }} // verde suave
    >
      <div className="card-body">
        <h4 className="fw-bold mb-3">🌱 Tecnología más responsable con el planeta</h4>

        <p>
          Cada dispositivo reacondicionado que eliges evita que un equipo más
          termine como residuo electrónico y reduce la demanda de nuevas materias
          primas, agua y energía.
        </p>

        <ul className="text-start mb-3">
          <li>Disminuimos la huella de carbono extendiendo la vida útil de cada equipo.</li>
          <li>Reducimos residuos electrónicos dándole una segunda vida a la tecnología.</li>
          <li>Reutilizamos componentes en buen estado y reciclamos el resto de forma responsable.</li>
        </ul>

        <p className="text-muted small mb-0">
          Tu compra no solo cuida tu bolsillo, también cuida el planeta.
          Pequeñas decisiones, gran impacto.
        </p>
      </div>
    </div>
  </div>

  {/* Product Exchange */}
  <div className="col-12 col-md-6">
    <div
      className="card h-100 shadow-sm border-0 p-3"
      style={{ backgroundColor: "#e9f2fb" }} // azul suave
    >
      <div className="card-body">
        <h4 className="fw-bold mb-3">🔄 Programa Product Exchange</h4>

        <p>
          Trae tu celular, tablet o laptop usados y obtén un descuento en tu próxima compra Retech.
          Nosotros nos encargamos de reacondicionarlos o reciclarlos correctamente.
        </p>

        <ol className="text-start mb-3">
          <li>Cuéntanos qué equipo quieres entregar y su estado general.</li>
          <li>Te damos una estimación de valor y el descuento que puedes obtener.</li>
          <li>Entregas tu equipo en tienda o por paquetería y aplicas tu descuento en la compra.</li>
        </ol>

        <p className="text-muted small">
          Mientras mejor estado tenga tu dispositivo, mayor puede ser tu descuento.
        </p>

        <div className="d-flex flex-wrap gap-2">
          <Link to="/product-exchange" className="btn btn-outline-success">
            Conoce el programa
          </Link>
          <Link to="/product-exchange/simula" className="btn btn-outline-secondary">
            Simula tu descuento
          </Link>
        </div>
      </div>
    </div>
  </div>

</div>

    </section>
  );
};

export default About;
