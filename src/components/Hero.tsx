import { Icon } from './Icon'
import { stats } from '../data/content'

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden water-bg pt-32 pb-24 sm:pt-40 sm:pb-32">

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-500" />
            Sejak 2004 · Total Water Management
          </span>
          <h1 className="h-display mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Solusi Air Terpadu untuk
            <span className="block text-brand-700">
              Indonesia yang lebih bersih
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Farmel Cahaya Mandiri — perusahaan teknologi pengolahan air dan general
            contractor terbesar di Indonesia. Dari air bersih, air limbah, hingga
            konstruksi terintegrasi, kami menghadirkan kualitas dan kepercayaan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#kontak" className="btn-primary">
              Konsultasi Proyek
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#layanan" className="btn-ghost">
              Lihat Layanan
            </a>
          </div>

          { }
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-5 py-6 text-center">
                <dt className="font-display text-3xl font-extrabold text-brand-700">
                  {s.value}
                  {s.suffix}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        { }
        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/60 shadow-2xl shadow-brand-900/20">
            { }
            <img
              src="/gktau.jpg"
              alt="Instalasi pengolahan air"
              className="h-full w-full object-cover"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = '0.1'; 
              }}
            />
            { }
            <div className="absolute inset-0 bg-brand-950/25 pointer-events-none" />
            
            <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white">
                  <Icon name="leaf" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Ramah Lingkungan</p>
                  <p className="text-xs text-white/80">Teknologi mutakhir & efektif</p>
                </div>
              </div>
            </div>
          </div>

          { }
          <div className="absolute -left-4 top-10 hidden animate-float rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="droplet" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">WTP & WWTP</p>
              <p className="text-xs text-slate-500">Air bersih & limbah</p>
            </div>
          </div>
          <div className="absolute -right-4 bottom-24 hidden animate-float [animation-delay:1.5s] rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="building" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">General Contractor</p>
              <p className="text-xs text-slate-500">Gedung · Jalan · M&E</p>
            </div>
          </div>
        </div>
      </div>

      { }
      <div className="wave-divider absolute inset-x-0 bottom-0 text-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0 40 C 240 80 480 0 720 32 C 960 64 1200 16 1440 48 L1440 80 L0 80 Z" />
        </svg>
      </div>
    </section>
  )
}
