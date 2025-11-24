// Register service worker
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// Check if app is installed
export function isAppInstalled(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true;
}

// Get install prompt readiness
export function canInstallPWA(): boolean {
  return 'BeforeInstallPromptEvent' in window || 
         'onbeforeinstallprompt' in window;
}

// Add to home screen for iOS
export function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
}

// Check if running in browser or standalone
export function getDisplayMode(): 'browser' | 'standalone' | 'fullscreen' | 'minimal-ui' {
  const displayMode = window.matchMedia('(display-mode: standalone)').matches ? 'standalone' :
                      window.matchMedia('(display-mode: fullscreen)').matches ? 'fullscreen' :
                      window.matchMedia('(display-mode: minimal-ui)').matches ? 'minimal-ui' :
                      'browser';
  return displayMode;
}

// Track display mode changes
export function trackDisplayMode(callback: (mode: string) => void) {
  const displayModeMediaQueries = {
    'standalone': '(display-mode: standalone)',
    'fullscreen': '(display-mode: fullscreen)',
    'minimal-ui': '(display-mode: minimal-ui)',
    'browser': '(display-mode: browser)',
  };

  Object.entries(displayModeMediaQueries).forEach(([mode, query]) => {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', (e) => {
      if (e.matches) {
        callback(mode);
      }
    });
  });
}

// Request persistent storage
export async function requestPersistentStorage(): Promise<boolean> {
  if (navigator.storage && navigator.storage.persist) {
    const isPersisted = await navigator.storage.persist();
    console.log(`Persisted storage granted: ${isPersisted}`);
    return isPersisted;
  }
  return false;
}

// Check storage quota
export async function checkStorageQuota() {
  if (navigator.storage && navigator.storage.estimate) {
    const estimate = await navigator.storage.estimate();
    const percentUsed = ((estimate.usage || 0) / (estimate.quota || 1)) * 100;
    console.log(`Storage used: ${percentUsed.toFixed(2)}%`);
    return {
      usage: estimate.usage || 0,
      quota: estimate.quota || 0,
      percentUsed
    };
  }
  return null;
}
