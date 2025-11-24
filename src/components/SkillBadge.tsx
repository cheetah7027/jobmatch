interface SkillBadgeProps {
  skill: string;
  variant?: 'primary' | 'secondary' | 'success';
}

export default function SkillBadge({ skill, variant = 'primary' }: SkillBadgeProps) {
  const colors = {
    primary: 'bg-[#2E6CE6]/10 text-[#2E6CE6] border-[#2E6CE6]/20',
    secondary: 'bg-[#FF5A5F]/10 text-[#FF5A5F] border-[#FF5A5F]/20',
    success: 'bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20'
  };

  return (
    <span className={`inline-flex px-3 py-1 rounded-full border text-sm ${colors[variant]}`}>
      {skill}
    </span>
  );
}
