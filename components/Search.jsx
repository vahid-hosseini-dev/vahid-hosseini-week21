import { useSearch } from "../hooks/useSearch";

function Search() {
  const { search, setSearch } = useSearch();

  return (
    <input
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        console.log(search);
      }}
      className="text-[rgba(0,0,0,0.6) font-yekan outline-0 "
      type="text"
      placeholder="جستجو کالا"
    />
  );
}

export default Search;
