import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const About = () => {

  useEffect(() => {
    // Inicializa el carrusel automáticamente con 4 segundos de intervalo
    const carouselElement = document.getElementById('aboutCarousel');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 4000, // 4 segundos
        ride: 'carousel'
      });
    }
  }, []);

  return (
    <div className="container-fluid p-0 main">

      {/* Hero Section */}
      <section className="text-center text-white bg-dark py-5">
        <div className="container">
          <img
            src={require('../assets/images/clinIA.png')}
            alt="CliniIA Logo"
            className="mb-4"
            style={{ maxWidth: "200px"}}
          />
          <h1 className="fw-bold">CliniIA – Diagnóstico Inteligente y Accesible</h1>
          <p className="lead mt-3">
            Democratizando el acceso a diagnósticos médicos de calidad mediante Inteligencia Artificial.
          </p>
          <Link to="/portfolio" className="btn btn-primary btn-lg mt-4">
            Conoce más
          </Link>
        </div>
      </section>

      {/* Introducción con Carrusel */}
      <section className="container py-5">
        <div className="row align-items-center">

          {/* Carrusel */}
          <div className="col-12 col-md-6 mb-4">
            <div
              id="aboutCarousel"
              className="carousel slide rounded shadow"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={require('../assets/images/centro-salud.jpg')}
                    alt="Centro de salud"
                    style={{ maxHeight: "48vh", objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require('../assets/images/diagnostico.png')}
                    alt="Diagnóstico IA"
                    style={{ maxHeight: "48vh", objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require('../assets/images/medicos.jpg')}
                    alt="Médicos trabajando"
                    style={{ maxHeight: "48vh", objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>

              {/* Controles */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#aboutCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#aboutCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>

          {/* Texto */}
          <div className="col-12 col-md-6">
            <h2 className="fw-bold mb-3 text-center">¿Qué es CliniIA?</h2>
            <p className='text-center'>
              CliniIA surge como respuesta a una de las problemáticas más urgentes en el sector salud:
              la falta de acceso oportuno y confiable a diagnósticos médicos, especialmente en comunidades
              vulnerables con escasez de recursos. La plataforma busca democratizar el acceso a herramientas
              de diagnóstico de alta calidad mediante inteligencia artificial.
            </p>
            <p className='text-center'>
              Nuestro valor diferencial radica en combinar innovación tecnológica con compromiso social,
              integrando modelos de IA ligeros capaces de operar en entornos con baja infraestructura y
              ofreciendo interfaces accesibles a todo tipo de usuarios.
            </p>
            <div className="d-flex justify-content-center mt-3">
            <Link to="/portfolio" className="btn btn-primary btn-lg">
              Conoce más
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problemática */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Problemática</h2>
          <p className="text-center mx-auto col-md-10">
            En muchos países, especialmente en zonas económicamente vulnerables, existe una falta de acceso
            oportuno a diagnósticos médicos precisos, lo cual retrasa tratamientos, eleva costos y aumenta
            complicaciones. La sobrecarga en hospitales provoca demoras en la lectura de estudios médicos,
            generando consecuencias graves en la atención y continuidad del paciente.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold">Misión</h3>
            <p>
              Democratizar el acceso a diagnósticos médicos de calidad mediante inteligencia artificial,
              acortando tiempos, reduciendo errores y mejorando resultados clínicos, especialmente en
              comunidades desatendidas.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold">Visión</h3>
            <p>
              Ser la plataforma líder de diagnóstico médico inteligente en América Latina y otras regiones
              con acceso limitado, revolucionando la forma en que se detectan y tratan las enfermedades.
            </p>
          </div>
        </div>
      </section>

      {/* Productos y Servicios */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Productos y Servicios</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">CliniIA Cloud</h5>
              <p>
                Plataforma web + app con reportes diagnósticos automáticos e integración de expediente
                médico electrónico.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Diagnóstico Diferencial</h5>
              <p>
                Módulo NLP que permite introducir síntomas o notas clínicas y sugiere posibles diagnósticos
                priorizados.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">RiskPredict</h5>
              <p>
                Análisis predictivo de riesgo (sepsis, ECV, insuficiencia respiratoria) con alarmas
                tempranas basadas en datos de signos vitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mercado Objetivo */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">Mercado Objetivo</h2>
        <p className="text-center mx-auto col-md-10">
          Clínicas con escaso personal especializado, hospitales públicos en países en desarrollo,
          gobiernos y ONGs enfocados en salud comunitaria, empresas de telemedicina y pacientes
          económicamente vulnerables. En fases avanzadas, se ampliará hacia clínicas rurales y
          sistemas de salud públicos regionales.
        </p>
      </section>

      {/* User Personas */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Nuestros Usuarios</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">👨‍⚕️ Médicos</h5>
              <p>
                Profesionales en clínicas con recursos limitados y alto volumen de pacientes.
                Buscan diagnósticos rápidos y confiables con herramientas simples y seguras.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">👩‍👧 Pacientes</h5>
              <p>
                Personas trabajadoras de comunidades vulnerables que requieren atención médica
                rápida, asequible y confiable, con explicaciones claras y seguimiento sencillo.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
