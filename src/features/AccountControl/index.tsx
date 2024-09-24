import React, { useReducer, useState, useCallback } from 'react';

import cls from './AccountControl.module.scss';
import Select from '../../shared/Select';
import clsx from 'clsx';

import { ConfirmModal } from '../../widgets/Modals/ConfirmModal';
import { Button } from '../../shared/Button';
import { Input } from '../../shared/Input';

import { AccountControlProps, AccountControlType } from './types/types';
import { setPaymentCurrency } from './state/actions';
import { initialState } from './state/initialState';
import { handleChange } from './types/handlers';
import { Mods } from '../../app/@types/types';
import { reducer } from './state/reducer';
import { content } from './content';

export const AccountControl: React.FC<AccountControlProps> = ({ type, switchTheme }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const canOpenModal = useCallback((): boolean => {
    if (type === AccountControlType.Balance) {
      return state.payment.value > 0 && state.payment.currency !== '';
    }
    return state.password.oldPassword !== '' && state.password.newPassword !== '';
  }, [state.payment, state.password, type]);

  const handleOpenModal = useCallback(() => {
    if (canOpenModal()) {
      setIsConfirmModalOpen(true);
    }
  }, [canOpenModal]);

  const handleSelectChange = useCallback(
    (currency: string | React.ReactNode) => {
      dispatch(setPaymentCurrency(currency as string));
    },
    [dispatch],
  );

  const handleCloseModal = useCallback(() => {
    setIsConfirmModalOpen(false);
  }, []);

  const mods: Mods = {
    [cls.switchTheme]: switchTheme,
  };

  const renderInputs = () => {
    if (type === AccountControlType.Password) {
      return (
        <>
          <Input
            onChange={(e) => handleChange(e, state, dispatch, type, 'oldPassword')}
            className={cls.accountControl_input}
            placeholder="Старый пароль"
            isPassword
            themeReverse={switchTheme}
          />
          <Input
            onChange={(e) => handleChange(e, state, dispatch, type, 'newPassword')}
            className={cls.accountControl_input}
            placeholder="Новый пароль"
            isPassword
            themeReverse={switchTheme}
          />
        </>
      );
    }
    return (
      <>
        <Input
          onChange={(e) => handleChange(e, state, dispatch, type, 'value')}
          className={cls.accountControl_input}
          placeholder="Сумма"
          type="number"
          themeReverse={switchTheme}
        />
        <Select
          onChange={handleSelectChange}
          className={cls.accountControl_select}
          placeholder="Валюта"
          themeReverse={switchTheme}
          fullWidth>
          <Select.Option value="btc">BTC</Select.Option>
          <Select.Option value="usdt">USDT</Select.Option>
          <Select.Option value="eth">ETH</Select.Option>
        </Select>
      </>
    );
  };

  return (
    <>
      <div className={clsx(cls.accountControl, mods)}>
        <div className={cls.accountControl_title}>{content[type].title}</div>
        <div className={cls.accountControl_box}>{renderInputs()}</div>
        <Button onClick={handleOpenModal} themeReverse={switchTheme}>
          {content[type].button}
        </Button>
      </div>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onRequestClose={handleCloseModal}
        title={content[type].modalTitle(state.payment)}
        buttonContent={content[type].modalButton}
      />
    </>
  );
};
