export type StatItem = { value: string; label: string; suffix?: string }

export const stats: StatItem[] = [
  { value: '20', suffix: '+', label: 'Tahun Pengalaman' },
  { value: '200', suffix: '+', label: 'Proyek Selesai' },
  { value: '50', suffix: '+', label: 'Klien Terpercaya' },
  { value: '5', label: 'Kantor & Cabang' },
]

export const services = [
  {
    title: 'Water Treatment Plant',
    desc: 'Pengolahan air bersih untuk industri, gedung, dan permukiman dengan teknologi mutakhir dan efisien.',
    icon: 'droplet',
    points: ['Filtrasi & RO', 'Softener', 'Demineralizer'],
  },
  {
    title: 'Waste Water Treatment',
    desc: 'Sistem pengolahan air limbah yang ramah lingkungan dan sesuai standar baku mutu lingkungan.',
    icon: 'recycle',
    points: ['IPAL Industri', 'STP Gedung', 'Sludge Management'],
  },
  {
    title: 'General Contractor',
    desc: 'Jasa konstruksi gedung, jembatan, jalan, serta pekerjaan mekanikal dan elektrikal terintegrasi.',
    icon: 'building',
    points: ['Gedung & Jalan', 'Mekanikal Elektrikal', 'Maintenance'],
  },
  {
    title: 'Chemical Trading',
    desc: 'Penyediaan kebutuhan chemical untuk pengolahan air bersih dan limbah dengan kualitas terjamin.',
    icon: 'flask',
    points: ['Coagulant', 'Flocculant', 'Disinfectant'],
  },
]

export const sectors = [
  'Rumah', 'Apartemen', 'Rumah Sakit', 'Gedung Kantor', 'Pabrik Industri', 'Perkotaan',
]

export const branches = ['Jakarta Pusat', 'Bintaro', 'Semarang', 'Surabaya', 'Bali']

export const clients = [
  'Richeese Factory', 
  'Waskita Karya', 
  'Bali Hai', 
  'PP Konstruksi',
  'Argha Karya', 
  'Hutama Karya', 
  'Unifam', 
  'Wika',
  'Kiko', 
  'Angkasa Pura II', 
  'Darya Varia', 
  'Adhi Karya',
  'Sierad Produce',
  'Nabati',
]

export const milestones = [
  { year: '2004', title: 'Awal Perjalanan', desc: 'Farmel Cahaya Mandiri berdiri sebagai chemical trading dan pengolahan air.' },
  { year: '2010', title: 'Unit Konstruksi', desc: 'Membentuk unit usaha jasa konstruksi, gedung, jembatan, jalan, serta mekanikal elektrikal.' },
  { year: '2016', title: 'PT. Farmel Cipta Mandiri', desc: 'Unit baru untuk memenuhi kebutuhan service dan pelayanan pengolahan air yang optimal.' },
  { year: '2020', title: 'PT. Farmel Cipta Mulia', desc: 'Unit baru untuk memenuhi kebutuhan service dan pelayanan pengolahan air yang optimal.' },
  { year: 'Kini', title: 'Total Water Management', desc: 'Menjadi mitra terpercaya total water management dan general contractor di Indonesia.' },
]

export const values = [
  { title: 'Kepercayaan & Kreativitas', desc: 'Prinsip sederhana yang mewakili dedikasi kami pada setiap proyek.', icon: 'shield' },
  { title: 'Memenuhi, Melebihi Harapan', desc: 'Tidak hanya memenuhi kebutuhan, tapi memberi nilai baru bagi pelanggan.', icon: 'sparkles' },
  { title: 'Bersikap Proaktif', desc: 'Berpikir luas, bertindak cepat dan tegas dalam setiap situasi.', icon: 'zap' },
  { title: 'Komunikasi yang Baik', desc: 'Mengharmoniskan beragam keterampilan dan berkomunikasi efektif.', icon: 'chat' },
  { title: 'Mencari Pengetahuan Baru', desc: 'Merintis potensi baru melalui pembelajaran mandiri dan rasa ingin tahu.', icon: 'book' },
  { title: 'Menampilkan Integritas', desc: 'Bekerja tekun dan tulus sebagai individu yang bertanggung jawab.', icon: 'heart' },
]

export const legality = [
  { label: 'Akta Pendirian', value: 'Notaris Apsari Sri Ekowati, S.H' },
  { label: 'Akta Perubahan', value: 'Notaris Nurwahidah Z. Isnaini, S.H' },
  { label: 'Kemenkumham', value: 'AHU-0049585.AH.01.02.Tahun 2020' },
  { label: 'SIUP', value: '9120205153602' },
  { label: 'TDP', value: '30.08.1.46.09851' },
  { label: 'NPWP', value: '76.448.148.7-453.000' },
  { label: 'PKP', value: 'S-821PKP/WPJ.08/KP.1003/2016' },
  { label: 'SKT', value: 'S-15079KT/WPJ.08/KP.1003/2016' },
  { label: 'SKDU Perusahaan', value: '503/336-Kesos' },
  { label: 'UUG', value: 'Notaris Endah Ariani, SH. M.Kn' },
  { label: 'IPAK', value: 'Notaris Endah Ariani, SH. M.Kn' },
  { label: 'SIUJKN', value: 'Notaris Endah Ariani, SH. M.Kn' },
]

export const contact = {
  phone: '(62-21) 7362295',
  fax: '(62-21) 7362311',
  email: 'marketing@farmel.co.id',
  address: 'Jl. Raya Pondok Jaya No. 1 Bintaro, Tangerang, Indonesia',
}
