import boardPreviewImage from '../../assets/board_preview.svg';
import { BOARD_GRADIENTS } from '../../util/constants.js';
import CheckIcon from '../icons/CheckIcon.jsx';

export default function BoardColorPickerCreate({ selectedBackground, onClick }) {
  return (
    <div>
      <header className={`m-auto mb-4 h-32 w-52 rounded-sm p-2 ${selectedBackground.className}`}>
        <img src={boardPreviewImage} alt="Previsualización de un tablero con múltiples columnas" className="w-full" />
      </header>

      <span className="text-xs font-semibold">Fondo</span>

      <ul className="flex items-center justify-center gap-2">
        {BOARD_GRADIENTS.slice(0, 5).map((background) => (
          <li key={background.name}>
            <button
              type="button"
              title={background.name}
              className={`brightness-on-event focus-visible :brightness-125 flex h-8 w-10 cursor-pointer items-center justify-center rounded-sm hover:brightness-125 ${background.className} ${background.name === selectedBackground.name && 'brightness-125'}`}
              onClick={() => onClick({ ...background })}
            >
              <span className="sr-only">{background.name}</span>
              {background.name === selectedBackground.name && <CheckIcon className="text-black-neutral-base size-3" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
