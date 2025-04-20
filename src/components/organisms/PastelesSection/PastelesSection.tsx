import "./PastelesSection.css"
import React, { useState, useEffect } from "react";
import CategorySection from "../CategorySection/CategorySection";
import { Pastel } from "../../../types/pasteles";

const PastelesSection: React.FC = () => {
  const [pasteles, setPasteles] = useState<
    { nombre: string; pasteles: Pastel[] }[]
  >([]);

  useEffect(() => {
    // Simulación de datos estáticos, en un entorno real cargarías estos datos de una API o base de datos.
    setPasteles([
      {
        nombre: "Pasteles de Chocolate",
        pasteles: [
          {
            id: 1,
            nombre: "Pastel Clásico",
            descripcion: "Chocolate puro",
            precio: 25,
            imagen: "/images/pastel-chocolate.jpg",
            categoria: "chocolate",
          },
          {
            id: 2,
            nombre: "Pastel de Menta",
            descripcion: "Con un toque refrescante",
            precio: 30,
            imagen: "/images/pastel-menta.jpg",
            categoria: "chocolate"
          },
        ],
      },
      {
        nombre: "Pasteles de Frutas",
        pasteles: [
          {
            id: 3,
            nombre: "Pastel de Fresa",
            descripcion: "Fresa fresca",
            precio: 22,
            imagen: "/images/pastel-fresa.jpg",
            categoria: "frutas"
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="pasteles-section">
      {pasteles.map((categoria, index) => (
        <CategorySection
          key={index}
          pasteles={categoria.pasteles}
          nombre={categoria.nombre}
        />
      ))}
    </div>
  );
};

export default PastelesSection;
