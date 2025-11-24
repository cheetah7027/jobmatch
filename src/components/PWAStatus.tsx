import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, AlertCircle, Smartphone } from 'lucide-react';
import { isAppInstalled, getDisplayMode } from '../utils/pwa-utils';

interface PWAStatusProps {
  showDebug?: boolean;
}

export default function PWAStatus({ showDebug = false }: PWAStatusProps) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [displayMode, setDisplayMode] = useState<string>('browser');
  const [isServiceWorkerActive, setIsServiceWorkerActive] = useState(false);

  useEffect(() => {
    // Check if installed
    setIsInstalled(isAppInstalled());
    
    // Get display mode
    setDisplayMode(getDisplayMode());

    // Check service worker status
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        setIsServiceWorkerActive(registration.active !== null);
      });
    }
  }, []);

  if (!showDebug) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 bg-white rounded-2xl shadow-lg p-4 text-xs border border-gray-200 max-w-[360px] mx-auto z-40">
      <div className="flex items-center gap-2 mb-3">
        <Smartphone className="w-4 h-4 text-[#2E6CE6]" />
        <span className="font-semibold text-gray-900">PWA Status</span>
      </div>
      
      <div className="space-y-2">
        <StatusRow
          label="Installed"
          status={isInstalled}
          detail={isInstalled ? 'Running as app' : 'Browser mode'}
        />
        
        <StatusRow
          label="Service Worker"
          status={isServiceWorkerActive}
          detail={isServiceWorkerActive ? 'Active' : 'Not registered'}
        />
        
        <StatusRow
          label="Display Mode"
          status={displayMode === 'standalone'}
          detail={displayMode}
        />
        
        <StatusRow
          label="Online Status"
          status={navigator.onLine}
          detail={navigator.onLine ? 'Connected' : 'Offline'}
        />
      </div>
    </div>
  );
}

function StatusRow({ label, status, detail }: { label: string; status: boolean; detail: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-gray-600">{label}:</span>
      <div className="flex items-center gap-2">
        <span className="text-gray-900">{detail}</span>
        {status ? (
          <CheckCircle2 className="w-4 h-4 text-green-500" />
        ) : (
          <XCircle className="w-4 h-4 text-gray-400" />
        )}
      </div>
    </div>
  );
}
