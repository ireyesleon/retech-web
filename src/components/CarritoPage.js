import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CarritoResumen from "./CarritoResumen";

export default function CarritoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const carrito = location.state?.carrito || [];

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        {/* En mobile: 12 columnas (ancho completo)
            En md: 8/12 (2/3)
            En lg: 4/12 (1/3 aprox), centrado */}
        <div className="col-12 col-md-8 col-lg-8">
          <CarritoResumen
            carrito={carrito}
            onClose={() => navigate(-1)}
          />
        </div>
      </div>
    </div>
  );
}
