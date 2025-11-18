import React from 'react';
import Demo from "../assets/demo.mp4";

const Portfolio = () => {
  return (
    <section className="container py-5">
      <h1 className="fw-bold text-center mb-5">Productos y Servicios</h1>

      {/* Fase 1 */}
      <h2 className="fw-bold text-center mb-4">Fase 1</h2>
      <div className="row g-4 mb-5">

        {/* Panel de control seguimiento pacientes */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">📋 Panel de control para seguimiento de pacientes</h5>
              <ul className="list-unstyled mt-3">
                <li>Confirmaciones de cita</li>
                <li>Análisis y seguimiento de tratamientos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plataforma CliniIA Cloud */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">💻 Plataforma CliniIA Cloud (web + app)</h5>
              <ul className="list-unstyled mt-3">
                <li>Generación automática de reportes diagnósticos</li>
                <li>Integración de expediente médico electrónico</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Sección de demostración en video */}
<div className="container my-5">
  <h2 className="fw-bold text-center mb-4">
    Demostración de panel de control para seguimiento de pacientes
  </h2>

  {/* Row del video */}
  <div className="row justify-content-center mb-4">
    <div className="col-12 col-md-6 d-flex justify-content-center">
      <video
        src={Demo}
        controls
        className="rounded shadow-sm"
        style={{ width: "100%", maxWidth: "400px", height: "auto" }}
      />
    </div>
  </div>

  {/* Row de las imágenes */}
  <div className="row justify-content-center g-3">
    <div className="col-12 col-md-5 d-flex justify-content-center">
      <img
        src={require('../assets/images/cita1.png')}
        alt="Screenshot 1"
        className="rounded shadow-sm"
        style={{ width: "100%", maxWidth: "300px", height: "auto" }}
      />
    </div>
    <div className="col-12 col-md-5 d-flex justify-content-center">
      <img
        src={require('../assets/images/cita2.png')}
        alt="Screenshot 2"
        className="rounded shadow-sm"
        style={{ width: "100%", maxWidth: "300px", height: "auto" }}
      />
    </div>
  </div>
</div>

      {/* Fase 2 */}
      <h2 className="fw-bold text-center mb-4">Fase 2</h2>
      <div className="row g-4">

        {/* CliniIA Cloud - Subida de imágenes */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">📷 Subida de imágenes médicas</h5>
              <ul className="list-unstyled mt-3">
                <li>Radiografías, TAC, ultrasonidos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diagnóstico Diferencial */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">🧠 CliniIA Diagnóstico Diferencial (módulo NLP)</h5>
              <ul className="list-unstyled mt-3">
                <li>Introducción de síntomas o notas clínicas</li>
                <li>Sugerencia de diagnósticos posibles, priorizados por probabilidad</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RiskPredict */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">⚠️ CliniIA RiskPredict</h5>
              <ul className="list-unstyled mt-3">
                <li>Análisis predictivo de riesgo (sepsis, ECV, insuficiencia respiratoria, etc.)</li>
                <li>Alarmas tempranas con base en datos de signos vitales y antecedentes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Panel de control salud pública */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">🏥 Panel de control para entidades de salud pública</h5>
              <ul className="list-unstyled mt-3">
                <li>Epidemiología</li>
                <li>Detección de brotes</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
