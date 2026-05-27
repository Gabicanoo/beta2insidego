import { APARTAMENTOS } from '@/lib/apartments'
import InsideGoMap from './InsideGoMap'

const Guide = () => {
  return (
    <section id="destinos" className="max-container padding-container py-12 lg:py-20">
      <div className="section-shell grid gap-8 p-6 lg:grid-cols-[1fr_1.1fr] lg:p-10">
        <div>
          <p className="eyebrow">Mapa interactivo</p>
          <h2 className="bold-40 mt-3 lg:bold-52">
            Explora Barcelona y Cataluña en ubicaciones premium
          </h2>
          <p className="regular-16 mt-5 max-w-[560px] text-muted">
            Cada marcador representa un apartamento InsideGo con coordenadas reales en la costa
            mediterránea y el interior catalán.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {APARTAMENTOS.map((apartment) => (
              <span
                key={apartment.slug}
                className="rounded-full border border-glass bg-glass px-4 py-2 text-sm font-medium text-muted backdrop-blur-md"
              >
                {apartment.ubicacion}
              </span>
            ))}
          </div>
        </div>

        <InsideGoMap apartments={APARTAMENTOS} />
      </div>
    </section>
  )
}

export default Guide
