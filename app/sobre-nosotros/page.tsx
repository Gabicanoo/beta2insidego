export default function SobreNosotrosPage() {
  return (
    <main className="max-container padding-container py-12 lg:py-20">
      <section className="section-shell p-6 lg:p-10">
        <p className="eyebrow">Sobre nosotros</p>
        <h1 className="bold-40 mt-3 lg:bold-52">InsideGo, lujo mediterraneo con enfoque tecnologico</h1>
        <p className="mt-6 max-w-4xl text-navy-700">
          InsideGo nace para transformar la forma de reservar estancias vacacionales premium. Nuestro objetivo es unir el estilo mediterraneo con una experiencia digital fluida, visual y confiable.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/50 bg-white/60 p-5">
            <h2 className="text-xl font-semibold text-navy-900">Vision</h2>
            <p className="mt-3 text-sm text-navy-700">Ser la referencia en alquiler vacacional premium en la costa mediterranea.</p>
          </article>
          <article className="rounded-2xl border border-white/50 bg-white/60 p-5">
            <h2 className="text-xl font-semibold text-navy-900">Curacion</h2>
            <p className="mt-3 text-sm text-navy-700">Seleccionamos solo apartamentos con interiorismo, ubicacion y confort de alto nivel.</p>
          </article>
          <article className="rounded-2xl border border-white/50 bg-white/60 p-5">
            <h2 className="text-xl font-semibold text-navy-900">Experiencia</h2>
            <p className="mt-3 text-sm text-navy-700">Interfaz minimalista, responsive y lista para una reserva intuitiva desde cualquier dispositivo.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
