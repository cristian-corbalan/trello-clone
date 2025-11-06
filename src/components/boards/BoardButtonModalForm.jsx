import { useState } from 'react';
import CloseIcon from '../icons/CloseIcon.jsx';
import Modal from '../ui/Modal.jsx';
import PrimaryButton from '../ui/PrimaryButton.jsx';
import BoardCreateForm from './BoardCreateForm.jsx';

export default function BoardButtonModalForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleClick() {
    setModalIsOpen(true);
  }

  return (
    <>
      <PrimaryButton onClick={handleClick}>Crear</PrimaryButton>

      <Modal
        className="bg-black-neutral-lighter text-white-neutral-base m-auto max-h-full w-11/12 max-w-md rounded-sm px-4 pb-8 text-sm"
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <header className="mb-4 grid grid-cols-[1fr_5fr_1fr] items-center py-4">
          <span className=""></span>
          <h2 className="text-center font-semibold">Crear tablero</h2>
          <div className="flex justify-end">
            <button
              className="hover:bg-black-neutral-hover focus-visible:bg-black-neutral-hover cursor-pointer rounded-sm bg-transparent p-2 transition"
              onClick={() => setModalIsOpen(false)}
            >
              <CloseIcon className="size-4" />
              <span className="sr-only">Cerrar modal</span>
            </button>
          </div>
        </header>

        <BoardCreateForm />
      </Modal>
    </>
  );
}
