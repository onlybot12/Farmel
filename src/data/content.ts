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

export const branches = ['Jakarta Pusat', 'Tangerang','Bintaro', 'Semarang', 'Surabaya', 'Bali']

export type ClientItem = { name: string; logo: string }

export const clients: ClientItem[] = [
  { name: 'Richeese Factory', logo: '/client/Logo-Richeese-Factory.png' },
  { name: 'Angkasa Pura II', logo: '/client/Logo-Angkasa-Pura-II.png' },
  { name: 'Unifam', logo: '/client/Logo-Unifam.png' },
  { name: 'Darya Varia', logo: '/client/Logo-Darya-Varia.png' },
  { name: 'Bali Hai', logo: '/client/logo-bali_hai.png' },
]

export const milestones = [
  { year: '2004', title: 'Awal Perjalanan', desc: 'Farmel Cahaya Mandiri berdiri sebagai chemical trading dan pengolahan air.' },
  { year: '2010', title: 'Unit Konstruksi', desc: 'Membentuk unit usaha jasa konstruksi, gedung, jembatan, jalan, serta mekanikal elektrikal.' },
  { year: '2016', title: 'PT. Farmel Cipta Mandiri', desc: 'Unit baru untuk memenuhi kebutuhan service dan pelayanan pengolahan air yang optimal.' },
  { year: '2023', title: 'PT. Farmel Cipta Mulia', desc: 'Unit baru untuk memenuhi kebutuhan service dan pelayanan pengolahan air yang optimal.' },
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
  { label: 'Akta Pendirian', value: 'Notaris Seruni Lissari S. S.H, M.Kn.' },
  { label: 'Akta Perubahan', value: 'Notaris Hendrik Tri Subiyanto S.H, M.Kn' },
  { label: 'Kemenkumham', value: 'AHU-0049585.AH.01.02.Tahun 2020' },
  { label: 'SIUP', value: '1810230030915' },
  { label: 'TDP', value: '1810230030915' },
  { label: 'NPWP', value: '50.702.922.1-453.000' },
  { label: 'PKP', value: 'S-821PKP/WPJ.08/KP.1003/2016' },
  { label: 'SKT', value: 'S-20631/KT/KPP.081003/2023' },
  { label: 'SKDU Perusahaan', value: '503/336-Kesos' },
  { label: 'UUG', value: 'Notaris Hendrik Tri Subiyanto S.H, M.Kn' },
  { label: 'IPAK', value: 'Notaris Hendrik Tri Subiyanto S.H, M.Kn' },
  { label: 'SIUJKN', value: 'Notaris Hendrik Tri Subiyanto S.H, M.Kn' },
]

export const contact = {
  phone: '(62-21) 7362295',
  phone2: '(62-21) 7362311',
  email: 'marketing@farmel.co.id',
  address: 'JI. Raya Bendungan Jago No. 20 E Kemayoran - Jakarta Pusat',
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



// ... (Kode di bagian atas file biarkan seperti semula, ganti bagian paling bawah dengan ini)

export type SubCategoryItem = {
  name: string
  brand?: string
  points: string[]
}

export type FullProductCategory = {
  id: string
  title: string
  icon: string
  subcategories: SubCategoryItem[]
}

export const fullProducts: FullProductCategory[] = [
  {
    id: '01',
    title: 'Water Treatment',
    icon: 'droplet',
    subcategories: [
      {
        name: 'CHEMICAL TREATMENT',
        brand: 'RASCHEM',
        points: [
          'Cooling Tower Treatment',
          'Boiler Water Treatment',
          'Chiller Water Treatment',
          'Cleaning Water Treatment',
        ],
      },
      {
        name: 'EQUIPMENT',
        points: [
          'Sand Filter',
          'Carbon Filter',
          'Manganese Filter',
          'Pressure Gravity Filter',
          'Water Softener',
          'FRP Panel',
        ],
      },
      {
        name: 'TREATMENT SYSTEM',
        points: [
          'Demineralizer',
          'Reverse Osmosis',
          'Water Recycling Treatment',
          'Water Treatment Package',
        ],
      },
    ],
  },
  {
    id: '02',
    title: 'Waste Water Treatment',
    icon: 'recycle',
    subcategories: [
      {
        name: 'SEWAGE TREATMENT',
        points: [
          'Extended Aeration',
          'Portable Biotechnology System',
        ],
      },
      {
        name: 'WASTE WATER TREATMENT SYSTEM',
        points: [
          'Anaerobic and Aerobic System',
          'Daffresh Package',
          'Sedimentation Package',
          'WWTP Package Mobile',
          'Biogas Treatment',
        ],
      },
    ],
  },
  {
    id: '03',
    title: 'Service & Maintenance',
    icon: 'building',
    subcategories: [
      {
        name: 'ENGINEERING & MAINTENANCE SERVICES',
        points: [
          'Engineering Design WTP/STP/WWTP',
          'Procurement, Installation and Construction',
          'Consulting and Supervision',
          'Optimalisation and Assessment WTP/STP/WWTP',
          'Operational & Maintenance WTP/STP/WWTP',
          'Cleaning Boiler, Cooling & Chiller Tower',
          'Media Filter Replace',
          'Replacement Media Filtration',
        ],
      },
    ],
  },
]
