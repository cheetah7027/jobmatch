import { motion } from 'motion/react';
import { MessageSquare, Home, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface MatchScreenProps {
  job: any;
  onNavigate: (screen: string) => void;
}

export default function MatchScreen({ job, onNavigate }: MatchScreenProps) {
  if (!job) return null;

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#2E6CE6] to-[#1a4db8] relative overflow-hidden">
      {/* Confetti/Sparkles Effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, x: Math.random() * 360, opacity: 0 }}
          animate={{
            y: 800,
            x: Math.random() * 360,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 3,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="absolute"
        >
          <Sparkles
            className="text-[#FFCA28]"
            size={Math.random() * 20 + 10}
            fill="#FFCA28"
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                stroke="#FF5A5F"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#FF5A5F"
              />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white mb-2"
        >
          It's a Match!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/90 text-center mb-12"
        >
          You and {job.company} have liked each other
        </motion.p>

        {/* Split Profile Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
          className="flex gap-4 mb-12"
        >
          {/* User Card */}
          <div className="w-32 h-40 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="w-full h-24 bg-[#2E6CE6]" />
            <div className="p-3 text-center">
              <div className="w-12 h-12 bg-[#2E6CE6] rounded-full mx-auto -mt-8 mb-2 flex items-center justify-center text-white border-4 border-white">
                JD
              </div>
              <p className="text-xs text-[#111111]">You</p>
            </div>
          </div>

          {/* Job Card */}
          <div className="w-32 h-40 bg-white rounded-3xl shadow-xl overflow-hidden">
            <ImageWithFallback
              src={job.image}
              alt={job.company}
              className="w-full h-24 object-cover"
            />
            <div className="p-3 text-center">
              <div className="w-12 h-12 rounded-full mx-auto -mt-8 mb-2 border-4 border-white overflow-hidden">
                <ImageWithFallback
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-[#111111] truncate">{job.company}</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full space-y-3"
        >
          <Button
            onClick={() => onNavigate('messages')}
            className="w-full h-14 bg-white text-[#2E6CE6] hover:bg-white/90 rounded-xl"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Send Message
          </Button>

          <Button
            onClick={() => onNavigate('swipe')}
            variant="outline"
            className="w-full h-14 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Continue Swiping
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
