import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const productosLaptops = [
  {
    id: 1,
    nombre: "Dell Latitude 5410",
    precio: 14999,
    marca: "Dell",
    almacenamiento: "256GB SSD • 8GB RAM",
    grado: "Grado A – Como nueva",
    desempeno: "Ideal para trabajo, estudio y apps exigentes con excelente fluidez.",
    bateria: "Hasta 12 horas de uso moderado.",
    reacondicionamiento:
      "Equipo inspeccionado, sin marcas visibles. Funcionamiento al 100%.",
    huellaCarbono: "Ahorro estimado: 75 kg de CO₂ vs comprarla nueva.",
    imagen: require("../assets/images/Dell Latitude 5410.jpg"),
  },
  {
    id: 2,
    nombre: "Lenovo ThinkPad T480",
    precio: 7999,
    marca: "Lenovo",
    almacenamiento: "512GB SSD • 16GB RAM",
    grado: "Grado B – Muy buen estado",
    desempeno: "Perfecta para multitarea, oficina, videollamadas y navegación.",
    bateria: "Rinde toda la jornada con uso estándar.",
    reacondicionamiento:
      "Pequeños detalles estéticos en carcasa, sin afectar el rendimiento.",
    huellaCarbono: "Ahorro estimado: 70 kg de CO₂ vs comprarla nueva.",
    imagen: require("../assets/images/Lenovo ThinkPad T480.jpg"),
  },
  {
    id: 3,
    nombre: "HP EliteBook 840 G6",
    precio: 6999,
    marca: "HP",
    almacenamiento: "256GB SSD • 8GB RAM",
    grado: "Grado B – Buen estado general",
    desempeno: "Muy buena opción para tareas diarias y trabajo de oficina.",
    bateria: "Buena duración para una jornada laboral promedio.",
    reacondicionamiento:
      "Presenta señales leves de uso, probada y funcionando correctamente.",
    huellaCarbono: "Ahorro estimado: 68 kg de CO₂ vs comprarla nueva.",
    imagen: require("../assets/images/HP EliteBook 840 G6.jpg"),
  },
];

export default function Laptops() {
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [precioMax, setPrecioMax] = useState(30000);
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  const marcas = [...new Set(productosLaptops.map((p) => p.marca))];

  const productosFiltrados = productosLaptops.filter((p) => {
    return (
      (marcaFiltro ? p.marca === marcaFiltro : true) &&
      p.precio <= precioMax
    );
  });

  const agregarAlCarrito = (producto) => {
    const yaEsta = carrito.some((item) => item.id === producto.id);
    if (!yaEsta) setCarrito([...carrito, producto]);
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
              min="3000"
              max="30000"
              step="1000"
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
              style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
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

              {/* INFO DEL PRODUCTO */}
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
  <p className="mb-1">
    <strong>Reacondicionamiento:</strong>{" "}
    {prod.reacondicionamiento}
  </p>
  <p className="mb-2 text-success">
    <strong>Huella de carbono:</strong> {prod.huellaCarbono}
  </p>

  {/* QR */}
  <div className="text-center mt-2">
    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Historial"
      alt="Historial del dispositivo"
      style={{
        width: "70px",
        height: "70px",
        opacity: 0.9,
      }}
    />
    <p className="small text-muted mt-1">
      Escanea para ver historial
    </p>
  </div>
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
