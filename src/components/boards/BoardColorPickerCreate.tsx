import boardPreviewImage from "@/assets/board_preview.svg";
import { useState } from "react";
import type { BoardBackgroundName } from "../../types/types.ts";
import { BOARD_BACKGROUNDS } from "../../util/constants.ts";
import CheckIcon from "../icons/CheckIcon.tsx";

interface Props {
  colorName: BoardBackgroundName;
  onClick: (color: BoardBackgroundName) => void;
}

const BoardColorPickerCreate: React.FC<Props> = ({ colorName, onClick }) => {
  const [selectedColorName, setSelectedColorName] =
    useState<BoardBackgroundName>(colorName);

  function handleClick(name: BoardBackgroundName) {
    setSelectedColorName(name);
    onClick(name);
  }

  const previewClassName = BOARD_BACKGROUNDS[selectedColorName].className;

  return (
    <div>
      <header
        className={`w-52 h-32 ${previewClassName} p-2 rounded-sm m-auto mb-4`}
      >
        <img
          src={boardPreviewImage}
          alt="Previsualización de un tablero con múltiples columnas"
          className="w-full"
        />
      </header>

      <span className="font-semibold text-xs">Fondo</span>

      <ul className="flex items-center gap-2 justify-center">
        {Object.entries(BOARD_BACKGROUNDS).map(([name, background]) => (
          <li key={background.name}>
            <button
              type="button"
              title={background.name}
              className={`w-10 h-8 rounded-sm brightness-on-event cursor-pointer flex items-center justify-center ${background.className} ${name === selectedColorName && "brightness-110"}`}
              onClick={() => handleClick(name as BoardBackgroundName)}
            >
              <span className="sr-only">{background.name}</span>
              {name === selectedColorName && (
                <CheckIcon className="text-primary-black size-3" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardColorPickerCreate;
