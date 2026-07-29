import { milestones } from '../data/content'

export function Journey() {
  return (
    <section id="perjalanan" className="section-pad">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-500" /> Perjalanan Kami
          </span>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl">
            Dua dekade tumbuh bersama Indonesia
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-brand-200 sm:left-1/2" />

          <ol className="space-y-12">
            {milestones.map((m, i) => {
              const left = i % 2 === 0
              return (
                <li
                  key={m.year}
                  className={`reveal relative pl-12 sm:w-1/2 sm:pl-0 ${
                    left ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot */}
                  <span
                    className={`absolute top-1.5 grid h-8 w-8 place-items-center rounded-full border-4 border-white bg-brand-600 text-[10px] font-bold text-white shadow-lg sm:top-1.5 ${
                      left ? 'left-0 sm:-right-4 sm:left-auto' : 'left-0 sm:-left-4'
                    }`}
                  >
                    ●
                  </span>
                  <div className="card hover:-translate-y-1">
                    <span className="font-display text-2xl font-extrabold text-brand-600">{m.year}</span>
                    <h3 className="mt-2 font-display text-lg font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
