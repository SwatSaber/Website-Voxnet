import { ArrowRight, ChevronRight } from 'lucide-react';
import heroInfraImg from '../assets/images/voxnet_hero_infra_1794368138668.jpg';
import { HERO_CONTENT } from '../data/voxnetContent';
import { ResilientImage } from './ResilientImage';
import { VoxnetSupergraphic } from './VoxnetSupergraphic';

interface HeroSectionProps {
  onScheduleClick: () => void;
}

const ENTERPRISE_METRICS = [
  { value: '30+', label: 'Perusahaan Enterprise Aktif' },
  { value: '22 Kota', label: 'Penomoran Lokal Resmi Indonesia' },
  { value: '6 Jenis', label: 'Penomoran Pusat Panggilan' },
  { value: '10+ Tahun', label: 'Pengalaman Infrastruktur Telko' },
];

export function HeroSection({ onScheduleClick }: HeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-white border-b border-[#EBEBEB]">
      {/* Architectural supergraphic backdrop */}
      <VoxnetSupergraphic
        tone="orange"
        className="hidden lg:block absolute -right-24 -top-24 w-[480px] h-auto opacity-[0.14]"
      />

      <div className="relative max-w-[1220px] mx-auto px-[26px] md:px-[42px] lg:px-[68px] pt-[42px] pb-[68px] lg:pt-[68px] lg:pb-[68px]">
        {/* Balanced Golden Ratio 2-column split (61.8% / 38.2%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-[26px] lg:gap-[42px] items-stretch">
          <div className="flex flex-col justify-between space-y-[26px]">
            <div className="space-y-[16px]">
              {/* Clean unboxed eyebrow — zero pill enclosure */}
              <p className="text-[13px] font-semibold tracking-wide text-[#B84408] leading-[1.618]">
                {HERO_CONTENT.eyebrow}
              </p>

              <h1 className="font-display font-bold text-[#1A1A1A] tracking-[-0.025em] leading-[1.15] text-[clamp(2.125rem,3.4vw,3.125rem)] text-balance">
                {HERO_CONTENT.headline}
              </h1>

              <p className="text-[16px] text-[#4A4A4A] leading-[1.618] max-w-[60ch]">
                {HERO_CONTENT.subheadline}
              </p>
            </div>

            <div className="space-y-[26px]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-[16px]">
                <button
                  type="button"
                  onClick={onScheduleClick}
                  className="inline-flex items-center justify-center gap-[10px] px-[26px] py-[13px] min-h-[44px] rounded-lg vox-cta-gradient text-white text-[15px] font-semibold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
                >
                  <span>{HERO_CONTENT.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="#solusi"
                  className="inline-flex items-center justify-center gap-[6px] px-[26px] py-[13px] min-h-[44px] rounded-lg bg-white border border-[#EBEBEB] hover:border-[#1A1A1A] text-[#1A1A1A] text-[15px] font-semibold transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7621B]"
                >
                  <span>{HERO_CONTENT.secondaryCta}</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </a>
              </div>

              {/* Clean typographic trust bar (no pills, no green dots, no dangling pipe on mobile) */}
              <div className="pt-[16px] border-t border-[#EBEBEB] flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-[16px] gap-y-[6px] text-[13px] font-medium text-[#4A4A4A] leading-[1.618]">
                <span>{HERO_CONTENT.trustItems[0]}</span>
                <span aria-hidden="true" className="hidden sm:inline text-[#D4D4D4]">|</span>
                <span>{HERO_CONTENT.trustItems[1]}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative flex-1 min-h-[260px] lg:min-h-[398px] rounded-[16px] overflow-hidden border border-[#EBEBEB] bg-[#F8F9FA]">
              <ResilientImage
                src={heroInfraImg}
                alt="Pusat operasi infrastruktur telekomunikasi enterprise Voxnet dengan arsitektur kaca dan server optik modern"
                fallbackTitle="Infrastruktur Suara & SIP Trunk Voxnet"
                className="w-full h-full lg:h-full object-cover object-[75%_center]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/75 via-[#1A1A1A]/15 to-transparent"
              />
              <div className="absolute bottom-[26px] left-[26px] right-[26px] text-white">
                <p className="text-[13px] font-medium text-white/85">
                  PT Lima Satu Tiga Global Tel-Access
                </p>
                <p className="font-display text-[16px] font-bold tracking-tight leading-[1.272] mt-[4px]">
                  Connecting People. Empowering Business. Enabling Growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width corporate proof strip below the split */}
        <div className="mt-[42px] pt-[42px] border-t border-[#EBEBEB] grid grid-cols-2 lg:grid-cols-4 gap-[26px]">
          {ENTERPRISE_METRICS.map((item) => (
            <div key={item.label} className="space-y-[6px]">
              <p className="font-display text-[26px] font-bold text-[#1A1A1A] tabular-nums tracking-tight leading-[1.2]">
                {item.value}
              </p>
              <p className="text-[13px] text-[#525252] leading-[1.45]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
