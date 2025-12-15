import React, { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Globe,
  ExternalLink,
  Store,
  Users,
  MessageSquare,
  Briefcase,
  Home as LucideHome,
  Wrench,
  SquarePen,
  Layers,
  Cloud,
} from 'lucide-react';
import dp from '@/assets/dp.png';
import './home.css';
import SkillCard from './components/skill-card';
import FadeInSection from '@/components/fade-in-section';

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
    icon: <Layers className="text-white w-8 h-8" />,
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
    icon: <Cloud className="text-black w-8 h-8" />,
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
    title: 'Sibs - Social Barter Marketplace',
    type: 'Marketplace App',
    description:
      'Social marketplace with TikTok-style feed and real-time chat system for bartering goods and services.',
    stack: 'React Native/Expo, Firebase, Firestore, Redux Toolkit',
    features: 'Real-time chat, TikTok-style feed, secure authentication',
    live: true,
    icon: <Store className="w-6 h-6 text-white" />,
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    title: 'Yaya & Driver',
    type: 'Service Marketplace',
    description:
      'Two-sided platform connecting households with verified household staff and drivers.',
    stack: 'React Native, Laravel, PostgreSQL, Firebase',
    features: 'ID verification, live job feed, hybrid chat system',
    live: true,
    icon: <Users className="w-6 h-6 text-white" />,
    gradient: 'from-purple-900 to-purple-600',
  },
  {
    title: 'On Call - Hospitality Staffing',
    type: 'Staffing Solution',
    description:
      'Full staffing solution for hospitality industry with role-based access and real-time alerts.',
    stack: 'React Native, Node.js, WebSockets, PostgreSQL',
    features: 'Role-based access, real-time alerts, in-app messaging',
    live: true,
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    gradient: 'from-white to-gray-200',
  },
];

const TOOLS = [
  {
    name: 'React Native',
    category: 'Mobile Framework',
    icon: <div className="w-6 h-6 border-2 border-white"></div>,
    color: 'bg-black',
  },
  {
    name: 'Figma',
    category: 'Design Tool',
    icon: <div className="w-4 h-4 bg-pink-500 rounded"></div>,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    name: 'Framer',
    category: 'Website Builder',
    icon: <div className="w-6 h-6 border-2 border-white"></div>,
    color: 'bg-black',
  },
  {
    name: 'WordPress',
    category: 'CMS',
    icon: <div className="w-6 h-6 bg-gray-200 rounded"></div>,
    color: 'bg-white',
  },
  {
    name: 'ChatGPT',
    category: 'AI Assistant',
    icon: <div className="w-6 h-6 border-2 border-black rounded-full"></div>,
    color: 'bg-white',
  },
  {
    name: 'Next.js',
    category: 'React Framework',
    icon: <span className="font-bold text-white text-sm">N</span>,
    color: 'bg-black',
  },
];

const NAV_ITEMS = [
  { key: 'hero', icon: LucideHome, label: 'Home' },
  { key: 'experience', icon: Briefcase, label: 'Experience' },
  { key: 'projects', icon: Store, label: 'Projects' },
  { key: 'skills', icon: Wrench, label: 'Skills' },
  { key: 'thoughts', icon: SquarePen, label: 'Thoughts' },
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
  { icon: Globe, title: 'Location', content: 'Philippines' },
];

// ==================== COMPONENTS ====================
const TitleRenderer = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <h1 className="text-7xl font-bold mb-2 text-white">{title}</h1>
    <h1 className="text-7xl font-bold mb-6 text-subtle">{subtitle}</h1>
  </>
);

const NavigationBar = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (key: string) => void;
}) => (
  <div className="absolute h-40 w-full flex justify-center pt-8">
    <div className="h-12 gap-2.5 px-2.5 rounded-lg bg-white/3 flex items-center justify-center">
      {NAV_ITEMS.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => setActiveSection(key)}
          className={`flex w-9 h-9 items-center justify-center ${activeSection === key ? 'text-primary-orange' : 'text-gray-400'} hover:text-white transition`}
          aria-label={label}
        >
          <Icon size={21} />
        </button>
      ))}
    </div>
  </div>
);

const HeaderSection = () => (
  <FadeInSection>
    <div className="mb-16">
      <TitleRenderer title="FULL-STACK" subtitle="DEVELOPER" />
      <p className="text-muted max-w-2xl leading-relaxed mb-8">
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
  <div className="flex gap-12 mb-8">
    <StatItem value="5+" label="Years of\nExperience" />
    <StatItem value="5+" label="Apps\nDeployed" />
    <StatItem value="10+" label="Projects\nCompleted" />
    <StatItem value="10k+" label="Users\nServed" />
  </div>
);

const SkillCardsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex gap-4">
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
    <div className="text-5xl text-white font-bold">{value}</div>
    <div className="text-xs text-muted uppercase tracking-wider whitespace-pre-line">{label}</div>
  </div>
);

