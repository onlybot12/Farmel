import { Icon } from './Icon'
import { values, legality } from '../data/content'

export function Values() {
  return (
    <section id="nilai" className="section-pad bg-slate-50">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-500" /> Filosofi & Nilai
          </span>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl">
            Prinsip yang kami pegang teguh
          </h2>
          <p className="mt-4 text-slate-600">
            Kepercayaan dan kreativitas adalah kata sederhana, namun tidak mudah dipraktikkan.
            Itulah dedikasi kami di setiap proyek.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal card group hover:-translate-y-1 hover:border-brand-200"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Legality */}
        <div className="reveal mt-16">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">
                  <span className="h-px w-8 bg-brand-500" /> Legalitas Perusahaan
                </span>
                <h3 className="h-display mt-3 text-2xl">Terverifikasi & terdaftar resmi</h3>
              </div>
              <p className="text-sm text-slate-500">Dokumen & sertifikasi lengkap</p>
            </div>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 sm:grid-cols-2 lg:grid-cols-3">
              {legality.map((l) => (
                <div key={l.label} className="bg-white px-5 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-600">{l.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-slate-700">{l.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
