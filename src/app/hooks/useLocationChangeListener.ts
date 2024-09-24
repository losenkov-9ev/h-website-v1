import { useEffect } from 'react';
import { type Location, useLocation } from 'react-router-dom';

type TCallback = (pathname: string) => void;

export const useLocationChangeListener = (cb?: TCallback): string => {
  const location: Location = useLocation();

  useEffect(() => {
    cb && cb(location.pathname);
  }, [location]);

  return location.pathname;
};
