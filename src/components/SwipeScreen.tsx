import { useState } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { User, Heart, X, Star, MapPin, DollarSign, ChevronUp, MessageSquare, Bookmark, Home, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import SkillBadge from './SkillBadge';

interface SwipeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  userType?: 'seeker' | 'employer';
}

const mockJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp Inc.',
    logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    salary: '$120k - $160k',
    location: 'Remote',
    type: 'Full-time',
    skills: ['React', 'TypeScript', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc4MDA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Join our dynamic team building next-gen web applications.'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'DesignLab',
    logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    salary: '$100k - $140k',
    location: 'San Francisco, CA',
    type: 'Full-time',
    skills: ['Figma', 'UI/UX', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wYW55JTIwb2ZmaWNlfGVufDF8fHx8MTc2MzgyODM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Create beautiful and intuitive user experiences for millions of users.'
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    salary: '$130k - $170k',
    location: 'Remote',
    type: 'Full-time',
    skills: ['Python', 'React', 'AWS'],
    image: 'https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc4MDA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Build scalable systems that power the future of e-commerce.'
  }
];

const mockCandidates = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Senior React Developer',
    experience: '5 years',
    experienceLevel: 'Senior',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'GraphQL', 'Docker'],
    bio: 'Passionate about building scalable UI systems and accessible web applications. 5+ years shipping production-grade React apps.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2MzgyODM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'San Francisco, CA',
    relocationPreference: 'Open to relocation',
    workStyle: 'Remote',
    availability: 'Immediate',
    expectedSalary: '$120k - $150k',
    matchScore: 92,
    resumeUrl: 'https://example.com/resume-sarah-chen.pdf',
    portfolioUrl: 'https://portfolio.sarahchen.dev',
    experienceHistory: [
      {
        company: 'TechCorp Inc.',
        role: 'Senior Frontend Developer',
        duration: '2021 - Present'
      },
      {
        company: 'StartupXYZ',
        role: 'React Developer',
        duration: '2019 - 2021'
      }
    ],
    achievements: [
      'AWS Certified Solutions Architect',
      'Led team of 5 developers',
      'Built design system used by 50+ engineers'
    ]
  },
  {
    id: 2,
    name: 'Michael Ross',
    role: 'Product Designer',
    experience: '4 years',
    experienceLevel: 'Mid-Level',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems', 'User Research'],
    bio: 'Creating intuitive and beautiful user experiences is my passion. Specialized in mobile-first design and accessibility.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjM4MjgzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Remote',
    relocationPreference: 'Remote only',
    workStyle: 'Remote',
    availability: '2 weeks',
    expectedSalary: '$90k - $110k',
    matchScore: 85,
    resumeUrl: 'https://example.com/resume-michael-ross.pdf',
    portfolioUrl: 'https://dribbble.com/michaelross',
    experienceHistory: [
      {
        company: 'DesignHub',
        role: 'Product Designer',
        duration: '2020 - Present'
      },
      {
        company: 'Creative Agency',
        role: 'UI Designer',
        duration: '2019 - 2020'
      }
    ],
    achievements: [
      'Google UX Design Certificate',
      'Redesigned app with 40% increase in user engagement'
    ]
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'Full Stack Engineer',
    experience: '6 years',
    experienceLevel: 'Senior',
    skills: ['Python', 'React', 'AWS', 'PostgreSQL', 'Django', 'Redis'],
    bio: 'Full stack wizard with a love for clean code and cloud architecture. Expert in building scalable backend systems.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjM4MjgzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'New York, NY',
    relocationPreference: 'Willing to relocate',
    workStyle: 'Hybrid',
    availability: '1 month',
    expectedSalary: '$140k - $170k',
    matchScore: 88,
    resumeUrl: 'https://example.com/resume-david-kim.pdf',
    portfolioUrl: 'https://github.com/davidkim',
    experienceHistory: [
      {
        company: 'CloudTech Solutions',
        role: 'Senior Full Stack Engineer',
        duration: '2020 - Present'
      },
      {
        company: 'DataCorp',
        role: 'Backend Developer',
        duration: '2018 - 2020'
      }
    ],
    achievements: [
      'AWS Certified Developer',
      'Reduced API response time by 60%',
      'Mentored 10+ junior developers'
    ]
  }
];

