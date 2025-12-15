import React, { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Globe,
  ExternalLink,
  Layers,
  Cloud,
  MoveUpRight,
  ChevronDown,
} from 'lucide-react';
import SkillCard from './components/skill-card';
import FadeInSection from '@/components/fade-in-section';
import {
  Docker,
  Dp,
  Fastlane,
  Figma,
  Flutter,
  Laravel,
  Nodejs,
  OnCall,
  Pgsql,
  Playstore,
  React as ReactSvg,
  Github as GithubSvg,
  Sibs,
  Singlife,
  Ts,
  YayaAndDriver,
} from '@/assets';

import './home.css';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// ==================== CONSTANTS ====================
const EXPERIENCES = [
  {
    company: 'Freelance',
    role: 'Full-Stack Developer (Freelance)',
    description:
      'Built and launched 3 marketplace apps with real-time chat, secure authentication, and end-to-end workflows. Managed App Store and Play Store deployment, serving thousands of users.',
    period: 'May 2024 - Present',
    color: 'from-orange-500 to-red-500',
  },
  {
    company: 'Singlife Philippines',
    role: 'React Native Developer',
    description:
      'Collaborated with a team of 10+ developers to revamp the Singlife Insurance App. Led development of core features including wallet, policy view, and products page.',
    period: 'Mar 2022 - Jan 2024',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Webee',
    role: 'React Native & Android Developer',
    description:
      'Developed and maintained Native Android and React Native applications. Engineered scalable back-end services and APIs using Node.js and Express.',
    period: 'May 2018 - Aug 2021',
    color: 'from-purple-500 to-pink-500',
  },
];

const SKILLS_DATA = [
  {
    category: 'MOBILE & FRONTEND DEVELOPMENT',
    icon: <Layers className="text-white w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    technologies: [
      'React Native',
      'TypeScript',
      'Redux',
      'React.js',
      'Expo',
      'Android (Java)',
      'iOS',
    ],
  },
  {
    category: 'BACKEND & CLOUD TECHNOLOGIES',
    icon: <Cloud className="text-black w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-gradient-to-br from-lime-400 to-lime-500',
    technologies: [
      'Node.js',
      'Laravel',
      'PostgreSQL',
      'Firebase',
      'WebSockets',
      'AWS',
      'DigitalOcean',
    ],
  },
];

const PROJECTS = [
  {
    title: 'Sibs - Trade, Buy, Sell, Flip',
    type: 'Social Barter Marketplace App',
    description:
      'Social marketplace with TikTok-style feed and real-time chat system for bartering goods and services.',
    stack: 'React Native/Expo, Firebase, Firestore, Redux Toolkit',
    features: 'Real-time chat, TikTok-style feed, secure authentication',
    live: true,
    icon: <img src={Sibs} className="w-13 h-13" />,
    gradient: 'from-black to-gray-800',
  },
  {
    title: 'Yaya & Driver - Hanap, Usap, Hire',
    type: 'Find Trusted Yaya and Driver',
    description:
      'Two-sided platform connecting households with verified household staff and drivers.',
    stack: 'React Native, Laravel, PostgreSQL, Firebase',
    features: 'ID verification, live job feed, hybrid chat system',
    live: true,
    icon: <img src={YayaAndDriver} className="w-14 h-14" />,
    gradient: 'from-purple-900 to-purple-600',
  },
  {
    title: 'On Call PH',
    type: 'Reliable job-matching platform for the Food & Beverage, restaurant, hotel, and service industries',
    description:
      'Full staffing solution for hospitality industry with role-based access and real-time alerts.',
    stack: 'React Native, Node.js, WebSockets, PostgreSQL',
    features: 'Role-based access, real-time alerts, in-app messaging',
    live: true,
    icon: <img src={OnCall} className="w-22 h-22" />,
    gradient: 'from-blue-900 to-gray-950',
  },
  {
    title: 'Singlife Plan & Protect',
    type: 'All-in-one digital insurance solution for Filipinos',
    description:
      "The Singlife Plan & Protect App is the Philippines' all-in-one digital insurance solution, giving Filipinos a better way to financial independence, allowing you to buy, manage, and access your policies entirely through the app at your own pace and time.",
    stack: 'React Native, Node.js, WebSockets, PostgreSQL',
    features: 'Role-based access, real-time alerts, in-app messaging',
    live: true,
    icon: <img src={Singlife} className="w-21 h-21" />,
    gradient: 'from-red-500 to-red-600',
  },
];

