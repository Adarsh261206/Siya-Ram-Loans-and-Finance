import React from 'react';

/**
 * Authentic SVG Vector Logos for Indian Banks & Financial Institutions.
 * Rendered with official brand colors, symbols, and typographic monograms.
 */

export function SbiLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* SBI Emblem: Circle with keyhole */}
      <circle cx="24" cy="24" r="18" fill="#0084C8" />
      <circle cx="24" cy="20" r="6" fill="#FFFFFF" />
      <rect x="22" y="20" width="4" height="18" fill="#FFFFFF" />
      {/* SBI Wordmark */}
      <text x="50" y="28" fill="#0084C8" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.5">SBI</text>
      <text x="50" y="38" fill="#475569" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8">STATE BANK OF INDIA</text>
    </svg>
  );
}

export function BobLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bank of Baroda Sun */}
      <circle cx="24" cy="24" r="18" fill="#F26522" />
      <path d="M16 16 C16 16, 24 12, 24 20 C24 28, 16 28, 16 28 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M22 20 C22 20, 30 18, 30 24 C30 30, 22 30, 22 30 Z" fill="#FFFFFF" />
      {/* BOB Text */}
      <text x="50" y="27" fill="#F26522" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16">Bank of Baroda</text>
      <text x="50" y="38" fill="#003366" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9" letterSpacing="1">INDIA'S INTERNATIONAL BANK</text>
    </svg>
  );
}

export function PnbLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* PNB Rounded Emblem */}
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#A20034" />
      <circle cx="24" cy="24" r="12" fill="#FFC20E" />
      <circle cx="24" cy="24" r="7" fill="#A20034" />
      <rect x="22" y="14" width="4" height="20" fill="#FFC20E" />
      {/* PNB Text */}
      <text x="50" y="27" fill="#A20034" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18">pnb</text>
      <text x="50" y="38" fill="#555555" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">punjab national bank</text>
    </svg>
  );
}

export function CanaraLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Canara Interlocking Triangles */}
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#0091DF" />
      <path d="M15 28 L24 13 L33 28 Z" fill="#FFBF00" opacity="0.9" />
      <path d="M19 18 L28 33 L37 18 Z" fill="#FFFFFF" opacity="0.85" />
      {/* Text */}
      <text x="50" y="27" fill="#0091DF" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16">Canara Bank</text>
      <text x="50" y="38" fill="#FFBF00" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">TOGETHER WE CAN</text>
    </svg>
  );
}

export function UnionBankLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Union Interlocking U */}
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
      <path d="M14 14 V26 C14 30, 20 30, 20 26 V14" stroke="#E31E24" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M22 14 V26 C22 30, 28 30, 28 26 V14" stroke="#005A9C" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Text */}
      <text x="50" y="25" fill="#005A9C" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14">Union Bank</text>
      <text x="50" y="37" fill="#E31E24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9">of India</text>
    </svg>
  );
}

export function IndianBankLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="18" fill="#0A3B8A" />
      <circle cx="24" cy="24" r="10" fill="#E31E24" />
      <circle cx="24" cy="24" r="5" fill="#FFFFFF" />
      <text x="50" y="27" fill="#0A3B8A" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16">Indian Bank</text>
      <text x="50" y="38" fill="#E31E24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">YOUR TECH-FRIENDLY BANK</text>
    </svg>
  );
}

export function BankOfIndiaLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* BOI Star */}
      <circle cx="24" cy="24" r="18" fill="#1C3F94" />
      <polygon points="24,10 27,19 36,19 29,24 32,33 24,28 16,33 19,24 12,19 21,19" fill="#E65100" />
      <text x="50" y="27" fill="#1C3F94" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15">Bank of India</text>
      <text x="50" y="38" fill="#E65100" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">RELATIONSHIP BEYOND BANKING</text>
    </svg>
  );
}

export function CentralBankLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#ED1C24" />
      <circle cx="24" cy="24" r="11" fill="#FFFFFF" />
      <circle cx="24" cy="24" r="7" fill="#1C3F94" />
      <text x="50" y="25" fill="#1C3F94" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14">Central Bank</text>
      <text x="50" y="37" fill="#ED1C24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9">of India</text>
    </svg>
  );
}

export function IobLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="18" fill="#005696" />
      <circle cx="24" cy="24" r="13" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeDasharray="3 2" />
      <text x="17" y="28" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11">IOB</text>
      <text x="50" y="26" fill="#005696" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14">Indian Overseas</text>
      <text x="50" y="37" fill="#64748B" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9">Bank</text>
    </svg>
  );
}

