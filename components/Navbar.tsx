"use client";

import Link from "next/link"
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-container padding-container sticky top-0 z-50 py-5"
    >
      <div className="flexBetween rounded-full border border-white/35 bg-white/45 px-4 py-3 shadow-[0_10px_40px_rgba(10,35,66,0.1)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/35 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.18em] text-navy-900">
          INSIDEGO
        </Link>

        <ul className="hidden h-full gap-8 lg:flex">
          {[
            { href: "/", label: "Inicio" },
            { href: "/apartamentos", label: "Apartamentos" },
            { href: "/#destinos", label: "Destinos" },
            { href: "/sobre-nosotros", label: "Sobre Nosotros" },
            { href: "/contacto", label: "Contacto" },
          ].map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="regular-16 text-navy-700 border-b border-transparent pb-1 transition-all hover:border-beige-500 hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Link
          href="/apartamentos"
          className="hidden rounded-full border border-beige-300 bg-navy-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-navy-700 lg:inline-flex"
        >
          Reservar
        </Link>
      </div>
    </motion.nav>
  )
}

export default Navbar