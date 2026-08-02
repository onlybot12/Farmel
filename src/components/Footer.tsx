import { Icon } from './Icon'
import { contact } from '../data/content'

export function Footer() {
  const products = ['Total Water Treatment', 'Water Treatment Plant', 'Waste Water Treatment Plant']
  const sectors = ['Rumah', 'Apartemen', 'Rumah Sakit', 'Gedung Kantor', 'Pabrik Industri']

  // Daftar data detail cabang yang Anda berikan
  const branchDetails = [
    {
      name: 'Jakarta Pusat',
      address: 'Jl. Raya Bendungan Jago No. 20 E Kemayoran - Jakarta Pusat',
    },
    {
      name: 'Surabaya',
      address: 'Komp. Ruko Monroe Jl. Kahuripan Nirwana No. 31 Sidoarjo, Jawa Timur',
      telp: '(031) 99722221',
      email: 'marketing.surabaya@farmel.co.id',
    },
    {
      name: 'Bintaro',
      address: 'Jl. Raya Pondok Jaya No. 51 Bintaro, Tangerang - Banten',
      telp: '(62-21) 73884735',
      fax: '(62-21) 73884745',
    },
    {
      name: 'Semarang',
      address: 'Jl. Perintis Kemerdekaan No. 20 Banyumanik - Semarang',
      telp: '(024) 746 4580',
      fax: '(024) 746 4580',
      email: 'marketing.semarang@farmel.co.id',
    },
    {
      name: 'Bali',
      address: 'Jl. Tukad Badung Denpasar - Bali',
      telp: '08111731701',
      email: 'marketing.bali@farmel.co.id',
    },
    {
      name: 'Tangerang',
      address: 'Jl. Raya Palasari, Kampung Bungaok RT 04/01 Ds. Caringin Kec. Legok, Tangerang - Banten',
    },
  ]

  return (
    <footer className="border-t border-slate-100 bg-slate-950 pt-16 pb-8 text-slate-400">
      <div className="container-x">
        {/* Rasio lebar kolom grid disesuaikan agar kolom Cabang (paling kanan) menjadi lebih lebar */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.8fr]">
          <div>
            
            {/* Bagian Logo Footer */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Logo Farmel" 
                className="h-11 w-auto object-contain" 
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const textFallback = target.nextElementSibling as HTMLElement;
                  if (textFallback) textFallback.style.display = 'block';
                }}
              />
              <div className="hidden leading-none">
                <p className="font-display text-xl font-extrabold text-white">Farmel</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-400">Water Solution</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Indonesia's Biggest Water Treatment Technology and General Contractor.
              Total Water Management sejak 2004.
            </p>
            
            {/* Kontak Utama (Sudah diperbaiki dengan mengganti contact.fax menjadi contact.phone2 agar lolos type-checking) */}
            <div className="mt-6 space-y-2 text-sm">
              <a 
                href={`tel:${contact.phone?.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <Icon name="phone" className="h-4 w-4 text-brand-400" /> 
                Telp {contact.phone}
              </a>
              <a 
                href={`tel:${contact.phone2?.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <Icon name="phone" className="h-4 w-4 text-brand-400" /> 
                Fax {contact.phone2}
              </a>
              <a 
                href={`mailto:${contact.email}`} 
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <Icon name="mail" className="h-4 w-4 text-brand-400" /> 
                {contact.email}
              </a>
              <p className="flex items-start gap-2">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> 
                {contact.address}
              </p>
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

          {/* Kolom Cabang Baru */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white mb-4">Cabang</h4>
            <div className="space-y-5">
              {branchDetails.map((b) => (
                <div key={b.name} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <h5 className="font-bold text-white text-sm leading-none mb-2">{b.name}</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">{b.address}</p>
                  
                  {/* Info Kontak Spesifik Cabang */}
                  {(b.telp || b.fax || b.email) && (
                    <div className="mt-1.5 text-[11px] text-slate-500 space-y-0.5">
                      {b.telp && (
                        <p>
                          Telp:{' '}
                          <a 
                            href={`tel:${b.telp.replace(/[^0-9+]/g, '')}`} 
                            className="text-slate-400 hover:text-white transition-colors duration-200"
                          >
                            {b.telp}
                          </a>
                        </p>
                      )}
                      {b.fax && (
                        <p>
                          Fax:{' '}
                          <a 
                            href={`tel:${b.fax.replace(/[^0-9+]/g, '')}`} 
                            className="text-slate-400 hover:text-white transition-colors duration-200"
                          >
                            {b.fax}
                          </a>
                        </p>
                      )}
                      {b.email && (
                        <p>
                          Email:{' '}
                          <a 
                            href={`mailto:${b.email}`} 
                            className="text-brand-400 hover:text-brand-300 transition-colors duration-200"
                          >
                            {b.email}
                          </a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Farmel Cipta Mulia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
