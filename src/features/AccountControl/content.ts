import { AccountControlType, IPayment } from './types/types';

export const content = {
  [AccountControlType.Balance]: {
    title: 'Пополнение баланса',
    button: 'Пополнить',
    modalTitle: (paymentInfo: IPayment) =>
      `Вы собираетесь пополнить баланс на ${paymentInfo.value} ${paymentInfo.currency}`,
    modalButton: 'Пополнить',
  },
  [AccountControlType.Password]: {
    title: 'Изменение пароля',
    button: 'Сменить пароль',
    modalTitle: () => 'Вы действительно хотите сменить пароль?',
    modalButton: 'Сменить',
  },
};
