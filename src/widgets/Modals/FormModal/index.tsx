import cls from './FormModal.module.scss';
import React, { useEffect, useState, useCallback, useMemo } from 'react';

import { ModalWrapper } from '..';
import { Input } from '../../../shared/Input';
import { Button, EButtonView } from '../../../shared/Button';
import { TDefaultProps } from '../types';

import { useAppDispatch } from '../../../app/redux/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { fetchAuthData, fetchAuthRegister } from '../../../app/redux/auth/thunks';
import { IAuthParams } from '../../../app/redux/auth/types';

export type FormModalProps = TDefaultProps & {
  type: EFormType;
};

export enum EFormType {
  SignIn = 'sign_in',
  SignUp = 'sign_up',
}

const content = {
  [EFormType.SignIn]: {
    title: 'Вход в аккаунт',
    submitButton: 'Войти',
    toggleButton: 'Создать аккаунт',
  },
  [EFormType.SignUp]: {
    title: 'Создание аккаунта',
    submitButton: 'Создать',
    toggleButton: 'Войти в аккаунт',
  },
};

interface IFormInputs {
  email: string;
  password: string;
}

export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onRequestClose,
  type: initialType,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<IFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const [type, setType] = useState<EFormType>(initialType);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      setType(initialType);
    }
  }, [isOpen, initialType]);

  const onSubmit: SubmitHandler<IFormInputs> = async (data: IAuthParams) => {
    try {
      const responce =
        type === EFormType.SignIn
          ? await dispatch(fetchAuthData(data))
          : await dispatch(fetchAuthRegister(data));

      if (responce.payload && responce.payload.token)
        window.localStorage.setItem('token', responce.payload.token);

      onRequestClose();
    } catch (error) {
      console.log(error);

      setError('email', { type: 'manual', message: 'Ошибка регистрации' });
      onRequestClose();
    }
  };

  const onToggleFormType = useCallback(() => {
    setType((prevType) => (prevType === EFormType.SignUp ? EFormType.SignIn : EFormType.SignUp));
  }, []);

  const formContent = useMemo(() => content[type], [type]);

  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      content={
        <form onSubmit={handleSubmit(onSubmit)} className={cls.formModal}>
          <div className={cls.formModal_title}>{formContent.title}</div>
          <div className={cls.formModal_box}>
            <Input
              placeholder="Логин"
              {...register('email', { required: 'Email обязателен' })}
              isError={Boolean(errors.email?.message)}
            />
            <Input
              placeholder="Пароль"
              type="password"
              isPassword={true}
              {...register('password', { required: 'Пароль обязателен' })}
              isError={Boolean(errors.password?.message)}
            />
          </div>
          <div className={cls.formModal_footer}>
            <Button type="submit" fullWidth={true} disabled={!isValid}>
              {formContent.submitButton}
            </Button>
            <Button onClick={onToggleFormType} view={EButtonView.outlined}>
              {formContent.toggleButton}
            </Button>
          </div>
        </form>
      }
    />
  );
};
