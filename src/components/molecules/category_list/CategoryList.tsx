import "./CategoryList.css";
import React from "react";
import PastelCard from "../PastelCard";

interface Pastel {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

interface CategoryListProps {
  pasteles: Pastel[];
}

const CategoryList: React.FC<CategoryListProps> = ({ pasteles }) => {
  return (
    <div className="list-cakes">
      {pasteles.map((pastel) => (
        <PastelCard key={pastel.id} {...pastel} />
      ))}
    </div>
  );
};

export default CategoryList;