const TOOLS = [
  {
    name: 'React',
    category: 'Front-end Framework',
    icon: <img src={ReactSvg} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Figma',
    category: 'Design Tool',
    icon: <img src={Figma} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Flutter',
    category: 'Mobile App Framework',
    icon: <img src={Flutter} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Laravel',
    category: 'Web & Backend',
    icon: <img src={Laravel} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: <img src={Pgsql} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'NodeJS',
    category: 'Web & Backend',
    icon: <img src={Nodejs} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Typescript',
    category: 'Programming Language',
    icon: <img src={Ts} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Docker',
    category: 'Build Deployment',
    icon: <img src={Docker} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Github',
    category: 'Code Repository',
    icon: <img src={GithubSvg} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Fastlane',
    category: 'Build Automation',
    icon: <img src={Fastlane} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'App Store Connect',
    category: 'Build Management',
    icon: <img src={Fastlane} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Playstore Console',
    category: 'Build Management',
    icon: <img src={Playstore} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/rgcjhn', icon: Github },
  { href: 'https://linkedin.com/in/rgcjhn', icon: Linkedin },
  { href: 'mailto:rgcjhn@gmail.com', icon: Mail },
  { href: 'https://rgcjhn.github.io', icon: Globe },
];

const CONTACT_METHODS = [
  { icon: Mail, title: 'Email', content: 'rgcjhn@gmail.com', href: 'mailto:rgcjhn@gmail.com' },
  { icon: Smartphone, title: 'Phone', content: '+63 915 556 6531' },
  { icon: Globe, title: 'Location', content: 'Davao City, Philippines' },
];

// ==================== COMPONENTS ====================
const TitleRenderer = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white">
      {title}
    </h1>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-subtle">
      {subtitle}
    </h1>
  </>
);

const HeaderSection = () => (
  <FadeInSection>
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <TitleRenderer title="FULL-STACK" subtitle="DEVELOPER" />
      <p className="text-muted max-w-2xl leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
        Passionate developer with 5+ years experience building high-quality mobile and web
        applications. Expert in cross-platform development with React Native, TypeScript, and modern
        backend technologies.
      </p>
      <StatsSection />
      <SkillCardsSection />
    </div>
  </FadeInSection>
);

const StatsSection = () => (
  <div className="grid grid-cols-2 sm:flex sm:gap-6 lg:gap-8 mb-6 sm:mb-8 gap-4">
    <StatItem value="5+" label={`Years of\nExperience`} />
    <StatItem value="5+" label={`Apps\nDeployed`} />
    <StatItem value="10+" label={`Projects\nCompleted`} />
    <StatItem value="10k+" label={`Users\nServed`} />
  </div>
);

const SkillCardsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {SKILLS_DATA.map((skill, index) => (
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
    <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">{value}</div>
    <div className="text-xs text-muted uppercase tracking-wider whitespace-pre-line">{label}</div>
  </div>
);

const ProjectsSection = () => (
  <div className="space-y-4 sm:space-y-6">
    {PROJECTS.map((project, index) => (
      <div
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
      </div>
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
  const visibleTools = TOOLS.slice(0, VISIBLE_COUNT);
  const hiddenTools = TOOLS.slice(VISIBLE_COUNT);

  const renderGrid = (tools: typeof TOOLS) => (
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

      {TOOLS.length > VISIBLE_COUNT && (
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

const ContactSection = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {CONTACT_METHODS.map((method, index) => (
        <div key={index} className="bg-muted/20 rounded-xl p-4 sm:p-6">
          <method.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-primary-orange mb-2 sm:mb-3" />
          <h4 className="font-bold text-center mb-1 text-sm sm:text-base">{method.title}</h4>
          {method.href ? (
            <a
              href={method.href}
              className="text-xs sm:text-sm text-muted hover:text-primary-orange transition text-center block"
            >
              {method.content}
            </a>
          ) : (
            <p className="text-xs sm:text-sm text-muted text-center">{method.content}</p>
          )}
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
      <button
        onClick={() => window.open('mailto:rgcjhn@gmail.com', '_blank')}
        className="px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-orange rounded-xl hover:bg-orange-600 transition text-sm sm:text-base flex items-center justify-center"
      >
        <Mail className="w-4 h-4 inline mr-2" />
        Contact Me
      </button>
      <button
        onClick={() => window.open('https://linkedin.com/in/rgcjhn', '_blank')}
        className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition text-sm sm:text-base flex items-center justify-center"
      >
        <Linkedin className="w-4 h-4 inline mr-2" />
        LinkedIn
      </button>
    </div>
  </>
);

const Footer = () => (
  <footer className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
    <p className="text-xs sm:text-sm text-gray-500">
      © {new Date().getFullYear()} Rogec John Pecarana. All rights reserved.
    </p>
    <p className="text-xs text-gray-600 mt-2">Full-Stack Developer | React Native Specialist</p>
  </footer>
);

// ==================== MAIN COMPONENT ====================
const Home = () => {
  const [scrolledAfterHeader, setScrolledAfterHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledAfterHeader(window.scrollY > 160);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#151312] text-white flex overflow-y-auto">
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4">
        <FadeInSection>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Fixed Left Card */}
            <LeftProfileCard scrolledAfterHeader={scrolledAfterHeader} />

            {/* Scrollable Right Content */}
            <RightContent />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

// ==================== LEFT PROFILE CARD ====================
const LeftProfileCard = ({ scrolledAfterHeader }: { scrolledAfterHeader: boolean }) => (
  <div className="w-full lg:w-86 shrink-0">
    <div
      className={`
    w-full lg:w-86
    lg:${scrolledAfterHeader ? 'fixed top-7.5' : 'sticky top-40'}
  `}
    >
      <div className="w-full bg-linear-to-br from-gray-100 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
        <div className="absolute top-5 sm:top-8 right-8 sm:right-12 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-300 rounded-full"></div>
        <div className="border-2 border-dashed border-orange-400 absolute top-4 sm:top-6 right-4 sm:right-6 w-20 h-20 sm:w-32 sm:h-32 rounded-full opacity-30"></div>
        <div className="border-3 border-dashed border-primary-orange absolute -top-16 sm:-top-24 -left-2 w-28 h-28 sm:w-44 sm:h-44 rounded-full z-1"></div>

        {/* Profile Image */}
        <div className="relative mb-4">
          <div className="w-40 h-44 sm:w-52 sm:h-54 lg:w-60 lg:h-62 mx-auto rounded-2xl overflow-hidden bg-linear-to-br from-orange-600 to-orange-800 shadow-xl">
            <img src={Dp} alt="Rogec Pecarana" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black text-center mb-2">
          ROGEC JOHN PECARANA
        </h2>

        {/* Decoration */}
        <div className="flex justify-center mb-4 h-12 sm:h-16 relative">
          <div className="absolute -top-8 sm:-top-12 -left-20 sm:-left-42 card-decoration" />
        </div>

        {/* Description */}
        <p className="text-gray-600 text-center text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
          Full-Stack Developer & React Native Specialist with 5+ years experience building
          high-quality mobile and web applications.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-3 sm:gap-4">
          {SOCIAL_LINKS.map(({ href, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-orange-100 flex items-center justify-center transition-colors"
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-orange" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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

      {/* Contact Section */}
      <SectionWrapper title="LET'S BUILD" subtitle="TOGETHER">
        <ContactSection />
      </SectionWrapper>

      {/* Footer */}
      <Footer />
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
      <TitleRenderer title={title} subtitle={subtitle} />
      {children}
    </div>
  </FadeInSection>
);

export default Home;
