import React, { useContext } from 'react';
import cls from './PaymentModal.module.scss';
import { ModalWrapper } from '..';
import { Input } from '../../../shared/Input';
import Select from '../../../shared/Select';
import { Button, EButtonView } from '../../../shared/Button';
import { OrderModal } from '../OrderModal';
import { CardContext } from '../../../features/Card/context/context';

export const PaymentModal: React.FC = () => {
  const [productCount, setProductCount] = React.useState<number>(1);
  const [isOrderModalOpened, setIsOrderModalOpened] = React.useState<boolean>(false);

  const { cardData, closeModal: onRequestClose, isModalOpen: isOpen } = useContext(CardContext);
  const { name, price } = cardData;

  const handleDecrementProductCount = () => {
    setProductCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrementProductCount = () => {
    setProductCount((prev) => (prev < 20 ? prev + 1 : 20));
  };

  const handleOpenModal = () => {
    onRequestClose();

    setTimeout(() => {
      setIsOrderModalOpened(true);
    }, 200);
  };

  const handleCloseModal = () => {
    setIsOrderModalOpened(false);
  };

  return (
    <>
      <ModalWrapper
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        content={
          <div className={cls.paymentModal}>
            <div className={cls.paymentModal_title}>Покупка товара</div>
            <div className={cls.paymentModal_box}>
              <div className={cls.paymentModal_count}>
                <span className={cls.paymentModal_countName}>{name || ''}</span>
                <div className={cls.paymentModal_counter}>
                  <span
                    className={cls.paymentModal_counterItem}
                    onClick={handleDecrementProductCount}>
                    -
                  </span>
                  <input
                    type="number"
                    className={cls.paymentModal_counterField}
                    value={productCount}
                    disabled={true}
                  />
                  <span
                    className={cls.paymentModal_counterItem}
                    onClick={handleIncrementProductCount}>
                    +
                  </span>
                </div>
              </div>
              <Input placeholder="Промо-код" className={cls.paymentModal_input} />
              <Select fullWidth={true} placeholder="Валюта">
                <Select.Option value="usdt">USDT</Select.Option>
                <Select.Option value="btc">BTC</Select.Option>
                <Select.Option value="eth">ETH</Select.Option>
              </Select>
            </div>
            <div className={cls.paymentModal_footer}>
              <Button fullWidth={true} onClick={handleOpenModal}>
                Оплатить {price * productCount} ₽
              </Button>
              <Button
                view={EButtonView.outlined}
                onClick={onRequestClose}
                className={cls.paymentModal_clos}>
                Отмена
              </Button>
            </div>
          </div>
        }
      />
      <OrderModal
        orderID={9681}
        count={productCount}
        wallet="2200 7001 5096 8534"
        isOpen={isOrderModalOpened}
        onRequestClose={handleCloseModal}
      />
    </>
  );
};
