import React from 'react'
import { APARTAMENTOS } from '@/lib/apartments'

const Guide = () => {
  return (
    <section id="destinos" className="max-container padding-container py-12 lg:py-20">
      <div className="section-shell grid gap-8 p-6 lg:grid-cols-[1.05fr_1fr] lg:p-10">
        <div>
          <p className="eyebrow">Mapa interactivo</p>
          <h2 className="bold-40 mt-3 lg:bold-52">Explora Barcelona y Cataluna desde ubicaciones premium</h2>
          <p className="regular-16 mt-5 max-w-[560px] text-navy-700">
            Seleccionamos zonas con encanto mediterraneo, acceso rapido a puntos clave y alto estandar de comodidad.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {APARTAMENTOS.map((apartment) => (
              <span key={apartment.slug} className="rounded-full border border-beige-300 bg-white px-4 py-2 text-sm font-medium text-navy-700">
                {apartment.ubicacion}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-beige-300/70 bg-white/70 p-2 backdrop-blur-xl">
          <iframe
            title="Mapa de apartamentos InsideGo"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.6%2C41.1%2C3.4%2C42.5&layer=mapnik"
            className="h-[340px] w-full rounded-2xl border-0"
          />
        </div>
      </div>
    </section>
  )
}

export default Guide