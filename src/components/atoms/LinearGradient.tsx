import React from "react";

interface LinearGradientProps {
  color1: string;
  color2: string;
}

const LinearGradient: React.FC<LinearGradientProps> = ({ color1, color2 }) => {
  // Creamos un estilo en línea para el gradiente ya que Tailwind no tiene una clase predefinida
  // para gradientes radiales con posiciones específicas
  const gradientStyle = {
    backgroundImage: `radial-gradient(ellipse farthest-corner at left top, ${color1}, ${color2})`,
  };

  return (
    <div 
      className="h-4 w-full" 
      style={gradientStyle}
    >
      <div className="hidden text-[#11bc9d]">
        <h3>Color 1: {color1}</h3>
        <h3>Color 2: {color2}</h3>
      </div>
    </div>
  );
};

export default LinearGradient;