import type { Board } from "../../types/types.ts";

interface Props {
  board: Board;
}

const BACKGROUNDS = {
  white: "bg-gray-400",
  blue: "bg-blue-500",
  red: "bg-red-500",
  purple: "bg-purple-500",
};

const BoardCard: React.FC<Props> = function ({ board }) {
  let anchorClass = "pt-20 block hover:bg-gray-500/90 focus:bg-gray-500/90 ";

  anchorClass += BACKGROUNDS[board.background];

  return (
    <article className="rounded-sm overflow-hidden">
      <a href="#" className={anchorClass}>
        <span className="p-2 bg-primary-black block">{board.title}</span>
      </a>
    </article>
  );
};

export default BoardCard;
