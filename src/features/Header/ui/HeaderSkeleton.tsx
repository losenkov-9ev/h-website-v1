import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../app/redux/theme/selectors';
import { loaderColors } from '../../../app/constants';

export const HeaderSkeleton: React.FC = () => {
  const { theme } = useSelector(selectTheme);

  return (
    <ContentLoader
      speed={2}
      width={240}
      height={24}
      viewBox="0 0 240 24"
      backgroundColor={loaderColors[theme].backgroundColor}
      foregroundColor={loaderColors[theme].foregroundColor}>
      <rect x="0" y="0" rx="6" ry="6" width="112" height="24" />
      <rect x="128" y="0" rx="6" ry="6" width="112" height="24" />
    </ContentLoader>
  );
};
