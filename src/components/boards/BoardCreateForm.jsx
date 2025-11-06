import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../redux/boardsSlice.js';
import { BOARD_GRADIENTS } from '../../util/constants.js';
import PrimaryButton from '../ui/PrimaryButton.jsx';
import BoardColorPickerCreate from './BoardColorPickerCreate.jsx';

const FORM_DATA_DEFAULT = {
  background: BOARD_GRADIENTS[0],
  title: '',
};

export default function BoardCreateForm() {
  const [formData, setFormData] = useState(FORM_DATA_DEFAULT);
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }

  function handleChangeBackground(background) {
    setFormData((prevState) => ({
      ...prevState,
      background,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    let id = crypto.randomUUID();

    const newBoard = {
      id,
      ...formData,
    };

    setFormData({ ...FORM_DATA_DEFAULT });

    dispatch(addBoard(newBoard));
  }

  return (
    <form action="#" method="POST" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <BoardColorPickerCreate selectedBackground={formData.background} onClick={handleChangeBackground} />

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-xs font-semibold">
          Título del tablero
        </label>
        <input
          id="title"
          type="text"
          name="title"
          className="bg-black-neutral-light block w-full rounded-sm border border-gray-300 px-3 py-2"
          value={formData.title}
          onChange={handleChangeTitle}
          aria-describedby="title-description"
        />
        <small id="title-description" className="text-sm">
          👋 Es necesario indicar el título del tablero
        </small>
      </div>

      <PrimaryButton disabled={formData.title.length === 0}>Crear</PrimaryButton>
    </form>
  );
}
