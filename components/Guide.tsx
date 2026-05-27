import React from 'react'
import { DESTINATIONS } from '@/constants'

const Guide = () => {
  return (
    <section className="max-container padding-container py-12 lg:py-20">
      <div className="section-shell grid gap-8 p-6 lg:grid-cols-[1.05fr_1fr] lg:p-10">
        <div>
          <p className="eyebrow">Top destinations</p>
          <h2 className="bold-40 mt-3 lg:bold-52">From Barcelona To Mykonos, Stay In Style</h2>
          <p className="regular-16 mt-5 max-w-[560px] text-navy-700">
            INSIDEGO connects you to exceptional apartments in the Mediterranean's most desirable neighborhoods with seamless booking and trusted local support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {DESTINATIONS.map((city) => (
              <button
                key={city}
                className="rounded-full border border-beige-300 bg-white px-5 py-2 text-sm font-medium text-navy-700 transition-all hover:border-beige-500 hover:bg-beige-100"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-beige-300/70 bg-navy-900 p-5">
          <div className="h-[320px] rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(214,179,112,0.24),transparent_45%),radial-gradient(circle_at_80%_65%,rgba(214,179,112,0.20),transparent_40%),linear-gradient(140deg,#0A2342,#173155)] p-5">
            <div className="relative h-full w-full rounded-xl border border-beige-300/30">
              {DESTINATIONS.map((city, index) => (
                <button
                  key={city}
                  className="absolute rounded-full border border-beige-300 bg-white px-3 py-1 text-xs font-semibold text-navy-900 shadow transition-all hover:-translate-y-0.5 hover:bg-beige-100"
                  style={{
                    left: `${10 + (index % 3) * 30}%`,
                    top: `${14 + index * 14}%`,
                  }}
                >
                  {city}
                </button>
              ))}
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-navy-500">Live availability</p>
                <p className="mt-1 text-sm font-semibold text-navy-900">32 premium apartments this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide