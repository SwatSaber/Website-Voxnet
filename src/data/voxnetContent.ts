export interface SolutionPillar {
  id: 'pbx' | 'sip-trunk' | 'numbering' | 'managed-services';
  number: string;
  title: string;
  summary: string;
  deploymentOptions: string[];
  architectureHighlight: string;
  specs: Array<{ label: string; value: string }>;
}

export interface CompetitiveAdvantage {
  number: string;
  title: string;
  description: string;
  evidenceTag: string;
}

export interface UseCaseProfile {
  id: 'bpo' | 'saas-ai' | 'global-telco';
  label: string;
  headline: string;
  description: string;
  recommendedPbx: 'cloud' | 'on-prem' | 'hybrid';
  recommendedNumbering: 'local-22' | '1500' | '0800';
  defaultDailyCalls: number;
  architectureNotes: string[];
  deliverables: string[];
}

export interface CoverageCity {
  city: string;
  areaCode: string;
  region: 'Jawa' | 'Sumatera' | 'Kalimantan' | 'Sulawesi' | 'Bali & Nusa Tenggara';
  province: string;
}

export const HERO_CONTENT = {
  eyebrow: 'Mitra Infrastruktur Komunikasi Bisnis & CPaaS',
  headline: 'Kelola Ribuan Panggilan Setiap Hari Tanpa Takut Sistem Tumbang.',
  subheadline:
    'Sistem telephony dan SIP Trunk terpadu yang bantu tim Anda tangani komunikasi perusahaan lebih lancar. Kapasitas tinggi, mudah dipasang, dan patuh penuh pada regulasi Indonesia.',
  primaryCta: 'Jadwalkan Sesi Diskusi',
  secondaryCta: 'Pelajari Solusi Kami',
  trustItems: [
    'Lisensi Resmi Kominfo',
    'Penyelenggara Sistem Elektronik (PSE)',
    'Jasa Call Center Resmi',
  ],
};

