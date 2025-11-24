import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface LoginScreenProps {
  onNavigate: (screen: string) => void;
}

export default function LoginScreen({ onNavigate }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login - navigate to swipe screen
    onNavigate('swipe');
  };

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 px-8 pt-8 space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-[#111111]">Welcome Back</h1>
          <p className="text-[#6E6E6E]">Sign in to continue your job search</p>
        </div>

        <div className="space-y-4">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-[#111111]">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6E6E]" />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 pl-12 rounded-lg border-2 border-[#E5E5E5] focus:border-[#2E6CE6]"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-[#111111]">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6E6E]" />
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 pl-12 rounded-lg border-2 border-[#E5E5E5] focus:border-[#2E6CE6]"
              />
            </div>
          </div>

          <button className="text-[#2E6CE6] ml-auto block">
            Forgot Password?
          </button>
        </div>

        <Button
          onClick={handleLogin}
          className="w-full h-14 bg-[#2E6CE6] hover:bg-[#1a4db8] text-white rounded-xl"
        >
          Login
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
          <span className="text-[#6E6E6E]">or continue with</span>
          <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="h-14 border-2 border-[#E5E5E5] hover:border-[#2E6CE6] rounded-xl"
            onClick={() => onNavigate('onboarding')}
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </Button>
          
          <Button
            variant="outline"
            className="h-14 border-2 border-[#E5E5E5] hover:border-[#2E6CE6] rounded-xl"
            onClick={() => onNavigate('onboarding')}
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </Button>
        </div>

        <p className="text-center text-[#6E6E6E]">
          Don't have an account?{' '}
          <button
            onClick={() => onNavigate('signup')}
            className="text-[#2E6CE6]"
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
}
