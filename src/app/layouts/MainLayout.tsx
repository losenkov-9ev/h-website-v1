import React from 'react';

import { Header } from '../../features/Header';
import { Footer } from '../../features/Footer';

import { Outlet } from 'react-router-dom';
import { Chat } from '../../features/Chat';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/auth/selectors';

export const MainLayout: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {isAuth && <Chat />}
    </div>
  );
};
