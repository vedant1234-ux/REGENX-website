export const RegeneraxLogo = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Main Circular Icon */}
    <circle cx="100" cy="100" r="80" fill="url(#brandGradient)" />
    
    {/* Lightning Bolt */}
    <path 
      d="M115 50L75 110H105L85 150L125 90H95L115 50Z" 
      fill="white" 
    />
    
    {/* Recycling Arrows */}
    <path 
      d="M100 20C125 20 148 31 163 49L175 35V75H135L149 61C137 48 119 40 100 40C75 40 54 53 42 73L25 63C40 37 68 20 100 20Z" 
      fill="#4ade80" 
    />
    <path 
      d="M100 180C75 180 52 169 37 151L25 165V125H65L51 139C63 152 81 160 100 160C125 160 146 147 158 127L175 137C160 163 132 180 100 180Z" 
      fill="#22c55e" 
    />

    <defs>
      <linearGradient id="brandGradient" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#166534" />
        <stop offset="1" stopColor="#14532d" />
      </linearGradient>
    </defs>
  </svg>
);
