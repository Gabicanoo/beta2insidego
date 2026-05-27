import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-br from-navy-900 via-navy-700 to-navy-900 py-14 text-white">
      <div className="padding-container max-container flex w-full flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <Link href="/" className="text-xl font-semibold tracking-[0.16em]">
            INSIDEGO
          </Link>

          <div className='grid gap-8 text-sm text-white/80 md:grid-cols-3'>
            <FooterColumn title="Navegacion">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <Link href="/apartamentos" className="hover:text-white">Apartamentos</Link>
              <Link href="/sobre-nosotros" className="hover:text-white">Sobre Nosotros</Link>
              <Link href="/contacto" className="hover:text-white">Contacto</Link>
            </FooterColumn>
            <FooterColumn title="Contacto">
              <a href="mailto:ceoinsidego@gmail.com" className="text-beige-300 hover:text-white">
                ceoinsidego@gmail.com
              </a>
            </FooterColumn>
            <FooterColumn title="Instagram">
              <a
                href="https://www.instagram.com/insidego.es"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-4 py-2 transition-all hover:border-beige-300 hover:bg-white/10"
              >
                <Image src="/instagram.svg" alt="Instagram InsideGo" width={20} height={20} />
                @insidego.es
              </a>
            </FooterColumn>
          </div>
        </div>

        <div className="h-px w-full bg-white/15" />
        <p className="regular-14 w-full text-center text-white/70">2026 InsideGo. Plataforma premium de alquiler vacacional.</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="bold-18 whitespace-nowrap text-white">{title}</h4>
      {children}
    </div>
  )
}

export default Footer