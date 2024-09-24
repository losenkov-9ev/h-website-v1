import { createContext } from 'react';
import { CardContextProps } from './types';

const defaultCardData: CardContextProps['cardData'] = {
  id: 0,
  name: '',
  price: 0,
  showcase: '',
  category: '',
  section: '',
  image: '',
};

export const CardContext = createContext<CardContextProps>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  cardData: defaultCardData,
});
