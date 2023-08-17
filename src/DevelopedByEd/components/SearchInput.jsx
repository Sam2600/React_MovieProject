import { useDispatch } from "react-redux";
import { searchMovie } from "../features/MovieSlice";

const SearchInput = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <input
        className="border-b-4 mt-10 px-2 py-1 rounded-md shadow-sm"
        placeholder="search movies"
        type="search"
        onChange={(e) => dispatch(searchMovie(e.target.value))}
      />
    </div>
  );
};

export default SearchInput;
