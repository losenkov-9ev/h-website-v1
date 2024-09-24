type ArrayItem = { type: string; value: string };

/**
 * Находит тип по значению.
 * @param array - Массив объектов для поиска.
 * @param value - Значение, по которому ищется тип.
 * @returns Тип по значению или `null`, если не найдено.
 */
export function findTypeByValue(array: ArrayItem[], value: string): string | null {
  const foundItem = array.find((item) => item.value === value);
  return foundItem ? foundItem.type : null;
}
