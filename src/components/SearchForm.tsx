import SearchIcon from "./icons/SearchIcon.tsx";

const SearchForm: React.FC = () => {
  return (
    <>
      <div className="hidden relative w-full max-w-3xl md:block">
        <label htmlFor="search" className="sr-only">
          Buscar tablero
        </label>
        <span className="absolute left-2 z-10 h-full flex items-center pointer-events-none">
          <SearchIcon width={16} height={16} />
        </span>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Buscar tablero"
          className="placeholder-gray-400 py-2 pl-8 pr-4 border-1 rounded-sm bg-secondary-black brightness-on-event w-full"
        />
      </div>

      <button className="md:hidden brightness-on-event rounded-sm bg-transparent hover:bg-secondary-black focus:bg-secondary-black p-2 cursor-pointer">
        <SearchIcon />
        <span className="sr-only">Buscar tablero</span>
      </button>
    </>
  );
};

export default SearchForm;
