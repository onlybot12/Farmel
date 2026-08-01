import { Icon } from './Icon'
import { contact, branches } from '../data/content'

export function Footer() {
  const products = ['Total Water Treatment', 'Water Treatment Plant', 'Waste Water Treatment Plant']
  const sectors = ['Rumah', 'Apartemen', 'Rumah Sakit', 'Gedung Kantor', 'Pabrik Industri']

  return (
    <footer className="border-t border-slate-100 bg-slate-950 pt-16 pb-8 text-slate-400">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            
            {/* Bagian Logo Footer (Telah di-update menggunakan Gambar Logo) */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Logo Farmel" 
                className="h-11 w-auto object-contain" 
                onError={(e) => {
                  // Fallback: Jika file gambar logo.png tidak ditemukan di folder public,
                  // ia akan otomatis menyembunyikan gambar kosong dan memunculkan teks di bawahnya.
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const textFallback = target.nextElementSibling as HTMLElement;
                  if (textFallback) textFallback.style.display = 'block';
                }}
              />
              {/* Fallback Teks (Hanya muncul jika file gambar logo.png tidak ditemukan) */}
              <div className="hidden leading-none">
                <p className="font-display text-xl font-extrabold text-white">Farmel</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-400">Water Solution</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Indonesia's Biggest Water Treatment Technology and General Contractor.
              Total Water Management sejak 2004.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p className="flex items-center gap-2"><Icon name="phone" className="h-4 w-4 text-brand-400" /> Telp  {contact.phone}</p>
              <p className="flex items-center gap-2"><Icon name="phone" className="h-4 w-4 text-brand-400" /> Fax  {contact.phone2}</p>
              <p className="flex items-center gap-2"><Icon name="mail" className="h-4 w-4 text-brand-400" /> {contact.email}</p>
              <p className="flex items-start gap-2"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {contact.address}</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Produk</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p} className="transition-colors hover:text-white">{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Sektor</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {sectors.map((s) => (
                <li key={s} className="transition-colors hover:text-white">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Cabang</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {branches.map((b) => (
                <li key={b} className="transition-colors hover:text-white">{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Farmel Cipta Mulia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
