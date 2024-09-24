import { HeaderProps } from '../types';
import cls from '../Header.module.scss';
import Icon from '../../../shared/Icon';
import { Link, useLocation } from 'react-router-dom';
import { ELoadingStatus, ELocation, Mods } from '../../../app/@types/types';
import { UserControls } from './UserControls';
import { EFormType } from '../../../widgets/Modals/FormModal';
import { HeaderSkeleton } from './HeaderSkeleton';
import { ThemeToggler } from '../../../shared/ThemeToggler';
import { useSelector } from 'react-redux';
import { selectIsAuth, selectStatus } from '../../../app/redux/auth/selectors';
import { Button, EButtonView } from '../../../shared/Button';
import { selectTheme } from '../../../app/redux/theme/selectors';
import { ETheme } from '../../../app/redux/theme/types';
import clsx from 'clsx';

export const DesktopHeader: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const isAuthorized = useSelector(selectIsAuth);
  const authStatus = useSelector(selectStatus);

  const { theme } = useSelector(selectTheme);
  const location = useLocation();

  const mods: Mods = {
    [cls.header_absolutePosition]: location.pathname === ELocation.home,
  };

  return (
    <div className={clsx(cls.header, mods)}>
      <Link to={ELocation.home} className={cls.header_logo}>
        <Icon.Logo />
      </Link>
      <div className={cls.header_menu}>
        <Link to={ELocation.home} className={cls.header_menuLink}>
          Товары
        </Link>
        <Link to={ELocation.reviews} className={cls.header_menuLink}>
          Отзывы
        </Link>
        <Link to={ELocation.home} className={cls.header_menuLink}>
          Ваша ссылка
        </Link>
      </div>
      <div className={cls.header_controlsWrapper}>
        {authStatus === ELoadingStatus.loading ? (
          <HeaderSkeleton />
        ) : !isAuthorized ? (
          <>
            <Button
              themeReverse={location.pathname === ELocation.home && theme === ETheme.light}
              view={location.pathname === ELocation.home ? EButtonView.empty : EButtonView.default}
              onClick={() => onOpenModal(EFormType.SignUp)}>
              Создать&nbsp;аккаунт
            </Button>
            <Button
              themeReverse={location.pathname === ELocation.home && theme === ETheme.light}
              view={
                location.pathname === ELocation.home ? EButtonView.outlined : EButtonView.default
              }
              onClick={() => onOpenModal(EFormType.SignIn)}>
              Войти
            </Button>
          </>
        ) : (
          <UserControls />
        )}
        <ThemeToggler />
      </div>
    </div>
  );
};
