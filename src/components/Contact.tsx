import { useState } from 'react'
import { Icon } from './Icon'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="kontak" className="section-pad bg-slate-50">
      <div className="container-x">
        <div className="reveal overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            
            {/* Kolom Informasi Biru (Telah menggunakan titik lokasi resmi Anda) */}
            <div className="relative overflow-hidden bg-brand-800 p-10 text-white sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
              <div className="relative flex flex-col h-full">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-200">
                  <span className="h-px w-8 bg-brand-300" /> Lokasi Kami
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Mari wujudkan proyek Anda bersama Farmel
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Tim ahli kami siap membantu konsultasi pengolahan air bersih, air limbah,
                  hingga pekerjaan konstruksi terintegrasi.
                </p>

                {/* Google Maps Embed Resmi Berdasarkan Kode Iframe yang Anda Berikan */}
                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-lg w-full h-72 sm:h-80 lg:h-full lg:min-h-[280px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.253301897039!2d106.8501354!3d-6.1557509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59628bf56dd%3A0xfc763b459d048d1c!2sIndomaret%20RUKO%20MGK%20F16!5e0!3m2!1sid!2sid!4v1785672835758!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Lokasi Kantor - PT Farmel"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Kolom Formulir Pengiriman Pesan (Kanan) */}
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
