import React from 'react';
import cls from './EmptyBlock.module.scss';

interface EmptyBlockProps {
  value: string;
}

export const EmptyBlock: React.FC<EmptyBlockProps> = ({ value }) => {
  return <div className={cls.emptyBlock}>{value}</div>;
};
