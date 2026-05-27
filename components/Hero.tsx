import Image from 'next/image'

const Hero = () => {
  return (
    <section className="max-container padding-container pt-3">
      <div className="relative overflow-hidden rounded-[38px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(10,35,66,0.82) 0%, rgba(10,35,66,0.56) 42%, rgba(10,35,66,0.20) 100%), url('/hero-bg.svg')",
          }}
        />
        <div className="relative z-10 flex min-h-[620px] flex-col justify-end px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          <p className="eyebrow mb-4 text-beige-300">Mediterranean Apartment Rentals</p>
          <h1 className="bold-40 max-w-[860px] text-white lg:bold-64">
            Discover The Finest INSIDEGO Apartments Across The Mediterranean
          </h1>
          <p className="regular-18 mt-6 max-w-[680px] text-white/85">
            Handpicked residences in Barcelona, Ibiza, Marbella, Mykonos, and Mallorca, designed for travelers who expect privacy, comfort, and timeless style.
          </p>

          <div className="mt-10 grid gap-3 rounded-3xl border border-beige-300/40 bg-white p-4 shadow-2xl md:grid-cols-4">
            <SearchField label="Where" value="Barcelona" />
            <SearchField label="Check in" value="20 Jun" />
            <SearchField label="Check out" value="27 Jun" />
            <button className="flex items-center justify-center rounded-2xl bg-navy-900 px-5 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-700">
              Search Apartments
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={18}
                height={18}
              />
            ))}
            <p className="regular-16 ml-2 text-white/85">Rated 4.9 by discerning guests</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const SearchField = ({ label, value }: { label: string; value: string }) => (
  <button className="rounded-2xl border border-beige-300/70 bg-white px-4 py-3 text-left transition-all hover:border-beige-500">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">{label}</p>
    <p className="mt-1 text-sm font-medium text-navy-900">{value}</p>
  </button>
)

export default Hero