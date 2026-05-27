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
          <p className="eyebrow">About INSIDEGO</p>
          <h2 className="bold-40 mt-3 lg:bold-52">Mediterranean Living, Reimagined For Modern Travelers</h2>
          <p className="regular-16 mt-5 text-navy-700">
            INSIDEGO is a luxury apartment rental platform built around refined design, trusted local expertise, and effortless booking for premium stays.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            <FeatureItem icon="/map.svg" title="Prime locations" description="Curated neighborhoods close to the coast, cuisine, and culture." />
            <FeatureItem icon="/calendar.svg" title="Flexible stays" description="From weekend escapes to extended summer residences." />
            <FeatureItem icon="/location.svg" title="Verified homes" description="Only high-standard apartments with premium amenities." />
            <FeatureItem icon="/tech.svg" title="Seamless booking" description="Elegant, fast, and transparent reservation experience." />
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