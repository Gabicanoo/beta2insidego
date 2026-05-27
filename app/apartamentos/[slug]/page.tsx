import Link from "next/link";
import ApartmentDetailView from "@/components/ApartmentDetailView";
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
        <h1 className="text-3xl font-semibold">Apartamento no encontrado</h1>
        <Link
          href="/apartamentos"
          className="mt-6 inline-flex rounded-full border border-glass px-5 py-2 text-muted"
        >
          Volver a apartamentos
        </Link>
      </main>
    );
  }

  return <ApartmentDetailView apartment={apartment} />;
}
