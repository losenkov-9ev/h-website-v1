import React, { useState } from 'react';
import cls from './Checkbox.module.scss';
import { Mods } from '../../app/@types/types';
import clsx from 'clsx';
import Icon from '../Icon';

export interface CheckboxProps {
  label?: string;
  disabled?: boolean;
  initialChecked?: boolean;
  onChange?: (checkboxProps: Omit<CheckboxProps, 'initialChecked'>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { label, disabled, initialChecked = false, onChange } = props;
  const [checked, setChecked] = useState(initialChecked);

  const handleClick = () => {
    if (!disabled) {
      const newChecked = !checked;
      setChecked(newChecked);

      if (onChange) {
        onChange(props);
      }
    }
  };

  const mods: Mods = {
    [cls.checkbox_checked]: checked,
    [cls.checkbox_disabled]: disabled,
  };

  return (
    <div className={clsx(cls.checkbox, mods)} onClick={handleClick}>
      <div className={cls.checkbox_inner}>
        {checked && (
          <div className={cls.checkmark}>
            <Icon.Checkmark />
          </div>
        )}
      </div>
      {label && <span className={cls.label}>{label}</span>}
    </div>
  );
};
