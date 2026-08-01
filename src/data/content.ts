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

export type ClientItem = { name: string; logo: string }

export const clients: ClientItem[] = [
  { name: 'Richeese Factory', logo: '/client/Logo-Richeese-Factory.png' },
  { name: 'Waskita Karya', logo: '/client/waskita_karya.jpg' },
  { name: 'Bali Hai', logo: '/client/bali_hai.jpg' },
  { name: 'PP Konstruksi', logo: '/client/pp_konstruksi.jpg' },
  { name: 'Argha Karya', logo: '/client/argha_karya.jpg' },
  { name: 'Hutama Karya', logo: '/client/hutama_karya.jpg' },
  { name: 'Unifam', logo: '/client/unifam.jpg' },
  { name: 'Wika', logo: '/client/wika.jpg' },
  { name: 'Kiko', logo: '/client/kiko.jpg' },
  { name: 'Angkasa Pura II', logo: '/client/angkasa_pura_ii.jpg' },
  { name: 'Darya Varia', logo: '/client/darya_varia.jpg' },
  { name: 'Adhi Karya', logo: '/client/adhi_karya.jpg' },
  { name: 'Sierad Produce', logo: '/client/sierad_produce.jpg' },
  { name: 'Nabati', logo: '/client/nabati.jpg' },
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



export type ProductItem = { title: string; category: string; image: string }

export const products: ProductItem[] = [
  {
    title: 'Karbon Aktif Norit GAC 830w',
    category: 'PRODUK KAMI',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    title: 'Kaporit (TCCA)',
    category: 'PRODUK KAMI',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    title: 'Anthracite Filter Media',
    category: 'PRODUK KAMI',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    title: 'Silica Sand',
    category: 'PRODUK KAMI',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    title: 'Tabung FRP (FRP Tank)',
    category: 'PRODUK KAMI',
    image: 'https://images.pexels.com/photos/2258570/pexels-photo-2258570.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    title: 'Sistem IPAL / WWTP',
    category: 'PRODUK KAMI',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
]




export type FullProductItem = {
  title: string
  brand?: string
  icon: string
  items: { label: string; desc?: string }[]
}

export const fullProducts: FullProductItem[] = [
  {
    title: 'WATER TREATMENT',
    brand: 'FARMEL',
    icon: 'droplet',
    items: [
      {
        label: 'A. Chemical Treatment (Brand: Raschem)',
        desc: 'Cooling Tower Treatment, Boiler Water Treatment, Chiller Water Treatment, Cleaning Water Treatment.',
      },
      {
        label: 'B. Equipment',
        desc: 'Sand Filter, Carbon Filter, Manganese Filter RASCHEM, Pressure Gravity Filter, Water Softener, FRP Panel.',
      },
      {
        label: 'C. Treatment System',
        desc: 'Demineralizer, Reverse Osmosis, Water Recycling Treatment, Water Treatment Package.',
      },
    ],
  },
  {
    title: 'WASTE WATER TREATMENT',
    brand: 'FARMEL',
    icon: 'recycle',
    items: [
      {
        label: 'A. Sewage Treatment',
        desc: 'Extended Aeration, Portable Biotechnology System.',
      },
      {
        label: 'B. Waste Water Treatment System',
        desc: 'Anaerobic and Aerobic System, Daffresh Package, Sedimentation Package, WWTP Package Mobile, Biogas Treatment.',
      },
    ],
  },
  {
    title: 'SERVICE & MAINTENANCE',
    icon: 'building',
    items: [
      { label: 'A. Engineering Design WTP/STP/WWTP' },
      { label: 'B. Procurement, Installation and Construction' },
      { label: 'C. Consulting and Supervision' },
      { label: 'D. Optimalisation and Assesment WTP/STP/WWTP' },
      { label: 'E. Operational & Maintenance WTP/STP/WWTP' },
      { label: 'F. Cleaning Boiler, Cooling & Chiller Tower' },
      { label: 'G. Media Filter Replace' },
      { label: 'H. Replacement Media Filtration' },
    ],
  },
]
