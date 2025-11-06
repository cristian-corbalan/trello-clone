import SearchIcon from '../icons/SearchIcon.jsx';

export default function SearchForm() {
  return (
    <>
      <div className="relative hidden w-full max-w-3xl md:block">
        <label htmlFor="search" className="sr-only">
          Buscar
        </label>
        <span className="pointer-events-none absolute left-2 z-10 flex h-full items-center">
          <SearchIcon width={16} height={16} />
        </span>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Buscar"
          className="bg-black-neutral-light border-white-neutral-base w-full rounded-sm border-1 py-1.5 pr-4 pl-8 placeholder-gray-400"
        />
      </div>

      <button className="hover:bg-black-neutral-hover focus-visible:bg-black-neutral-hover hover:bg-secondary-black focus:bg-secondary-black cursor-pointer rounded-sm bg-transparent p-1 md:hidden">
        <SearchIcon />
        <span className="sr-only">Buscar tablero</span>
      </button>
    </>
  );
}
