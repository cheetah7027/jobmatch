/**
 * Icon Generator for PWA
 * 
 * This script generates all required icon sizes for the PWA.
 * In a real production environment, you would:
 * 1. Create a high-res source icon (1024x1024 PNG)
 * 2. Use this script or tools like PWA Asset Generator
 * 3. Generate all sizes: 72, 96, 128, 144, 152, 192, 384, 512
 */

export const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

export interface IconConfig {
  size: number;
  purpose: 'any' | 'maskable' | 'any maskable';
  format: 'png' | 'svg';
}

export const iconConfigs: IconConfig[] = ICON_SIZES.map(size => ({
  size,
  purpose: 'any maskable',
  format: 'png' as const,
}));

/**
 * Generate SVG icon as data URL
 */
export function generateSVGIconDataURL(size: number = 512): string {
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2E6CE6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a4db8;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="heart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF5A5F;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF3B41;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="115" fill="url(#bg)" />
      <rect x="128" y="200" width="256" height="180" rx="24" fill="white" fill-opacity="0.95" />
      <path d="M 200 200 L 200 160 Q 200 140 220 140 L 292 140 Q 312 140 312 160 L 312 200" stroke="white" stroke-width="24" fill="none" stroke-linecap="round" opacity="0.95" />
      <path d="M 256 340 L 236 320 Q 210 295 210 265 Q 210 240 230 240 Q 245 240 256 255 Q 267 240 282 240 Q 302 240 302 265 Q 302 295 276 320 Z" fill="url(#heart)" />
      <circle cx="140" cy="140" r="12" fill="white" fill-opacity="0.3" />
      <circle cx="372" cy="140" r="12" fill="white" fill-opacity="0.3" />
      <circle cx="140" cy="372" r="12" fill="white" fill-opacity="0.3" />
      <circle cx="372" cy="372" r="12" fill="white" fill-opacity="0.3" />
    </svg>
  `.trim();
  
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Instructions for generating PNG icons from SVG
 * 
 * OPTION 1: Using online tools
 * 1. Go to https://realfavicongenerator.net/ or https://www.pwabuilder.com/
 * 2. Upload the SVG icon from /public/icons/icon.svg
 * 3. Download the generated icon pack
 * 4. Place in /public/icons/ folder
 * 
 * OPTION 2: Using command line (ImageMagick)
 * Install ImageMagick: https://imagemagick.org/
 * 
 * for size in 72 96 128 144 152 192 384 512; do
 *   convert icon.svg -resize ${size}x${size} icon-${size}x${size}.png
 * done
 * 
 * OPTION 3: Using Node.js (sharp library)
 * npm install sharp
 * 
 * const sharp = require('sharp');
 * const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
 * 
 * sizes.forEach(size => {
 *   sharp('icon.svg')
 *     .resize(size, size)
 *     .toFile(`icon-${size}x${size}.png`);
 * });
 */

/**
 * Generate manifest icons array for manifest.json
 */
export function generateManifestIcons() {
  return ICON_SIZES.map(size => ({
    src: `/icons/icon-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: 'image/png',
    purpose: 'any maskable',
  }));
}

/**
 * Fallback: Use SVG icon if PNG not available
 * Modern browsers support SVG icons in PWA manifests
 */
export const fallbackIcon = {
  src: '/icons/icon.svg',
  sizes: 'any',
  type: 'image/svg+xml',
  purpose: 'any maskable',
};

/**
 * Apple Touch Icon requirements
 * iOS requires specific sizes for touch icons
 */
export const appleTouchIconSizes = [120, 152, 167, 180];

export function generateAppleTouchIcons() {
  return appleTouchIconSizes.map(size => ({
    size,
    rel: 'apple-touch-icon',
    href: `/icons/apple-touch-icon-${size}x${size}.png`,
  }));
}

/**
 * Favicon requirements
 */
export const faviconSizes = [16, 32, 48];

export function generateFavicons() {
  return faviconSizes.map(size => ({
    size,
    rel: 'icon',
    type: 'image/png',
    href: `/icons/favicon-${size}x${size}.png`,
  }));
}
