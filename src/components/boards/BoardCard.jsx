import { Link } from 'react-router';

export default function BoardCard({ board }) {
  return (
    <article className="flex h-full flex-col">
      <Link to="/" className="shadow-black-neutral group flex flex-1 flex-col overflow-hidden rounded-lg">
        <div
          className={
            'min-h-20 group-hover:brightness-70 group-focus-visible:brightness-70 ' + board.background.className
          }
        >
          {/*  Cover */}
        </div>
        <span className="bg-black-neutral-base block grow-1 p-2 text-sm">
          <span className="line-clamp-2">{board.title}</span>
        </span>
      </Link>
    </article>
  );
}
