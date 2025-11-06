import { useSelector } from 'react-redux';
import BoardCard from '../components/boards/BoardCard.jsx';
import BoardList from '../components/boards/BoardList.jsx';

export default function HomePage() {
  const boards = useSelector((state) => state.boards);

  return (
    <>
      <section className="mx-auto max-w-4xl px-5 pt-10 sm:px-4">
        <div className="mb-4">
          <h2 className="font-bold">Tus tableros</h2>
        </div>

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
}
