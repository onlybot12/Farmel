import { Icon } from './Icon'
import { services, sectors } from '../data/content'

export function Services() {
  return (
    <section id="layanan" className="section-pad bg-slate-50">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-brand-500" /> Layanan Kami
          </span>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl">
            Solusi terintegrasi dari hulu ke hilir
          </h2>
          <p className="mt-4 text-slate-600">
            Dari pengolahan air bersih, air limbah, konstruksi, hingga penyediaan chemical —
            kami menangani seluruh siklus kebutuhan Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group card hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_20px_60px_-20px_rgba(28,117,245,0.35)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Sectors */}
        <div className="reveal mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Sektor yang kami layani
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
