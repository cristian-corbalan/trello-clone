import { NavLink } from 'react-router';
import GitHubIcon from '../icons/GitHubIcon.jsx';
import TrelloIcon from '../icons/TrelloIcon.jsx';
import SearchForm from './SearchForm.jsx';

export default function MainNavigation() {
  return (
    <nav className="flex justify-between items-center gap-2 p-2 border-b-zinc-700 border-b text-sm">
      <h1 className="font-bold text-white">
        <NavLink
          to="/"
          className="flex gap-2 items-center hover:bg-black-neutral-hover focus-visible:bg-black-neutral-hover rounded-sm bg-transparent hover:bg-secondary-black focus:bg-secondary-black p-1"
        >
          <TrelloIcon width={24} height={24} />

          <span className="hidden md:block">Trello Clon</span>
        </NavLink>
      </h1>

      <div className="flex items-center justify-center gap-2 flex-1">
        <SearchForm />
        <button className="rounded-sm font-semibold bg-blue-neutral-base text-black-neutral-base py-1.5 px-4 cursor-pointer hover:bg-blue-neutral-light focus-visible:bg-blue-neutral-light">
          Crear
        </button>
      </div>

      <a
        href="https://github.com/cristian-corbalan/trello-clone"
        target="_blank"
        className="rounded-sm bg-transparent hover:bg-black-neutral-hover focus-visible:bg-black-neutral-hover p-1"
      >
        <GitHubIcon class="size-6" />
        <span className="sr-only">Ir al repositorio de GitHub (abre una nueva pestaña)</span>
      </a>
    </nav>
  );
}
