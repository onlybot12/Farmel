import { Icon } from './Icon'
import { fullProducts } from '../data/content'

export function Catalog() {
  return (
    <section id="katalog" className="section-pad bg-white">
      <div className="container-x">
        
        { }
        <div className="reveal mx-auto max-w-2xl text-center mb-16">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-brand-500" /> Spesifikasi Komprehensif
          </span>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl">
            Daftar Produk & Layanan Lengkap
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Solusi total water management terintegrasi dari hulu hingga hilir secara profesional untuk kebutuhan industri Anda.
          </p>
        </div>

        { }
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {fullProducts.map((cat, idx) => {
            return (
              <div 
                key={cat.title}
                className="reveal relative bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                { }
                <div className="absolute top-6 right-8 text-5xl font-extrabold text-slate-200/50 pointer-events-none select-none">
                  {cat.id}
                </div>

                { }
                <div className="flex items-center gap-3.5 mb-8">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/20">
                    <Icon name={cat.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                    {cat.title}
                  </h3>
                </div>

                { }
                <div className="space-y-8">
                  {cat.subcategories.map((sub, subIdx) => {
                    
                    const letter = String.fromCharCode(65 + subIdx);

                    return (
                      <div key={subIdx} className="space-y-4">
                        
                        { }
                        <div className="pl-1">
                          <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-600">
                            {letter}. {sub.name}
                          </h4>
                          {sub.brand && (
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 pl-5">
                              Brand: {sub.brand}
                            </p>
                          )}
                        </div>

                        { }
                        <ul className="space-y-2.5 pl-6">
                          {sub.points.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 group/item">
                              { }
                              <svg 
                                className="h-4 w-4 text-brand-500 shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-110" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                strokeWidth="3"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        { }
        <div className="reveal mt-16 overflow-hidden rounded-[2rem] bg-brand-600 p-8 sm:p-12 text-center text-white shadow-xl shadow-brand-600/10">
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl tracking-tight">
            Lihat katalog lengkap kami
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            Akses daftar produk, spesifikasi teknis, dan dokumentasi penuh di situs katalog khusus Farmel.
          </p>
          <div className="mt-8">
            <a 
              href="https://farmelkatalognew-neyx.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-600 shadow-md transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              katalog Farmel
              <Icon name="arrow" className="h-4 w-4 text-brand-600" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
