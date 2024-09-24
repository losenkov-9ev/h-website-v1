import { ThemeToggler } from './index';
import { ETheme } from '../../app/redux/theme/types';
import { StoryObj } from '@storybook/react';

export default {
  title: 'shared/ThemeToggler',
  component: ThemeToggler,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ThemeToggler>;

export const DefaultButton: Story = {
  parameters: {
    theme: ETheme.light,
  },
};
