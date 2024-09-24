import React from 'react';
import cls from './AsideSearch.module.scss';
import Icon from '../../../../shared/Icon';

export interface AsideSearchProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AsideSearch: React.FC<AsideSearchProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = React.useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);

    onChange && onChange(e);
  };

  return (
    <div className={cls.asideSearch_wrapper}>
      <div className={cls.asideSearch}>
        <input
          type="text"
          className={cls.asideSearch_field}
          onChange={onInputChange}
          value={inputValue}
          placeholder="Поиск"
        />
        <button className={cls.asideSearch_button}>
          <Icon.Search />
        </button>
      </div>
    </div>
  );
};
