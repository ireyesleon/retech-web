import React, { useState } from "react";

const productosCelulares = [
  {
    id: 1,
    nombre: "iPhone 13",
    precio: 7999,
    marca: "Apple",
    almacenamiento: "128GB",
    grado: "Grado A – Como nuevo",
    desempeno: "Rápido y fluido para redes sociales, fotos y apps de trabajo.",
    bateria: "Batería con excelente rendimiento para todo el día con uso moderado.",
    reacondicionamiento:
      "Equipo revisado y probado. Sin golpes visibles, solo marcas mínimas de uso.",
    imagen: require("../assets/images/iphone-13.jpg"),
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S21",
    precio: 6999,
    marca: "Samsung",
    almacenamiento: "256GB",
    grado: "Grado B – Muy buen estado",
    desempeno: "Ideal para multitarea, juegos casuales y cámara de buena calidad.",
    bateria:
      "Buena duración durante el día. Puede requerir una carga extra con uso intenso.",
    reacondicionamiento:
      "Puede tener ligeros rayones en carcasa, pantalla sin daños importantes.",
    imagen: require("../assets/images/Samsung Galaxy S22.jpg"),
  },
  {
    id: 3,
    nombre: "Xiaomi Redmi Note 12",
    precio: 5200,
    marca: "Xiaomi",
    almacenamiento: "128GB",
    grado: "Grado A – Como nuevo",
    desempeno:
      "Perfecto para uso diario: redes sociales, videos y apps bancarias sin trabarse.",
    bateria:
      "Muy buena autonomía, pensado para durar todo el día incluso con uso frecuente.",
    reacondicionamiento:
      "Luce casi como nuevo. Revisado y limpiado, con piezas originales funcionales.",
    imagen: require("../assets/images/Redmi Note 11 Pro.jpg"),
  },
  {
    id: 4,
    nombre: "iPhone 11",
    precio: 4799,
    marca: "Apple",
    almacenamiento: "64GB",
    grado: "Grado B – Detalles estéticos leves",
    desempeno:
      "Rendimiento estable para llamadas, WhatsApp, fotos y apps básicas.",
    bateria:
      "Duración adecuada para la mayor parte del día con uso moderado.",
    reacondicionamiento:
      "Puede presentar pequeños detalles estéticos que no afectan el funcionamiento.",
    imagen: require("../assets/images/iphone-11.jpg"),
  },
  {
    id: 5,
    nombre: "Samsung Galaxy S21",
    precio: 4299,
    marca: "Samsung",
    almacenamiento: "256GB",
    grado: "Grado C – Buen estado funcional",
    desempeno:
      "Funciona bien para tareas cotidianas, aunque no está enfocado en juegos pesados.",
    bateria:
      "Batería con buen desempeño, puede necesitar carga extra si se usa muchas horas.",
    reacondicionamiento:
      "Puede tener marcas visibles de uso, pero todas las funciones están probadas.",
    imagen: require("../assets/images/Galaxy-A34.jpg"),
  },
  {
    id: 6,
    nombre: "Xiaomi POCO M5",
    precio: 3999,
    marca: "Xiaomi",
    almacenamiento: "64GB",
    grado: "Grado B – Muy buen estado",
    desempeno:
      "Buen rendimiento para redes sociales, videos y navegación en internet.",
    bateria:
      "Pensado para durar el día completo con uso normal sin necesidad de recarga constante.",
    reacondicionamiento:
      "Equipo revisado, limpio y en muy buen estado general, con leves señales de uso.",
    imagen: require("../assets/images/poco-m5.jpg"),
  },
];

export default function Celulares() {
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [precioMax, setPrecioMax] = useState(20000);
  const [carrito, setCarrito] = useState([]);

  const marcas = [...new Set(productosCelulares.map((p) => p.marca))];

  const productosFiltrados = productosCelulares.filter((p) => {
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
            >
              Ir al carrito
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

                {/* INFO CLARA PARA EL USUARIO */}
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
