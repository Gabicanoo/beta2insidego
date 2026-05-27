import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="max-container padding-container sticky top-0 z-40 py-6">
      <div className="flexBetween rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md lg:px-8">
      <Link href="/" className="text-xl font-semibold tracking-[0.16em] text-navy-900">
        INSIDEGO
      </Link>

      <ul className="hidden h-full gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-navy-700 flexCenter cursor-pointer border-b border-transparent pb-1.5 transition-all hover:border-beige-500 hover:text-navy-900">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Reserve Now"
          icon="/user.svg"
          variant="btn_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      </div>
    </nav>
  )
}

export default Navbar