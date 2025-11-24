import { motion } from 'motion/react';
import { ArrowLeft, User, Briefcase } from 'lucide-react';
import { Button } from './ui/button';

interface SignUpSelectionProps {
  onNavigate: (screen: string, data?: any) => void;
}

export default function SignUpSelection({ onNavigate }: SignUpSelectionProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('welcome')}
          className="rounded-full"
        >
          <ArrowLeft className="w-6 h-6 text-[#111111]" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 flex flex-col justify-center space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-[#111111]">Join JobMatch</h1>
          <p className="text-[#6E6E6E]">Choose your account type to get started</p>
        </div>

        <div className="space-y-4">
          {/* Job Seeker Card */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('onboarding', { userType: 'seeker' })}
            className="w-full p-8 bg-gradient-to-br from-[#2E6CE6]/10 to-[#2E6CE6]/5 border-2 border-[#2E6CE6] rounded-3xl hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#2E6CE6] rounded-2xl flex items-center justify-center">
                <User className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-[#111111] mb-1">Job Seeker</h3>
                <p className="text-[#6E6E6E]">Find your dream job</p>
              </div>
            </div>
          </motion.button>

          {/* Employer Card */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('onboarding', { userType: 'employer' })}
            className="w-full p-8 bg-gradient-to-br from-[#FF5A5F]/10 to-[#FF5A5F]/5 border-2 border-[#FF5A5F] rounded-3xl hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#FF5A5F] rounded-2xl flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-[#111111] mb-1">Employer / Recruiter</h3>
                <p className="text-[#6E6E6E]">Find top talent</p>
              </div>
            </div>
          </motion.button>
        </div>

        <p className="text-center text-[#6E6E6E]">
          Already have an account?{' '}
          <button
            onClick={() => onNavigate('login')}
            className="text-[#2E6CE6]"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
