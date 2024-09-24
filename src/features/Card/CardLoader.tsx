import React from 'react';
import ContentLoader from 'react-content-loader';
import { loaderColors } from '../../app/constants';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/redux/theme/selectors';
import cls from './Card.module.scss';
import clsx from 'clsx';

export const CardLoader: React.FC = () => {
  const { theme } = useSelector(selectTheme);

  return (
    <ContentLoader
      className={clsx(cls.card, cls.card_loading)}
      speed={2}
      width="100%" // Ширина 100% от контейнера
      height={340} // Фиксированная высота
      viewBox="0 0 auto 340" // Устанавливаем viewBox, чтобы сохранить пропорции
      backgroundColor={loaderColors[theme].backgroundColor}
      foregroundColor={loaderColors[theme].foregroundColor}>
      {/* Заголовок */}
      <rect x="10" y="20" rx="4" ry="4" width="50%" height="10" />
      <rect x="10" y="40" rx="3" ry="3" width="66%" height="10" />

      {/* Изображение */}
      <rect x="10" y="70" rx="10" ry="10" width="93.3%" height="160" />

      {/* Цена */}
      <rect x="10" y="250" rx="3" ry="3" width="33.3%" height="20" />

      {/* Кнопка или дата */}
      <rect x="10" y="280" rx="5" ry="5" width="40%" height="30" />
    </ContentLoader>
  );
};
