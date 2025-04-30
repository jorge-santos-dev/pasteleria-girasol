import WhatsAppButton from "./WhatsAppButton";
import React from "react";

interface PastelCardProps {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

const PastelCard: React.FC<PastelCardProps> = ({
  nombre,
  descripcion,
  precio,
  imagen,
  // categoria,
}) => {
  return (
    <div className="rounded-xl shadow-lg p-2.5 mb-8 w-[380px] bg-[#f2cbf5] transition-all duration-300 ease-in-out border-b-5 border-r-5 border-[rgba(115,32,136,0.2)] hover:transform hover:-translate-y-[5px] hover:shadow-xl">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-[250px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-2.5 font-poppins">
        {nombre}
      </h3>
      <p className="text-base text-gray-600 mb-5 font-poppins">{descripcion}</p>
      <div className="flex justify-evenly items-center">
        <span className="text-xl font-bold text-gray-800">${precio}</span>
        <WhatsAppButton nombreProducto={nombre} precio={precio} />
      </div>
    </div>
  );
};

export default PastelCard;
