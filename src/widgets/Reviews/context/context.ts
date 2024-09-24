import { createContext, useContext } from 'react';
import { ReviewsContextProps } from './types';

export const ReviewsContext = createContext<ReviewsContextProps | undefined>(undefined);

// Хук для использования контекста
export const useReviewsContext = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error('useReviewsContext должен использоваться внутри ReviewsProvider');
  }
  return context;
};
