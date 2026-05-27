export default function SobreNosotrosPage() {
  return (
    <main className="max-container padding-container py-12 lg:py-20">
      <section className="section-shell p-6 lg:p-10">
        <p className="eyebrow">Sobre nosotros</p>
        <h1 className="bold-40 mt-3 lg:bold-52">
          InsideGo, lujo mediterráneo con enfoque tecnológico
        </h1>
        <p className="mt-6 max-w-4xl text-muted">
          InsideGo nace para transformar la forma de reservar estancias vacacionales premium.
          Nuestro objetivo es unir el estilo mediterráneo con una experiencia digital fluida,
          visual y confiable.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-glass bg-glass p-5">
            <h2 className="text-xl font-semibold">Visión</h2>
            <p className="mt-3 text-sm text-muted">
              Ser la referencia en alquiler vacacional premium en la costa mediterránea.
            </p>
          </article>
          <article className="rounded-2xl border border-glass bg-glass p-5">
            <h2 className="text-xl font-semibold">Curación</h2>
            <p className="mt-3 text-sm text-muted">
              Seleccionamos solo apartamentos con interiorismo, ubicación y confort de alto nivel.
            </p>
          </article>
          <article className="rounded-2xl border border-glass bg-glass p-5">
            <h2 className="text-xl font-semibold">Experiencia</h2>
            <p className="mt-3 text-sm text-muted">
              Interfaz minimalista, responsive y lista para una reserva intuitiva desde cualquier
              dispositivo.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