function SwipeCard({ data, onSwipe, onExpand, type }: any) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, rotate, opacity }}
      onDragEnd={handleDragEnd}
      className="absolute inset-y-6 inset-x-[2px] cursor-grab active:cursor-grabbing"
    >
      <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Job Image */}
        <div className="relative" style={{ height: type === 'candidate' ? '180px' : '45%' }}>
          <ImageWithFallback
            src={data.image}
            alt={type === 'job' ? data.company : data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Company Logo (Only for Jobs) */}
          {type === 'job' && (
            <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-2xl shadow-lg overflow-hidden">
              <ImageWithFallback
                src={data.logo}
                alt={data.company}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Expand Hint */}
          <button
            onClick={onExpand}
            className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronUp className="w-5 h-5 text-[#111111]" />
          </button>
        </div>

        {/* Card Details */}
        <div className="p-6 space-y-4 text-center flex flex-col items-center">
          <div>
            <h2 className="text-[#111111] mb-1">{type === 'job' ? data.title : data.name}</h2>
            <p className="text-[#6E6E6E]">{type === 'job' ? data.company : data.role}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            {type === 'job' ? (
              <>
                <div className="flex items-center gap-2 text-[#6E6E6E]">
                  <DollarSign className="w-4 h-4" />
                  <span>{data.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full border border-[#4CAF50]/20">
                    {data.location}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-[#6E6E6E]">
                  <Briefcase className="w-4 h-4" />
                  <span>{data.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#2E6CE6]/10 text-[#2E6CE6] rounded-full border border-[#2E6CE6]/20">
                    {data.location}
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {data.skills.map((skill: string) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>

          {type === 'candidate' && (
            <p className="text-sm text-[#6E6E6E] line-clamp-2 px-4">{data.bio}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function SwipeScreen({ onNavigate, userType = 'seeker' }: SwipeScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('home');

  const currentData = userType === 'seeker' ? mockJobs : mockCandidates;
  const currentItem = currentData[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      // Show match screen with 50% probability
      if (Math.random() > 0.5) {
        onNavigate('match', { matchedJob: currentItem });
        return;
      }
    }

    if (currentIndex < currentData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleAction = (action: 'reject' | 'save' | 'like') => {
    if (action === 'like') {
      handleSwipe('right');
    } else if (action === 'reject') {
      handleSwipe('left');
    } else if (action === 'save') {
      // Save to favorites
      // Save to favorites
      if (currentIndex < currentData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#FAFAFA]">
      {/* Top Bar */}
      <div className="p-6 flex items-center justify-between bg-white">
        <h3 className="text-[#111111]">JobMatch</h3>
        <button
          onClick={() => onNavigate('profile')}
          className="w-10 h-10 bg-[#2E6CE6] rounded-full flex items-center justify-center"
        >
          <User className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Swipe Cards Area */}
      <div className="flex-1 relative">
        {currentItem && (
          <SwipeCard
            key={currentItem.id}
            data={currentItem}
            type={userType === 'seeker' ? 'job' : 'candidate'}
            onSwipe={handleSwipe}
            onExpand={() => {
              if (userType === 'employer') {
                onNavigate('candidate-profile', { candidate: currentItem });
              } else {
                onNavigate('details', { job: currentItem });
              }
            }}
          />
        )}
      </div>

      {/* Swipe Controls */}
      <div className="p-6 bg-white">
        <div className="flex items-center justify-center gap-6 mb-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleAction('reject')}
            className="w-16 h-16 bg-white border-2 border-[#FF5A5F] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF5A5F]/10 transition-colors"
          >
            <X className="w-8 h-8 text-[#FF5A5F]" strokeWidth={2.5} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleAction('save')}
            className="w-14 h-14 bg-white border-2 border-[#FFCA28] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FFCA28]/10 transition-colors"
          >
            <Star className="w-6 h-6 text-[#FFCA28]" strokeWidth={2.5} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleAction('like')}
            className="w-16 h-16 bg-[#2E6CE6] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a4db8] transition-colors"
          >
            <Heart className="w-8 h-8 text-white" strokeWidth={2.5} fill="white" />
          </motion.button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-around pt-4 border-t border-[#E5E5E5]">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-[#2E6CE6]' : 'text-[#6E6E6E]'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => onNavigate('saved')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'saved' ? 'text-[#2E6CE6]' : 'text-[#6E6E6E]'}`}
          >
            <Bookmark className="w-6 h-6" />
            <span className="text-xs">Saved</span>
          </button>

          <button
            onClick={() => onNavigate('messages')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'messages' ? 'text-[#2E6CE6]' : 'text-[#6E6E6E]'}`}
          >
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs">Messages</span>
          </button>

          <button
            onClick={() => onNavigate('profile')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-[#2E6CE6]' : 'text-[#6E6E6E]'}`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
