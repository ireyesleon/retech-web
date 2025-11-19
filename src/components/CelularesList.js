import React, { useState } from "react";

const productosCelulares = [
  {
    id: 1,
    nombre: "iPhone 13",
    precio: 7999,
    marca: "Apple",
    almacenamiento: "128GB",
    imagen: require("../assets/images/iphone-13.jpg"),
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S21",
    precio: 6999,
    marca: "Samsung",
    almacenamiento: "256GB",
    imagen: require("../assets/images/Samsung Galaxy S22.jpg"),
  },
  {
    id: 3,
    nombre: "Xiaomi Redmi Note 12",
    precio: 5200,
    marca: "Xiaomi",
    almacenamiento: "128GB",
    imagen: require("../assets/images/Redmi Note 11 Pro.jpg"),
  }
];

export default function Celulares() {
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [precioMax, setPrecioMax] = useState(20000);

  const marcas = [...new Set(productosCelulares.map((p) => p.marca))];

  const productosFiltrados = productosCelulares.filter((p) => {
    return (
      (marcaFiltro ? p.marca === marcaFiltro : true) &&
      p.precio <= precioMax
    );
  });

  return (
    <div className="container py-4">

      {/* FILTROS */}
      <div className="card shadow p-3 mb-4">
        <h5 className="mb-3">Filtros</h5>
        <div className="row g-3">

          {/* Filtro por marca */}
          <div className="col-md-4">
            <label className="form-label fw-bold">Marca</label>
            <select
              className="form-select"
              value={marcaFiltro}
              onChange={(e) => setMarcaFiltro(e.target.value)}
            >
              <option value="">Todas</option>
              {marcas.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* Filtro por precio */}
          <div className="col-md-4">
            <label className="form-label fw-bold">Precio máximo: ${precioMax}</label>
            <input
              type="range"
              min="1000"
              max="20000"
              value={precioMax}
              className="form-range"
              onChange={(e) => setPrecioMax(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* LISTADO DE PRODUCTOS */}
      <div className="row g-4">
        {productosFiltrados.map((prod) => (
          <div key={prod.id} className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src={prod.imagen}
                alt={prod.nombre}
                className="img-fluid rounded mb-3"
                style={{
    width: "100%",
    height: "250px",
    objectFit: "contain",
    backgroundColor: "#f8f9fa",
    padding: "10px"
  }}
              />

              <h5>{prod.nombre}</h5>
              <p className="text-success fw-bold">${prod.precio}</p>

              <button className="btn btn-primary w-100 mt-auto">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}