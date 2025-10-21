import { useState } from "react";
import BoardCard from "../components/boards/BoardCard.tsx";
import BoardList from "../components/boards/BoardList.tsx";
import type { Board } from "../types/types.ts";

const BOARDS: Board[] = [
  {
    id: 1,
    title: "Tablero 01",
    background: "white",
  },
  {
    id: 2,
    title: "Tablero 02",
    background: "blue",
  },
  {
    id: 3,
    title: "Tablero 03",
    background: "red",
  },
  {
    id: 4,
    title: "Tablero 04",
    background: "purple",
  },
];

const HomePage: React.FC = () => {
  const [boards, setBoards] = useState(BOARDS);

  return (
    <>
      <section className="max-w-4xl mx-auto py-8 px-2 sm:px-4">
        <h2 className="font-bold text-xl">Tus tableros</h2>

        <BoardList>
          {boards.map((board) => (
            <li key={board.id}>
              <BoardCard board={board} />
            </li>
          ))}
        </BoardList>
      </section>
    </>
  );
};

export default HomePage;
