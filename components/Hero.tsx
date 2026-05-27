"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type React from "react";

const Hero = () => {
  const router = useRouter();
  const [ubicacion, setUbicacion] = useState("Barcelona");
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (ubicacion) params.set("ubicacion", ubicacion);
    if (entrada) params.set("entrada", entrada);
    if (salida) params.set("salida", salida);
    router.push(`/apartamentos?${params.toString()}`);
  };

  return (
    <section className="max-container padding-container pt-3">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[38px]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(10,35,66,0.80) 0%, rgba(10,35,66,0.55) 45%, rgba(10,35,66,0.28) 100%), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="relative z-10 flex min-h-[620px] flex-col justify-end px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          <p className="eyebrow mb-4 text-beige-300">Alquiler vacacional premium</p>
          <h1 className="bold-40 max-w-[860px] text-white lg:bold-64">
            Apartamentos exclusivos en Barcelona y Cataluna con esencia mediterranea
          </h1>
          <p className="regular-18 mt-6 max-w-[680px] text-white/90">
            InsideGo combina diseno, tecnologia y hospitalidad para ofrecer estancias elegantes en destinos unicos.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 grid gap-3 rounded-3xl border border-white/40 bg-white/20 p-4 shadow-2xl backdrop-blur-xl md:grid-cols-4"
          >
            <input
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              placeholder="Ubicacion"
              className="rounded-2xl border border-white/45 bg-white/85 px-4 py-3 text-sm text-navy-900 outline-none ring-beige-500/40 transition focus:ring-2"
            />
            <input
              type="date"
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              className="rounded-2xl border border-white/45 bg-white/85 px-4 py-3 text-sm text-navy-900 outline-none ring-beige-500/40 transition focus:ring-2"
            />
            <input
              type="date"
              value={salida}
              onChange={(e) => setSalida(e.target.value)}
              className="rounded-2xl border border-white/45 bg-white/85 px-4 py-3 text-sm text-navy-900 outline-none ring-beige-500/40 transition focus:ring-2"
            />
            <button className="rounded-2xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-700">
              Buscar
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;