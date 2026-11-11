import { Fragment } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import heroInfraImg from '../assets/images/voxnet_hero_infra_1794368138668.jpg';
import { HERO_CONTENT } from '../data/voxnetContent';
import { PAGE_CONTAINER_CLASS } from '../utils/goldenRatio';
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
    <section
      id="top"
      className="relative overflow-hidden vox-hero-radiant text-white border-b border-white/15 lg:min-h-[min(94svh,920px)] flex flex-col justify-center"
    >
      <VoxnetSupergraphic
        tone="white"
        className="hidden lg:block absolute -right-[90px] -bottom-[110px] w-[360px] h-auto opacity-[0.1]"
      />
      <div className={`relative z-10 w-full ${PAGE_CONTAINER_CLASS} pt-[96px] pb-[42px] lg:pt-[118px] lg:pb-[68px]`}>
        {/* Proportional architectural 2-column split with high-contrast white type over radiant orange */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.22fr_1fr] gap-[26px] lg:gap-[42px] items-stretch">
          <div className="relative z-10 flex flex-col justify-between space-y-[32px] lg:space-y-[42px] py-[6px]">
            <div className="space-y-[16px] lg:space-y-[26px]">
              <p className="text-[13px] font-semibold tracking-wide text-white leading-[1.618]">
                {HERO_CONTENT.eyebrow}
              </p>

              <h1 className="font-display font-bold text-white tracking-[-0.02em] leading-[1.18] text-[clamp(2.25rem,3.4vw,3.5rem)] max-w-[760px] text-balance">
                {HERO_CONTENT.headline}
              </h1>

              <p className="text-[16px] lg:text-[17px] text-white/95 leading-[1.65] max-w-[64ch]">
                {HERO_CONTENT.subheadline}
              </p>
            </div>

            <div className="space-y-[26px]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-[16px]">
                <button
                  type="button"
                  onClick={onScheduleClick}
                  className="inline-flex items-center justify-center gap-[10px] px-[26px] py-[14px] min-h-[48px] rounded-lg bg-white hover:bg-[#FFF5EE] text-[#B84408] text-[15px] font-bold shadow-[0_12px_28px_-10px_rgba(110,34,0,0.38)] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{HERO_CONTENT.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="#solusi"
                  className="inline-flex items-center justify-center gap-[6px] px-[26px] py-[14px] min-h-[48px] rounded-lg bg-white/15 hover:bg-white/25 border border-white/50 text-white text-[15px] font-semibold transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{HERO_CONTENT.secondaryCta}</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </a>
              </div>

              <div className="pt-[20px] border-t border-white/25 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-[14px] gap-y-[6px] text-[13px] font-medium text-white/95 leading-[1.618]">
                {HERO_CONTENT.trustItems.map((item, idx) => (
                  <Fragment key={item}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="hidden sm:inline text-white/55">
                        |
                      </span>
                    )}
                    <span>{item}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col">
            <div className="relative z-10 flex-1 min-h-[300px] lg:min-h-[470px] xl:min-h-[510px] rounded-[16px] overflow-hidden border border-white/30 bg-[#9E3504] shadow-[0_28px_60px_-20px_rgba(110,32,0,0.45)]">
              <ResilientImage
                src={heroInfraImg}
                alt="Pusat operasi infrastruktur telekomunikasi enterprise Voxnet dengan arsitektur kaca dan server optik modern"
                fallbackTitle="Infrastruktur Suara & SIP Trunk Voxnet"
                className="w-full h-full lg:h-full object-cover object-[75%_center]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/20 to-transparent"
              />
              <div className="absolute bottom-[26px] left-[26px] right-[26px] text-white">
                <p className="text-[13px] font-medium text-white/90">
                  PT Lima Satu Tiga Global Tel-Access
                </p>
                <p className="font-display text-[17px] font-bold tracking-tight leading-[1.272] mt-[4px]">
                  Connecting People. Empowering Business. Enabling Growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width corporate proof strip on radiant orange base */}
        <div className="relative z-10 mt-[42px] lg:mt-[56px] pt-[36px] lg:pt-[42px] border-t border-white/25 grid grid-cols-2 lg:grid-cols-4 gap-[26px]">
          {ENTERPRISE_METRICS.map((item) => (
            <div key={item.label} className="space-y-[6px]">
              <p className="font-display text-[28px] lg:text-[32px] font-bold text-white tabular-nums tracking-tight leading-[1.2]">
                {item.value}
              </p>
              <p className="text-[13px] text-white/90 leading-[1.45]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
