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
      <div className="flexBetween rounded-full border border-glass bg-glass px-4 py-3 shadow-glass backdrop-blur-xl lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.18em] text-gold">
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
              className="regular-16 text-muted border-b border-transparent pb-1 transition-all hover:border-beige-500 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Link href="/apartamentos" className="btn-reserve hidden lg:inline-flex">
          Reservar
        </Link>
      </div>
    </motion.nav>
  )
}

export default Navbar