import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { loaderColors } from '../../app/constants';
import { selectTheme } from '../../app/redux/theme/selectors';

import cls from './ReviewCard.module.scss';
import clsx from 'clsx';

export const ReviewCardLoader: React.FC = () => {
  const { theme } = useSelector(selectTheme);

  return (
    <ContentLoader
      speed={2}
      className={clsx(cls.reviewCard, cls.reviewCard_loading)}
      width="100%" // Ширина адаптируется к ширине контейнера
      height={220} // Общая высота компонента
      viewBox="0 0 auto 220"
      backgroundColor={loaderColors[theme].backgroundColor}
      foregroundColor={loaderColors[theme].foregroundColor}>
      {/* Заголовок */}
      <rect x="10" y="15" rx="4" ry="4" width="50%" height="25" />

      {/* Цена */}
      <rect x="80%" y="15" rx="4" ry="4" width="20%" height="25" />

      {/* Рейтинг */}
      <rect x="10" y="60" rx="4" ry="4" width="120" height="20" />

      {/* Текст отзыва */}
      <rect x="10" y="115" rx="4" ry="4" width="90%" height="15" />
      <rect x="10" y="135" rx="4" ry="4" width="70%" height="15" />
      <rect x="10" y="155" rx="4" ry="4" width="50%" height="15" />
      <rect x="10" y="175" rx="4" ry="4" width="90%" height="15" />
    </ContentLoader>
  );
};
