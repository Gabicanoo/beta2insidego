"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import Link from "next/link";
import type { Apartment } from "@/lib/apartments";

type Props = {
  apartments: Apartment[];
  highlightSlug?: string;
  center?: [number, number];
  zoom?: number;
};

function FitBounds({ apartments }: { apartments: Apartment[] }) {
  const map = useMap();

  useEffect(() => {
    if (apartments.length === 0) return;
    const bounds = L.latLngBounds(
      apartments.map((a) => [a.coordenadas.lat, a.coordenadas.lng] as [number, number])
    );
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 12 });
  }, [apartments, map]);

  return null;
}

function createMarkerIcon(active: boolean) {
  return L.divIcon({
    className: "insidego-marker-wrap",
    html: `<div class="insidego-marker ${active ? "insidego-marker--active" : ""}">
      <span></span>
    </div>`,
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -40],
  });
}

export default function InsideGoMapInner({
  apartments,
  highlightSlug,
  center = [41.55, 2.1],
  zoom = 8,
}: Props) {
  const isSingle = apartments.length === 1;

  return (
    <MapContainer
      center={center}
      zoom={isSingle ? 14 : zoom}
      scrollWheelZoom={false}
      className="insidego-map h-full w-full rounded-2xl"
      style={{ minHeight: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!isSingle && <FitBounds apartments={apartments} />}
      {apartments.map((apartment) => (
        <Marker
          key={apartment.slug}
          position={[apartment.coordenadas.lat, apartment.coordenadas.lng]}
          icon={createMarkerIcon(apartment.slug === highlightSlug)}
        >
          <Popup className="insidego-popup">
            <div className="space-y-2 p-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-beige-500">
                InsideGo
              </p>
              <p className="font-semibold text-navy-900 dark:text-white">{apartment.titulo}</p>
              <p className="text-sm text-muted">{apartment.ubicacion}</p>
              <p className="text-sm font-semibold text-gold">
                {apartment.precioNoche} EUR / noche
              </p>
              <Link
                href={`/apartamentos/${apartment.slug}`}
                className="inline-flex rounded-full bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white"
              >
                Ver apartamento
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
