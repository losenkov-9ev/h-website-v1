import { store } from '../redux/store';
import { setWindowWidth } from '../redux/window/slice';
import { debounce } from './debounce';

const debouncedDispatch = debounce((width: number) => {
  store.dispatch(setWindowWidth(width));
}, 100);

const resizeObserver = new ResizeObserver(() => {
  const width = window.innerWidth;
  debouncedDispatch(width);
});

export const observeWindowResize = () => {
  resizeObserver.observe(document.body);
};
