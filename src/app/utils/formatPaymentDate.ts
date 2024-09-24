export const formatPaymentDate = (dateInput: number | Date): string => {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  const padZero = (num: number) => num.toString().padStart(2, '0');

  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); // Месяцы начинаются с 0
  const year = date.getFullYear();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${day}.${month}.${year} | ${hours}:${minutes}`;
};
