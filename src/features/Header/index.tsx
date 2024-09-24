import { useLocation } from 'react-router-dom';
import { useWindowWidth } from '../../app/hooks/useWindowWidth';
import { DEFAULT_SCREEN_WIDTH } from '../../app/constants';
import { useCallback, useState } from 'react';
import { EFormType, FormModal } from '../../widgets/Modals/FormModal';
import { useLocationChangeListener } from '../../app/hooks/useLocationChangeListener';
import { DesktopHeader } from './ui/DesktopHeader';
import { MobileHeader } from './ui/MobileHeader';

export const Header: React.FC = () => {
  const location = useLocation();
  const isMobileHeader = useWindowWidth(DEFAULT_SCREEN_WIDTH.L);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormModalOpened, setIsFormModalOpened] = useState(false);
  const [formModalType, setFormModalType] = useState<EFormType>(EFormType.SignIn);

  useLocationChangeListener(() => setIsMobileMenuOpen(false));

  const handleOpenModal = useCallback((type: EFormType) => {
    setFormModalType(type);
    setIsFormModalOpened(true);
  }, []);

  const handleCloseModal = () => setIsFormModalOpened(false);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  return (
    <>
      {!isMobileHeader ? (
        <DesktopHeader onOpenModal={handleOpenModal} />
      ) : (
        <MobileHeader
          isMenuOpen={isMobileMenuOpen}
          onToggleMenu={toggleMobileMenu}
          location={location}
          onOpenModal={handleOpenModal}
        />
      )}

      <FormModal
        isOpen={isFormModalOpened}
        type={formModalType}
        onRequestClose={handleCloseModal}
      />
    </>
  );
};
