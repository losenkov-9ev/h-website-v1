import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { subscribeToWidth, unsubscribeFromWidth } from '../redux/window/slice';
import { selectWindowWidth } from '../redux/window/selectors';

export const useWindowWidth = (targetWidth: number): boolean => {
  const dispatch = useDispatch();

  const currentWidth = useSelector(selectWindowWidth);
  const isTargetWidthReached = currentWidth <= targetWidth;

  useEffect(() => {
    dispatch(subscribeToWidth(targetWidth));

    return () => {
      dispatch(unsubscribeFromWidth(targetWidth));
    };
  }, [dispatch, targetWidth]);

  return isTargetWidthReached;
};
