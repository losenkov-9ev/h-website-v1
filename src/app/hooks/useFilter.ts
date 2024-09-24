import { useSelector } from 'react-redux';
import {
  selectFilterCategory,
  selectFilterName,
  selectFilterSection,
  selectFilterShowcase,
} from '../redux/filters/selectors';

export const useFilter = () => {
  const showcase = useSelector(selectFilterShowcase);
  const category = useSelector(selectFilterCategory);
  const section = useSelector(selectFilterSection);
  const name = useSelector(selectFilterName);

  return { showcase, category, section, name };
};
