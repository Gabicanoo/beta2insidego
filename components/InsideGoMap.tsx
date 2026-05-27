"use client";

import dynamic from "next/dynamic";
import type { Apartment } from "@/lib/apartments";

const InsideGoMapInner = dynamic(() => import("./InsideGoMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[280px] w-full items-center justify-center rounded-2xl bg-beige-100/50 backdrop-blur-sm dark:bg-navy-700/40">
      <p className="text-sm text-muted">Cargando mapa...</p>
    </div>
  ),
});

type Props = {
  apartments: Apartment[];
  highlightSlug?: string;
  className?: string;
  zoom?: number;
};

export default function InsideGoMap({
  apartments,
  highlightSlug,
  className = "h-[340px] md:h-[420px] lg:h-[480px]",
  zoom,
}: Props) {
  const single = apartments.length === 1 ? apartments[0] : null;
  const center: [number, number] | undefined = single
    ? [single.coordenadas.lat, single.coordenadas.lng]
    : undefined;

  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-glass bg-glass p-2 shadow-glass backdrop-blur-xl ${className}`}
    >
      <InsideGoMapInner
        apartments={apartments}
        highlightSlug={highlightSlug}
        center={center}
        zoom={zoom}
      />
    </div>
  );
}
