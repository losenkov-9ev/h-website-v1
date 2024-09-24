import { debounce } from './debounce';

/**
 * Устанавливает высоту документа в CSS-переменную --doc-height.
 * Добавляет обработчики событий, которые могут изменить высоту окна.
 * @returns Функция для удаления обработчиков событий.
 */
export function setDocumentHeight(): () => void {
  const updateDocumentHeight = () => {
    document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`);
  };

  const debouncedUpdateHeight = debounce(updateDocumentHeight, 150);
  debouncedUpdateHeight();

  const documentEventNames: Array<keyof DocumentEventMap> = ['fullscreenchange'];
  const windowEventNames: Array<keyof WindowEventMap> = ['resize', 'orientationchange'];

  const addEventListeners = () => {
    documentEventNames.forEach((event) => document.addEventListener(event, debouncedUpdateHeight));
    windowEventNames.forEach((event) => window.addEventListener(event, debouncedUpdateHeight));
  };

  const removeEventListeners = () => {
    documentEventNames.forEach((event) =>
      document.removeEventListener(event, debouncedUpdateHeight),
    );
    windowEventNames.forEach((event) => window.removeEventListener(event, debouncedUpdateHeight));
  };

  addEventListeners();

  return removeEventListeners;
}
