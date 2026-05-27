"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Apartment } from "@/lib/apartments";
import { SERVICIOS_FILTRO } from "@/lib/apartments";

type Props = {
  apartments: Apartment[];
  compact?: boolean;
  initialDestino?: string;
  initialEntrada?: string;
  initialSalida?: string;
};

export default function ApartmentBrowser({
  apartments,
  compact = false,
  initialDestino = "",
  initialEntrada = "",
  initialSalida = "",
}: Props) {
  const [destino, setDestino] = useState(initialDestino);
  const [entrada, setEntrada] = useState(initialEntrada);
  const [salida, setSalida] = useState(initialSalida);
  const [precioMax, setPrecioMax] = useState(700);
  const [huespedes, setHuespedes] = useState(1);
  const [servicio, setServicio] = useState("");

  const filtered = useMemo(() => {
    return apartments.filter((apartment) => {
      const okDestino =
        destino.trim().length === 0 ||
        apartment.ubicacion.toLowerCase().includes(destino.trim().toLowerCase());
      const okPrecio = apartment.precioNoche <= precioMax;
      const okHuespedes = apartment.huespedes >= huespedes;
      const okServicio = servicio.length === 0 || apartment.servicios.includes(servicio);
      return okDestino && okPrecio && okHuespedes && okServicio;
    });
  }, [apartments, destino, precioMax, huespedes, servicio]);

  return (
    <section className="space-y-8">
      <div className="section-shell p-4 md:p-6">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
          <Field label="Ubicacion">
            <input
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              className="field-input"
              placeholder="Barcelona o Cataluna"
            />
          </Field>
          <Field label="Entrada">
            <input type="date" value={entrada} onChange={(e) => setEntrada(e.target.value)} className="field-input" />
          </Field>
          <Field label="Salida">
            <input type="date" value={salida} onChange={(e) => setSalida(e.target.value)} className="field-input" />
          </Field>
          <Field label="Precio maximo">
            <select value={precioMax} onChange={(e) => setPrecioMax(Number(e.target.value))} className="field-input">
              {[250, 350, 450, 550, 700, 1000].map((value) => (
                <option key={value} value={value}>
                  Hasta {value} EUR
                </option>
              ))}
            </select>
          </Field>
          <Field label="Huespedes">
            <select value={huespedes} onChange={(e) => setHuespedes(Number(e.target.value))} className="field-input">
              {[1, 2, 3, 4, 5, 6].map((value) => (
                <option key={value} value={value}>
                  {value}+ huespedes
                </option>
              ))}
            </select>
          </Field>
          <Field label="Servicios">
            <select value={servicio} onChange={(e) => setServicio(e.target.value)} className="field-input">
              <option value="">Todos</option>
              {SERVICIOS_FILTRO.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </div>

      {!compact && (
        <p className="regular-16 text-muted">
          {filtered.length} apartamentos encontrados {entrada && salida ? `del ${entrada} al ${salida}` : ""}.
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((apartment, index) => (
          <motion.article
            key={apartment.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="section-shell overflow-hidden transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="grid h-56 grid-cols-2 gap-1">
              <div className="col-span-2 bg-cover bg-center" style={{ backgroundImage: `url(${apartment.imagenes[0]})` }} />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted">{apartment.ubicacion}</p>
                <p className="text-sm font-semibold text-gold">{"\u2605"} {apartment.valoracion}</p>
              </div>
              <h3 className="text-[22px] font-semibold">{apartment.titulo}</h3>
              <p className="line-clamp-2 text-sm text-muted">{apartment.descripcion}</p>
              <div className="flex flex-wrap gap-2">
                {apartment.servicios.slice(0, 3).map((item) => (
                  <span key={item} className="rounded-full border border-glass bg-glass px-3 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-semibold text-gold">
                  {apartment.precioNoche} EUR <span className="text-sm font-normal text-muted">/ noche</span>
                </p>
                <div className="flex gap-2">
                  <Link href={`/apartamentos/${apartment.slug}`} className="rounded-full border border-glass px-4 py-2 text-sm font-semibold text-muted transition-all hover:bg-glass">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="rounded-2xl border border-glass bg-glass p-3 shadow-sm backdrop-blur-xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <div className="mt-2">{children}</div>
    </label>
  );
}
