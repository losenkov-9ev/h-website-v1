import React from 'react';
import { useTheme } from './hooks/useTheme';
import { selectTheme } from './redux/theme/selectors';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MainLayout } from './layouts/MainLayout';
import { ELocation } from './@types/types';
import { Profile } from '../pages/Profile';
import { Reviews } from '../pages/Reviews';
import { useScrollbarWidth } from './hooks/useScrollbarWidth';
import { useAppDispatch } from './redux/store';
import { fetchAuthMe } from './redux/auth/thunks';

export const App: React.FC = () => {
  const { theme } = useSelector(selectTheme);
  const dispatch = useAppDispatch();

  useTheme(theme);
  useScrollbarWidth();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path={ELocation.home} element={<Home />} />
        <Route path={ELocation.profile} element={<Profile />} />
        <Route path={ELocation.reviews} element={<Reviews />} />
      </Route>
    </Routes>
  );
};
