import { ReviewsContext } from './context';
import { ReviewsProviderProps } from './types';

export const ReviewsProvider: React.FC<ReviewsProviderProps> = ({ title, type, children }) => {
  return <ReviewsContext.Provider value={{ title, type }}>{children}</ReviewsContext.Provider>;
};
