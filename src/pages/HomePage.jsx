import { useSelector } from 'react-redux';

export default function HomePage() {
  const boards = useSelector((state) => state.boards);

  console.log('Boards:', boards);

  return <h1>HOME</h1>;
}
