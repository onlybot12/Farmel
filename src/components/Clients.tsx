import { clients, branches } from '../data/content'

export function Clients() {
  return (
    <section id="klien" className="section-pad">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-500" /> Klien Kami
          </span>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl">
            Dipercaya oleh pemimpin industri
          </h2>
          <p className="mt-4 text-slate-600">
            Dari BUMN konstruksi hingga produsen makanan dan minuman terkemuka —
            mereka memilih Farmel sebagai mitra air dan konstruksi.
          </p>
        </div>

        {/* Logo marquee */}
        <div className="reveal mt-12 marquee-mask overflow-hidden">
          <div className="marquee gap-5">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex flex-col h-36 w-52 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:border-brand-200"
              >
                {/* Logo Klien (Ukuran diperbesar menjadi h-16 / 64px agar sangat jelas) */}
                <div className="flex h-20 w-full items-center justify-center">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-16 w-auto max-w-[90%] object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none'
                    }}
                  />
                </div>
                {/* Nama Klien di bawahnya */}
                <span className="mt-3 text-center font-display text-xs font-bold text-slate-400 transition-colors hover:text-brand-600 line-clamp-1">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Branches */}
        <div className="reveal mt-16 grid gap-6 rounded-3xl bg-brand-800 p-8 text-white sm:grid-cols-2 sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold">Jangkauan nasional</h3>
            <p className="mt-2 text-sm text-white/80">
              Kantor pusat di Bintaro dengan jaringan cabang di kota-kota besar Indonesia.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {branches.map((b) => (
              <li
                key={b}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
