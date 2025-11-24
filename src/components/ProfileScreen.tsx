import { ArrowLeft, Edit, FileText, Settings, LogOut, Shield, Bell, HelpCircle, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import SkillBadge from './SkillBadge';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  userType: 'seeker' | 'employer';
}

export default function ProfileScreen({ onNavigate, userType }: ProfileScreenProps) {
  const userSkills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Figma'];

  return (
    <div className="w-full h-full flex flex-col bg-[#FAFAFA]">
      {/* Header */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-[#2E6CE6] to-[#1a4db8]" />
        <button
          onClick={() => onNavigate('swipe')}
          className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Profile Photo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM4MjgyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#2E6CE6] rounded-full flex items-center justify-center border-2 border-white">
              <Edit className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto pt-16 px-6 pb-6 space-y-6">
        {/* Profile Info */}
        <div className="text-center space-y-2">
          <h2 className="text-[#111111]">John Doe</h2>
          <p className="text-[#6E6E6E]">
            {userType === 'seeker' ? 'Senior Software Engineer' : 'Talent Recruiter'}
          </p>
          <div className="flex items-center justify-center gap-4 text-[#6E6E6E]">
            <div className="text-center">
              <p className="text-[#111111]">156</p>
              <p className="text-sm">Applied</p>
            </div>
            <div className="w-[1px] h-8 bg-[#E5E5E5]" />
            <div className="text-center">
              <p className="text-[#111111]">24</p>
              <p className="text-sm">Matches</p>
            </div>
            <div className="w-[1px] h-8 bg-[#E5E5E5]" />
            <div className="text-center">
              <p className="text-[#111111]">8</p>
              <p className="text-sm">Interviews</p>
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <Button
          variant="outline"
          className="w-full h-12 border-2 border-[#2E6CE6] text-[#2E6CE6] hover:bg-[#2E6CE6]/10 rounded-xl"
        >
          <Edit className="w-5 h-5 mr-2" />
          Edit Profile
        </Button>

        {/* Skills Section */}
        {userType === 'seeker' && (
          <div className="bg-white rounded-3xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-[#111111]">Skills</h3>
              <button className="text-[#2E6CE6]">
                <Edit className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {userSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {/* Resume Section */}
        {userType === 'seeker' && (
          <div className="bg-white rounded-3xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-[#111111]">Resume</h3>
              <button className="text-[#2E6CE6]">
                <Edit className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-xl">
              <div className="w-12 h-12 bg-[#2E6CE6] rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[#111111]">Resume_2024.pdf</p>
                <p className="text-[#6E6E6E] text-sm">2.4 MB • Updated 2 days ago</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Section */}
        <div className="bg-white rounded-3xl overflow-hidden">
          <button className="w-full flex items-center gap-3 p-4 hover:bg-[#FAFAFA] transition-colors border-b border-[#E5E5E5]">
            <div className="w-10 h-10 bg-[#2E6CE6]/10 rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-[#2E6CE6]" />
            </div>
            <span className="flex-1 text-left text-[#111111]">Account Settings</span>
            <ChevronRight className="w-5 h-5 text-[#6E6E6E]" />
          </button>

          <button className="w-full flex items-center gap-3 p-4 hover:bg-[#FAFAFA] transition-colors border-b border-[#E5E5E5]">
            <div className="w-10 h-10 bg-[#FFCA28]/10 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-[#FFCA28]" />
            </div>
            <span className="flex-1 text-left text-[#111111]">Notifications</span>
            <ChevronRight className="w-5 h-5 text-[#6E6E6E]" />
          </button>

          <button className="w-full flex items-center gap-3 p-4 hover:bg-[#FAFAFA] transition-colors border-b border-[#E5E5E5]">
            <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#4CAF50]" />
            </div>
            <span className="flex-1 text-left text-[#111111]">Privacy & Security</span>
            <ChevronRight className="w-5 h-5 text-[#6E6E6E]" />
          </button>

          <button className="w-full flex items-center gap-3 p-4 hover:bg-[#FAFAFA] transition-colors">
            <div className="w-10 h-10 bg-[#6E6E6E]/10 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#6E6E6E]" />
            </div>
            <span className="flex-1 text-left text-[#111111]">Help & Support</span>
            <ChevronRight className="w-5 h-5 text-[#6E6E6E]" />
          </button>
        </div>

        {/* Logout Button */}
        <Button
          onClick={() => onNavigate('welcome')}
          variant="outline"
          className="w-full h-12 border-2 border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F]/10 rounded-xl"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Log Out
        </Button>

        {/* Version */}
        <p className="text-center text-[#6E6E6E] text-sm">JobMatch v1.0.0</p>
      </div>
    </div>
  );
}
