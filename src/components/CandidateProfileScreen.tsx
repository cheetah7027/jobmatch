import { ArrowLeft, Star, Briefcase, MapPin, Globe, Home, Calendar, DollarSign, Download, ExternalLink, MessageSquare, Bookmark, Award, Users, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import SkillBadge from './SkillBadge';

interface CandidateProfileScreenProps {
    candidate: any;
    onNavigate: (screen: string) => void;
}

export default function CandidateProfileScreen({ candidate, onNavigate }: CandidateProfileScreenProps) {
    const handleDownloadResume = () => {
        window.open(candidate.resumeUrl, '_blank');
    };

    const handleViewPortfolio = () => {
        if (candidate.portfolioUrl) {
            window.open(candidate.portfolioUrl, '_blank');
        }
    };

    const handleContact = () => {
        // TODO: Implement contact functionality
        console.log('Contact candidate:', candidate.name);
    };

    const handleShortlist = () => {
        // TODO: Implement shortlist functionality
        console.log('Shortlist candidate:', candidate.name);
    };

    return (
        <div className="w-full h-full flex flex-col bg-[#FAFAFA]">
            {/* Header */}
            <div className="bg-white border-b border-[#E5E5E5] px-6 py-4 flex items-center justify-between shrink-0">
                <button
                    onClick={() => onNavigate('swipe')}
                    className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-[#111111]" />
                </button>
                <h1 className="text-[#111111] font-medium">Candidate Profile</h1>
                <div className="w-10" /> {/* Spacer for alignment */}
            </div>

            {/* Scrollable Content */}
            <div
                className="flex-1 overflow-y-scroll"
                style={{
                    WebkitOverflowScrolling: 'touch',
                    touchAction: 'pan-y',
                    overflowY: 'scroll',
                    height: 'calc(100vh - 120px)',
                    maxHeight: '100%'
                }}
            >
                <div className="max-w-[600px] mx-auto">
                    {/* Profile Header */}
                    <div className="bg-white p-6 mb-3">
                        <div className="flex flex-col items-center text-center">
                            {/* Profile Photo */}
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#2E6CE6]/10">
                                <ImageWithFallback
                                    src={candidate.image}
                                    alt={candidate.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name and Title */}
                            <h2 className="text-[#111111] mb-1">{candidate.name}</h2>
                            <p className="text-[#6E6E6E] mb-3">{candidate.role}</p>

                            {/* Match Score Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full border border-[#4CAF50]/20">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="font-medium">{candidate.matchScore}% Match</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Info Section */}
                    <div className="bg-white p-6 mb-3">
                        <h3 className="text-[#111111] font-medium mb-4">Quick Info</h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#F5F5F5] rounded-full">
                                <Briefcase className="w-4 h-4 text-[#6E6E6E]" />
                                <span className="text-sm text-[#111111]">{candidate.experience}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#F5F5F5] rounded-full">
                                <MapPin className="w-4 h-4 text-[#6E6E6E]" />
                                <span className="text-sm text-[#111111]">{candidate.location}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#F5F5F5] rounded-full">
                                <Globe className="w-4 h-4 text-[#6E6E6E]" />
                                <span className="text-sm text-[#111111]">{candidate.relocationPreference}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#F5F5F5] rounded-full">
                                <Home className="w-4 h-4 text-[#6E6E6E]" />
                                <span className="text-sm text-[#111111]">{candidate.workStyle}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#F5F5F5] rounded-full">
                                <Calendar className="w-4 h-4 text-[#6E6E6E]" />
                                <span className="text-sm text-[#111111]">Available: {candidate.availability}</span>
                            </div>
                        </div>
                    </div>

                    {/* Compensation */}
                    <div className="bg-white p-6 mb-3">
                        <h3 className="text-[#111111] font-medium mb-3">Expected Salary</h3>
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-[#4CAF50]" />
                            <span className="text-lg font-semibold text-[#111111]">{candidate.expectedSalary}</span>
                        </div>
                    </div>

                    {/* Matched Skills */}
                    <div className="bg-white p-6 mb-3">
                        <h3 className="text-[#111111] font-medium mb-2">Matched Skills</h3>
                        <p className="text-xs text-[#6E6E6E] mb-3">Skills that match job requirements</p>
                        <div className="flex flex-wrap gap-2">
                            {candidate.skills.slice(0, 3).map((skill: string) => (
                                <div key={skill} className="px-3 py-1.5 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm font-medium border border-[#4CAF50]/20">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Unmatched Skills */}
                    <div className="bg-white p-6 mb-3">
                        <h3 className="text-[#111111] font-medium mb-2">Missing Skills</h3>
                        <p className="text-xs text-[#6E6E6E] mb-3">Job requirements not yet acquired</p>
                        <div className="flex flex-wrap gap-2">
                            <div className="px-3 py-1.5 bg-[#FF5A5F]/10 text-[#FF5A5F] rounded-full text-sm font-medium border border-[#FF5A5F]/20">
                                Kubernetes
                            </div>
                            <div className="px-3 py-1.5 bg-[#FF5A5F]/10 text-[#FF5A5F] rounded-full text-sm font-medium border border-[#FF5A5F]/20">
                                CI/CD
                            </div>
                        </div>
                    </div>

                    {/* Additional Skills */}
                    <div className="bg-white p-6 mb-3">
                        <h3 className="text-[#111111] font-medium mb-2">Additional Skills</h3>
                        <p className="text-xs text-[#6E6E6E] mb-3">Extra skills beyond job requirements</p>
                        <div className="flex flex-wrap gap-2">
                            {candidate.skills.slice(3).map((skill: string) => (
                                <div key={skill} className="px-3 py-1.5 bg-[#2E6CE6]/10 text-[#2E6CE6] rounded-full text-sm font-medium border border-[#2E6CE6]/20">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="bg-white p-6 mb-3">
                        <h3 className="text-[#111111] font-medium mb-3">About</h3>
                        <p className="text-[#6E6E6E] leading-relaxed">{candidate.bio}</p>
                    </div>

                    {/* Experience History */}
                    <div className="bg-white p-6 mb-3">
                        <h3 className="text-[#111111] font-medium mb-4">Experience</h3>
                        <div className="space-y-4">
                            {candidate.experienceHistory.map((exp: any, index: number) => (
                                <div key={index} className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#2E6CE6]/10 flex items-center justify-center shrink-0">
                                        <Building2 className="w-5 h-5 text-[#2E6CE6]" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[#111111] font-medium">{exp.role}</h4>
                                        <p className="text-sm text-[#6E6E6E]">{exp.company}</p>
                                        <p className="text-xs text-[#9E9E9E] mt-1">{exp.duration}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    {candidate.achievements && candidate.achievements.length > 0 && (
                        <div className="bg-white p-6 mb-3">
                            <h3 className="text-[#111111] font-medium mb-4">Achievements & Certifications</h3>
                            <div className="space-y-3">
                                {candidate.achievements.map((achievement: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Award className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
                                        <span className="text-[#6E6E6E]">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="bg-white p-6 mb-6">
                        <div className="space-y-3">
                            {/* Download Resume */}
                            <Button
                                onClick={handleDownloadResume}
                                className="w-full bg-white border-2 border-[#E5E5E5] text-[#111111] hover:bg-[#F5F5F5] flex items-center justify-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </Button>

                            {/* View Portfolio (Optional) */}
                            {candidate.portfolioUrl && (
                                <Button
                                    onClick={handleViewPortfolio}
                                    className="w-full bg-white border-2 border-[#E5E5E5] text-[#111111] hover:bg-[#F5F5F5] flex items-center justify-center gap-2"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    View Portfolio
                                </Button>
                            )}

                            {/* Contact Candidate */}
                            <Button
                                onClick={handleContact}
                                className="w-full bg-[#2E6CE6] text-white hover:bg-[#2557B8] flex items-center justify-center gap-2"
                            >
                                <MessageSquare className="w-5 h-5" />
                                Contact Candidate
                            </Button>

                            {/* Shortlist */}
                            <Button
                                onClick={handleShortlist}
                                className="w-full bg-[#4CAF50] text-white hover:bg-[#45A049] flex items-center justify-center gap-2"
                            >
                                <Bookmark className="w-5 h-5" />
                                Shortlist
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
