import { useState } from "react";
import XIcon from "../icons/XIcon.tsx";
import Modal from "../Modal.tsx";
import PrimaryButton from "../ui/PrimaryButton.tsx";
import BoardCreateForm from "./BoardCreateForm.tsx";

const BoardButtonModal: React.FC = function () {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleClick() {
    setModalIsOpen(true);
  }

  return (
    <>
      <PrimaryButton onClick={handleClick}>Crear</PrimaryButton>

      <Modal
        className="pb-8 px-4 max-h-full m-auto rounded-sm bg-secondary-black text-gray-400 max-w-md w-11/12"
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <header className="mb-4 py-4 grid grid-cols-[1fr_5fr_1fr] items-center">
          <span className=""></span>
          <h2 className="font-semibold text-center">Crear tablero</h2>
          <div className="flex justify-end">
            <button
              className="cursor-pointer brightness-on-event rounded-sm bg-transparent hover:bg-tertiary-black focus-visible:bg-tertiary-black p-2"
              onClick={() => setModalIsOpen(false)}
            >
              <XIcon className="size-4" />
              <span className="sr-only">Cerrar modal</span>
            </button>
          </div>
        </header>

        <BoardCreateForm />
      </Modal>
    </>
  );
};

export default BoardButtonModal;
