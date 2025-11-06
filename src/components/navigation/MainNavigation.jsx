import { NavLink } from 'react-router';
import BoardButtonModalForm from '../boards/BoardButtonModalForm.jsx';
import GitHubIcon from '../icons/GitHubIcon.jsx';
import TrelloIcon from '../icons/TrelloIcon.jsx';
import SearchForm from './SearchForm.jsx';

export default function MainNavigation() {
  return (
    <nav className="flex items-center justify-between gap-2 border-b border-b-zinc-700 p-2 text-sm">
      <h1 className="font-bold text-white">
        <NavLink
          to="/"
          className="hover:bg-black-neutral-hover focus-visible:bg-black-neutral-hover hover:bg-secondary-black focus:bg-secondary-black flex items-center gap-2 rounded-sm bg-transparent p-1"
        >
          <TrelloIcon width={24} height={24} />

          <span className="hidden md:block">Trello Clon</span>
        </NavLink>
      </h1>

      <div className="flex flex-1 items-center justify-center gap-2">
        <SearchForm />
        <BoardButtonModalForm />
      </div>

      <a
        href="https://github.com/cristian-corbalan/trello-clone"
        target="_blank"
        className="hover:bg-black-neutral-hover focus-visible:bg-black-neutral-hover rounded-sm bg-transparent p-1"
      >
        <GitHubIcon />
        <span className="sr-only">Ir al repositorio de GitHub (abre una nueva pestaña)</span>
      </a>
    </nav>
  );
}