export const PROBLEM_CONTENT = {
  headline: 'Operasional Terhambat karena Kualitas Suara Tidak Stabil?',
  body: 'Panggilan pelanggan yang sering terputus, sulitnya integrasi sistem, dan keamanan data yang rentan sering kali menjadi beban operasional utama. Belum lagi risiko sanksi jika infrastruktur Anda tidak sesuai regulasi pemerintah. Kini, Anda bisa cegah gangguan sistem sebelum berdampak buruk ke layanan pelanggan. Kami bantu bangun fondasi komunikasi yang kokoh dari awal sampai akhir.',
  painPoints: [
    {
      number: '01',
      title: 'Trafik Padat Menyebabkan Call Drop',
      detail: 'Lonjakan trafik jam sibuk picu antrean macet hingga audio terputus.',
      imageAlt: 'Meja operasi contact center enterprise dengan telepon IP dan headset di ruang kantor modern',
      fallbackTitle: 'Stabilitas Trafik Suara Enterprise',
    },
    {
      number: '02',
      title: 'Integrasi Platform yang Terfragmentasi',
      detail: 'Integrasi CRM, Omnichannel, atau Voicebot ke jalur lokal masih rumit.',
      imageAlt: 'Perangkat gateway jaringan fiber optik putih dengan kabel patch oranye di ruang server kaca',
      fallbackTitle: 'Interkoneksi Gateway & API Terbuka',
    },
    {
      number: '03',
      title: 'Risiko Kepatuhan & Kebocoran Data',
      detail: 'Sistem tanpa izin Kominfo serta proteksi lemah rentan bocor dan sanksi.',
      imageAlt: 'Koridor keamanan ruang server enterprise dengan kontrol akses biometrik dan dinding kaca buram',
      fallbackTitle: 'Keamanan & Kepatuhan Regulasi Kominfo',
    },
  ],
};

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    id: 'pbx',
    number: '01',
    title: 'PBX Fleksibel Sesuai Kebutuhan',
    summary:
      'Terapkan sistem PBX dalam wujud Cloud, On-Premises, perangkat lunak, maupun perangkat keras. Semua bisa disesuaikan dengan infrastruktur dan anggaran tim Anda.',
    deploymentOptions: ['Cloud PBX Multi-Tenant', 'On-Premises Appliance', 'Hybrid Software PBX'],
    architectureHighlight: 'Fleksibilitas topologi penuh tanpa penguncian vendor hardware atau skema lisensi kaku.',
    specs: [
      { label: 'Model Penerapan', value: 'Cloud / On-Premises / Hybrid' },
      { label: 'Skalabilitas Ekstensi', value: '50 hingga 10.000+ agen aktif' },
      { label: 'Integrasi CRM & API', value: 'REST Webhook & SIPREC siap pakai' },
    ],
  },
  {
    id: 'sip-trunk',
    number: '02',
    title: 'SIP Trunk Berkapasitas Tinggi',
    summary:
      'Hubungkan Contact Center, aplikasi, atau Voicebot Anda dengan konektivitas suara dua arah yang stabil. Didukung sistem keamanan ketat seperti IP Whitelisting.',
    deploymentOptions: ['Dedicated SBC Interconnect', 'TLS & SRTP Encryption', 'Strict IP Whitelisting'],
    architectureHighlight: 'Jalur dua arah simetris dengan failover otomatis multi-rute untuk trafik enterprise volume tinggi.',
    specs: [
      { label: 'Kapasitas Trafik', value: 'Ribuan kanal konkuren per node' },
      { label: 'Keamanan Akses', value: 'IP Whitelisting & Firewall SBC' },
      { label: 'Kualitas Audio', value: 'G.711 / Opus HD Voice routing' },
    ],
  },
  {
    id: 'numbering',
    number: '03',
    title: 'Penomoran Resmi Seluruh Indonesia',
    summary:
      'Tingkatkan kredibilitas perusahaan dengan nomor lokal resmi di 22 kota, hingga pusat panggilan khusus seperti 1500 dan bebas pulsa 0800.',
    deploymentOptions: ['Nomor Lokal 22 Kota', 'Access Number 1500', 'Toll-Free 0800'],
    architectureHighlight: 'Seluruh penomoran terdaftar legal melalui perizinan resmi operator di Indonesia.',
    specs: [
      { label: 'Cakupan Area Lokal', value: '22 Kota Besar Indonesia' },
      { label: 'Nomor Korporat Nasional', value: '1500 (5–6 Digit) & 0800' },
      { label: 'Kepatuhan Identitas', value: 'Caller ID terverifikasi operator' },
    ],
  },
  {
    id: 'managed-services',
    number: '04',
    title: 'Managed Services Terpadu',
    summary:
      'Serahkan pemeliharaan jaringan SIP Trunk, sistem rekam suara, hingga proteksi cegah bocor data (DLP) pada tim kami. Pantau seluruh operasional dari satu pintu secara praktis tanpa kendala.',
    deploymentOptions: ['Pemeliharaan Jaringan 24/7', 'Centralized Voice Recording', 'Data Loss Prevention (DLP)'],
    architectureHighlight: 'Tim teknis terdedikasi memantau stabilitas, enkripsi rekaman suara, dan kepatuhan DLP dari satu pintu.',
    specs: [
      { label: 'Rekam Percakapan', value: 'Arsip terenkripsi & retensi terkelola' },
      { label: 'Proteksi Data', value: 'Kebijakan DLP & kontrol akses peran' },
      { label: 'Pemeliharaan Harian', value: 'Tim engineering noc terpusat' },
    ],
  },
];

