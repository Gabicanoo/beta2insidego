import { Suspense } from "react";
import ApartamentosClient from "@/components/ApartamentosClient";

export default function ApartamentosPage() {
  return (
    <main className="max-container padding-container py-10 lg:py-14">
      <div className="mb-10">
        <p className="eyebrow">Catalogo premium</p>
        <h1 className="bold-40 mt-3 lg:bold-52">Apartamentos InsideGo</h1>
        <p className="regular-16 mt-4 max-w-[760px] text-navy-700">
          Encuentra apartamentos de lujo en Barcelona y Cataluna con filtros avanzados y disponibilidad en tiempo real.
        </p>
      </div>
      <Suspense fallback={<p className="text-navy-700">Cargando apartamentos...</p>}>
        <ApartamentosClient />
      </Suspense>
    </main>
  );
}
