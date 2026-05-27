import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="max-container padding-container pb-20 lg:pb-28">
      <div className="section-shell grid gap-8 p-6 lg:grid-cols-2 lg:p-10">
        <div className="overflow-hidden rounded-[26px]">
          <div
            className="h-full min-h-[320px] w-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.03]"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(10,35,66,0.30), rgba(10,35,66,0.15)), url('https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow">Sobre InsideGo</p>
          <h2 className="bold-40 mt-3 lg:bold-52">Una startup mediterranea de alquiler vacacional premium</h2>
          <p className="regular-16 mt-5 text-navy-700">
            Diseñamos una experiencia elegante de principio a fin: discovery, filtrado inteligente, reserva y atencion personalizada por email.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            <FeatureItem icon="/map.svg" title="Ubicaciones top" description="Apartamentos en zonas con autenticidad local y gran conectividad." />
            <FeatureItem icon="/calendar.svg" title="Reserva fluida" description="Buscador y calendario real para planificar fechas sin friccion." />
            <FeatureItem icon="/location.svg" title="Calidad verificada" description="Interiores premium con criterios exigentes de diseño y confort." />
            <FeatureItem icon="/tech.svg" title="Experiencia digital" description="Interfaz limpia, animaciones suaves y navegacion ultra responsive." />
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="rounded-2xl border border-beige-300/60 bg-white p-4 transition-all hover:shadow-md">
      <div className="rounded-full bg-beige-100 p-3 w-fit">
        <Image src={icon} alt={title} width={22} height={22} />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-navy-900">
        {title}
      </h3>
      <p className="mt-2 text-sm text-navy-700">
        {description}
      </p>
    </li>
  )
}

export default Features