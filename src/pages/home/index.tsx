import FadeInSection from '@/components/fade-in-section';
import { ChevronDown, ExternalLink, MoveUpRight } from 'lucide-react';
import React, { useState } from 'react';
import SkillCard from './components/skill-card';

import Footer from '@/components/footer';
import ProfileCard from '@/components/profile-card';
import Title from '@/components/title';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';
import { EXPERIENCES, PROJECTS, SKILLS, TOOLS_AND_EXPERTISE } from '../../constants';
import './index.css';

const HeaderSection = () => (
  <div className="mb-8 sm:mb-12 lg:mb-16">
    <Title title="FULL-STACK" subtitle="DEVELOPER" />
    <p className="text-muted max-w-2xl leading-relaxed mb-6 sm:mb-8 text-[18px] sm:text-base">
      Passionate developer with 5+ years experience building high-quality mobile and web
      applications. Expert in cross-platform development with React Native, TypeScript, and modern
      backend technologies.
    </p>
    <SkillCardsSection />
  </div>
);

// const StatsSection = () => (
//   <div className="grid grid-cols-2 sm:flex sm:gap-6 lg:gap-8 mb-6 sm:mb-8 gap-4">
//     <StatItem value="5+" label={`Years of\nExperience`} />
//     <StatItem value="5+" label={`Projects\nCompleted`} />
//     <StatItem value="10k+" label={`Users\nServed`} />
//   </div>
// );

const SkillCardsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {SKILLS.map((skill, index) => (
        <SkillCard
          key={index}
          skill={skill}
          index={index}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-3xl sm:text-4xl lg:text-[70px] text-white font-semibold">{value}</div>
    <div className="text-[16px] text-muted uppercase tracking-wider whitespace-pre-line">
      {label}
    </div>
  </div>
);

const ProjectsSection = () => (
  <div className="space-y-4 sm:space-y-6">
    {PROJECTS.map((project, index) => (
      <Link
        to={`/project/${project.id}`}
        key={index}
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group cursor-pointer"
      >
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br ${project.gradient} rounded-xl shrink-0 overflow-hidden flex items-center justify-center`}
        >
          {project.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm text-muted">{project.type}</p>
          <p className="text-sm text-gray-500 mt-2 block sm:hidden">{project.description}</p>
        </div>
        <MoveUpRight
          size={20}
          className="text-gray-600 group-hover:text-primary-orange transition self-end sm:self-auto"
        />
      </Link>
    ))}
  </div>
);

const ExperienceSection = () => (
  <div className="space-y-6 sm:space-y-8">
    {EXPERIENCES.map((exp, index) => (
      <div
        key={index}
        className="border-l-2 border-gray-800 pl-4 sm:pl-6 relative group cursor-pointer"
      >
        <div className="absolute -left-2.5 sm:-left-2.25 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full"></div>
        <h3 className="text-lg sm:text-xl font-bold mb-2">{exp.company}</h3>
        <p className="text-sm text-muted mb-3 leading-relaxed">{exp.description}</p>
        <p className="text-xs text-muted">{exp.period}</p>
        <ExternalLink
          size={16}
          className="absolute top-0 right-0 text-gray-600 group-hover:text-primary-orange transition"
        />
      </div>
    ))}
  </div>
);

const ToolsAndExpertiseSection = () => {
  const [open, setOpen] = React.useState(false);

  const VISIBLE_COUNT = 6;
  const visibleTools = TOOLS_AND_EXPERTISE.slice(0, VISIBLE_COUNT);
  const hiddenTools = TOOLS_AND_EXPERTISE.slice(VISIBLE_COUNT);

  const renderGrid = (tools: typeof TOOLS_AND_EXPERTISE) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-muted/20 transition cursor-pointer"
        >
          <div className="w-10 h-10 sm:w-15 sm:h-15 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
            {tool.icon}
          </div>
          <div>
            <h3 className="font-medium text-sm sm:text-[24px]">{tool.name}</h3>
            <p className="text-[16px] text-muted">{tool.category}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="space-y-4">
      {/* Always visible */}
      {renderGrid(visibleTools)}

      {/* Collapsible part */}
      <CollapsibleContent>{renderGrid(hiddenTools)}</CollapsibleContent>

      {TOOLS_AND_EXPERTISE.length > VISIBLE_COUNT && (
        <CollapsibleTrigger asChild>
          <button className="flex items-center gap-2 text-sm text-muted hover:text-white transition">
            {open ? 'Show less' : 'Show more'}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        </CollapsibleTrigger>
      )}
    </Collapsible>
  );
};

// ==================== MAIN COMPONENT ====================
const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#151312] text-white flex overflow-y-auto">
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 py-6 sm:py-12">
        <FadeInSection fadeThreshold={0}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Fixed Left Card */}
            <ProfileCard />

            {/* Scrollable Right Content */}
            <RightContent />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

// ==================== RIGHT CONTENT ====================
const RightContent = () => (
  <div className="flex-1">
    <div className="max-w-3xl p-4 sm:p-6 lg:p-8 py-0">
      {/* Header Section */}
      <HeaderSection />

      {/* Recent Projects Section */}
      <SectionWrapper title="FEATURED" subtitle="PROJECTS">
        <ProjectsSection />
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper title="5+ YEARS OF" subtitle="EXPERIENCE">
        <ExperienceSection />
      </SectionWrapper>

      {/* Technical Skills Section */}
      <SectionWrapper title="TOOLS &" subtitle="EXPERTISE">
        <ToolsAndExpertiseSection />
      </SectionWrapper>

      {/* Contact & Footer Section */}
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  </div>
);

const SectionWrapper = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <FadeInSection>
    <div className="mb-10 sm:mb-12 lg:mb-16">
      <Title title={title} subtitle={subtitle} />
      {children}
    </div>
  </FadeInSection>
);

export default HomePage;
