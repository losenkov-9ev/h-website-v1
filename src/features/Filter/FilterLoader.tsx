import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/redux/theme/selectors';
import { loaderColors } from '../../app/constants';

export const FilterLoader: React.FC = () => {
  const { theme } = useSelector(selectTheme);

  return (
    <ContentLoader
      speed={2}
      width={430}
      height={36} // Высота для каждого селекта
      viewBox="0 0 430 36" // Размер контейнера
      backgroundColor={loaderColors[theme].backgroundColor}
      foregroundColor={loaderColors[theme].foregroundColor}>
      {/* Первый селект (минимум 120px шириной) */}
      <rect x="10" y="0" rx="8" ry="8" width="120" height="36" />
      {/* Второй селект (слегка больше) */}
      <rect x="146" y="0" rx="8" ry="8" width="160" height="36" />
      {/* Третий селект (самый широкий) */}
      <rect x="322" y="0" rx="8" ry="8" width="100" height="36" />
    </ContentLoader>
  );
};
