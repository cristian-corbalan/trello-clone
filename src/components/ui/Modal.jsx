import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, open, onClose, ...props }) {
  const dialog = useRef(null);

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
    modalRoot
  );
}
