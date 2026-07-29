import { useState } from 'react'
import { Icon } from './Icon'
import { contact } from '../data/content'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const info = [
    { icon: 'phone', label: 'Telepon', value: contact.phone },
    { icon: 'mail', label: 'Email', value: contact.email },
    { icon: 'pin', label: 'Alamat', value: contact.address },
  ]

  return (
    <section id="kontak" className="section-pad bg-slate-50">
      <div className="container-x">
        <div className="reveal overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <div className="relative overflow-hidden bg-brand-800 p-10 text-white sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                  <span className="h-px w-8 bg-brand-300" /> Hubungi Kami
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Mari wujudkan proyek Anda bersama Farmel
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Tim ahli kami siap membantu konsultasi pengolahan air bersih, air limbah,
                  hingga pekerjaan konstruksi terintegrasi.
                </p>

                <ul className="mt-10 space-y-5">
                  {info.map((it) => (
                    <li key={it.label} className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                        <Icon name={it.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">{it.label}</p>
                        <p className="mt-0.5 text-sm font-medium text-white">{it.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form side */}
            <div className="p-10 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama Anda"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@perusahaan.com"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Pesan</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ceritakan kebutuhan proyek Anda..."
                    className="mt-1.5 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Kirim Pesan
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
                {sent && (
                  <p className="animate-fade-in rounded-2xl bg-brand-50 px-4 py-3 text-center text-sm font-medium text-brand-700">
                    Terima kasih! Pesan Anda telah kami terima, tim kami akan segera menghubungi Anda.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
