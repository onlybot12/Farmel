import { products } from '../data/content'

export function Catalog() {
  return (
    <section id="katalog" className="section-pad bg-white">
      <div className="container-x">
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
      </div>
    </section>
  )
}
