import "./PastelCard.css";
import React from "react";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

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
  categoria,
}) => {

  console.log(precio);
  
  const defaultImage = "/images/default-pastel.jpg"; // Cambiar a la ruta por defecto que prefieras

  // Formatear el precio como moneda
  const formatearPrecio = (valor: number): string => {
    return valor.toLocaleString('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Función para abrir WhatsApp con mensaje predefinido
  const abrirWhatsApp = () => {
    // Número de teléfono (reemplaza con el número real de la pastelería)
    const numeroTelefono = "522721839540"; // Formato: 521 + código de área + número (sin espacios)
    
    // Crear mensaje predefinido
    const mensaje = encodeURIComponent(
      `Hola, me interesa el pastel "${nombre}" con precio de $${formatearPrecio(precio)}. ¿Podría obtener más información?`
    );
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
    
    // Abrir en una nueva pestaña
    window.open(urlWhatsApp, '_blank');
  };

  
  return (
    <div className="card-container">
      {/* Se asegura de usar la imagen por defecto si no se pasa una imagen */}
      <img className="image-card" src={imagen || defaultImage} alt={nombre} />
      <h3 className="poppins-extrabold">{nombre}</h3>
      <p className="poppins-medium">{descripcion}</p>
      <p className="poppins-semibold">{categoria}</p>
      <div className="card-footer">
      <span className="price">{`$${formatearPrecio(precio)}`}</span>        <WhatsAppButton text="WhatsApp" />
      </div>
    </div>
  );
};

export default PastelCard;
