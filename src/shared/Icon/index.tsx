import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const icons: Record<string, React.FC<IconProps>> = {};

// Импорт всех SVG файлов из папки ui
const modules = import.meta.glob('./ui/*.svg', { eager: true });

for (const path in modules) {
  const componentName = path
    .replace('./ui/', '')
    .replace('.svg', '')
    .replace(/^\w/, (c) => c.toUpperCase());

  // Используем импортированный модуль как React компонент

  const Component = modules[path].default as React.FC<IconProps>;

  if (Component) {
    icons[componentName] = Component;
  } else {
    console.warn(`Component for ${componentName} not found`);
  }
}

const Icon: Record<string, React.FC<IconProps>> = { ...icons };

export default Icon;