export function UcoBankLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#005B94" />
      <path d="M16 26 C16 18, 32 18, 32 26 C32 32, 16 32, 16 26 Z" fill="#F59E0B" />
      <text x="50" y="27" fill="#005B94" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18">UCO BANK</text>
      <text x="50" y="38" fill="#64748B" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8.5">HONOURS YOUR TRUST</text>
    </svg>
  );
}

// ======================== PRIVATE COMMERCIAL BANKS ========================

export function HdfcLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* HDFC Square with cross pattern */}
      <rect x="6" y="6" width="36" height="36" rx="6" fill="#004C8F" />
      <rect x="18" y="6" width="12" height="36" fill="#ED1C24" />
      <rect x="6" y="18" width="36" height="12" fill="#ED1C24" />
      <rect x="18" y="18" width="12" height="12" fill="#004C8F" />
      {/* Text */}
      <text x="50" y="27" fill="#004C8F" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16">HDFC BANK</text>
      <text x="50" y="38" fill="#ED1C24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">We understand your world</text>
    </svg>
  );
}

export function IciciLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* ICICI 'i' Spiral */}
      <circle cx="24" cy="24" r="18" fill="#A81C28" />
      <path d="M22 12 C28 12, 32 16, 32 22 C32 28, 26 33, 20 33 C14 33, 17 24, 23 24" stroke="#F37021" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="18" r="2.5" fill="#FFFFFF" />
      {/* Text */}
      <text x="50" y="27" fill="#A81C28" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16">ICICI Bank</text>
      <text x="50" y="38" fill="#F37021" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">Khayaal Aapka</text>
    </svg>
  );
}

export function AxisLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Axis Inverted Chevron */}
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#861F41" />
      <polygon points="24,12 34,32 27,32 24,25 21,32 14,32" fill="#FFFFFF" />
      {/* Text */}
      <text x="50" y="27" fill="#861F41" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16">AXIS BANK</text>
      <text x="50" y="38" fill="#64748B" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8.5">Dil Se Open</text>
    </svg>
  );
}

export function KotakLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Kotak Infinity Symbol */}
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#ED1C24" />
      <path d="M16 24 C16 19, 22 19, 24 24 C26 29, 32 29, 32 24 C32 19, 26 19, 24 24 C22 29, 16 29, 16 24 Z" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      {/* Text */}
      <text x="50" y="27" fill="#ED1C24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16">kotak</text>
      <text x="50" y="38" fill="#003366" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">Kotak Mahindra Bank</text>
    </svg>
  );
}

export function IdfcLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#9D1D27" />
      <rect x="14" y="14" width="8" height="20" fill="#FFFFFF" />
      <rect x="24" y="14" width="8" height="8" fill="#FBBF24" />
      <text x="50" y="25" fill="#9D1D27" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14">IDFC FIRST</text>
      <text x="50" y="37" fill="#475569" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9">Bank</text>
    </svg>
  );
}

export function IndusindLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#8B0000" />
      <path d="M14 26 C14 20, 20 16, 24 16 C28 16, 34 20, 34 26 C30 28, 24 24, 20 28 Z" fill="#E65100" />
      <circle cx="28" cy="18" r="2" fill="#FFFFFF" />
      <text x="50" y="27" fill="#8B0000" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15">IndusInd</text>
      <text x="50" y="38" fill="#64748B" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">Bank</text>
    </svg>
  );
}

export function FederalBankLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#005A9C" />
      <path d="M16 16 H32 V24 C32 28, 24 32, 24 32 C24 32, 16 28, 16 24 Z" fill="#FFB700" />
      <text x="50" y="27" fill="#005A9C" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14">FEDERAL BANK</text>
      <text x="50" y="38" fill="#FFB700" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">YOUR PERFECT BANKING PARTNER</text>
    </svg>
  );
}

export function YesBankLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#00529B" />
      <polygon points="16,14 32,24 16,34" fill="#ED1C24" />
      <text x="50" y="27" fill="#00529B" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16">YES BANK</text>
      <text x="50" y="38" fill="#ED1C24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">EXPERIENCE OUR EXPERTISE</text>
    </svg>
  );
}

// ======================== HOUSING FINANCE & PREMIER NBFCs ========================

