import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { VoxnetLogo } from './VoxnetLogo';

interface NavbarProps {
  onConsultClick: () => void;
}

const NAV_ITEMS = [
  { href: '#solusi', label: 'Solusi' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#use-cases', label: 'Use Case' },
  { href: '#tentang', label: 'Tentang' },
];

export function Navbar({ onConsultClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileConsult = () => {
    setMobileMenuOpen(false);
    onConsultClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EBEBEB]">
      <div className="max-w-[1220px] mx-auto px-[26px] md:px-[42px] lg:px-[68px] h-[68px] flex items-center justify-between gap-[26px] lg:gap-[42px]">
        {/* Zone 1: Clean Single-Line Brand Wordmark */}
        <a
          href="#top"
          aria-label="Beranda Voxnet"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E7621B] rounded"
        >
          <VoxnetLogo surface="light" />
        </a>

        {/* Zone 2: 4 Clean Single-Line Navigation Links */}
        <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-[26px] lg:gap-[42px]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-[#404040] hover:text-[#B84408] transition-colors whitespace-nowrap shrink-0 underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E7621B] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-[10px] shrink-0">
          <button
            type="button"
            onClick={onConsultClick}
            className="hidden sm:inline-flex items-center justify-center px-[26px] py-[10px] min-h-[42px] rounded-lg vox-cta-gradient text-white text-[14px] font-semibold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            Jadwalkan Diskusi
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#EBEBEB] text-[#1A1A1A] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-t border-[#EBEBEB] px-[26px] py-[16px] space-y-[10px]"
        >
          <nav aria-label="Navigasi Mobile" className="flex flex-col space-y-[6px]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-[10px] px-[10px] text-[16px] font-medium text-[#1A1A1A] hover:text-[#B84408] rounded-md"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-[16px] border-t border-[#EBEBEB]">
            <button
              type="button"
              onClick={handleMobileConsult}
              className="w-full py-[13px] px-[26px] min-h-[44px] rounded-lg vox-cta-gradient text-white text-[14px] font-semibold text-center cursor-pointer"
            >
              Jadwalkan Sesi Diskusi
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
