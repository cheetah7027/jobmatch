import { ArrowLeft, MapPin, DollarSign, Bookmark } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import SkillBadge from './SkillBadge';

interface SavedJobsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

const savedJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp Inc.',
    logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    salary: '$120k - $160k',
    location: 'Remote',
    skills: ['React', 'TypeScript', 'Node.js'],
    savedDate: '2 days ago'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'DesignLab',
    logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    salary: '$100k - $140k',
    location: 'San Francisco, CA',
    skills: ['Figma', 'UI/UX'],
    savedDate: '5 days ago'
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    salary: '$130k - $170k',
    location: 'Remote',
    skills: ['Python', 'React', 'AWS'],
    savedDate: '1 week ago'
  },
  {
    id: 4,
    title: 'Marketing Manager',
    company: 'GrowthCo',
    logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    salary: '$90k - $120k',
    location: 'New York, NY',
    skills: ['SEO', 'Analytics', 'Content'],
    savedDate: '2 weeks ago'
  }
];

export default function SavedJobsScreen({ onNavigate }: SavedJobsScreenProps) {
  return (
    <div className="w-full h-full flex flex-col bg-[#FAFAFA]">
      {/* Header */}
      <div className="p-6 bg-white border-b border-[#E5E5E5]">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => onNavigate('swipe')}>
            <ArrowLeft className="w-6 h-6 text-[#111111]" />
          </button>
          <h2 className="text-[#111111]">Saved Jobs</h2>
          <div className="w-6" />
        </div>
        <p className="text-[#6E6E6E] text-center">{savedJobs.length} jobs saved</p>
      </div>

      {/* Jobs List */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {savedJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-3xl p-5 shadow-sm border border-[#E5E5E5] space-y-4"
          >
            {/* Header */}
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#111111] mb-1 truncate">{job.title}</h3>
                <p className="text-[#6E6E6E] truncate">{job.company}</p>
              </div>
              <button className="text-[#FFCA28] flex-shrink-0">
                <Bookmark className="w-6 h-6" fill="#FFCA28" />
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAFAFA] rounded-lg">
                <DollarSign className="w-4 h-4 text-[#6E6E6E]" />
                <span className="text-[#111111] text-sm">{job.salary}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#4CAF50]/10 rounded-lg">
                <MapPin className="w-4 h-4 text-[#4CAF50]" />
                <span className="text-[#4CAF50] text-sm">{job.location}</span>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-[#E5E5E5]">
              <span className="text-[#6E6E6E] text-sm">Saved {job.savedDate}</span>
              <Button
                onClick={() => onNavigate('details', { job })}
                className="h-10 px-6 bg-[#2E6CE6] hover:bg-[#1a4db8] text-white rounded-xl"
              >
                Apply Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
