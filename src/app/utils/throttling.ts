type ThrottleFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

/**
 * Создаёт троттлинг для указанной функции.
 * @param func - Функция, которую нужно троттлить.
 * @param limit - Время задержки в миллисекундах.
 * @returns Троттлированная версия функции.
 */

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ThrottleFunction<T> {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    const now = Date.now();

    if (!lastRan) {
      func.apply(context, args);
      lastRan = now;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        function () {
          if (now - lastRan >= limit) {
            func.apply(context, args);
            lastRan = now;
          }
        },
        limit - (now - lastRan),
      );
    }
  };
}
