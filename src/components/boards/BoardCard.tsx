import type { Board } from "../../types/types.ts";
import { BOARD_BACKGROUNDS } from "../../util/constants.ts";

interface Props {
  board: Board;
}

const BoardCard: React.FC<Props> = function ({ board }) {
  let anchorClass = "pt-20 block hover:bg-gray-500/90 focus:bg-gray-500/90 ";

  anchorClass += BOARD_BACKGROUNDS[board.background].className;

  return (
    <article className="rounded-sm overflow-hidden">
      <a href="#" className={anchorClass}>
        <span className="p-2 bg-primary-black block">{board.title}</span>
      </a>
    </article>
  );
};

export default BoardCard;
