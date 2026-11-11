import { PROBLEM_CONTENT } from '../data/voxnetContent';

export function ProblemSection() {
  return (
    <section className="bg-[#F8F9FA] border-b border-[#EBEBEB] py-[68px] lg:py-[110px]">
      <div className="max-w-[1220px] mx-auto px-[26px] md:px-[42px] lg:px-[68px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.618fr] gap-[26px] lg:gap-[42px] items-start">
          {/* Problem Narrative */}
          <div className="space-y-[16px]">
            <p className="text-[13px] font-semibold tracking-wider text-[#B84408]">
              Realitas Operasional Enterprise
            </p>
            <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.2] text-balance">
              {PROBLEM_CONTENT.headline}
            </h2>
            <p className="text-[16px] text-[#4A4A4A] leading-[1.618]">
              {PROBLEM_CONTENT.body}
            </p>
          </div>

          {/* 3 Clean Bottleneck Cards — hairline borders, zero border-l-4, natural numbering */}
          <div className="grid grid-cols-1 gap-[16px]">
            {PROBLEM_CONTENT.painPoints.map((point) => (
              <div
                key={point.number}
                className="bg-white border border-[#EBEBEB] rounded-[16px] p-[26px] flex flex-col sm:flex-row sm:items-start gap-[16px]"
              >
                <span className="font-mono text-[14px] font-semibold text-[#B84408] tabular-nums shrink-0 pt-[2px]">
                  {point.number}.
                </span>
                <div className="space-y-[6px]">
                  <h3 className="font-display text-[18px] font-bold text-[#1A1A1A] leading-[1.272]">
                    {point.title}
                  </h3>
                  <p className="text-[14px] text-[#525252] leading-[1.618]">
                    {point.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
