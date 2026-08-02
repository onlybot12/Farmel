import { useEffect, useState } from 'react'
import { Icon } from './Icon'

const links = [
  { href: '#profil', label: 'Profil' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#katalog', label: 'Katalog' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white shadow-[0_4px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        
        <a href="#beranda" className="group flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Logo Farmel" 
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            onError={(e) => {
              const target = e.target as HTMLElement;
              target.style.display = 'none';
              const textFallback = target.nextElementSibling as HTMLElement;
              if (textFallback) textFallback.style.display = 'flex';
            }}
          />
          <span className="hidden flex-col leading-none">
            <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
              Farmel
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600">
              Water Solution
            </span>
          </span>
        </a>

        { }
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
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      { }
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-x pb-4">
          <ul className="flex flex-col gap-0.5 rounded-2xl border border-slate-100 bg-white p-2.5 shadow-xl">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              { }
              <a 
                href="#kontak" 
                onClick={() => setOpen(false)} 
                className="btn-primary mt-1.5 w-full !py-2.5 !px-4 text-xs justify-center"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
