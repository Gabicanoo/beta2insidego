"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import type { Apartment } from "@/lib/apartments";
import {
  BookingFormData,
  BookingErrors,
  calcNights,
  calcTotal,
  validateBooking,
} from "@/lib/booking";

type Props = {
  apartment: Apartment;
  open: boolean;
  onClose: () => void;
};

const initialForm: BookingFormData = {
  entrada: "",
  salida: "",
  huespedes: 1,
  nombre: "",
  email: "",
  telefono: "",
  dni: "",
  mensaje: "",
};

export default function BookingModal({ apartment, open, onClose }: Props) {
  const [form, setForm] = useState<BookingFormData>(initialForm);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const nights = useMemo(
    () => calcNights(form.entrada, form.salida),
    [form.entrada, form.salida]
  );
  const total = useMemo(
    () => calcTotal(nights, apartment.precioNoche),
    [nights, apartment.precioNoche]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setErrors({});
      setSubmitted(false);
    }
  }, [open]);

  const update = <K extends keyof BookingFormData>(
    key: K,
    value: BookingFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validateBooking(form, apartment.huespedes);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar reserva"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-navy-900/55 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-x-4 top-[4%] z-[90] mx-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[32px] border border-glass bg-glass-strong p-6 shadow-glass-lg backdrop-blur-2xl sm:inset-x-auto sm:top-[8%] sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Reserva InsideGo</p>
                <h2 id="booking-title" className="mt-2 text-2xl font-semibold sm:text-3xl">
                  {apartment.titulo}
                </h2>
                <p className="mt-1 text-sm text-muted">{apartment.ubicacion}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-glass bg-white/60 px-3 py-1 text-sm font-medium text-navy-900 transition hover:bg-beige-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                Cerrar
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-beige-300 bg-beige-100/60 p-8 text-center dark:border-beige-500/40 dark:bg-beige-500/10"
              >
                <p className="text-3xl">✓</p>
                <h3 className="mt-3 text-xl font-semibold">Solicitud enviada</h3>
                <p className="mt-2 text-sm text-muted">
                  Hemos registrado tu reserva demo de {nights} noches por{" "}
                  <strong className="text-gold">{total} EUR</strong>. Te contactaremos en{" "}
                  {form.email}.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-reserve mt-6 w-full sm:w-auto"
                >
                  Perfecto
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Fecha de entrada" error={errors.entrada}>
                    <input
                      type="date"
                      min={today}
                      value={form.entrada}
                      onChange={(e) => update("entrada", e.target.value)}
                      className="field-input"
                    />
                  </FormField>
                  <FormField label="Fecha de salida" error={errors.salida}>
                    <input
                      type="date"
                      min={form.entrada || today}
                      value={form.salida}
                      onChange={(e) => update("salida", e.target.value)}
                      className="field-input"
                    />
                  </FormField>
                </div>

                <FormField label="Número de huéspedes" error={errors.huespedes}>
                  <select
                    value={form.huespedes}
                    onChange={(e) => update("huespedes", Number(e.target.value))}
                    className="field-input"
                  >
                    {Array.from({ length: apartment.huespedes }, (_, i) => i + 1).map(
                      (n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "huésped" : "huéspedes"}
                        </option>
                      )
                    )}
                  </select>
                </FormField>

                <FormField label="Nombre completo" error={errors.nombre}>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={(e) => update("nombre", e.target.value)}
                    className="field-input"
                    placeholder="Nombre y apellidos"
                  />
                </FormField>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="field-input"
                      placeholder="tu@email.com"
                    />
                  </FormField>
                  <FormField label="Teléfono" error={errors.telefono}>
                    <input
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => update("telefono", e.target.value)}
                      className="field-input"
                      placeholder="+34 600 000 000"
                    />
                  </FormField>
                </div>

                <FormField label="DNI / NIE" error={errors.dni}>
                  <input
                    type="text"
                    value={form.dni}
                    onChange={(e) => update("dni", e.target.value)}
                    className="field-input"
                    placeholder="Documento de identidad"
                  />
                </FormField>

                <FormField label="Mensaje adicional (opcional)">
                  <textarea
                    value={form.mensaje}
                    onChange={(e) => update("mensaje", e.target.value)}
                    className="field-input min-h-[96px] resize-y"
                    placeholder="Cuéntanos preferencias o horario de llegada"
                  />
                </FormField>

                <div className="rounded-2xl border border-glass bg-white/50 p-4 dark:bg-white/5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Precio por noche</span>
                    <span className="font-semibold">{apartment.precioNoche} EUR</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-muted">Noches</span>
                    <span className="font-semibold">{nights || "—"}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-glass pt-3">
                    <span className="font-semibold">Total estimado</span>
                    <span className="text-xl font-bold text-gold">
                      {nights > 0 ? `${total} EUR` : "—"}
                    </span>
                  </div>
                </div>

                <button type="submit" className="btn-reserve w-full">
                  Confirmar reserva
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{error}</p>}
    </label>
  );
}
