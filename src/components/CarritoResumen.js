import React, { useState } from "react";

export default function CarritoResumen({ carrito, onClose }) {
  const [garantia, setGarantia] = useState("ninguna");

  const subtotal = carrito.reduce((acc, item) => acc + item.precio, 0);

  const costoGarantia =
    garantia === "6m" ? 299 :
    garantia === "12m" ? 499 :
    0;

  const total = subtotal + costoGarantia;

  if (carrito.length === 0) {
    return (
      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body text-center">
          <h5 className="mb-2">🛒 Tu carrito</h5>
          <p className="text-muted mb-0">Aún no has agregado productos.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">🛒 Tu carrito</h5>
          {onClose && (
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
          )}
        </div>

        {/* Lista de productos */}
        <div className="list-group mb-3">
          {carrito.map((item) => (
            <div
              key={item.id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "contain",
                    borderRadius: "8px",
                    backgroundColor: "#f8f9fa",
                    padding: "4px",
                  }}
                />
                <div>
                  <h6 className="mb-1">{item.nombre}</h6>
                  <p className="mb-0 text-muted small">{item.marca}</p>
                </div>
              </div>
              <div className="fw-bold text-success">
                ${item.precio.toLocaleString("es-MX")}
              </div>
            </div>
          ))}
        </div>

        {/* Garantía extra */}
        <div className="mb-3">
          <h6 className="fw-bold mb-2">Agregar garantía</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="garantia"
              id="garantiaNone"
              value="ninguna"
              checked={garantia === "ninguna"}
              onChange={(e) => setGarantia(e.target.value)}
            />
            <label className="form-check-label" htmlFor="garantiaNone">
              Sin garantía adicional (incluye garantía básica del equipo).
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="garantia"
              id="garantia6m"
              value="6m"
              checked={garantia === "6m"}
              onChange={(e) => setGarantia(e.target.value)}
            />
            <label className="form-check-label" htmlFor="garantia6m">
              Garantía extendida 6 meses (+ $299 MXN).
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="garantia"
              id="garantia12m"
              value="12m"
              checked={garantia === "12m"}
              onChange={(e) => setGarantia(e.target.value)}
            />
            <label className="form-check-label" htmlFor="garantia12m">
              Garantía extendida 12 meses (+ $499 MXN).
            </label>
          </div>
        </div>

        {/* Resumen de pago */}
        <div className="border-top pt-3">
          <p className="mb-1">
            Subtotal:{" "}
            <strong>${subtotal.toLocaleString("es-MX")}</strong>
          </p>
          <p className="mb-1">
            Garantía:{" "}
            <strong>${costoGarantia.toLocaleString("es-MX")}</strong>
          </p>
          <p className="mb-3">
            Total:{" "}
            <strong className="fs-5 text-success">
              ${total.toLocaleString("es-MX")}
            </strong>
          </p>

          <button className="btn btn-success w-100">
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  );
}
