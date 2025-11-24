import { useState, useEffect } from 'react';
import { X, Share, Plus, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { isIOS, isAppInstalled } from '../utils/pwa-utils';

export default function IOSInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Only show on iOS devices that haven't installed the app
    if (isIOS() && !isAppInstalled()) {
      // Check if user has dismissed before
      const dismissed = localStorage.getItem('ios-install-dismissed');
      if (!dismissed) {
        setTimeout(() => {
          setShowPrompt(true);
        }, 5000);
      }
    }
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('ios-install-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-[360px] mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-[#2E6CE6]">
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-4">
              <h3 className="text-gray-900 mb-2">Install JobMatch</h3>
              <p className="text-sm text-gray-600">
                Add JobMatch to your home screen for the best experience
              </p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    Tap the <Share className="w-4 h-4 inline-block mx-1" /> Share button
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    Scroll down and tap <Plus className="w-4 h-4 inline-block mx-1" /> "Add to Home Screen"
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="w-full bg-[#2E6CE6] text-white py-2.5 px-4 rounded-xl hover:bg-[#1a4db8] transition-colors"
            >
              Got it
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
