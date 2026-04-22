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
  Visitmalta,
  YayaAndDriver,
} from '@/assets';
import {
  Cloud,
  Globe,
  Layers,
  Linkedin,
  Github as LucideGithub,
  Mail,
  Smartphone,
} from 'lucide-react';
import { daysBetweenDates } from './utils/string';

import oncall1 from './assets/screenshots/oncall-1.jpg';
import oncall2 from './assets/screenshots/oncall-2.jpg';
import sibs1 from './assets/screenshots/sibs1.webp';
import sibs2 from './assets/screenshots/sibs2.webp';
import sibs3 from './assets/screenshots/sibs3.webp';
import sibs4 from './assets/screenshots/sibs4.webp';
import sibs5 from './assets/screenshots/sibs5.webp';
import singlife1 from './assets/screenshots/singlife1.webp';
import singlife2 from './assets/screenshots/singlife2.webp';
import singlife3 from './assets/screenshots/singlife3.webp';
import singlife4 from './assets/screenshots/singlife4.webp';
import singlife5 from './assets/screenshots/singlife5.webp';
import singlife6 from './assets/screenshots/singlife6.webp';
import visitmalta1 from './assets/screenshots/visitmalta1.jpg';
import visitmalta2 from './assets/screenshots/visitmalta2.jpg';
import visitmalta3 from './assets/screenshots/visitmalta3.jpg';
import visitmalta4 from './assets/screenshots/visitmalta4.jpg';
import visitmalta5 from './assets/screenshots/visitmalta5.jpg';
import yayadriver1 from './assets/screenshots/yayadriver1.webp';
import yayadriver2 from './assets/screenshots/yayadriver2.webp';
import yayadriver3 from './assets/screenshots/yayadriver3.webp';
import yayadriver4 from './assets/screenshots/yayadriver4.webp';
import yayadriver5 from './assets/screenshots/yayadriver5.webp';
import yayadriver6 from './assets/screenshots/yayadriver6.webp';

export const EXPERIENCES = [
  {
    company: 'Freelance',
    role: 'Full-Stack Mobile Developer',
    description:
      'Built and deployed multiple marketplace applications with real-time chat, authentication, role-based access, and end-to-end workflows. Handled full development lifecycle including deployment to App Store and Google Play.',
    period: 'May 2024 - Dec 2025',
    color: 'from-orange-500 to-red-500',
  },
  {
    company: 'Singlife Philippines',
    role: 'Senior React Native Developer',
    description:
      'Worked with a team of 10+ engineers on a fintech insurance platform. Developed core features including digital wallet, virtual cards, policy management, and emergency funds. Integrated secure banking APIs, identity verification flows, and improved system performance and stability.',
    period: 'Mar 2022 - Jan 2024',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Webee',
    role: 'React Native & Android Developer',
    description:
      'Developed and maintained cross-platform mobile applications including VisitMalta with location-based search and interactive maps. Fixed critical production issues across multiple Android apps and improved performance and user experience.',
    period: 'May 2018 - Aug 2021',
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'POSBANG Corp',
    role: 'Android Developer (Java)',
    description:
      'Built an internal Jira-like workflow management system using Android (Java) and Laravel backend. Implemented task tracking, role-based workflows, and adopted MVP/MVVM architecture for maintainability.',
    period: 'Apr 2016 - Feb 2018',
    color: 'from-green-500 to-emerald-500',
  },
];

