"use client";

import ApartmentBrowser from "@/components/ApartmentBrowser";
import { APARTAMENTOS } from "@/lib/apartments";
import { useSearchParams } from "next/navigation";

export default function ApartamentosClient() {
  const searchParams = useSearchParams();

  return (
    <ApartmentBrowser
      apartments={APARTAMENTOS}
      initialDestino={searchParams.get("ubicacion") ?? ""}
      initialEntrada={searchParams.get("entrada") ?? ""}
      initialSalida={searchParams.get("salida") ?? ""}
    />
  );
}
