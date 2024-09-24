import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ETheme, IThemeState } from './types';

const getPreferredTheme = (): ETheme => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return ETheme.dark;
  }

  return ETheme.light;
};

const getInitialTheme = (): ETheme => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? (savedTheme as ETheme) : getPreferredTheme();
};

const initialState: IThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<ETheme>): void {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload); // Сохраняем тему в localStorage
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
