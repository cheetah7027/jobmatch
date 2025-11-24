import { motion } from 'motion/react';
import { Briefcase, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // Check if running as PWA
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsPWA(isStandalone);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#2E6CE6] to-[#1a4db8] flex flex-col items-center justify-center relative">
      {/* PWA Badge */}
      {isPWA && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"
        >
          <Zap className="w-3.5 h-3.5 text-white" fill="white" />
          <span className="text-xs text-white">PWA</span>
        </motion.div>
      )}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-6">
          <Briefcase className="w-14 h-14 text-[#2E6CE6]" strokeWidth={2.5} />
        </div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white mb-3"
        >
          JobMatch
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white/90"
        >
          Swipe. Match. Get Hired.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </motion.div>
    </div>
  );
}