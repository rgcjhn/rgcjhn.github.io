import FadeInSection from '@/components/fade-in-section';
import Footer from '@/components/footer';
import ProfileCard from '@/components/profile-card';
import Title from '@/components/title';
import { PROJECTS } from '@/constants';
import { ArrowLeft, ExternalLink, Globe, Smartphone } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import './index.css';

const BackButton = () => (
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-muted hover:text-primary-orange transition mb-6 sm:mb-8 group"
  >
    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
    <span className="text-sm">Back to Home</span>
  </Link>
);

const ProjectLinks = ({ project }: { project: (typeof PROJECTS)[0] }) => (
  <div className="flex flex-wrap gap-3 mb-8 sm:mb-12">
    {project.playstoreUrl && (
      <a
        href={project.playstoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 bg-muted/20 rounded-lg hover:bg-muted/30 transition text-sm"
      >
        <Smartphone className="w-4 h-4" />
        Play Store
        <ExternalLink className="w-3 h-3" />
      </a>
    )}
    {project.appstoreUrl && (
      <a
        href={project.appstoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 bg-muted/20 rounded-lg hover:bg-muted/30 transition text-sm"
      >
        <Smartphone className="w-4 h-4" />
        App Store
        <ExternalLink className="w-3 h-3" />
      </a>
    )}
    {project.websiteUrl && (
      <a
        href={project.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 bg-muted/20 rounded-lg hover:bg-muted/30 transition text-sm"
      >
        <Globe className="w-4 h-4" />
        Website
        <ExternalLink className="w-3 h-3" />
      </a>
    )}
  </div>
);

const ProjectMetrics = ({ metrics }: { metrics: (typeof PROJECTS)[0]['metrics'] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 sm:mb-12">
    {metrics.map((metric, index) => (
      <div key={index} className="bg-muted/20 rounded-xl p-4 text-center">
        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{metric.value}</div>
        <div className="text-xs text-muted uppercase tracking-wider">{metric.label}</div>
      </div>
    ))}
  </div>
);

const OverviewSection = ({ project }: { project: (typeof PROJECTS)[0] }) => (
  <div className="mb-10 sm:mb-12 lg:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Overview</h2>
    <p className="text-muted leading-relaxed mb-6">{project.details}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InfoCard label="Role" value={project.role} />
      <InfoCard label="Timeline" value={project.timeline} />
      <InfoCard label="Team Size" value={project.teamSize} />
      <InfoCard label="Status" value={project.status} />
    </div>
  </div>
);

const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-muted/20 rounded-lg p-4">
    <div className="text-xs text-muted uppercase tracking-wider mb-1">{label}</div>
    <div className="text-white font-medium">{value}</div>
  </div>
);

const TechStackSection = ({ techStack }: { techStack: string[] }) => (
  <div className="mb-10 sm:mb-12 lg:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Tech Stack</h2>
    <div className="flex flex-wrap gap-2">
      {techStack.map((tech, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-muted/20 rounded-lg text-sm text-white hover:bg-primary-orange/20 hover:text-primary-orange transition cursor-default"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ResponsibilitiesSection = ({ responsibilities }: { responsibilities: string[] }) => (
  <div className="mb-10 sm:mb-12 lg:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Key Responsibilities</h2>
    <div className="space-y-3">
      {responsibilities.map((item, index) => (
        <div key={index} className="flex gap-3 group">
          <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
          <p className="text-muted leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const ChallengesSection = ({ challenges }: { challenges: string[] }) => (
  <div className="mb-10 sm:mb-12 lg:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Challenges Overcome</h2>
    <div className="space-y-4">
      {challenges.map((challenge, index) => (
        <div
          key={index}
          className="border-l-2 border-primary-orange/50 pl-4 py-2 hover:border-primary-orange transition"
        >
          <p className="text-muted leading-relaxed">{challenge}</p>
        </div>
      ))}
    </div>
  </div>
);

const AchievementsSection = ({ achievements }: { achievements: string[] }) => (
  <div className="mb-10 sm:mb-12 lg:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Key Achievements</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-muted/20 rounded-xl p-4 hover:bg-muted/30 transition cursor-default"
        >
          <div className="flex gap-3">
            <div className="text-primary-orange text-xl font-bold">✓</div>
            <p className="text-white leading-relaxed">{achievement}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ScreenshotsSection = ({ screenshots, title }: { screenshots: string[]; title: string }) => (
  <div className="mb-10 sm:mb-12 lg:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Screenshots</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {screenshots.map((screenshot, index) => (
        <div
          key={index}
          className="aspect-9/16 bg-muted/20 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
        >
          <img
            src={screenshot}
            alt={`${title} screenshot ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
              target.parentElement!.innerHTML = `<span class="text-muted text-xs">Screenshot ${index + 1}</span>`;
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

const ProjectPage = () => {
  const params = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#151312] text-white flex overflow-y-auto">
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 py-6 sm:py-12">
        <FadeInSection fadeThreshold={0}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Fixed Left Card */}
            <ProfileCard />

            {/* Scrollable Right Content */}
            <div className="flex-1">
              <div className="max-w-3xl p-4 sm:p-6 lg:p-8 py-0">
                <BackButton />

                {/* Project Header */}
                <Title title={project.title} subtitle={project.type} />
                <p className="text-muted max-w-2xl leading-relaxed mb-6 sm:mb-8 text-base">
                  {project.description}
                </p>
                <ProjectLinks project={project} />
                <ProjectMetrics metrics={project.metrics} />

                {/* Overview */}
                <FadeInSection>
                  <OverviewSection project={project} />
                </FadeInSection>

                {/* Tech Stack */}
                <FadeInSection>
                  <TechStackSection techStack={project.techStack} />
                </FadeInSection>

                {/* Responsibilities */}
                <FadeInSection>
                  <ResponsibilitiesSection responsibilities={project.responsibilities} />
                </FadeInSection>

                {/* Challenges */}
                <FadeInSection>
                  <ChallengesSection challenges={project.challenges} />
                </FadeInSection>

                {/* Achievements */}
                <FadeInSection>
                  <AchievementsSection achievements={project.achievements} />
                </FadeInSection>

                {/* Screenshots */}
                <FadeInSection>
                  <ScreenshotsSection screenshots={project.screenshots} title={project.title} />
                </FadeInSection>

                {/* Contact & Footer Section */}
                <FadeInSection>
                  <Footer />
                </FadeInSection>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default ProjectPage;
