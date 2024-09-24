import React from 'react';
import { AccontSettings } from '../../widgets/AccountSettings';
import { AccontPurchaseHistory } from '../../widgets/AccontPurchaseHistory';
import { AccountDepositHistory } from '../../widgets/AccountDepositHistory';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../app/redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { ELocation } from '../../app/@types/types';

export const Profile: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? (
    <>
      <AccontSettings />
      <AccountDepositHistory />
      <AccontPurchaseHistory />
    </>
  ) : (
    <Navigate to={ELocation.home} />
  );
};
