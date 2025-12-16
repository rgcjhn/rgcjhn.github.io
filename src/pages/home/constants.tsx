import {
  Appstore,
  Docker,
  Expo,
  Fastlane,
  Figma,
  Firebase,
  Flutter,
  Github,
  Laravel,
  Nodejs,
  OnCall,
  Pgsql,
  Playstore,
  Postman,
  React,
  Sibs,
  Singlife,
  Supabase,
  Ts,
  YayaAndDriver,
} from '@/assets';
import {
  Cloud,
  Globe,
  Layers,
  Linkedin,
  Mail,
  Smartphone,
  Github as LucideGithub,
} from 'lucide-react';

export const EXPERIENCES = [
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

export const SKILLS = [
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

export const PROJECTS = [
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
];

export const TOOLS_AND_EXPERTISE = [
  {
    name: 'React',
    category: 'Frontend',
    icon: <img src={React} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Docker',
    category: 'DevOps',
    icon: <img src={Docker} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    icon: <img src={Flutter} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Expo',
    category: 'Mobile',
    icon: <img src={Expo} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'NodeJS',
    category: 'Backend',
    icon: <img src={Nodejs} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Supabase',
    category: 'Database',
    icon: <img src={Supabase} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Firebase',
    category: 'Backend',
    icon: <img src={Firebase} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: <img src={Pgsql} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Laravel',
    category: 'Backend',
    icon: <img src={Laravel} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Typescript',
    category: 'Language',
    icon: <img src={Ts} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Figma',
    category: 'Design',
    icon: <img src={Figma} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Github',
    category: 'DevOps',
    icon: <img src={Github} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Fastlane',
    category: 'Automation',
    icon: <img src={Fastlane} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Postman',
    category: 'API',
    icon: <img src={Postman} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'App Store Connect',
    category: 'Deployment',
    icon: <img src={Appstore} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    name: 'Playstore Console',
    category: 'Deployment',
    icon: <img src={Playstore} className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
];

export const SOCIAL_LINKS = [
  { href: 'https://github.com/rgcjhn', icon: LucideGithub },
  { href: 'https://linkedin.com/in/rgcjhn', icon: Linkedin },
  { href: 'mailto:rgcjhn@gmail.com', icon: Mail },
  { href: 'https://rgcjhn.github.io', icon: Globe },
];

export const CONTACT_METHODS = [
  { icon: Mail, title: 'Email', content: 'rgcjhn@gmail.com', href: 'mailto:rgcjhn@gmail.com' },
  { icon: Smartphone, title: 'Phone', content: '+63 915 556 6531' },
  { icon: Globe, title: 'Location', content: 'Davao City, Philippines' },
];
