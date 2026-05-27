import { APARTMENTS } from "@/constants";

const Camp = () => {
  return (
    <section className="max-container padding-container py-16 lg:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Featured Apartments</p>
          <h2 className="bold-40 mt-3 lg:bold-52">Luxury Stays Curated By INSIDEGO</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <FilterPill label="Destination" />
          <FilterPill label="Guests" />
          <FilterPill label="Bedrooms" />
          <FilterPill label="Price" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {APARTMENTS.map((apartment) => (
          <article
            key={apartment.name}
            className="group overflow-hidden rounded-3xl border border-beige-300/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className="h-56 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${apartment.image})` }}
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-navy-500">{apartment.location}</p>
                <p className="text-sm font-semibold text-beige-500">{"\u2605"} {apartment.rating}</p>
              </div>
              <h3 className="mt-2 text-[22px] font-semibold text-navy-900">{apartment.name}</h3>
              <p className="mt-3 text-sm text-navy-700">{apartment.guests} • {apartment.bedrooms}</p>
              <p className="mt-4 text-base font-semibold text-navy-900">{apartment.price} <span className="font-normal text-navy-500">/ night</span></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const FilterPill = ({ label }: { label: string }) => (
  <button className="rounded-full border border-beige-300 bg-white px-5 py-2 text-sm font-medium text-navy-700 transition-all hover:border-beige-500 hover:text-navy-900">
    {label} {"\u25BE"}
  </button>
)

export default Camp