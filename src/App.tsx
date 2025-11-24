import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SignUpSelection from './components/SignUpSelection';
import OnboardingFlow from './components/OnboardingFlow';
import JobPostingScreen from './components/JobPostingScreen';
import SwipeScreen from './components/SwipeScreen';
import JobDetailsScreen from './components/JobDetailsScreen';
import MatchScreen from './components/MatchScreen';
import MessagingScreen from './components/MessagingScreen';
import SavedJobsScreen from './components/SavedJobsScreen';
import ProfileScreen from './components/ProfileScreen';
import CandidateProfileScreen from './components/CandidateProfileScreen';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import IOSInstallPrompt from './components/IOSInstallPrompt';
import OfflineIndicator from './components/OfflineIndicator';
import UpdateNotifier from './components/UpdateNotifier';
import { registerServiceWorker } from './utils/pwa-utils';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('splash');
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [matchedJob, setMatchedJob] = useState<any>(null);
  const [userType, setUserType] = useState<'seeker' | 'employer'>('seeker');
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  useEffect(() => {
    // Register service worker for PWA functionality
    registerServiceWorker();

    // Auto transition from splash to welcome after 2 seconds
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('welcome');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleNavigate = (screen: string, data?: any) => {
    setCurrentScreen(screen);
    if (data) {
      if (data.job) setSelectedJob(data.job);
      if (data.matchedJob) setMatchedJob(data.matchedJob);
      if (data.userType) setUserType(data.userType);
      if (data.candidate) setSelectedCandidate(data.candidate);
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#FAFAFA] overflow-hidden flex items-center justify-center">
      {/* PWA Install Prompts */}
      <PWAInstallPrompt />
      <IOSInstallPrompt />
      <OfflineIndicator />
      <UpdateNotifier />

      {/* Mobile Frame - Android Pixel 7 dimensions */}
      <div className="relative w-full max-w-[360px] h-full max-h-[800px] bg-white shadow-2xl rounded-[24px] overflow-hidden">
        {currentScreen === 'splash' && <SplashScreen />}
        {currentScreen === 'welcome' && <WelcomeScreen onNavigate={handleNavigate} />}
        {currentScreen === 'login' && <LoginScreen onNavigate={handleNavigate} />}
        {currentScreen === 'signup' && <SignUpSelection onNavigate={handleNavigate} />}
        {currentScreen === 'onboarding' && <OnboardingFlow onNavigate={handleNavigate} userType={userType} />}
        {currentScreen === 'job-posting' && <JobPostingScreen onNavigate={handleNavigate} />}
        {currentScreen === 'swipe' && <SwipeScreen onNavigate={handleNavigate} userType={userType} />}
        {currentScreen === 'details' && <JobDetailsScreen job={selectedJob} onNavigate={handleNavigate} />}
        {currentScreen === 'match' && <MatchScreen job={matchedJob} onNavigate={handleNavigate} />}
        {currentScreen === 'messages' && <MessagingScreen onNavigate={handleNavigate} />}
        {currentScreen === 'saved' && <SavedJobsScreen onNavigate={handleNavigate} />}
        {currentScreen === 'profile' && <ProfileScreen onNavigate={handleNavigate} userType={userType} />}
        {currentScreen === 'candidate-profile' && <CandidateProfileScreen candidate={selectedCandidate} onNavigate={handleNavigate} />}
      </div>
    </div>
  );
}