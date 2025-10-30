import SearchIcon from '../icons/SearchIcon.jsx';

export default function SearchForm() {
  return (
    <>
      <div className="hidden relative w-full max-w-3xl md:block">
        <label htmlFor="search" className="sr-only">
          Buscar
        </label>
        <span className="absolute left-2 z-10 h-full flex items-center pointer-events-none">
          <SearchIcon width={16} height={16} />
        </span>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Buscar"
          className="placeholder-gray-400 bg-black-neutral-light py-1.5 pl-8 pr-4 border-1 rounded-sm border-white-neutral-base w-full"
        />
      </div>

      <button className="md:hidden hover:bg-black-neutral-hover focus-visible:bg-black-neutral-hover rounded-sm bg-transparent hover:bg-secondary-black focus:bg-secondary-black p-1 cursor-pointer">
        <SearchIcon />
        <span className="sr-only">Buscar tablero</span>
      </button>
    </>
  );
}
