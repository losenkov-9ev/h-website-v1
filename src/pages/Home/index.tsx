import React from 'react';
import { Banner } from '../../shared/Banner';
import { Products } from '../../widgets/Products';
import { Top } from '../../widgets/Top';
import { Reviews } from '../../widgets/Reviews';

export const Home: React.FC = () => {
  return (
    <>
      <Top />
      <Banner />
      <Products />
      <Reviews title="Отзывы" type="masonry" />
    </>
  );
};
