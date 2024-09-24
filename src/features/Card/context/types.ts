import { ReactNode } from 'react';

export interface CardContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  cardData: CardProps | AbridgedCardProps;
}

export interface CardProviderProps {
  children: ReactNode;
  cardData: CardProps | AbridgedCardProps;
}

export interface CardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  date?: number;
  category: string;
  showcase: string;
  section: string;
}

export interface AbridgedCardProps {
  id: number;
  name: string;
  price: number;
  date?: number;
}

// Type Guard для проверки типа
export function isCardProps(cardData: CardProps | AbridgedCardProps): cardData is CardProps {
  return (
    (cardData as CardProps).showcase !== undefined &&
    (cardData as CardProps).category !== undefined &&
    (cardData as CardProps).section !== undefined
  );
}
