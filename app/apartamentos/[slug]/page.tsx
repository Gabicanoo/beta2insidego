import Link from "next/link";
import { APARTAMENTOS, getApartmentBySlug } from "@/lib/apartments";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return APARTAMENTOS.map((apartment) => ({ slug: apartment.slug }));
}

export default function ApartmentDetailPage({ params }: Props) {
  const apartment = getApartmentBySlug(params.slug);

  if (!apartment) {
    return (
      <main className="max-container padding-container py-20">
        <h1 className="text-3xl font-semibold text-navy-900">Apartamento no encontrado</h1>
        <Link href="/apartamentos" className="mt-6 inline-flex rounded-full border border-beige-300 px-5 py-2">
          Volver a apartamentos
        </Link>
      </main>
    );
  }

  return (
    <main className="pb-20">
      <section
        className="relative min-h-[66vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(10,35,66,0.68), rgba(10,35,66,0.38)), url('${apartment.imagenes[0]}')`,
        }}
      >
        <div className="max-container padding-container flex min-h-[66vh] flex-col justify-end py-12">
          <p className="eyebrow text-beige-300">{apartment.ubicacion}</p>
          <h1 className="bold-40 mt-3 max-w-[760px] text-white lg:bold-64">{apartment.titulo}</h1>
          <p className="mt-5 text-lg text-white/90">{apartment.precioNoche} EUR por noche · {"\u2605"} {apartment.valoracion}</p>
          <Link href="/contacto" className="mt-8 inline-flex w-fit rounded-full bg-white px-6 py-3 font-semibold text-navy-900 transition hover:bg-beige-100">
            Reservar ahora
          </Link>
        </div>
      </section>

      <section className="max-container padding-container mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-8">
          <article className="section-shell p-6 lg:p-8">
            <h2 className="text-3xl font-semibold text-navy-900">Descripcion</h2>
            <p className="mt-4 text-navy-700">{apartment.descripcion}</p>
          </article>

          <article className="section-shell p-6 lg:p-8">
            <h2 className="text-3xl font-semibold text-navy-900">Galeria</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {apartment.imagenes.map((img) => (
                <div
                  key={img}
                  className="h-44 rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url('${img}')` }}
                />
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <article className="section-shell p-6">
            <h3 className="text-2xl font-semibold text-navy-900">Servicios</h3>
            <ul className="mt-4 space-y-2 text-navy-700">
              {apartment.servicios.map((service) => (
                <li key={service}>• {service}</li>
              ))}
            </ul>
          </article>

          <article className="section-shell p-2">
            <iframe
              title={`Mapa ${apartment.titulo}`}
              className="h-[300px] w-full rounded-2xl border-0"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${apartment.coordenadas.lng - 0.03}%2C${apartment.coordenadas.lat - 0.02}%2C${apartment.coordenadas.lng + 0.03}%2C${apartment.coordenadas.lat + 0.02}&layer=mapnik&marker=${apartment.coordenadas.lat}%2C${apartment.coordenadas.lng}`}
            />
          </article>
        </aside>
      </section>
    </main>
  );
}
