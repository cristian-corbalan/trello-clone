import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "../../store/boardsSlice.ts";
import type { RootState } from "../../store/store.ts";
import type { Board, BoardBackgroundName } from "../../types/types.ts";
import PrimaryButton from "../ui/PrimaryButton.tsx";
import BoardColorPickerCreate from "./BoardColorPickerCreate.tsx";

interface FormData {
  backgroundName: BoardBackgroundName;
  name: string;
}

const FORM_DATA_DEFAULT: FormData = {
  backgroundName: "white",
  name: "",
};

const BoardCreateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(FORM_DATA_DEFAULT);
  const boards = useSelector((store: RootState) => store.boards);
  const dispatch = useDispatch();

  function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  }

  function handleClickColor(color: BoardBackgroundName) {
    setFormData((prevState) => ({
      ...prevState,
      backgroundName: color,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    let id: number;
    do {
      id = Math.random();
    } while (boards.some((board) => board.id === id));

    const newBoard: Board = {
      id,
      title: formData.name,
      background: formData.backgroundName,
    };

    setFormData(FORM_DATA_DEFAULT);

    dispatch(addBoard(newBoard));
  }

  return (
    <form
      action="#"
      method="POST"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <BoardColorPickerCreate
        colorName={formData.backgroundName}
        onClick={handleClickColor}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-semibold">
          Nombre del tablero
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="px-3 py-2 rounded-sm bg-primary-black block w-full border border-gray-300"
          value={formData.name}
          onChange={handleChangeTitle}
        />
      </div>
      <PrimaryButton disabled={formData.name.length === 0}>Crear</PrimaryButton>
    </form>
  );
};

export default BoardCreateForm;
