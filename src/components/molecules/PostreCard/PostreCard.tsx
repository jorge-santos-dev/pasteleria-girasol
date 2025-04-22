import React from "react";
import "./PostreCard.css";
import WhatsAppButton from "../WhatsAppButton";

interface PostreCardProps {
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: string;
  }
  

const PostreCard:React.FC <PostreCardProps> = ({nombre, descripcion, precio, imagen, categoria})=> {
  const formatearPrecio = (valor: number): string => {
    return valor.toLocaleString('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
    return(
        <div className="card-container">
             {/* Se asegura de usar la imagen por defecto si no se pasa una imagen */}
      <img className="image-card" src={imagen } alt={nombre} />
      <h3 className="poppins-extrabold">{nombre}</h3>
      <p className="poppins-medium">{descripcion}</p>
      <p className="poppins-semibold">{categoria}</p>
      <div className="card-footer">
      <span className="price">{`$${formatearPrecio(precio)}`}</span>        
      <WhatsAppButton text="Contactanos" />
      </div>
        </div>
    )
}

export default PostreCard;