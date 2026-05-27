export default function ContactoPage() {
  return (
    <main className="max-container padding-container py-12 lg:py-20">
      <section className="section-shell mx-auto max-w-3xl p-6 lg:p-10">
        <p className="eyebrow">Contacto</p>
        <h1 className="bold-40 mt-3 lg:bold-52">Hablemos de tu próxima estancia</h1>
        <p className="mt-4 text-muted">
          Para reservas y colaboraciones, escríbenos por email o Instagram.
        </p>

        <div className="mt-8 space-y-4 rounded-2xl border border-glass bg-glass p-5">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">Email</p>
          <a className="text-xl font-semibold text-gold" href="mailto:ceoinsidego@gmail.com">
            ceoinsidego@gmail.com
          </a>
        </div>

        <div className="mt-4 space-y-4 rounded-2xl border border-glass bg-glass p-5">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">Instagram</p>
          <a
            className="text-xl font-semibold text-gold"
            href="https://www.instagram.com/insidego.es"
            target="_blank"
            rel="noreferrer"
          >
            @insidego.es
          </a>
        </div>
      </section>
    </main>
  );
}
