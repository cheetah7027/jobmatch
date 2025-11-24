// Generates app icon as inline SVG for PWA
export default function AppIcon({ size = 512 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2E6CE6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1a4db8', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF5A5F', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF3B41', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Background rounded square */}
      <rect width="512" height="512" rx="115" fill="url(#bgGradient)" />
      
      {/* Briefcase icon base */}
      <rect
        x="128"
        y="200"
        width="256"
        height="180"
        rx="24"
        fill="white"
        fillOpacity="0.95"
      />
      
      {/* Briefcase handle */}
      <path
        d="M 200 200 L 200 160 Q 200 140 220 140 L 292 140 Q 312 140 312 160 L 312 200"
        stroke="white"
        strokeWidth="24"
        fill="none"
        strokeLinecap="round"
        opacity="0.95"
      />
      
      {/* Heart icon overlay */}
      <path
        d="M 256 340 L 236 320 Q 210 295 210 265 Q 210 240 230 240 Q 245 240 256 255 Q 267 240 282 240 Q 302 240 302 265 Q 302 295 276 320 Z"
        fill="url(#heartGradient)"
      />
      
      {/* Decorative dots */}
      <circle cx="140" cy="140" r="12" fill="white" fillOpacity="0.3" />
      <circle cx="372" cy="140" r="12" fill="white" fillOpacity="0.3" />
      <circle cx="140" cy="372" r="12" fill="white" fillOpacity="0.3" />
      <circle cx="372" cy="372" r="12" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

// Generate data URL for use in manifest
export function generateIconDataURL(size: number = 512): string {
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2E6CE6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a4db8;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF5A5F;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF3B41;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="115" fill="url(#bgGradient)" />
      <rect x="128" y="200" width="256" height="180" rx="24" fill="white" fill-opacity="0.95" />
      <path d="M 200 200 L 200 160 Q 200 140 220 140 L 292 140 Q 312 140 312 160 L 312 200" stroke="white" stroke-width="24" fill="none" stroke-linecap="round" opacity="0.95" />
      <path d="M 256 340 L 236 320 Q 210 295 210 265 Q 210 240 230 240 Q 245 240 256 255 Q 267 240 282 240 Q 302 240 302 265 Q 302 295 276 320 Z" fill="url(#heartGradient)" />
      <circle cx="140" cy="140" r="12" fill="white" fill-opacity="0.3" />
      <circle cx="372" cy="140" r="12" fill="white" fill-opacity="0.3" />
      <circle cx="140" cy="372" r="12" fill="white" fill-opacity="0.3" />
      <circle cx="372" cy="372" r="12" fill="white" fill-opacity="0.3" />
    </svg>
  `;
  
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
