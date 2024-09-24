import React from 'react';
import cls from './ReviewCard.module.scss';
import { Rate } from '../../shared/Rate';
import { ReadMore } from '../../shared/ReadMore';
import { ReviewModal } from '../../widgets/Modals/ReviewModal';
import { useReviewsContext } from '../../widgets/Reviews/context/context';

export interface ReviewCardProps {
  title: string;
  price: number;
  rate: number;
  content: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = (props) => {
  const { type } = useReviewsContext();

  const { title, price, rate, content } = props;

  const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);

  const onCloseModal = () => {
    setIsModalOpened(false);
  };
  const onOpenModal = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <div className={cls.reviewCard}>
        <div className={cls.reviewCard_head}>
          <div className={cls.reviewCard_title}>{title}</div>
          <div className={cls.reviewCard_price}>({price} ₽)</div>
        </div>
        <Rate value={rate} gap={8} />
        <div className={cls.reviewCard_content}>
          {type === 'default' ? <ReadMore text={content} onReadMore={onOpenModal} /> : content}
        </div>
      </div>
      {type === 'default' && (
        <ReviewModal
          {...props}
          text={content}
          isOpen={isModalOpened}
          onRequestClose={onCloseModal}
        />
      )}
    </>
  );
};
