import { motion } from 'motion/react';
import { ArrowLeft, MapPin, DollarSign, Clock, Users, Heart, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import SkillBadge from './SkillBadge';

interface JobDetailsScreenProps {
  job: any;
  onNavigate: (screen: string, data?: any) => void;
}

export default function JobDetailsScreen({ job, onNavigate }: JobDetailsScreenProps) {
  if (!job) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-[#6E6E6E]">No job selected</p>
      </div>
    );
  }

  const handleLike = () => {
    // Simulate match with 70% probability
    if (Math.random() > 0.3) {
      onNavigate('match', { matchedJob: job });
    } else {
      onNavigate('swipe');
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Header Image */}
      <div className="relative h-64">
        <ImageWithFallback
          src={job.image}
          alt={job.company}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => onNavigate('swipe')}
          className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-[#111111]" />
        </button>

        {/* Company Logo */}
        <div className="absolute bottom-[-30px] left-6 w-20 h-20 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
          <ImageWithFallback
            src={job.logo}
            alt={job.company}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="pt-10 px-6 space-y-6">
          {/* Title & Company */}
          <div>
            <h2 className="text-[#111111] mb-1">{job.title}</h2>
            <p className="text-[#6E6E6E]">{job.company}</p>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#FAFAFA] rounded-xl">
              <DollarSign className="w-4 h-4 text-[#6E6E6E]" />
              <span className="text-[#111111]">{job.salary}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 rounded-xl">
              <MapPin className="w-4 h-4 text-[#4CAF50]" />
              <span className="text-[#4CAF50]">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#FAFAFA] rounded-xl">
              <Clock className="w-4 h-4 text-[#6E6E6E]" />
              <span className="text-[#111111]">{job.type}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-[#111111]">About the Role</h3>
            <p className="text-[#6E6E6E] leading-relaxed">
              {job.description}
            </p>
            <p className="text-[#6E6E6E] leading-relaxed">
              We're looking for a talented individual to join our growing team. You'll work on exciting projects that impact millions of users worldwide. This is a great opportunity to grow your career and work with cutting-edge technologies.
            </p>
          </div>

          {/* Requirements */}
          <div className="space-y-3">
            <h3 className="text-[#111111]">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill: string) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <h3 className="text-[#111111]">Benefits</h3>
            <div className="space-y-2">
              {[
                '🏥 Health, Dental & Vision Insurance',
                '💰 401(k) with Company Match',
                '🏖️ Unlimited PTO',
                '💻 Work from Anywhere',
                '📚 Learning & Development Budget',
                '🎯 Performance Bonuses'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl">
                  <span className="text-[#111111]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Size */}
          <div className="flex items-center gap-3 p-4 bg-[#2E6CE6]/10 rounded-xl border border-[#2E6CE6]/20">
            <Users className="w-5 h-5 text-[#2E6CE6]" />
            <div>
              <p className="text-[#111111]">Team Size</p>
              <p className="text-[#6E6E6E]">25-50 employees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 bg-white border-t border-[#E5E5E5]">
        <div className="flex gap-3">
          <Button
            onClick={() => onNavigate('swipe')}
            variant="outline"
            className="flex-1 h-14 border-2 border-[#2E6CE6] text-[#2E6CE6] rounded-xl"
          >
            <Send className="w-5 h-5 mr-2" />
            Apply Now
          </Button>
          <Button
            onClick={handleLike}
            className="flex-1 h-14 bg-[#2E6CE6] hover:bg-[#1a4db8] text-white rounded-xl"
          >
            <Heart className="w-5 h-5 mr-2" />
            I'm Interested
          </Button>
        </div>
      </div>
    </div>
  );
}
