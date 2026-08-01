import { useState } from 'react' 
import { Icon } from './Icon'
import { values, legality } from '../data/content'

export function Values() {
  // ini biar aktif bro kalo di klick
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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

        { }
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

            { }
            <div className="mt-8 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white">
              {legality.map((l, idx) => {
                const isOpen = activeIndex === idx
                return (
                  <div key={l.label} className="bg-white transition-colors hover:bg-slate-50/30">
                    { }
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left outline-none transition-all"
                    >
                      <span className={`text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-brand-600' : 'text-slate-700'}`}>
                        {l.label}
                      </span>
                      { }
                      <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 ${isOpen ? 'rotate-180 bg-brand-50 text-brand-600' : ''}`}>
                        <svg className="h-3.5 w-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    
                    { }
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="px-5 pb-4 pt-1">
                          <p className="text-sm font-medium text-slate-600">
                            {l.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
