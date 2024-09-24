import React from 'react';
import { Button } from '../Button';

interface LoadButtonProps {
  currentPage: number;
  totalPages: number;
  onClick: () => void;
}

export const LoadButton: React.FC<LoadButtonProps> = ({ currentPage, totalPages, onClick }) => {
  return (
    totalPages > 1 && (
      <div className="container">
        <Button fullWidth={false} onClick={onClick}>
          {currentPage < totalPages ? 'Показать еще' : 'Скрыть'}
        </Button>
      </div>
    )
  );
};
