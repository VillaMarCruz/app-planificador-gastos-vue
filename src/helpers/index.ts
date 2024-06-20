export const formatearCantidad = (cantidad: number) => {
  return Number(cantidad).toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatearFecha = (fecha: number) => {
  const fechaNueva = new Date(fecha);
  const opciones: any = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export const generarId = () => {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);

  return random + date;
};
