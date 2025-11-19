import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const productosTablets = [
  {
    id: 1,
    nombre: "iPad Air 4",
    precio: 7499,
    marca: "Apple",
    almacenamiento: "64GB • 10.2\"",
    grado: "Grado A – Como nueva",
    desempeno: "Fluida para streaming, videollamadas y apps educativas.",
    bateria: "Hasta 10 horas de uso continuo.",
    reacondicionamiento:
      "Pantalla impecable, sin rayones visibles. Funcionamiento perfecto.",
    imagen: require("../assets/images/iPad Air 4.jpg"),
  },
  {
    id: 2,
    nombre: "Galaxy Tab S6 Lite",
    precio: 5299,
    marca: "Samsung",
    almacenamiento: "64GB • 10.5\"",
    grado: "Grado B – Buen estado",
    desempeno: "Ideal para lectura, redes sociales y videos.",
    bateria: "Autonomía de un día completo con uso moderado.",
    reacondicionamiento:
      "Marcas leves en carcasa, batería y rendimiento verificados.",
    imagen: require("../assets/images/Galaxy Tab S6 Lite.jpg"),
  },
  {
    id: 3,
    nombre: "Galaxy Tab A7",
    precio: 3999,
    marca: "Samsung",
    almacenamiento: "64GB • 10.3\"",
    grado: "Grado B – Muy buen estado",
    desempeno: "Perfecta para estudiantes y uso familiar.",
    bateria: "Buena duración durante el día.",
    reacondicionamiento:
      "Revisada y probada, con funcionamiento excelente.",
    imagen: require("../assets/images/Galaxy Tab A7.jpg"),
  },
];

export default function Tablets() {
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [precioMax, setPrecioMax] = useState(20000);
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  const marcas = [...new Set(productosTablets.map((p) => p.marca))];

  const productosFiltrados = productosTablets.filter((p) => {
    return (
      (marcaFiltro ? p.marca === marcaFiltro : true) &&
      p.precio <= precioMax
    );
  });

  const agregarAlCarrito = (producto) => {
    const yaEsta = carrito.some((item) => item.id === producto.id);
    if (!yaEsta) {
      setCarrito([...carrito, producto]);
    }
  };

  const estaEnCarrito = (id) => carrito.some((item) => item.id === id);

  const totalCarrito = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="container py-4">
      {/* RESUMEN CARRITO */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">Carrito</h5>
            <p className="mb-0 text-muted">
              {carrito.length === 0
                ? "Aún no has agregado productos."
                : `${carrito.length} producto(s) agregado(s).`}
            </p>
          </div>
          <div className="text-end">
            <div className="fw-bold fs-5">
              Total: ${totalCarrito.toLocaleString("es-MX")}
            </div>
            <button
              className="btn btn-outline-primary btn-sm mt-2"
              disabled={carrito.length === 0}
              onClick={() => navigate("/carrito", { state: { carrito } })}
            >
              Ver carrito
            </button>
          </div>
        </div>
      </div>

      {/* FILTROS */}
      <div className="card shadow-sm border-0 p-3 mb-4">
        <h5 className="mb-3">Filtros</h5>
        <div className="row g-3 align-items-end">
          <div className="col-md-4">
            <label className="form-label fw-bold">Marca</label>
            <select
              className="form-select"
              value={marcaFiltro}
              onChange={(e) => setMarcaFiltro(e.target.value)}
            >
              <option value="">Todas</option>
              {marcas.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label fw-bold">
              Precio máximo: ${Number(precioMax).toLocaleString("es-MX")}
            </label>
            <input
              type="range"
              min="1000"
              max="20000"
              step="500"
              value={precioMax}
              className="form-range"
              onChange={(e) => setPrecioMax(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* LISTADO DE PRODUCTOS */}
      <div className="row g-4">
        {productosFiltrados.map((prod) => (
          <div key={prod.id} className="col-md-4">
            <div
              className="card h-100 shadow-sm border-0"
              style={{
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div
                className="position-relative"
                style={{ padding: "12px 12px 0 12px" }}
              >
                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                    backgroundColor: "#f8f9fa",
                    padding: "10px",
                  }}
                />
                <span className="badge bg-light text-dark position-absolute top-0 start-0 m-2">
                  {prod.marca}
                </span>
                <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                  {prod.almacenamiento}
                </span>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-1">{prod.nombre}</h5>
                <p className="mb-1 text-muted small">{prod.grado}</p>

                <div className="mb-3 small">
                  <p className="mb-1">
                    <strong>Desempeño:</strong> {prod.desempeno}
                  </p>
                  <p className="mb-1">
                    <strong>Duración de batería:</strong> {prod.bateria}
                  </p>
                  <p className="mb-0">
                    <strong>Reacondicionamiento:</strong>{" "}
                    {prod.reacondicionamiento}
                  </p>
                </div>

                <p className="text-success fw-bold fs-5 mb-2">
                  ${prod.precio.toLocaleString("es-MX")}
                </p>

                <button
                  className={`btn w-100 mt-auto ${
                    estaEnCarrito(prod.id)
                      ? "btn-outline-secondary"
                      : "btn-primary"
                  }`}
                  onClick={() => agregarAlCarrito(prod)}
                  disabled={estaEnCarrito(prod.id)}
                >
                  {estaEnCarrito(prod.id)
                    ? "✔ Agregado al carrito"
                    : "Agregar al carrito"}
                </button>
              </div>
            </div>
          </div>
        ))}

        {productosFiltrados.length === 0 && (
          <div className="col-12 text-center text-muted py-5">
            No hay productos que coincidan con los filtros seleccionados.
          </div>
        )}
      </div>
    </div>
  );
}
