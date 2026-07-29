import { useEffect, useState } from 'react'
import { Icon } from './Icon'

const links = [
  { href: '#profil', label: 'Profil' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#perjalanan', label: 'Perjalanan' },
  { href: '#nilai', label: 'Nilai' },
  { href: '#klien', label: 'Klien' },
  { href: '#kontak', label: 'Kontak' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 shadow-[0_4px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#beranda" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:scale-105">
            <Icon name="droplet" className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Farmel
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600">
              Water Solution
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#kontak" className="btn-primary">
            Hubungi Kami
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-slate-700 backdrop-blur lg:hidden"
          aria-label="Menu"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-x pb-6">
          <ul className="flex flex-col gap-1 rounded-3xl border border-slate-100 bg-white/95 p-4 shadow-xl backdrop-blur">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#kontak" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
