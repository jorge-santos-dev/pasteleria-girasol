import React from "react";
import CategoryList from "../../molecules/category_list/CategoryList";

interface Pastel {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

interface CategorySectionProps {
  nombre: string;
  pasteles: Pastel[];
}

const CategorySection: React.FC<CategorySectionProps> = ({  pasteles }) => {
  return (
    <section className="category-section">
      <h2 style={{ color: "#4e4d4d"}} className="subtitle">{}</h2>
      <CategoryList pasteles={pasteles} />
    </section>
  );
};

export default CategorySection;
