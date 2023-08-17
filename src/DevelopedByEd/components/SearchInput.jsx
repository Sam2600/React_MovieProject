import { useDispatch } from "react-redux";
import { searchMovie } from "../features/MovieSlice";


const SearchInput = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <input
        className=" mt-12 border border-solid px-2 py-1 rounded-md shadow-lg"
        placeholder="search movies"
        type="search"
        onChange={(e) => dispatch(searchMovie(e.target.value))}
      />
    </div>
  );
};

export default SearchInput;
