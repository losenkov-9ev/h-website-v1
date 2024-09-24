type DebounceFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

/**
 * Создаёт дебаунс для указанной функции.
 * @param func - Функция, которую нужно дебаунсить.
 * @param delay - Время задержки в миллисекундах.
 * @returns Дебаунсированная версия функции.
 */

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): DebounceFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
