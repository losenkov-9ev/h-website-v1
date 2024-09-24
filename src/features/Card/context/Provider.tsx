import { useState } from 'react';
import { CardProviderProps } from './types';
import { CardContext } from './context';

export const CardProvider: React.FC<CardProviderProps> = ({ children, cardData }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CardContext.Provider value={{ isModalOpen, openModal, closeModal, cardData }}>
      {children}
    </CardContext.Provider>
  );
};
