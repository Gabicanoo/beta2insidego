export type Apartment = {
  slug: string;
  titulo: string;
  ubicacion: string;
  precioNoche: number;
  huespedes: number;
  dormitorios: number;
  valoracion: number;
  descripcion: string;
  servicios: string[];
  coordenadas: {
    lat: number;
    lng: number;
  };
  imagenes: string[];
};

export const APARTAMENTOS: Apartment[] = [
  {
    slug: "atico-gotico-signature",
    titulo: "Atico Gotico Signature",
    ubicacion: "Barcelona, Barrio Gotico",
    precioNoche: 420,
    huespedes: 4,
    dormitorios: 2,
    valoracion: 4.9,
    descripcion:
      "Atico reformado con terraza privada y vistas a tejados historicos. Diseno mediterraneo contemporaneo con acabados premium.",
    servicios: ["WiFi 1Gb", "Terraza privada", "Cocina premium", "Check-in autonomo", "Aire acondicionado"],
    coordenadas: { lat: 41.3839, lng: 2.1762 },
    imagenes: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617098474202-0d0d7f60fadb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "suite-eixample-terrace",
    titulo: "Suite Eixample Terrace",
    ubicacion: "Barcelona, Eixample",
    precioNoche: 390,
    huespedes: 3,
    dormitorios: 2,
    valoracion: 4.8,
    descripcion:
      "Espacio elegante junto a Passeig de Gracia con terraza orientada al atardecer y piezas de diseno local.",
    servicios: ["Conserjeria digital", "Terraza", "Smart TV 65", "Cafe de especialidad", "Ascensor"],
    coordenadas: { lat: 41.3925, lng: 2.1653 },
    imagenes: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "loft-born-deluxe",
    titulo: "Loft Born Deluxe",
    ubicacion: "Barcelona, El Born",
    precioNoche: 350,
    huespedes: 2,
    dormitorios: 1,
    valoracion: 4.7,
    descripcion:
      "Loft boutique con luz natural, arte contemporaneo y ubicacion privilegiada para explorar galerias y gastronomia.",
    servicios: ["Domotica", "Cama king", "Ducha efecto lluvia", "Espacio de trabajo", "Lavadora-secadora"],
    coordenadas: { lat: 41.3851, lng: 2.1835 },
    imagenes: [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "villa-sitges-horizon",
    titulo: "Villa Sitges Horizon",
    ubicacion: "Sitges, Cataluna",
    precioNoche: 610,
    huespedes: 6,
    dormitorios: 3,
    valoracion: 4.9,
    descripcion:
      "Villa con esencia mediterranea, piscina privada y vistas al mar. Ideal para estancias exclusivas y teletrabajo premium.",
    servicios: ["Piscina privada", "Parking", "Chef bajo demanda", "Jardin", "Sistema de sonido"],
    coordenadas: { lat: 41.2369, lng: 1.8053 },
    imagenes: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "residencia-girona-patio",
    titulo: "Residencia Girona Patio",
    ubicacion: "Girona, Cataluna",
    precioNoche: 280,
    huespedes: 4,
    dormitorios: 2,
    valoracion: 4.8,
    descripcion:
      "Apartamento sereno con patio interior, materiales nobles y ambiente calmado a pasos del casco historico.",
    servicios: ["Patio privado", "Bicicletas", "Calefaccion radiante", "Cocina equipada", "Auto check-in"],
    coordenadas: { lat: 41.9794, lng: 2.8214 },
    imagenes: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "penthouse-costa-brava",
    titulo: "Penthouse Costa Brava",
    ubicacion: "Cadaques, Cataluna",
    precioNoche: 530,
    huespedes: 5,
    dormitorios: 3,
    valoracion: 4.9,
    descripcion:
      "Penthouse frente al mar con galeria panoramica, interiorismo minimalista y acceso cercano a calas privadas.",
    servicios: ["Vista mar", "Terraza panoramica", "Servicio de limpieza", "Transfer privado", "WiFi fibra"],
    coordenadas: { lat: 42.2877, lng: 3.2784 },
    imagenes: [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616594039964-3e6f0f5f3a7c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export const UBICACIONES = ["Barcelona", "Cataluna"];

export const SERVICIOS_FILTRO = [
  "WiFi 1Gb",
  "Terraza privada",
  "Piscina privada",
  "Vista mar",
  "Conserjeria digital",
];

export const getApartmentBySlug = (slug: string) =>
  APARTAMENTOS.find((apartment) => apartment.slug === slug);