export const SKILLS = [
  {
    category: 'MOBILE & FRONTEND DEVELOPMENT',
    icon: <Layers className="text-white w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    technologies: [
      'React Native',
      'React (Web)',
      'TypeScript',
      'Redux',
      'Zustand',
      'Expo',
      'Mobile & Web Architecture',
      'Jest',
      'React Testing Library',
      'Detox',
      'Android (Kotlin, Java)',
      'iOS (Swift)',
    ],
  },
  {
    category: 'BACKEND, CLOUD & DEVOPS',
    icon: <Cloud className="text-black w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-gradient-to-br from-lime-400 to-lime-500',
    technologies: [
      'Node.js',
      'PHP',
      'Laravel',
      'REST APIs',
      'GraphQL',
      'WebSockets',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Firebase',
      'Supabase',
      'AWS',
      'Vercel',
      'DigitalOcean',
      'GitHub Actions',
      'Fastlane',
      'Expo EAS',
      'CI/CD',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'singlife-plan-protect',
    title: 'Singlife Plan & Protect',
    type: 'All-in-one digital insurance solution for Filipinos',
    description:
      "The Singlife Plan & Protect App is the Philippines' all-in-one digital insurance solution, giving Filipinos a better way to financial independence, allowing you to buy, manage, and access your policies entirely through the app at your own pace and time.",
    features: 'Role-based access, real-time alerts, in-app messaging',
    live: true,
    icon: <img src={Singlife} className="w-21 h-21" alt="Singlife" />,
    gradient: 'from-red-500 to-red-600',
    role: 'Front-end Developer',
    techStack: [
      'React Native',
      'TypeScript',
      'Expo',
      'Redux',
      'Node.js',
      'MySQL',
      'Firebase',
      'AWS',
      'Fastlane',
      'APIs',
    ],
    screenshots: [singlife1, singlife2, singlife3, singlife4, singlife5, singlife6],
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.singlife.ph',
    appstoreUrl: 'https://apps.apple.com/ph/app/singlife-plan-protect/id1580101016',
    websiteUrl: 'https://singlife.com.ph',
    responsibilities: [
      'Refactored legacy code and migrated to TypeScript',
      'Improved app performance using memoization',
      'Conducted code reviews and fixed performance bottlenecks',
      'Fixed critical crashes and bugs',
      'Added wallet and graphs features',
      'Developed policy view functionality',
      'Implemented cash-in function with major banks',
      'Deployed the app on Play Store and App Store',
      'Integrated Appsflyer for analytics',
      'Added universal links and deferred deep links for promotions',
    ],
    challenges: [
      'Working with a large legacy codebase with inconsistent patterns and limited documentation',
      'Ensuring app stability while refactoring and migrating critical modules to TypeScript',
      'Handling complex financial flows such as cash-in integrations with banks and ensuring transaction reliability',
      'Implementing deferred deep links for SMS/email campaigns with accurate attribution, install tracking, and seamless post-install navigation',
      'Ensuring secure deep linking without exposing sensitive user data or allowing malicious link injection',
      'Optimizing performance in data-heavy screens (wallet, graphs) while maintaining smooth user experience',
    ],
    timeline: '2 years',
    teamSize: '10+ members',
    client: 'Singlife Philippines',
    status: 'Live with ongoing updates',
    metrics: [
      { label: 'Downloads', value: '100k+' },
      { label: 'App Rating', value: '4.6/5' },
      { label: 'Reviews', value: '5k+' },
    ],
  },
  {
    id: 'yaya-driver-hanap-usap-hire',
    title: 'Yaya & Driver - Hanap, Usap, Hire',
    type: 'Find Trusted Yaya and Driver',
    description:
      'Two-sided platform connecting households with verified household staff and drivers.',
    features: 'ID verification, live job feed, hybrid chat system',
    live: true,
    icon: <img src={YayaAndDriver} className="w-14 h-14" alt="Yaya & Driver" />,
    gradient: 'from-purple-900 to-purple-600',
    role: 'Full-Stack Developer',
    techStack: [
      'React Native',
      'TypeScript',
      'Redux',
      'Laravel',
      'React',
      'Tailwind',
      'Inertia',
      'PostgreSQL',
      'Firebase',
      'Google Maps API',
      'Digital Ocean (Droplet, Spaces)',
      'Fastlane',
      'GitHub Workflows',
      'App Store Connect',
      'Play Store',
    ],
    screenshots: [yayadriver1, yayadriver2, yayadriver3, yayadriver4, yayadriver5, yayadriver6],
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.yayadriver.app',
    appstoreUrl: 'https://apps.apple.com/ph/app/yaya-driver/id1555555555',
    websiteUrl: 'https://yaya-driver.com',
    details:
      'Developed a two-sided marketplace connecting households with verified domestic helpers and drivers. Implemented robust verification system including government ID validation, background checks, and skill assessments. Built real-time chat and job matching algorithms.',
    responsibilities: [
      'Developed the full mobile app with React Native and Redux',
      'Built hybrid real-time chat system (PostgreSQL + Firebase)',
      'Implemented ID verification system with government ID validation',
      'Created location-based job matching algorithm',
      'Set up push notifications for job alerts and messages',
    ],
    challenges: [
      'Ensuring safety and trust between employers and staff',
      'Implementing accurate location tracking for job matching',
      'Managing both frontend, backend, website, and admin panel as a solo developer',
    ],
    achievements: ['Successfully deployed app', 'Developed a fully functional admin panel'],
    timeline: '4 months',
    teamSize: 'Solo',
    client: 'Vish Uttam',
    status: 'Live',
    metrics: [{ label: 'Days Deployed', value: daysBetweenDates(new Date('2025-11-30T12:00:00')) }],
  },
  {
    id: 'on-call-ph',
    title: 'On Call PH',
    type: 'Reliable job-matching platform for the Food & Beverage, restaurant, hotel, and service industries',
    description:
      'Full staffing solution for hospitality industry with role-based access and real-time alerts.',
    features: 'Role-based access, real-time alerts, in-app messaging',
    live: true,
    icon: <img src={OnCall} className="w-22 h-22" alt="On Call PH" />,
    gradient: 'from-blue-900 to-gray-950',
    role: 'Full-Stack Developer',
    techStack: [
      'React Native',
      'TypeScript',
      'Redux',
      'Laravel',
      'React',
      'Tailwind',
      'Inertia',
      'PostgreSQL',
      'Firebase',
      'Google Maps API',
      'Digital Ocean (Droplet, Spaces)',
      'Fastlane',
      'GitHub Workflows',
      'App Store Connect',
      'Play Store',
    ],
    screenshots: [oncall1, oncall2],
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.oncall.ph',
    appstoreUrl: 'https://apps.apple.com/ph/app/on-call-ph/id1666666666',
    websiteUrl: 'https://oncall.ph',
    details:
      'Built a full staffing solution with role-based access, real-time alerts, and in-app messaging.',
    responsibilities: [
      'Developed the full mobile app with React Native and Redux',
      'Built hybrid real-time chat system (PostgreSQL + Firebase)',
      'Implemented ID verification system with government ID validation',
      'Created location-based job matching algorithm',
      'Set up push notifications for job alerts and messages',
    ],
    challenges: [
      'Ensuring safety and trust between employers and staff',
      'Implementing accurate location tracking for job matching',
      'Managing both frontend, backend, website, and admin panel as a solo developer',
    ],
    achievements: ['Developed a fully functional admin panel'],
    timeline: '1 month',
    teamSize: 'Solo',
    client: 'Vish Uttam',
    metrics: [{ label: 'Days Deployed', value: daysBetweenDates(new Date('2025-12-30T12:00:00')) }],
  },
  {
    id: 'sibs-trade-buy-sell-flip',
    title: 'Sibs - Trade, Buy, Sell, Flip',
    type: 'Social Barter Marketplace App',
    description:
      'Social marketplace with TikTok-style feed and real-time chat system for bartering goods and services.',
    features: 'Real-time chat, TikTok-style feed, secure authentication',
    live: true,
    icon: <img src={Sibs} className="w-13 h-13" alt="Sibs" />,
    gradient: 'from-black to-gray-800',
    role: 'Mobile App Developer',
    techStack: [
      'React Native',
      'TypeScript',
      'Redux',
      'React',
      'Firebase (Functions, Firestore)',
      'Google Maps API',
      'GitHub Workflows',
      'App Store Connect',
      'Play Store',
    ],
    screenshots: [sibs1, sibs2, sibs3, sibs4, sibs5],
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.sibs.trade',
    appstoreUrl: 'https://apps.apple.com/ph/app/sibs-trade-buy-sell/id1777777777',
    websiteUrl: 'https://sibs.trade',
    details:
      'Sibs is a live social barter marketplace with an active user base. I joined the project post-launch to support ongoing development, focusing on performance optimization, stability improvements, feature refinements, testing, and release automation across both iOS and Android platforms.',
    responsibilities: [
      'Collaborated with designers to refine and validate UI/UX flows based on existing Figma designs',
      'Improved application performance by applying memoization techniques, optimizing renders, and reducing unnecessary re-renders in complex screens',
      'Fixed production bugs across mobile and backend layers, ensuring stable releases for both platforms',
      'Maintained and enhanced real-time chat features using Firebase and backend APIs',
      'Assisted in implementing and maintaining universal links and deep linking for marketing and content sharing',
      'Contributed to unit testing and end-to-end (E2E) testing to improve overall app reliability',
      'Supported CI/CD pipelines using Fastlane and GitHub Workflows for smoother app store deployments',
    ],
    achievements: [
      'Improved overall app responsiveness and reduced unnecessary re-renders on key screens, leading to smoother feed and chat interactions',
      'Helped stabilize post-release builds by resolving critical bugs and improving test coverage',
      'Contributed to maintaining a stable, scalable codebase while the user base and content volume continued to grow',
    ],
    timeline: '6 months',
    teamSize: '4 members',
    client: 'Sibs',
    status: 'Live with active community',
    metrics: [
      { label: 'Total Downloads', value: '1,000+' },
      { label: 'Active Users', value: '100+' },
      { label: 'Items Listed', value: '100+' },
    ],
  },
  {
    id: 'visit-malta',
    title: 'VisitMalta+',
    type: 'Official tourism app for Malta, Gozo & Comino',
    description:
      'VisitMalta+ is the official app for Malta, Gozo & Comino, helping travelers plan their trips and explore the islands with curated information on attractions, restaurants, transport, and events.',
    features: 'Travel planning, points of interest, transport info, event discovery',
    live: true,
    icon: <img src={Visitmalta} className="w-20 h-20" alt="VisitMalta+" />,
    gradient: 'from-yellow-500 to-orange-600',
    role: 'Mobile App Developer',
    techStack: ['React Native', 'Redux', 'Java (Microservices)', 'Firebase', 'REST APIs'],
    screenshots: [visitmalta1, visitmalta2, visitmalta3, visitmalta4, visitmalta5],
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.visitmalta.tourist',
    appstoreUrl: 'https://apps.apple.com/mt/app/visitmalta/id1471501091',
    websiteUrl: 'https://www.visitmalta.com/en/',
    details:
      'Built the official VisitMalta+ mobile application from scratch, enabling tourists to explore attractions, plan itineraries, and access essential travel information for Malta, Gozo, and Comino.',
    responsibilities: [
      'Built the mobile application from scratch using React Native',
      'Integrated REST APIs for dynamic travel content and data',
      'Implemented state management using Redux',
      'Integrated Firebase for push notifications',
    ],
    challenges: [
      'Handled React Native build issues during early-stage framework maturity',
      'Ensured stable performance across different mobile devices',
    ],
    achievements: [
      'Successfully launched the official tourism app for Malta',
      'Reached 50k+ downloads on the Play Store',
    ],
    timeline: '—',
    teamSize: '—',
    client: 'VisitMalta',
    status: 'Live',
    metrics: [{ label: 'Downloads', value: '50k+' }],
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
  { icon: Smartphone, title: 'Phone', content: '+63 936 855 1467' },
  { icon: Globe, title: 'Location', content: 'Davao City, Philippines' },
];
