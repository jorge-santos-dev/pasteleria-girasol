import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importa iconos

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col bg-secondary text-girasol-cream p-8 mt-12"> {/* Fondo oscuro, texto claro, padding, margen superior */}
      <div className='flex justify-between'>
      <div className='flex flex-col ml-16'>
  <h3 className="text-xl font-semibold mb-3 font-dancing text-primary">Pastelería Girasol</h3>
  <p className="text-sm font-poppins">
    Endulzando tus momentos especiales con creaciones artesanales.
  </p>
</div>



{/* Sección 3: Redes Sociales */}
<div className='flex flex-col mr-16'>
  <h4 className="text-lg font-semibold mb-3 font-poppins">Síguenos</h4>
  <div className="flex justify-center md:justify-start space-x-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-girasol-cream hover:text-girasol-yellow transition-colors">
      <FaFacebook size={24} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-girasol-cream hover:text-girasol-yellow transition-colors">
      <FaInstagram size={24} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-girasol-cream hover:text-girasol-yellow transition-colors">
      <FaTwitter size={24} />
    </a>
  </div>
</div>
      </div>

      {/* Barra inferior de Copyright */}
      <div className="mt-8 pt-6 border-t border-girasol-yellow/30 text-center text-sm font-poppins">
        <p>&copy; {currentYear} Pastelería Girasol. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;