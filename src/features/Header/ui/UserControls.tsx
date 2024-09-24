import cls from '../Header.module.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/redux/auth/selectors';
import { useAppDispatch } from '../../../app/redux/store';
import { logout } from '../../../app/redux/auth/slice';
import { ELocation } from '../../../app/@types/types';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../../shared/Icon';
import { useWindowWidth } from '../../../app/hooks/useWindowWidth';
import { DEFAULT_SCREEN_WIDTH } from '../../../app/constants';
import { Button, EButtonView } from '../../../shared/Button';
import { selectTheme } from '../../../app/redux/theme/selectors';
import { ETheme } from '../../../app/redux/theme/types';
import { Notiffications } from '../../../shared/Notiffications';

export const UserControls: React.FC = () => {
  const data = useSelector(selectUser);
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { theme } = useSelector(selectTheme);

  const isMobileHeader = useWindowWidth(DEFAULT_SCREEN_WIDTH.L);
  const isVisibleName = !useWindowWidth(DEFAULT_SCREEN_WIDTH.XL);

  const handleLogout = () => {
    dispath(logout());
    window.localStorage.removeItem('token');
  };

  return !isMobileHeader ? (
    <div className={cls.header_controls}>
      <Button
        themeReverse={location.pathname === ELocation.home && theme === ETheme.light}
        fullWidth={false}
        view={EButtonView.empty}>
        {isVisibleName && 'Баланс: '} {data.balance ? data.balance : 0} ₽
      </Button>
      <Button
        themeReverse={location.pathname === ELocation.home}
        fullWidth={false}
        onClick={() => navigate(ELocation.profile)}>
        <Icon.SignIn />
        {isVisibleName && (data.email ? data.email : '...')}
      </Button>
      <Button
        themeReverse={location.pathname === ELocation.home}
        view={EButtonView.square}
        onClick={handleLogout}>
        <Icon.Logout />
      </Button>
      <Notiffications />
    </div>
  ) : (
    <>
      <Button onClick={handleLogout} className="link">
        <Icon.Logout />
      </Button>
      <Button onClick={() => navigate(ELocation.profile)} className="link">
        <Icon.SignIn />
        {data.email ? data.email : '...'}
      </Button>
      <span>Баланс: {data.balance ? data.balance : 0} ₽</span>
    </>
  );
};
