export const validateNombre = (nombre) => {    
    if (!nombre) {
      return 'El nombre es requerido';
    } else if (nombre.length > 35) {
      return 'El nombre no puede tener más de 35 caracteres';
    }
    return '';
  };
  
  export const validateEstacion = (estacion) => {
    if (!estacion) {
      return 'La estación es requerida';
    } else if (estacion.length < 5 || estacion.length > 10) {
      return 'La estación del año, debe tener entre 6 y 10 caracteres';
    } else if (!estacion === "verano" || !estacion === "otoño" || !estacion === "primavera" || !estacion === "invierno") {
      return 'Esa no es una estación del año';
    } 
     return '';
  };
  