import { formatearPrecioMXN } from './formatters';

/**
 * Genera un enlace de WhatsApp con un mensaje predefinido para consultar sobre un producto
 * @param nombreProducto - Nombre del producto
 * @param precio - Precio del producto
 * @returns Abre una nueva ventana con el chat de WhatsApp
 */

export const enviarMensajeWhatsApp = (nombreProducto: string, precio: number): void => {
  // Número de teléfono de WhatsApp
  const numeroTelefono = "522721839540";
  
  // Mensaje predefinido
  const mensaje = encodeURIComponent(
    `Hola, me interesa el pastel "${nombreProducto}" con precio de $${formatearPrecioMXN(precio)}. ¿Podría obtener más información?`
  );
  
  const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
  
  // Abrir en una nueva pestaña
  window.open(urlWhatsApp, '_blank');
};