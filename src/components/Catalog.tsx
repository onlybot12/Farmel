import { Icon } from './Icon'
import { products, fullProducts } from '../data/content'

export function Catalog() {
  return (
    <section id="katalog" className="section-pad bg-white">
      <div className="container-x">
        
        {/* ================= BAGIAN GRID VISUAL (ATAS) ================= */}
        <div className="reveal mx-auto max-w-2xl text-center mb-12">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-brand-500" /> Katalog Produk
          </span>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl">
            Produk Kimia & Media Filtrasi Berkualitas
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Kami menyediakan berbagai macam media filter air dan bahan kimia berkualitas tinggi untuk kebutuhan pengolahan air bersih dan limbah.
          </p>
        </div>

        {/* Grid layout: 2 kolom ke samping pada mobile, 3 di tablet, dan 4 di desktop */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="reveal flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-brand-200 hover:shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Wadah gambar produk */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center p-3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Informasi detail produk */}
              <div className="mt-4 flex flex-col items-center text-center pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-500">
                  {p.category}
                </span>
                <h3 className="mt-2 px-1 text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 min-h-[2.5rem]">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>


        {/* ================= BAGIAN DAFTAR LENGKAP TEKS (BAWAH) ================= */}
        <div className="reveal mt-24 border-t border-slate-100 pt-16">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-brand-500" /> Spesifikasi Komprehensif
            </span>
            <h3 className="h-display mt-4 text-2xl sm:text-3xl">
              Daftar Produk & Layanan Lengkap
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Solusi terintegrasi secara detail untuk Water Treatment, Waste Water Treatment, serta Service & Maintenance.
            </p>
          </div>

          {/* Grid responsif: 1 kolom di mobile, 3 kolom di desktop dengan efek transisi melayang */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {fullProducts.map((cat, idx) => (
              <div 
                key={cat.title}
                className="reveal group bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Header Kategori */}
                <div className="flex items-center gap-3 border-b border-slate-200/60 pb-4 mb-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <Icon name={cat.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-extrabold text-slate-900 tracking-tight leading-none">
                      {cat.title}
                    </h4>
                    {cat.brand && (
                      <span className="mt-1.5 inline-block text-[9px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Brand: {cat.brand}
                      </span>
                    )}
                  </div>
                </div>

                {/* List Item Teks */}
                <ul className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500 transition-transform duration-300 group-hover:scale-125" />
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {item.label}
                        </span>
                        {item.desc && (
                          <span className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {item.desc}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
