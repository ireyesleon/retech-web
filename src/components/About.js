import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const About = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("dealsCarousel");
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 4000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <section className="container py-5">
      {/* ========= HERO PRINCIPAL ========= */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-lg-10 text-center">
          <h1 className="fw-bold mb-2">
            Estrena celular, laptop o tablet{" "}
            <span className="text-success">sin endeudarte</span>
          </h1>
          <p className="lead mb-0">
            Equipos reacondicionados listos para WhatsApp, Facebook, clases en
            línea y trabajo, con garantía incluida.
          </p>
        </div>
      </div>

      {/* ========== CATEGORY CARDS ========== */}
      <div className="row g-4 mb-5 justify-content-center">
        {/* Celulares */}
        <div className="col-10 col-md-3">
          <Link to="/deals/celulares" className="text-decoration-none">
            <div
              className="card shadow-sm border-0 text-center p-4 h-100 category-card"
              style={{ backgroundColor: "#f4fdf6" }}
            >
              <div className="fs-1 mb-2">📱</div>
              <h5 className="fw-bold text-dark">Celulares</h5>
              <p className="text-muted small mb-1">
                Para WhatsApp, redes y fotos.
              </p>
              <p className="fw-bold text-success mb-0">Desde $3,999 MXN</p>
            </div>
          </Link>
        </div>

        {/* Laptops */}
        <div className="col-10 col-md-3">
          <Link to="/deals/laptops" className="text-decoration-none">
            <div
              className="card shadow-sm border-0 text-center p-4 h-100 category-card"
              style={{ backgroundColor: "#f2f7ff" }}
            >
              <div className="fs-1 mb-2">💻</div>
              <h5 className="fw-bold text-dark">Laptops</h5>
              <p className="text-muted small mb-1">
                Para tareas, trabajo y clases en línea.
              </p>
              <p className="fw-bold text-success mb-0">
                Mucho más baratas que nuevas.
              </p>
            </div>
          </Link>
        </div>

        {/* Tablets */}
        <div className="col-10 col-md-3">
          <Link to="/deals/tablets" className="text-decoration-none">
            <div
              className="card shadow-sm border-0 text-center p-4 h-100 category-card"
              style={{ backgroundColor: "#fff8f2" }}
            >
              <div className="fs-1 mb-2">📟</div>
              <h5 className="fw-bold text-dark">Tablets</h5>
              <p className="text-muted small mb-1">
                Para niños, estudiar y ver series.
              </p>
              <p className="fw-bold text-success mb-0">
                Opciones para todos los presupuestos.
              </p>
            </div>
          </Link>
        </div>

        {/* Botón general ofertas */}
        <div className="col-12 text-center mt-3">
          <Link
            to="/deals"
            className="btn btn-success btn-lg col-12 col-sm-6 col-md-4"
          >
            Ver todas las ofertas
          </Link>
        </div>
      </div>

      {/* ================= IMAGES ROW (TOP) ================= */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8">
          <div id="dealsCarousel" className="carousel slide rounded shadow">
            <div className="carousel-inner">
              {/* Deal 1 */}
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={require("../assets/images/iphone-deal.jpg")}
                  alt="iPhone Deal"
                  style={{ maxHeight: "55vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>Ahorra en tu próximo iPhone reacondicionado</h5>
                  <p>Hasta 35% más barato que uno nuevo.</p>
                </div>
              </div>

              {/* Deal 2 */}
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require("../assets/images/macbook-deal.jpg")}
                  alt="MacBook Deal"
                  style={{ maxHeight: "55vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>Laptops para trabajo y estudio</h5>
                  <p>Ahorra hasta $4,000 MXN en equipo reacondicionado.</p>
                </div>
              </div>

              {/* Deal 3 */}
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={require("../assets/images/ipad-deal.jpg")}
                  alt="iPad Deal"
                  style={{ maxHeight: "55vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>Tablets para la escuela y entretenimiento</h5>
                  <p>Ideal para niños y clases en línea.</p>
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
      <div className="text-center px-3 mb-5">
        <h3 className="fw-bold mb-3">Calidad que se nota, precio que sí alcanza</h3>

        <p>
          En Retech revisamos cada celular, laptop y tablet para que funcione
          bien en tu día a día: redes sociales, llamadas, videoclases y trabajo.
        </p>

        <p>
          Si algo no sale como esperabas, cuentas con garantía y atención para
          ayudarte a resolverlo. Que sea reacondicionado no significa que sea
          complicado: lo recibes listo para usar.
        </p>
      </div>

      {/* ================= SUSTENTABILIDAD & PRODUCT EXCHANGE ================= */}
      <div className="row g-4 align-items-stretch">
        {/* Sostenibilidad */}
        <div className="col-12 col-md-6">
          <div
            className="card h-100 shadow-sm border-0 p-3"
            style={{ backgroundColor: "#e9f7ef" }}
          >
            <div className="card-body">
              <h4 className="fw-bold mb-3">
                🌱 Cuida tu bolsillo y también al planeta
              </h4>

              <p>
                Cuando eliges un equipo reacondicionado, ayudas a que menos
                dispositivos terminen en la basura y se usen mejor los recursos.
              </p>

              <ul className="text-start mb-3">
                <li>
                  Disminuimos residuos electrónicos al alargar la vida de cada
                  equipo.
                </li>
                <li>
                  Reutilizamos piezas en buen estado y reciclamos el resto de
                  forma responsable.
                </li>
                <li>
                  Reducimos la necesidad de fabricar tantos equipos nuevos.
                </li>
              </ul>

              <p className="text-muted small mb-3">
                Tu próxima compra puede ser más barata y más amigable con el
                planeta.
              </p>

              {/* Video de sustentabilidad */}
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/pJHRiXRhhlg"
                  title="Sustentabilidad y tecnología"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Product Exchange */}
<div className="col-12 col-md-6">
  <div
    className="card h-100 shadow-sm border-0 p-3"
    style={{ backgroundColor: "#e9f2fb" }}
  >
    <div className="card-body">
      <h4 className="fw-bold mb-3">🔄 Programa Product Exchange</h4>

      <p>
        Trae tu celular, tablet o laptop usados y obtén un descuento en
        tu próxima compra Retech. Nosotros lo reacondicionamos o lo
        reciclamos correctamente.
      </p>

      <ol className="text-start mb-3">
        <li>Cuéntanos qué equipo quieres entregar y su estado.</li>
        <li>Te damos una estimación de valor y tu posible descuento.</li>
        <li>
          Entregas tu equipo y aplicas el descuento en tu nueva compra.
        </li>
      </ol>

      <p className="text-muted small mb-3">
        Mientras mejor estado tenga tu dispositivo, mayor puede ser tu
        descuento.
      </p>

      {/* Imagen exchange con mismo tamaño que el video */}
      <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm mb-3">
        <img
          src={require("../assets/images/exchange.jpg")}
          alt="Programa de intercambio Retech"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <div className="d-flex flex-wrap gap-2">
        <Link to="/product-exchange" className="btn btn-outline-success">
          Conoce el programa
        </Link>
        <Link
          to="/product-exchange/simula"
          className="btn btn-outline-secondary"
        >
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
