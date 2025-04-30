/**
 * Formatea un número como precio en formato de moneda mexicana (MXN)
 * @param valor - El valor numérico a formatear
 * @returns El valor formateado como string con formato de moneda mexicana
 */
export const formatearPrecioMXN = (valor: number): string => {
  return valor.toLocaleString('es-MX', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};