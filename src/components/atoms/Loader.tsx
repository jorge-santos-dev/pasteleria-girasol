import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center pt-10">
      <div
        className="w-12 h-12 border-4 border-primary border-solid rounded-full animate-spin"
        // El borde superior tendrá el color secundario para crear el efecto de giro
        style={{ borderTopColor: '#11bc9d' }} // Usamos el valor hexadecimal del color secundario directamente aquí
      ></div>
    </div>
  );
};

export default Loader;