import React from 'react';
import { useEffect } from 'react';

export const withBodyClass = (Story, context) => {
  const { theme } = context.globals;

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return <Story />;
};
