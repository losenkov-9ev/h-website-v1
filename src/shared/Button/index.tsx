import React from 'react';
import cls from './Button.module.scss';

import clsx from 'clsx';
import { Mods } from '../../app/@types/types';

export enum EButtonView {
  empty = 'empty',
  outlined = 'outlined',
  square = 'square',
  default = 'default',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  isNotCetered?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  view?: EButtonView;
  themeReverse?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className = '',
    fullWidth = true,
    isNotCetered = false,
    onClick,
    type = 'button',
    view = EButtonView.default,
    themeReverse = false,
  } = props;

  const mods: Mods = {
    [cls.button_fullWidth]: fullWidth,
    [cls.button_notCetered]: isNotCetered,
    [cls.button_themeReverse]: themeReverse,
    [cls[`button_view_${view}`]]: true,
  };

  return (
    <button type={type} onClick={onClick} className={clsx(cls.button, mods, [className])}>
      {children}
    </button>
  );
};
