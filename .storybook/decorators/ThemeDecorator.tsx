import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../../src/app/redux/theme/slice';
import { ETheme } from '../../src/app/redux/theme/types';
import { Provider } from 'react-redux';

const createMockStore = (theme: ETheme) => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
    preloadedState: {
      theme: {
        theme,
      },
    },
  });
};

export const withTheme = (theme: ETheme) => (Story) => {
  const store = createMockStore(theme);
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
