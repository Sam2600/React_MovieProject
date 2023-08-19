import { useDispatch } from "react-redux";
import { searchMovie } from "../features/MovieSlice";


const SearchInput = () => {

  const dispatch = useDispatch();

  return (
      <input
        className="border border-solid px-4 py-2 rounded-lg shadow-lg w-2/12 sm:w-3/12 md:w-4/12 lg:w-4/12 xl:w-4/12"
        placeholder="search movies" 
        type="search"
        onChange={(e) => dispatch(searchMovie(e.target.value))}
      />
  );
};

export default SearchInput;
