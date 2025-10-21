import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "../store/boardsSlice.ts";
import type { RootState } from "../store/store.ts";
import type { Board } from "../types/types.ts";
import GitHubIcon from "./icons/GitHubIcon.tsx";
import TrelloIcon from "./icons/TrelloIcon.tsx";
import SearchForm from "./SearchForm.tsx";

const MainNavigation: React.FC = () => {
  const boards = useSelector((state: RootState) => state.boards);
  const dispatch = useDispatch();

  function handleCreateBoard() {
    const title = prompt("Ingrese el título.") ?? "";

    let id = Math.random();
    while (boards.some((board) => board.id === id)) {
      id = Math.random();
    }

    const board: Board = {
      id: id,
      title,
      background: "white",
    };

    dispatch(addBoard(board));
  }

  return (
    <nav className="flex justify-between items-center gap-2 p-2 border-b-zinc-700 border-b">
      <h1 className="font-bold text-lg text-white">
        <a
          href="#"
          className="flex gap-2 items-center brightness-on-event rounded-sm bg-transparent hover:bg-secondary-black focus:bg-secondary-black p-2"
        >
          <TrelloIcon width={24} height={24} />

          <span className="hidden md:block">Trello Clon</span>
        </a>
      </h1>

      <div className="flex items-center justify-center gap-2 flex-1">
        <SearchForm />
        <button
          onClick={handleCreateBoard}
          className="rounded-sm font-semibold bg-primary-blue text-primary-black py-2 px-4 brightness-on-event hover:cursor-pointer"
        >
          Crear
        </button>
      </div>

      <a
        href="https://github.com/cristian-corbalan/trello-clone"
        target="_blank"
        className="brightness-on-event rounded-sm bg-transparent hover:bg-secondary-black focus:bg-secondary-black p-2"
      >
        <GitHubIcon />
        <span className="sr-only">
          Ir al repositorio de GitHub (abre una nueva pestaña)
        </span>
      </a>
    </nav>
  );
};

export default MainNavigation;
