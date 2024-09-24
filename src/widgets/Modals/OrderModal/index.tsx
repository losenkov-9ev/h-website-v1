import React, { useContext, useEffect } from 'react';
import { ELoadingStatus, ELocation, Mods } from '../../../app/@types/types';
import clsx from 'clsx';
import cls from './OrderModal.module.scss';
import { ModalWrapper } from '..';
import { useCopyToClipboard } from '../../../app/hooks/useCopyToClipboard';
import { TDefaultProps } from '../types';
import Icon from '../../../shared/Icon';
import { CardContext } from '../../../features/Card/context/context';
import { formatPaymentDate } from '../../../app/utils/formatPaymentDate';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/redux/store';
import { postOrder } from '../../../app/redux/orders/thunks';
import { useSelector } from 'react-redux';
import { selectOrderPaymentStatus } from '../../../app/redux/orders/selectors';
import { Button, EButtonView } from '../../../shared/Button';

export type OrderModalProps = TDefaultProps & {
  orderID: number;
  wallet: string;
  count: number;
};

const orderStatusText = (orderStatus: ELoadingStatus) => {
  switch (orderStatus) {
    case ELoadingStatus.fulfilled:
      return 'Оплачено';
    case ELoadingStatus.loading:
      return 'Оплата';
    case ELoadingStatus.rejected:
      return 'Отказано';
    default:
      return 'Отказано';
  }
};

export const OrderModal: React.FC<OrderModalProps> = (props) => {
  const dispatch = useAppDispatch();
  const orderStaus = useSelector(selectOrderPaymentStatus);

  const { orderID, count, wallet, onRequestClose, isOpen } = props;
  const { isCopied, isButtonDisabled, copyToClipboard } = useCopyToClipboard();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    cardData: { id: productId, name, price },
  } = useContext(CardContext);

  const mods: Mods = {
    [cls.orderPayed]: orderStaus === ELoadingStatus.fulfilled,
    [cls.orderWarning]: orderStaus === ELoadingStatus.loading,
    [cls.orderFail]: orderStaus === ELoadingStatus.rejected,
  };

  const handleCopyClick = () => {
    copyToClipboard(wallet);
  };

  const handleFooterButtonClick = () => {
    pathname !== ELocation.home && navigate(ELocation.home);
    onRequestClose();
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(
          postOrder({
            productId,
            count,
            date: Date.now(),
          }),
        );
      }, 100);
    }
  }, [isOpen]);

  return (
    <ModalWrapper
      {...props}
      content={
        <div className={cls.orderModal}>
          <div className={cls.orderModal_title}>Заказ #{orderID}</div>
          <div className={clsx(cls.orderModal_status, mods)}>{orderStatusText(orderStaus)}</div>
          <div className={cls.orderModal_details}>
            <div className={cls.orderModal_detailsTitle}>Реквизиты для перевода:</div>
            <div className={cls.orderModal_detailsField}>
              <input
                type="text"
                value={wallet}
                disabled={true}
                className={cls.orderModal_detailsInput}
              />
              <button disabled={isButtonDisabled} onClick={handleCopyClick}>
                {isCopied ? <Icon.Checked /> : <Icon.Copy />}
              </button>
            </div>
            <div className={cls.orderModal_value}>
              <span>К оплате</span>
              <span></span>
              <span>{price * count} ₽</span>
            </div>
          </div>
          <div className={cls.orderModal_box}>
            <div className={cls.orderModal_value}>
              <span>Номер заказа</span>
              <span></span>
              <span>9681</span>
            </div>
            <div className={cls.orderModal_value}>
              <span>TxID</span>
              <span></span>
              <span>a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d</span>
            </div>
            <div className={cls.orderModal_value}>
              <span>Наименование</span>
              <span></span>
              <span>{name}</span>
            </div>
            <div className={cls.orderModal_value}>
              <span>Количество</span>
              <span></span>
              <span>{count} шт</span>
            </div>
            <div className={cls.orderModal_value}>
              <span>Дата</span>
              <span></span>
              <span>{formatPaymentDate(new Date())}</span>
            </div>
          </div>
          <Button
            onClick={handleFooterButtonClick}
            className={cls.orderModal_button}
            view={EButtonView.outlined}>
            {orderStaus === ELoadingStatus.fulfilled ? 'На главную' : 'Отменить покупку'}
          </Button>
          <div className={cls.orderModal_rip}>
            <svg
              width="416"
              height="22"
              viewBox="0 0 416 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.8758 21.1251C19.9402 22.2916 17.878 22.2916 16.9424 21.1251L0 2.38006e-06L37.8182 0L20.8758 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M58.6939 21.1251C57.7584 22.2916 55.6962 22.2916 54.7606 21.1251L37.8182 0H75.6364L58.6939 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M96.5121 21.1251C95.5765 22.2916 93.5144 22.2916 92.5788 21.1251L75.6364 0H113.455L96.5121 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M134.33 21.1251C133.395 22.2916 131.333 22.2916 130.397 21.1251L113.455 0H151.273L134.33 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M172.148 21.1251C171.213 22.2916 169.151 22.2916 168.215 21.1251L151.273 0H189.091L172.148 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M209.967 21.1251C209.031 22.2916 206.969 22.2916 206.033 21.1251L189.091 0H226.909L209.967 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M247.785 21.1251C246.849 22.2916 244.787 22.2916 243.852 21.1251L226.909 0H264.727L247.785 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M285.603 21.1251C284.667 22.2916 282.605 22.2916 281.67 21.1251L264.727 0H302.545L285.603 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M323.421 21.1251C322.486 22.2916 320.423 22.2916 319.488 21.1251L302.545 0H340.364L323.421 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M361.239 21.1251C360.304 22.2916 358.242 22.2916 357.306 21.1251L340.364 0H378.182L361.239 21.1251Z"
                fill="#F5F5F5"
              />
              <path
                d="M399.058 21.1251C398.122 22.2916 396.06 22.2916 395.124 21.1251L378.182 0H416L399.058 21.1251Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </div>
      }
    />
  );
};
