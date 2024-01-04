import { useDispatch } from "react-redux";
import { searchMovie } from "../states/features/MovieSlice";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const SearchInput = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const _search = useDebounce(search);

  dispatch(searchMovie(_search));

  return (
    <input
      className="border border-solid px-4 py-2 rounded-lg shadow-lg w-2/12 sm:w-3/12 md:w-4/12 lg:w-4/12 xl:w-4/12"
      placeholder="Search movies"
      type="search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