export const COMPETITIVE_EDGES: CompetitiveAdvantage[] = [
  {
    number: '01',
    title: 'Netral dan Siap Integrasi',
    description:
      'Kami hadir sebagai mitra penyedia infrastruktur back-end. Layanan Voxnet siap dihubungkan ke platform perangkat lunak Omnichannel atau CRM pilihan Anda tanpa ada benturan kepentingan bisnis.',
    evidenceTag: 'Back-End Agnostik · Bebas Konflik CRM/Omnichannel',
  },
  {
    number: '02',
    title: 'Patuh Regulasi Operasional',
    description:
      'Berbekal legalitas utuh dari Kominfo dan perizinan nasional, pastikan seluruh alur kerja perusahaan Anda selalu beroperasi di dalam jalur aman regulasi Indonesia.',
    evidenceTag: 'Kominfo Resmi · PSE · Jasa Call Center',
  },
  {
    number: '03',
    title: 'Jaminan Layanan Kritis',
    description:
      'Arsitektur kami dirancang khusus untuk menangani trafik volume tinggi. Sangat cocok untuk Call Center dan Business Process Outsourcing (BPO) skala besar.',
    evidenceTag: 'SBC Redundancy · Trafik Jutaan Menit',
  },
];

export const USE_CASES: UseCaseProfile[] = [
  {
    id: 'bpo',
    label: 'Call Center & BPO',
    headline: 'Kapasitas Interkoneksi SBC untuk Operasi Contact Center Skala Besar',
    description:
      'Tangani jutaan menit trafik percakapan secara lancar dengan dukungan interkoneksi Session Border Controller (SBC) yang sangat stabil.',
    recommendedPbx: 'hybrid',
    recommendedNumbering: '1500',
    defaultDailyCalls: 35000,
    architectureNotes: [
      'Interkoneksi langsung ke SBC aktif-aktif dengan pemisahan trafik inbound & outbound',
      'Dukungan rekaman suara terpusat serta proteksi cegah bocor data (DLP) untuk agen BPO',
      'Kompatibel penuh dengan platform dialer, Omnichannel, dan CRM perusahaan',
    ],
    deliverables: ['SIP Trunk Multi-Node', 'Nomor 1500 / 0800', 'Voice Recording & DLP'],
  },
  {
    id: 'saas-ai',
    label: 'Perusahaan SaaS & Voice AI',
    headline: 'Jembatan Terminasi Suara Lokal untuk Aplikasi dan Voicebot Modern',
    description:
      'Jembatan terminasi telepon yang andal ke nomor lokal Indonesia. Sempurnakan fitur Voicebot atau aplikasi Anda dengan infrastruktur suara kami.',
    recommendedPbx: 'cloud',
    recommendedNumbering: 'local-22',
    defaultDailyCalls: 12000,
    architectureNotes: [
      'Routing SIP dua arah latensi rendah untuk stream audio real-time ke engine Voice AI',
      'Penyediaan nomor lokal resmi di 22 kota untuk identitas panggilan bisnis yang terpercaya',
      'Keamanan IP Whitelisting dan autentikasi klaster cloud yang rapi untuk tim developer',
    ],
    deliverables: ['Elastic Cloud SIP Trunk', 'Nomor Lokal 22 Kota', 'API & Webhook Routing'],
  },
  {
    id: 'global-telco',
    label: 'Mitra Telekomunikasi Global',
    headline: 'Akses Infrastruktur Legal & Penomoran Lokal untuk Ekspansi Indonesia',
    description:
      'Akses perizinan resmi dan infrastruktur nomor lokal untuk mendukung ekspansi operasi klien global Anda di pasar Indonesia.',
    recommendedPbx: 'on-prem',
    recommendedNumbering: '0800',
    defaultDailyCalls: 50000,
    architectureNotes: [
      'Kepatuhan penuh terhadap lisensi Kominfo (PSE dan Jasa Call Center) tanpa hambatan birokrasi lokal',
      'Interkoneksi carrier-grade ke titik POP Jakarta untuk terminasi klien multinasional',
      'Alokasi nomor lokal 22 kota serta akses 1500/0800 untuk perusahaan multinasional',
    ],
    deliverables: ['Carrier SBC Interconnect', 'Kepatuhan Regulasi Kominfo', 'Penomoran Multi-Kota'],
  },
];

