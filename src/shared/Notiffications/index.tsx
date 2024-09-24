import React from 'react';
import cls from './Notiffications.module.scss';
import clsx from 'clsx';

import { ELocation, Mods } from '../../app/@types/types';
import { Button, EButtonView } from '../Button';

import Icon from '../Icon';
import { NotifficationItem } from './NotifficationItem';
import { useLocation } from 'react-router-dom';

export const Notiffications: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const notifficationsRef = React.useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const mods: Mods = {
    [cls.notiffications_visible]: isVisible,
    [cls.switchTheme]: location.pathname !== ELocation.home,
  };

  const handleButtonClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (notifficationsRef.current && !notifficationsRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    isVisible
      ? document.addEventListener('mousedown', handleClickOutside)
      : document.removeEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isVisible]);

  return (
    <div ref={notifficationsRef} className={cls.notiffications_wrapper}>
      <Button
        themeReverse={location.pathname === ELocation.home}
        view={EButtonView.square}
        onClick={handleButtonClick}>
        <Icon.Notiffication />
      </Button>
      <div className={clsx(cls.notiffications, mods)}>
        <div className={cls.notiffications_content}>
          {new Array(6).fill(null).map((_, index) => (
            <NotifficationItem
              key={index}
              title="Уведомление"
              text="Текст уведомления с максимальной шириной в 240px"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
