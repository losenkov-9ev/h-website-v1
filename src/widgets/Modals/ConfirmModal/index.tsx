import React from 'react';
import cls from './ConfirmModal.module.scss';
import { ModalWrapper } from '..';
import { Button, EButtonView } from '../../../shared/Button';
import { TDefaultProps } from '../types';

export type ConfirmModalProps = TDefaultProps & {
  title: string;
  buttonContent: string;
};

export const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
  const { title, buttonContent, onRequestClose } = props;

  return (
    <ModalWrapper
      {...props}
      content={
        <div className={cls.confirmModal}>
          <div className={cls.confirmModal_title}>{title}</div>
          <div className={cls.confirmModal_buttons}>
            <Button>{buttonContent}</Button>
            <Button onClick={onRequestClose} view={EButtonView.outlined}>
              Отмена
            </Button>
          </div>
        </div>
      }
    />
  );
};
