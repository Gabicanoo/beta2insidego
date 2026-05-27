import ApartmentBrowser from "@/components/ApartmentBrowser";
import { APARTAMENTOS } from "@/lib/apartments";

const Camp = () => {
  return (
    <section className="max-container padding-container py-16 lg:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Apartamentos destacados</p>
          <h2 className="bold-40 mt-3 lg:bold-52">Estancias premium en Barcelona y Cataluna</h2>
        </div>
      </div>
      <ApartmentBrowser apartments={APARTAMENTOS} compact />
    </section>
  )
}

export default Camp