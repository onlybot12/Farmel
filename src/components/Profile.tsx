import { Icon } from './Icon'

export function Profile() {
  return (
    <section id="profil" className="section-pad">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/kantor.jpg"
              alt="Tim Farmel di lokasi proyek"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:block">
            <p className="font-display text-4xl font-extrabold text-brand-700">20+</p>
            <p className="mt-1 text-sm font-medium text-slate-500">Tahun pengalaman<br />melayani Indonesia</p>
          </div>
        </div>

        <div className="reveal [transition-delay:120ms]">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-500" /> Company Profile
          </span>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl">
            Mitra terpercaya total water management & general contractor
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            { }
            <a 
              href="https://farmel.co.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-brand-600 hover:text-brand-700 hover:underline transition-colors duration-200"
            >
              Farmel Cipta Mandiri
            </a> berdiri sejak 2004, bergerak di bidang chemical trading, industri pengolahan air bersih dan limbah dengan menyediakan kebutuhan pasar akan produk berkualitas, berbekal teknologi lingkungan yang mutakhir dan efektif.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Pada 2010 kami membentuk unit jasa konstruksi — gedung, jembatan, jalan, serta mekanikal dan elektrikal. Lalu pada 2016, PT. Farmel Cipta Mandiri hadir untuk memenuhi kebutuhan service dan pelayanan yang optimal. Dan pada tahun 2023 terbentuk Perusahaan baru yaitu <strong className="font-semibold text-slate-800"> PT. Farmel Cipta Mulia</strong> khusus untuk melayani service chemical water treatment dan kebutuhan lainnya.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name="zap" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900">Visi</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To be a multinational company who are competent in the field of total water management and mechanical electrical services
              </p>
            </div>
            <div className="card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name="award" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900">Misi</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Provide the best quality products and services in the field of total water management and mechanical electrical services by keeping the maintaining environmental sustainability for the future
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
