import { CREDIBILITY_CONTENT } from '../data/voxnetContent';
import { VoxnetSupergraphic } from './VoxnetSupergraphic';

export function CredibilitySection() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-[#F8F9FA] border-b border-[#EBEBEB] py-[68px] lg:py-[110px]">
      <VoxnetSupergraphic
        tone="orange"
        className="hidden md:block absolute -left-24 -bottom-24 w-[420px] h-auto opacity-[0.12] rotate-180"
      />

      <div className="relative max-w-[1220px] mx-auto px-[26px] md:px-[42px] lg:px-[68px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-[26px] lg:gap-[42px] items-start">
          <div className="space-y-[26px]">
            <div className="space-y-[16px]">
              <p className="text-[13px] font-semibold tracking-wider text-[#B84408]">
                Profil Perusahaan & Kredibilitas
              </p>
              <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.18] text-balance">
                {CREDIBILITY_CONTENT.headline}
              </h2>
              <p className="text-[16px] text-[#4A4A4A] leading-[1.618] max-w-[62ch]">
                {CREDIBILITY_CONTENT.body}
              </p>
            </div>

            <div className="pt-[16px] border-t border-[#EBEBEB] space-y-[6px]">
              <p className="font-display text-[21px] font-bold text-[#B84408] leading-[1.272]">
                {CREDIBILITY_CONTENT.tagline}
              </p>
              <p className="text-[14px] font-medium text-[#525252] leading-[1.618]">
                {CREDIBILITY_CONTENT.brandIdentity.primaryTagline} ·{' '}
                {CREDIBILITY_CONTENT.brandIdentity.supportingMessages.join(' · ')}
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#EBEBEB] rounded-[16px] p-[26px] space-y-[26px]">
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
