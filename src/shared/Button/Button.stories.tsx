import { Button } from './index';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Кнопка является основным элементом управления, который позволяет пользователям выполнять действия.',
      },
    },
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    className: '',
    fullWidth: true,
  },
  parameters: {
    docs: {
      storyDescription:
        'Стандартная кнопка с текстом. Используется для выполнения основных действий.',
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    docs: {
      storyDescription:
        'Кнопка, которая занимает всю ширину контейнера. Полезно для акцентирования действия.',
    },
  },
};

export const SmallButton: Story = {
  args: {
    children: 'Small Button',
    className: 'small', // Убедитесь, что стиль 'small' определен в ваших стилях
    fullWidth: false,
  },
  parameters: {
    docs: {
      storyDescription:
        'Маленькая кнопка, которая может использоваться для второстепенных действий.',
    },
  },
};

export const CustomClassName: Story = {
  args: {
    children: 'Custom Class Button',
    className: 'custom-class', // Убедитесь, что стиль 'custom-class' определен в ваших стилях
    fullWidth: false,
  },
  parameters: {
    docs: {
      storyDescription: 'Кнопка с кастомным классом, что позволяет применять индивидуальные стили.',
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    className: '',
    fullWidth: true,
    disabled: true,
  },
  parameters: {
    docs: {
      storyDescription:
        'Кнопка, которая отключена и не может быть нажата. Полезно для предотвращения действий в определенных состояниях.',
    },
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <span style={{ display: 'inline-block', marginRight: '8px' }}>
          {/* Встроенная иконка загрузки */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 1v6h6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
        Loading...
      </>
    ),
    className: '',
    fullWidth: true,
    disabled: true, // Кнопка в состоянии загрузки обычно отключена
  },
  parameters: {
    docs: {
      storyDescription:
        'Кнопка в состоянии загрузки с иконкой. Обычно отключена во время загрузки.',
    },
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span style={{ display: 'inline-block', marginRight: '8px' }}>
          {/* Встроенная иконка */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <rect width="16" height="16" fill="currentColor" />
          </svg>
        </span>
        Button with Icon
      </>
    ),
    className: '',
    fullWidth: false,
  },
  parameters: {
    docs: {
      storyDescription: 'Кнопка с иконкой, что позволяет визуально подчеркнуть действие.',
    },
  },
};

export const MultipleStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button>
        <span style={{ display: 'inline-block', marginRight: '8px' }}>
          {/* Встроенная иконка загрузки */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 1v6h6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
        Loading...
      </Button>
      <Button fullWidth={false}>
        <span style={{ display: 'inline-block', marginRight: '8px' }}>
          {/* Встроенная иконка */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <rect width="16" height="16" fill="currentColor" />
          </svg>
        </span>
        Button with Icon
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      storyDescription:
        'Демонстрация различных состояний кнопки в одном компоненте. Позволяет увидеть, как кнопки выглядят вместе.',
    },
  },
};
