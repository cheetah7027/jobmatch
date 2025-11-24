import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
}

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-8 pt-16"
      >

      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-8 pb-12 space-y-6"
      >
        <div className="text-center space-y-3">
          <h1 className="text-[#111111]">
            Find Your Next Career Move
          </h1>
          <p className="text-[#6E6E6E]">
            Swipe through personalized job matches and connect with top employers instantly
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => onNavigate('signup')}
            className="w-full h-14 bg-[#2E6CE6] hover:bg-[#1a4db8] text-white rounded-xl"
          >
            Get Started
          </Button>
          
          <Button
            onClick={() => onNavigate('login')}
            variant="outline"
            className="w-full h-14 border-2 border-[#2E6CE6] text-[#2E6CE6] hover:bg-[#2E6CE6]/10 rounded-xl"
          >
            Sign In
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
