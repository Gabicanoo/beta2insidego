export type BookingFormData = {
  entrada: string;
  salida: string;
  huespedes: number;
  nombre: string;
  email: string;
  telefono: string;
  dni: string;
  mensaje: string;
};

export type BookingErrors = Partial<Record<keyof BookingFormData, string>>;

export function calcNights(entrada: string, salida: string): number {
  if (!entrada || !salida) return 0;
  const start = new Date(`${entrada}T12:00:00`);
  const end = new Date(`${salida}T12:00:00`);
  const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export function calcTotal(nights: number, precioNoche: number): number {
  return nights * precioNoche;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBooking(
  data: BookingFormData,
  maxHuespedes: number
): BookingErrors {
  const errors: BookingErrors = {};

  if (!data.entrada) errors.entrada = "Selecciona la fecha de entrada";
  if (!data.salida) errors.salida = "Selecciona la fecha de salida";

  if (data.entrada && data.salida) {
    const nights = calcNights(data.entrada, data.salida);
    if (nights <= 0) {
      errors.salida = "La salida debe ser posterior a la entrada";
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const entradaDate = new Date(`${data.entrada}T12:00:00`);
    if (entradaDate < today) {
      errors.entrada = "La entrada no puede ser en el pasado";
    }
  }

  if (!data.huespedes || data.huespedes < 1) {
    errors.huespedes = "Indica al menos 1 huésped";
  } else if (data.huespedes > maxHuespedes) {
    errors.huespedes = `Máximo ${maxHuespedes} huéspedes`;
  }

  if (!data.nombre.trim()) errors.nombre = "El nombre es obligatorio";
  if (!data.email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Introduce un email válido";
  }

  if (!data.telefono.trim()) {
    errors.telefono = "El teléfono es obligatorio";
  } else if (data.telefono.replace(/\D/g, "").length < 9) {
    errors.telefono = "Introduce un teléfono válido";
  }

  if (!data.dni.trim()) {
    errors.dni = "El DNI/NIE es obligatorio";
  } else if (data.dni.trim().length < 8) {
    errors.dni = "Introduce un DNI/NIE válido";
  }

  return errors;
}
