import React from 'react';
import Modal from 'react-modal';

import { type IModalProps } from './types';
import cls from './Modal.module.scss';
import Icon from '../../shared/Icon';

export const ModalWrapper: React.FC<IModalProps> = ({ isOpen, onRequestClose, content }) => {
  React.useEffect(() => {
    isOpen
      ? document.body.classList.add('fixed-modal')
      : document.body.classList.remove('fixed-modal');

    return () => document.body.classList.remove('fixed-modal');
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={cls.ModalWrapper_content}
      overlayClassName={{
        base: cls.ModalWrapper_overlay,
        afterOpen: cls.ModalWrapper_overlay__after_open,
        beforeClose: cls.ModalWrapper_overlay__before_close,
      }}
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick>
      <button className={cls.ModalWrapper_close} onClick={onRequestClose}>
        <Icon.Close />
      </button>
      <div className={cls.ModalWrapper_box}>{content}</div>
    </Modal>
  );
};
