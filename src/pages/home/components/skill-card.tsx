import { CheckCircle, ExternalLink } from 'lucide-react';
import type { JSX } from 'react';

const SkillCard = ({
  skill,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  skill: {
    category: string;
    icon: JSX.Element;
    color: string;
    technologies: string[];
  };
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const isSecondCard = index === 1;
  const bgColorClass = isSecondCard ? 'bg-black' : 'bg-white';
  const textColorClass = isSecondCard ? 'text-black' : 'text-white';
  const borderColorClass = isSecondCard ? 'border-lime-300' : 'border-orange-400';

  return (
    <div
      className={`${skill.color} rounded-2xl p-6 flex-1 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute top-0 right-0 w-32 h-32 rounded-full ${bgColorClass} blur-2xl transition-transform duration-700 ${isHovered ? 'scale-150 translate-x-8 -translate-y-8' : ''}`}
        />
        <div
          className={`absolute bottom-0 left-0 w-24 h-24 rounded-full ${bgColorClass} blur-xl transition-transform duration-1000 ${isHovered ? 'scale-125 -translate-x-4 translate-y-4' : ''}`}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-12 right-12 w-3 h-3 ${bgColorClass} opacity-20 rotate-45 transition-all duration-700 ${isHovered ? 'translate-x-4 -translate-y-4 rotate-90' : ''}`}
        />
        <div
          className={`absolute bottom-16 left-16 w-4 h-4 border-2 ${isSecondCard ? 'border-black' : 'border-white'} opacity-20 transition-all duration-500 ${isHovered ? '-translate-x-2 translate-y-2 rotate-45' : ''}`}
        />
        <div
          className={`absolute top-1/2 left-8 w-2 h-2 rounded-full ${bgColorClass} opacity-30 transition-all duration-1000 ${isHovered ? 'scale-150 translate-y-4' : ''}`}
        />
      </div>

      {/* Icon with Animation */}
      <div className="mb-4 relative z-10">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}
        >
          <div className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            {skill.icon}
          </div>
        </div>
      </div>

      {/* Category Title */}
      <div
        className={`font-bold uppercase text-sm mb-4 relative z-10 transition-all duration-300 ${textColorClass} ${isHovered ? 'translate-x-1' : ''}`}
      >
        {skill.category}
      </div>

      {/* Technologies List */}
      <TechnologiesList skill={skill} isHovered={isHovered} isSecondCard={isSecondCard} />

      {/* External Link Icon */}
      <div
        className={`absolute bottom-6 right-6 transition-all duration-300 ${isHovered ? 'translate-x-1 translate-y-1 rotate-12' : ''}`}
      >
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-opacity-30' : ''}`}
        >
          <ExternalLink
            size={18}
            className={`${textColorClass} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
          />
        </div>
      </div>

      {/* Animated Border Glow */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 ${borderColorClass} opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-50' : ''}`}
      />
    </div>
  );
};

const TechnologiesList = ({
  skill,
  isHovered,
  isSecondCard,
}: {
  skill: {
    category: string;
    icon: JSX.Element;
    color: string;
    technologies: string[];
  };
  isHovered: boolean;
  isSecondCard: boolean;
}) => (
  <div
    className={`text-xs space-y-2 relative z-10 ${isSecondCard ? 'text-black/80' : 'text-white/80'}`}
  >
    {skill.technologies.slice(0, 3).map((tech, i) => (
      <div
        key={i}
        className={`flex items-center gap-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
        style={{ transitionDelay: isHovered ? `${i * 50}ms` : '0ms' }}
      >
        <CheckCircle
          className={`w-3 h-3 transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}
        />
        {tech}
      </div>
    ))}
    {skill.technologies.length > 3 && (
      <div
        className={`text-xs ${isSecondCard ? 'text-black/70' : 'text-white/70'} transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
      >
        +{skill.technologies.length - 3} more
      </div>
    )}
  </div>
);

export default SkillCard;
