import { Mods } from '../../app/@types/types';
import React, { ReactNode } from 'react';

import cls from './Select.module.scss';
import Icon from '../Icon';
import clsx from 'clsx';

export interface SelectProps {
  children: ReactNode;
  placeholder?: string | ReactNode;
  fullWidth?: boolean;
  withShadow?: boolean;
  onChange?: (el: string | ReactNode) => void;
  className?: string;
  themeReverse?: boolean;
}

export interface OptionProps {
  value: string;
  onSelect?: (value: string | ReactNode) => void;
  children: ReactNode;
}

const Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> } = ({
  children,
  placeholder = 'Drop Down',
  fullWidth = false,
  onChange,
  className,
  withShadow,
  themeReverse,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<string | ReactNode>('');
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  onChange && React.useEffect(() => onChange(selectedValue), [selectedValue]);

  const toggleSelect = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string | ReactNode) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
    [cls.withShadow]: withShadow,
    [cls.themeReverse]: themeReverse,
  };

  return (
    <div className={clsx(cls.select, mods, className)} ref={dropdownRef}>
      <div
        className={clsx(cls.select_field, { [cls.select_field_active]: isOpen })}
        onClick={toggleSelect}>
        {selectedValue || placeholder}
        <Icon.SelectToggler />
      </div>
      {isOpen && (
        <div className={cls.select_dropdown}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement<OptionProps>(child)) {
              return React.cloneElement(child, { onSelect: handleOptionClick });
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

Select.Option = React.memo(({ /* value, */ onSelect, children }: OptionProps) => {
  const handleClick = () => {
    onSelect && onSelect(children);
  };

  return (
    <div onClick={handleClick} className={cls.select_option}>
      {children}
    </div>
  );
});

export default Select;
