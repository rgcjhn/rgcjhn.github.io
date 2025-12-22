import { Dp } from '@/assets';
import { SOCIAL_LINKS } from '@/constants';
import { memo, useEffect, useState } from 'react';

const ProfileCard: React.FC<{ fixedPositionThreshold?: number }> = ({
  fixedPositionThreshold = 160,
}) => {
  const [scrolledAfterHeader, setScrolledAfterHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledAfterHeader(window.scrollY > fixedPositionThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedPositionThreshold]);

  return (
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
};

export default memo(ProfileCard);
