import { useSelector } from "react-redux";
import BoardCard from "../components/boards/BoardCard.tsx";
import BoardList from "../components/boards/BoardList.tsx";
import type { RootState } from "../store/store.ts";

const HomePage: React.FC = () => {
  // const [boards, setBoards] = useState(BOARDS);
  const boards = useSelector((state: RootState) => state.boards);

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
