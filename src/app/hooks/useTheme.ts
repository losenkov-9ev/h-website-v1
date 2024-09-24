import { useEffect } from 'react';
import { ETheme } from '../redux/theme/types';
import { DARK_THEME_CLASSNAME } from '../constants';

export const useTheme = (theme: ETheme) => {
  useEffect(() => {
    document.body.classList.toggle(DARK_THEME_CLASSNAME, theme === ETheme.dark);

    return () => {
      document.body.classList.remove(DARK_THEME_CLASSNAME);
    };
  }, [theme]);
};
