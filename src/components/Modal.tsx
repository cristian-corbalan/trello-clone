import { type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface mainProps {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  [x: string]: unknown;
}

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const Modal: React.FC<mainProps> = function ({
  children,
  open,
  onClose,
  ...props
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose} {...props}>
      {children}
    </dialog>,
    modalRoot,
  );
};

export default Modal;
