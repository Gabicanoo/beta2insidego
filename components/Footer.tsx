import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-12 bg-navy-900 py-16 text-white">
      <div className="padding-container max-container flex w-full flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <Link href="/" className="text-xl font-semibold tracking-[0.16em] text-white">
            INSIDEGO
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-3 text-white/80">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-beige-300">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-white/80">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <div className="rounded-full border border-white/20 p-2 transition-all hover:border-beige-300 hover:bg-white/10">
                        <Image src={link} alt="social" width={20} height={20} />
                      </div>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/15" />
        <p className="regular-14 w-full text-center text-white/70">2026 INSIDEGO. All rights reserved.</p>
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
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-white">{title}</h4>
      {children}
    </div>
  )
}

export default Footer