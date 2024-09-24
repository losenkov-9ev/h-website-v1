import React from 'react';
import ContentLoader from 'react-content-loader';
import { loaderColors } from '../../app/constants';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/redux/theme/selectors';
import cls from './Card.module.scss';
import clsx from 'clsx';

export const InlineCardLoader: React.FC = () => {
  const { theme } = useSelector(selectTheme);

  return (
    <ContentLoader
      className={clsx(cls.card, cls.card_inline, cls.card_loading)}
      speed={2}
      height={90} // Высота карточки
      viewBox="0 0 auto 90" // Пропорции viewBox для корректного отображения
      backgroundColor={loaderColors[theme].backgroundColor}
      foregroundColor={loaderColors[theme].foregroundColor}>
      {/* Текст заголовка товара */}
      <rect x="0" y="18" rx="4" ry="4" width="400" height="25" />

      {/* Цена */}
      <rect x="1050" y="13" rx="4" ry="4" width="100" height="18" />

      {/* Кнопка */}
      <rect x="1170" y="10" rx="10" ry="10" width="90" height="35" />
    </ContentLoader>
  );
};
