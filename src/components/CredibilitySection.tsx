import { CREDIBILITY_CONTENT } from '../data/voxnetContent';
import { PAGE_CONTAINER_CLASS, SECTION_PADDING_Y_CLASS } from '../utils/goldenRatio';
import { VoxnetSupergraphic } from './VoxnetSupergraphic';

const CORPORATE_ANCHORS = [
  { label: 'Rekam Jejak', value: '10+ Tahun Enterprise' },
  { label: 'Jangkauan Lokal', value: '22 Kota Besar Indonesia' },
  { label: 'Status Legalitas', value: 'Kominfo PSE · JCC' },
];

export function CredibilitySection() {
  return (
    <section id="tentang" className={`scroll-mt-[68px] relative overflow-hidden bg-[#F8F9FA] border-b border-[#EBEBEB] ${SECTION_PADDING_Y_CLASS}`}>
      <VoxnetSupergraphic
        tone="orange"
        className="hidden lg:block absolute -left-24 -bottom-24 w-[360px] h-auto opacity-[0.045] rotate-180"
      />

      <div className={`relative ${PAGE_CONTAINER_CLASS}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-[26px] lg:gap-[42px] items-stretch">
          <div className="flex flex-col justify-between space-y-[26px] py-[6px]">
            <div className="space-y-[16px]">
              <p className="text-[13px] font-semibold tracking-wider text-[#B84408]">
                Profil Perusahaan & Kredibilitas
              </p>
              <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.18] text-balance">
                {CREDIBILITY_CONTENT.headline}
              </h2>
              <p className="text-[16px] text-[#4A4A4A] leading-[1.618] max-w-[66ch]">
                {CREDIBILITY_CONTENT.body}
              </p>
            </div>

            <div className="space-y-[26px]">
              <div className="pt-[16px] border-t border-[#EBEBEB] space-y-[6px]">
                <p className="font-display text-[21px] font-bold text-[#B84408] leading-[1.272]">
                  {CREDIBILITY_CONTENT.tagline}
                </p>
                <p className="text-[14px] font-medium text-[#525252] leading-[1.618]">
                  {CREDIBILITY_CONTENT.brandIdentity.primaryTagline} ·{' '}
                  {CREDIBILITY_CONTENT.brandIdentity.supportingMessages.join(' · ')}
                </p>
              </div>

              <div className="pt-[26px] border-t border-[#EBEBEB] grid grid-cols-1 sm:grid-cols-3 gap-[26px]">
                {CORPORATE_ANCHORS.map((item) => (
                  <div key={item.label} className="space-y-[4px]">
                    <p className="text-[12px] font-medium text-[#525252]">{item.label}</p>
                    <p className="font-display text-[15px] font-bold text-[#1A1A1A] tabular-nums">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#EBEBEB] rounded-[16px] p-[26px] lg:p-[42px] space-y-[26px] flex flex-col justify-between">
            <div className="space-y-[16px]">
              <div>
                <p className="text-[13px] font-semibold text-[#525252]">Entitas Resmi</p>
                <p className="font-display text-[16px] font-bold text-[#1A1A1A] mt-[4px] leading-[1.272]">
                  {CREDIBILITY_CONTENT.brandIdentity.legalEntity}
                </p>
              </div>
              <div className="pt-[16px] border-t border-[#EBEBEB]">
                <p className="text-[13px] font-semibold text-[#525252]">Visi Perusahaan</p>
                <p className="text-[14px] text-[#333333] leading-[1.618] mt-[4px]">
                  {CREDIBILITY_CONTENT.brandIdentity.vision}
                </p>
              </div>
              <div className="pt-[16px] border-t border-[#EBEBEB]">
                <p className="text-[13px] font-semibold text-[#525252]">Misi Perusahaan</p>
                <p className="text-[14px] text-[#333333] leading-[1.618] mt-[4px]">
                  {CREDIBILITY_CONTENT.brandIdentity.mission}
                </p>
              </div>
            </div>

            <div className="pt-[16px] border-t border-[#EBEBEB] space-y-[10px]">
              <p className="text-[13px] font-semibold text-[#1A1A1A]">
                Perizinan Resmi Pemerintah Republik Indonesia
              </p>
              <div className="divide-y divide-[#EBEBEB]">
                {CREDIBILITY_CONTENT.licenses.map((lic) => (
                  <div
                    key={lic.code}
                    className="flex items-center justify-between gap-[10px] py-[10px] text-[13px]"
                  >
                    <span className="font-semibold text-[#1A1A1A]">
                      {lic.code} — {lic.name}
                    </span>
                    <span className="font-medium text-[#525252] shrink-0">{lic.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
