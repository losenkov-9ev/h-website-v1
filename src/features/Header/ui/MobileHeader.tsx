import clsx from 'clsx';
import cls from '../Header.module.scss';
import { MobileHeaderProps } from '../types';
import { ThemeToggler } from '../../../shared/ThemeToggler';
import { Link, useLocation } from 'react-router-dom';
import { ELocation, Mods } from '../../../app/@types/types';
import { Button, EButtonView } from '../../../shared/Button';
import { EFormType } from '../../../widgets/Modals/FormModal';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../app/redux/auth/selectors';
import { UserControls } from './UserControls';
import Icon from '../../../shared/Icon';
import { Notiffications } from '../../../shared/Notiffications';

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  isMenuOpen,
  onToggleMenu,
  onOpenModal,
}) => {
  const isAuthorized = useSelector(selectIsAuth);
  const location = useLocation();

  const mods: Mods = {
    [cls.headerMenu_footer_authorized]: isAuthorized,
  };

  return (
    <>
      <div className={cls.headerMobile}>
        <div className={clsx(cls.headerMobile_inner, 'container')}>
          <Link
            to={ELocation.home}
            className={clsx(cls.headerMobile_logo, {
              [cls.headerMobile_logoHome]: location.pathname === ELocation.home,
            })}>
            <Icon.LogoMobile />
          </Link>
          <div className={cls.headerMobile_controls}>
            <ThemeToggler />
            <Notiffications />
            <Button
              onClick={onToggleMenu}
              className={cls.headerMobile_burger}
              view={EButtonView.square}
              themeReverse={true}
              fullWidth={false}>
              <Icon.Burger />
            </Button>
          </div>
        </div>
      </div>
      <div className={clsx(cls.headerMenu, { [cls.opened]: isMenuOpen })}>
        <div className={cls.headerMenu_box}>
          <Link className={cls.headerMenu_link} to={ELocation.home}>
            Товары
          </Link>
          <Link className={cls.headerMenu_link} to={ELocation.reviews}>
            Отзывы
          </Link>
          <Link className={cls.headerMenu_link} to={ELocation.home}>
            Ваша ссылка
          </Link>
          <Link className={cls.headerMenu_link} to={ELocation.home}>
            Ваша ссылка
          </Link>
        </div>
        <div className={clsx(cls.headerMenu_footer, mods)}>
          {!isAuthorized ? (
            <>
              <Button
                className={cls.headerMenu_footerButton}
                onClick={() => onOpenModal(EFormType.SignIn)}>
                <Icon.SignIn />
                Войти
              </Button>
              <Button
                className={cls.headerMenu_footerButton}
                onClick={() => onOpenModal(EFormType.SignUp)}>
                <Icon.SignUp />
                Создать аккаунт
              </Button>
            </>
          ) : (
            <UserControls />
          )}
        </div>
      </div>
    </>
  );
};