export function BajajFinservLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="18" fill="#005DAA" />
      <path d="M17 14 H25 C28 14, 31 16, 31 19 C31 21, 29 23, 27 24 C30 25, 32 27, 32 30 C32 33, 29 35, 25 35 H17 Z" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      <text x="50" y="25" fill="#005DAA" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14">BAJAJ HOUSING</text>
      <text x="50" y="37" fill="#475569" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9">FINANCE LIMITED</text>
    </svg>
  );
}

export function TataCapitalLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="18" fill="#0060AA" />
      <path d="M16 18 H32 M24 18 V32" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <text x="50" y="25" fill="#0060AA" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15">TATA CAPITAL</text>
      <text x="50" y="37" fill="#B45309" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">Count on us</text>
    </svg>
  );
}

export function PiramalLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#F05A28" />
      <polygon points="24,14 34,32 14,32" fill="#FFFFFF" />
      <polygon points="24,20 30,32 18,32" fill="#F05A28" />
      <text x="50" y="27" fill="#F05A28" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16">Piramal</text>
      <text x="50" y="38" fill="#475569" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">Finance</text>
    </svg>
  );
}

export function LtFinanceLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#004B87" />
      <circle cx="24" cy="24" r="12" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      <text x="17" y="28" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="12">L&T</text>
      <text x="50" y="27" fill="#004B87" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15">L&T Finance</text>
      <text x="50" y="38" fill="#64748B" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="8.5">Financial Services</text>
    </svg>
  );
}

export function AdityaBirlaLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#A41D21" />
      <path d="M14 32 L24 16 L34 32 Z" fill="#F58220" />
      <polygon points="24,22 28,32 20,32" fill="#FFFFFF" />
      <text x="50" y="24" fill="#A41D21" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13">ADITYA BIRLA</text>
      <text x="50" y="36" fill="#F58220" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="10">CAPITAL</text>
    </svg>
  );
}

export function LicHflLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="18" fill="#005B94" />
      <path d="M24 14 C20 18, 18 24, 24 30 C30 24, 28 18, 24 14 Z" fill="#F1A80A" />
      <text x="50" y="25" fill="#005B94" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14">LIC HOUSING</text>
      <text x="50" y="37" fill="#64748B" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9">FINANCE LTD</text>
    </svg>
  );
}

export function PnbHousingLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#A20034" />
      <path d="M16 30 L24 16 L32 30 Z" fill="#FFC20E" />
      <text x="50" y="25" fill="#A20034" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14">pnb Housing</text>
      <text x="50" y="37" fill="#555555" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5">Finance Limited</text>
    </svg>
  );
}

export function GodrejCapitalLogo({ className = "h-8 w-auto" }) {
  return (
    <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#ED1B2F" />
      <text x="12" y="29" fill="#FFFFFF" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="16">G</text>
      <text x="50" y="25" fill="#1E293B" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15">Godrej</text>
      <text x="50" y="37" fill="#ED1B2F" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9">CAPITAL</text>
    </svg>
  );
}

// Logo Registry Map
export const bankLogoComponents = {
  // PSU Banks
  "SBI": SbiLogo,
  "BOB": BobLogo,
  "PNB": PnbLogo,
  "CANARA": CanaraLogo,
  "UBI": UnionBankLogo,
  "IB": IndianBankLogo,
  "BOI": BankOfIndiaLogo,
  "CBI": CentralBankLogo,
  "IOB": IobLogo,
  "UCO": UcoBankLogo,

  // Private Banks
  "HDFC": HdfcLogo,
  "ICICI": IciciLogo,
  "AXIS": AxisLogo,
  "KOTAK": KotakLogo,
  "IDFC": IdfcLogo,
  "INDUS": IndusindLogo,
  "FED": FederalBankLogo,
  "YES": YesBankLogo,

  // HFCs & NBFCs
  "BAJAJ": BajajFinservLogo,
  "TATA": TataCapitalLogo,
  "PIRAMAL": PiramalLogo,
  "L&T": LtFinanceLogo,
  "ABC": AdityaBirlaLogo,
  "LICHFL": LicHflLogo,
  "PNBHFL": PnbHousingLogo,
  "GODREJ": GodrejCapitalLogo,
};

export default function BankLogoItem({ code, name, className = "h-7 w-auto" }) {
  const Comp = bankLogoComponents[code];
  if (Comp) {
    return <Comp className={className} />;
  }
  return <span className="font-bold text-slate-800 text-xs">{name}</span>;
}
