import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, DollarSign, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface JobPostingScreenProps {
    onNavigate: (screen: string) => void;
}

const skillsList = [
    'JavaScript', 'React', 'Python', 'Node.js', 'TypeScript', 'SQL',
    'AWS', 'Docker', 'Git', 'Figma', 'Product Management', 'Marketing'
];

export default function JobPostingScreen({ onNavigate }: JobPostingScreenProps) {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [isRemote, setIsRemote] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [salaryMin, setSalaryMin] = useState('');
    const [salaryMax, setSalaryMax] = useState('');
    const [experience, setExperience] = useState('');
    const [jobType, setJobType] = useState('');
    const [description, setDescription] = useState('');

    const toggleSkill = (skill: string) => {
        setSelectedSkills(prev =>
            prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
        );
    };

    const handlePost = () => {
        // In a real app, this would send data to the backend
        console.log({
            title, location, isRemote, selectedSkills, salaryMin, salaryMax, experience, jobType, description
        });
        onNavigate('swipe');
    };

    return (
        <div className="w-full h-full flex flex-col bg-white">
            {/* Header */}
            <div className="p-6 pb-2 flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => onNavigate('onboarding')} className="rounded-full">
                    <ArrowLeft className="w-6 h-6 text-[#111111]" />
                </Button>
                <h1 className="text-xl font-bold text-[#111111]">Post a Job</h1>
            </div>

            <div className="flex-1 overflow-auto px-6 pb-24 space-y-6">
                {/* Job Title */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#111111]">Job Title</label>
                    <Input
                        placeholder="e.g. Senior React Developer"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="h-12 rounded-xl border-[#E5E5E5]"
                    />
                </div>

                {/* Location */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#111111]">Location</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-[#6E6E6E]" />
                        <Input
                            placeholder="e.g. San Francisco, CA"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="h-12 pl-10 rounded-xl border-[#E5E5E5]"
                        />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            id="remote"
                            checked={isRemote}
                            onChange={(e) => setIsRemote(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-[#2E6CE6] focus:ring-[#2E6CE6]"
                        />
                        <label htmlFor="remote" className="text-sm text-[#6E6E6E]">This is a remote position</label>
                    </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#111111]">Required Skills</label>
                    <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill) => (
                            <button
                                key={skill}
                                onClick={() => toggleSkill(skill)}
                                className={`px-3 py-1.5 text-sm rounded-full border transition-all ${selectedSkills.includes(skill)
                                        ? 'bg-[#2E6CE6] border-[#2E6CE6] text-white'
                                        : 'bg-white border-[#E5E5E5] text-[#6E6E6E]'
                                    }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Salary */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#111111]">Salary Range (Annual)</label>
                    <div className="flex gap-4">
                        <div className="relative flex-1">
                            <DollarSign className="absolute left-3 top-3.5 w-4 h-4 text-[#6E6E6E]" />
                            <Input
                                type="number"
                                placeholder="Min"
                                value={salaryMin}
                                onChange={(e) => setSalaryMin(e.target.value)}
                                className="h-12 pl-9 rounded-xl border-[#E5E5E5]"
                            />
                        </div>
                        <div className="relative flex-1">
                            <DollarSign className="absolute left-3 top-3.5 w-4 h-4 text-[#6E6E6E]" />
                            <Input
                                type="number"
                                placeholder="Max"
                                value={salaryMax}
                                onChange={(e) => setSalaryMax(e.target.value)}
                                className="h-12 pl-9 rounded-xl border-[#E5E5E5]"
                            />
                        </div>
                    </div>
                </div>

                {/* Job Type & Experience */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#111111]">Job Type</label>
                        <select
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                            className="w-full h-12 px-3 rounded-xl border border-[#E5E5E5] bg-white text-sm"
                        >
                            <option value="">Select</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#111111]">Experience</label>
                        <select
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="w-full h-12 px-3 rounded-xl border border-[#E5E5E5] bg-white text-sm"
                        >
                            <option value="">Select</option>
                            <option value="entry">Entry Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="senior">Senior</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#111111]">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the role and responsibilities..."
                        className="w-full h-32 p-4 rounded-xl border border-[#E5E5E5] focus:border-[#2E6CE6] resize-none text-sm"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-[#E5E5E5]">
                <Button
                    onClick={handlePost}
                    className="w-full h-14 bg-[#2E6CE6] hover:bg-[#1a4db8] text-white rounded-xl text-lg font-medium shadow-lg shadow-blue-200"
                >
                    Post Job
                </Button>
            </div>
        </div>
    );
}
