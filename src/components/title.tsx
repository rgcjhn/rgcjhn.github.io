import React, { memo } from 'react';

const TitleRenderer = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <React.Fragment>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white">
      {title}
    </h1>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-subtle">
      {subtitle}
    </h1>
  </React.Fragment>
);

export default memo(TitleRenderer);
