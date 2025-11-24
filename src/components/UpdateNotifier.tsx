import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function UpdateNotifier() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((reg) => {
        setRegistration(reg);

        // Check for updates
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available
                setUpdateAvailable(true);
              }
            });
          }
        });

        // Check for updates periodically (every 5 minutes)
        setInterval(() => {
          reg.update();
        }, 5 * 60 * 1000);
      });
    }
  }, []);

  const handleUpdate = () => {
    if (registration && registration.waiting) {
      // Tell the service worker to skip waiting
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Reload the page to use the new service worker
      window.location.reload();
    }
  };

  return (
    <AnimatePresence>
      {updateAvailable && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-[360px] mx-auto"
        >
          <div className="bg-[#2E6CE6] text-white rounded-2xl shadow-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-sm mb-1">Update Available</h3>
                <p className="text-xs text-white/80">
                  A new version of JobMatch is ready
                </p>
              </div>
              
              <button
                onClick={handleUpdate}
                className="bg-white text-[#2E6CE6] px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition-colors"
              >
                Update
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