export const COVERAGE_CITIES: CoverageCity[] = [
  { city: 'Jakarta', areaCode: '021', region: 'Jawa', province: 'DKI Jakarta' },
  { city: 'Bogor', areaCode: '0251', region: 'Jawa', province: 'Jawa Barat' },
  { city: 'Tangerang', areaCode: '021', region: 'Jawa', province: 'Banten' },
  { city: 'Bekasi', areaCode: '021', region: 'Jawa', province: 'Jawa Barat' },
  { city: 'Bandung', areaCode: '022', region: 'Jawa', province: 'Jawa Barat' },
  { city: 'Cirebon', areaCode: '0231', region: 'Jawa', province: 'Jawa Barat' },
  { city: 'Semarang', areaCode: '024', region: 'Jawa', province: 'Jawa Tengah' },
  { city: 'Solo', areaCode: '0271', region: 'Jawa', province: 'Jawa Tengah' },
  { city: 'Yogyakarta', areaCode: '0274', region: 'Jawa', province: 'DI Yogyakarta' },
  { city: 'Surabaya', areaCode: '031', region: 'Jawa', province: 'Jawa Timur' },
  { city: 'Malang', areaCode: '0341', region: 'Jawa', province: 'Jawa Timur' },
  { city: 'Medan', areaCode: '061', region: 'Sumatera', province: 'Sumatera Utara' },
  { city: 'Batam', areaCode: '0778', region: 'Sumatera', province: 'Kepulauan Riau' },
  { city: 'Pekanbaru', areaCode: '0761', region: 'Sumatera', province: 'Riau' },
  { city: 'Padang', areaCode: '0751', region: 'Sumatera', province: 'Sumatera Barat' },
  { city: 'Palembang', areaCode: '0711', region: 'Sumatera', province: 'Sumatera Selatan' },
  { city: 'Bandar Lampung', areaCode: '0721', region: 'Sumatera', province: 'Lampung' },
  { city: 'Denpasar', areaCode: '0361', region: 'Bali & Nusa Tenggara', province: 'Bali' },
  { city: 'Balikpapan', areaCode: '0542', region: 'Kalimantan', province: 'Kalimantan Timur' },
  { city: 'Banjarmasin', areaCode: '0511', region: 'Kalimantan', province: 'Kalimantan Selatan' },
  { city: 'Pontianak', areaCode: '0561', region: 'Kalimantan', province: 'Kalimantan Barat' },
  { city: 'Makassar', areaCode: '0411', region: 'Sulawesi', province: 'Sulawesi Selatan' },
];

export const CREDIBILITY_CONTENT = {
  headline: 'Mendukung Pertumbuhan Bisnis Melalui Komunikasi',
  body: 'Selama lebih dari 10 tahun, PT. Lima Satu Tiga Global Tel-Access (Voxnet) telah dipercaya oleh berbagai sektor enterprise. Misi kami sederhana: menyediakan platform perteleponan awan dan pesan untuk komunikasi bisnis yang nyata dampaknya.',
  tagline: 'Connecting People. Empowering Business. Enabling Growth.',
  brandIdentity: {
    legalEntity: 'PT Lima Satu Tiga Global Tel-Access (Voxnet)',
    vision: 'To be a leading communications service-enabling platform provider in Indonesia.',
    mission: 'To provide a cloud-based telephony and messaging platform for business communication.',
    primaryTagline: 'Just Call. Clearer, Closer.',
    supportingMessages: [
      'Everytime. Everywhere.',
      'Future freedom of communication is here.',
    ],
  },
  licenses: [
    { code: 'PSE', name: 'Penyelenggara Sistem Elektronik', issuer: 'Kominfo RI' },
    { code: 'JCC', name: 'Jasa Call Center Resmi', issuer: 'Kominfo RI' },
  ],
};

export const CONVERSION_CONTENT = {
  headline: 'Siap Perkuat Infrastruktur Komunikasi Perusahaan Anda?',
  body: 'Jangan biarkan kendala teknis menghambat kepuasan pelanggan Anda. Mari bedah kebutuhan infrastruktur komunikasi Anda bersama konsultan kami untuk temukan solusi yang paling efisien.',
  ctaLabel: 'Bicara dengan Tim Solusi Kami',
  microcopy: 'Tim ahli kami akan merespons permintaan Anda dalam 1x24 jam kerja.',
};
