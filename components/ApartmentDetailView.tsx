"use client";

import { useState } from "react";
import type { Apartment } from "@/lib/apartments";
import BookingModal from "./BookingModal";
import InsideGoMap from "./InsideGoMap";

type Props = {
  apartment: Apartment;
};

export default function ApartmentDetailView({ apartment }: Props) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <main className="pb-20">
        <section
          className="relative min-h-[66vh] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(10,35,66,0.72), rgba(10,35,66,0.42)), url('${apartment.imagenes[0]}')`,
          }}
        >
          <div className="max-container padding-container flex min-h-[66vh] flex-col justify-end py-12">
            <p className="eyebrow !text-beige-300">{apartment.ubicacion}</p>
            <h1 className="bold-40 mt-3 max-w-[760px] !text-white lg:bold-64">
              {apartment.titulo}
            </h1>
            <p className="mt-5 text-lg text-white/90">
              {apartment.precioNoche} EUR por noche · {"\u2605"} {apartment.valoracion}
            </p>
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="btn-reserve mt-8 w-fit"
            >
              Reservar
            </button>
          </div>
        </section>

        <section className="max-container padding-container mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-8">
            <article className="section-shell p-6 lg:p-8">
              <h2 className="text-3xl font-semibold">Descripción</h2>
              <p className="mt-4 text-muted">{apartment.descripcion}</p>
            </article>

            <article className="section-shell p-6 lg:p-8">
              <h2 className="text-3xl font-semibold">Galería</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {apartment.imagenes.map((img) => (
                  <div
                    key={img}
                    className="h-44 rounded-2xl bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                ))}
              </div>
            </article>

            <article className="section-shell p-4 lg:p-6">
              <h2 className="mb-4 px-2 text-2xl font-semibold">Ubicación</h2>
              <InsideGoMap
                apartments={[apartment]}
                highlightSlug={apartment.slug}
                className="h-[300px] sm:h-[360px] lg:h-[400px]"
              />
            </article>
          </div>

          <aside className="space-y-6">
            <article className="section-shell sticky top-28 p-6">
              <h3 className="text-2xl font-semibold">Resumen</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>{apartment.huespedes} huéspedes máx.</li>
                <li>{apartment.dormitorios} dormitorios</li>
                <li>Valoración demo: {apartment.valoracion}</li>
              </ul>
              <p className="mt-6 text-2xl font-bold text-gold">
                {apartment.precioNoche} EUR
                <span className="text-base font-normal text-muted"> / noche</span>
              </p>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="btn-reserve mt-6 w-full"
              >
                Reservar
              </button>
            </article>

            <article className="section-shell p-6">
              <h3 className="text-2xl font-semibold">Servicios</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {apartment.servicios.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <span className="text-gold">•</span> {service}
                  </li>
                ))}
              </ul>
            </article>
          </aside>
        </section>
      </main>

      <BookingModal
        apartment={apartment}
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
