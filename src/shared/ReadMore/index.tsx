import React from 'react';
import cls from './ReadMore.module.scss';

interface ReadMoreProps {
  text: string;
  maxLength?: number;
  onReadMore?: (e: React.MouseEvent) => void;
}

export const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 165, onReadMore }) => {
  const shouldTruncate = text.length > maxLength;

  return (
    <p className={cls.readMore}>
      {shouldTruncate ? text.substring(0, maxLength) + '...' : text}{' '}
      {shouldTruncate && (
        <button className={cls.readMore_button} onClick={onReadMore}>
          Читать дальше
        </button>
      )}
    </p>
  );
};
