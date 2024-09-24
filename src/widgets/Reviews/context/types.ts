export interface ReviewsContextProps {
  title: string;
  type: 'default' | 'masonry';
}

export type ReviewsProviderProps = ReviewsContextProps & {
  children: React.ReactNode;
};
