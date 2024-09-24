export type TDefaultProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export interface IModalProps {
  isOpen: boolean;
  onRequestClose: (event: React.MouseEvent<HTMLElement>) => void;
  content: React.ReactNode;
}
