import React from 'react';
import cls from './AsideItem.module.scss';
import { Checkbox, CheckboxProps } from '../../../../shared/Checkbox';
import { Mods } from '../../../../app/@types/types';
import clsx from 'clsx';
import { AsideSearch } from '../AsideSearch';
import { debounce } from '../../../../app/utils/debounce';
import { useAppDispatch } from '../../../../app/redux/store';
import { setFilter } from '../../../../app/redux/filters/slice';

export interface AsideItemProps {
  type: 'showcase' | 'section' | 'category' | 'name';
  title: string;
  withSearch: boolean;
  values: string[];
  placeholder?: string;
}

export const AsideItem: React.FC<AsideItemProps> = ({
  type,
  title,
  withSearch,
  values,
  placeholder,
}) => {
  const [filteredItems, setFilteredItems] = React.useState<string[]>(values);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const handleFilterBy = (e: CheckboxProps) =>
    dispatch(
      setFilter({
        type,
        filter: e.label || '',
      }),
    );

  const handleSearchChange = React.useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);

      const newFilteredItems = values.filter((value) => value.toLowerCase().includes(query));
      setFilteredItems(newFilteredItems);
    }, 300),
    [values],
  );

  const mods: Mods = {
    [cls.asideItem_withSearch]: withSearch,
  };

  return (
    <div className={clsx(cls.asideItem, mods)}>
      <div className={cls.asideItem_title}>{title}</div>
      <div className={cls.asideItem_box}>
        {withSearch && <AsideSearch onChange={handleSearchChange} />}
        <div className={cls.asideItem_boxInner}>
          {filteredItems && filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Checkbox onChange={handleFilterBy} label={item} key={`${values}_${index}`} />
            ))
          ) : (
            <div className={cls.asideItem_noResults}>
              {placeholder ? (
                placeholder
              ) : (
                <>
                  В «{title}» не найдено: <br /> <i>{searchQuery}</i>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
