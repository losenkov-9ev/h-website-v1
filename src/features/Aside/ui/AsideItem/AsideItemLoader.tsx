import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../../app/redux/theme/selectors';
import { loaderColors } from '../../../../app/constants';

export const AsideItemLoader: React.FC = () => {
  const { theme } = useSelector(selectTheme);

  const checkboxWidth = 24;
  const textWidth = '60%'; // Ширина текста
  const containerWidth = 300; // Ширина контейнера

  // Вычисляем отступ для центрирования
  const textOffset = (containerWidth * parseInt(textWidth)) / 100 + checkboxWidth;
  const centerOffset = (containerWidth - textOffset) / 2;

  return (
    <ContentLoader
      speed={2}
      width="100%" // Ширина адаптируется к ширине контейнера
      height={220} // Фиксированная высота
      viewBox="0 0 300 220"
      backgroundColor={loaderColors[theme].backgroundColor}
      foregroundColor={loaderColors[theme].foregroundColor}>
      {/* Заголовок */}
      <rect x="10" y="20" rx="4" ry="4" width="70%" height="20" />
      {/* Чекбоксы с текстом */}
      <rect
        x={centerOffset - 8}
        y="60"
        rx="4"
        ry="4"
        width={checkboxWidth}
        height={checkboxWidth}
      />{' '}
      {/* Чекбокс */}
      <rect
        x={centerOffset + checkboxWidth + 8}
        y="62"
        rx="4"
        ry="4"
        width="60%"
        height="20"
      />{' '}
      {/* Текст справа от чекбокса */}
      <rect
        x={centerOffset - 8}
        y="100"
        rx="4"
        ry="4"
        width={checkboxWidth}
        height={checkboxWidth}
      />{' '}
      {/* Чекбокс */}
      <rect
        x={centerOffset + checkboxWidth + 8}
        y="102"
        rx="4"
        ry="4"
        width="60%"
        height="20"
      />{' '}
      {/* Текст справа от чекбокса */}
      <rect
        x={centerOffset - 8}
        y="140"
        rx="4"
        ry="4"
        width={checkboxWidth}
        height={checkboxWidth}
      />{' '}
      {/* Чекбокс */}
      <rect
        x={centerOffset + checkboxWidth + 8}
        y="142"
        rx="4"
        ry="4"
        width="60%"
        height="20"
      />{' '}
      {/* Текст справа от чекбокса */}
      <rect
        x={centerOffset - 8}
        y="180"
        rx="4"
        ry="4"
        width={checkboxWidth}
        height={checkboxWidth}
      />{' '}
      {/* Чекбокс */}
      <rect
        x={centerOffset + checkboxWidth + 8}
        y="182"
        rx="4"
        ry="4"
        width="60%"
        height="20"
      />{' '}
      {/* Текст справа от чекбокса */}
    </ContentLoader>
  );
};
