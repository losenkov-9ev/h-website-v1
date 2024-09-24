import type { Preview } from '@storybook/react';
import { ETheme } from '../src/app/redux/theme/types';
import { withTheme } from './decorators/ThemeDecorator';
import '../src/app/styles/global.scss';
import { withBodyClass } from './decorators/BodyClassDecorator';

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: [
      { name: 'light', value: '#ffffff', default: true },
      { name: 'dark', value: '#141414' },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'], // Возможные темы
    },
  },
};

export const decorators = [
  withBodyClass,
  (Story) => {
    const initialTheme = ETheme.light;
    return withTheme(initialTheme)(Story);
  },
];
