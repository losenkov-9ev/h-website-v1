import { ETheme } from './redux/theme/types';

export const DARK_THEME_CLASSNAME = 'dark-theme';

export const DEFAULT_SCREEN_WIDTH = {
  XL: 1400,
  L: 968,
  M: 768,
  S: 620,
  XS: 360,
};

export const loaderColors = {
  [ETheme.dark]: {
    backgroundColor: '#2d2d2d',
    foregroundColor: '#4a4a4a',
  },
  [ETheme.light]: {
    backgroundColor: '#f0f0f0',
    foregroundColor: '#e0e0e0',
  },
};