const ProjectsSection = () => (
  <div className="space-y-6">
    {PROJECTS.map((project, index) => (
      <div key={index} className="flex items-center gap-6 group cursor-pointer">
        <div
          className={`w-20 h-20 bg-linear-to-br ${project.gradient} rounded-xl shrink-0 overflow-hidden flex items-center justify-center`}
        >
          {project.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm text-muted">{project.type}</p>
        </div>
        <ExternalLink
          size={20}
          className="text-gray-600 group-hover:text-primary-orange transition"
        />
      </div>
    ))}
  </div>
);

const ExperienceSection = () => (
  <div className="space-y-8">
    {EXPERIENCES.map((exp, index) => (
      <div key={index} className="border-l-2 border-gray-800 pl-6 relative group cursor-pointer">
        <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-400 rounded-full"></div>
        <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
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

const ToolsSection = () => (
  <div className="grid grid-cols-2 gap-4">
    {TOOLS.map((tool, index) => (
      <div
        key={index}
        className="flex items-center gap-4 bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition cursor-pointer"
      >
        <div
          className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center shrink-0`}
        >
          {tool.icon}
        </div>
        <div>
          <h3 className="font-bold">{tool.name}</h3>
          <p className="text-xs text-muted">{tool.category}</p>
        </div>
      </div>
    ))}
  </div>
);

const ContactSection = () => (
  <>
    <div className="grid grid-cols-3 gap-6 mb-8">
      {CONTACT_METHODS.map((method, index) => (
        <div key={index} className="bg-gray-900 rounded-xl p-6">
          <method.icon className="w-8 h-8 mx-auto text-primary-orange mb-3" />
          <h4 className="font-bold text-center mb-1">{method.title}</h4>
          {method.href ? (
            <a
              href={method.href}
              className="text-sm text-muted hover:text-primary-orange transition text-center block"
            >
              {method.content}
            </a>
          ) : (
            <p className="text-sm text-muted text-center">{method.content}</p>
          )}
        </div>
      ))}
    </div>

    <div className="flex justify-center gap-4">
      <button
        onClick={() => window.open('mailto:rgcjhn@gmail.com', '_blank')}
        className="px-6 py-3 bg-primary-orange rounded-xl hover:bg-orange-600 transition"
      >
        <Mail className="w-4 h-4 inline mr-2" />
        Contact Me
      </button>
      <button
        onClick={() => window.open('https://linkedin.com/in/rgcjhn', '_blank')}
        className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
      >
        <Linkedin className="w-4 h-4 inline mr-2" />
        LinkedIn
      </button>
    </div>
  </>
);

const Footer = () => (
  <footer className="border-t border-gray-800 pt-8 text-center">
    <p className="text-sm text-gray-500">
      © {new Date().getFullYear()} Rogec John Pecarana. All rights reserved.
    </p>
    <p className="text-xs text-gray-600 mt-2">Full-Stack Developer | React Native Specialist</p>
  </footer>
);

// ==================== MAIN COMPONENT ====================
const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
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
      <NavigationBar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="mx-auto max-w-275 px-4 py-40">
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
      <div className="w-full bg-linear-to-br from-gray-100 to-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="absolute top-8 right-12 w-2 h-2 bg-orange-300 rounded-full"></div>
        <div className="border-2 border-dashed border-orange-400 absolute top-6 right-6 w-32 h-32 rounded-full opacity-30"></div>
        <div className="border-3 border-dashed border-primary-orange absolute -top-24 -left-2 w-44 h-44 rounded-full z-1"></div>

        {/* Profile Image */}
        <div className="relative mb-4">
          <div className="w-60 h-62 mx-auto rounded-2xl overflow-hidden bg-linear-to-br from-orange-600 to-orange-800 shadow-xl">
            <img src={dp} alt="Rogec Pecarana" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-3xl font-bold text-black text-center mb-2">ROGEC JOHN PECARANA</h2>

        {/* Decoration */}
        <div className="flex justify-center mb-4 h-16 relative">
          <div className="absolute -top-12 -left-42 card-decoration" />
        </div>

        {/* Description */}
        <p className="text-gray-600 text-center text-sm leading-relaxed mb-8">
          Full-Stack Developer & React Native Specialist with 5+ years experience building
          high-quality mobile and web applications.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {SOCIAL_LINKS.map(({ href, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full hover:bg-orange-100 flex items-center justify-center transition-colors"
            >
              <Icon className="w-5 h-5 text-primary-orange" />
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
    <div className="max-w-4xl p-8 py-0">
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
      <SectionWrapper title="TECHNICAL" subtitle="TOOLS">
        <ToolsSection />
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
    <div className="mb-16">
      <TitleRenderer title={title} subtitle={subtitle} />
      {children}
    </div>
  </FadeInSection>
);

export default Home;
