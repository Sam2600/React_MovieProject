import { filter } from "../features/MovieSlice";
import { useDispatch } from "react-redux";

const Buttons = () => {

  const dispatch = useDispatch();

  return (
    <div className="flex gap-5 mt-7">
      <button
        onClick={() => dispatch(filter(0))}
        className="p-1 text-sm w-28 rounded-md bg-slate-300 border border-solid shadow-sm transition-all duration-300
        hover:cursor-pointer hover:outline-slate-600 hover:bg-white hover:outline-8"
      >
        ALL
      </button>
      <button
        onClick={() => dispatch(filter(28))}
        className="p-1 text-sm w-28 rounded-md bg-slate-300 border border-solid shadow-sm transition-all duration-300 hover:cursor-pointer hover:outline-slate-600 hover:bg-white "
      >
        COMEDY
      </button>
      <button
        onClick={() => dispatch(filter(35))}
        className="p-1 text-sm w-28 rounded-md bg-slate-300 border border-solid shadow-sm transition-all duration-300 hover:cursor-pointer hover:outline-slate-600 hover:bg-white "
      >
        ACTION
      </button>
    </div>
  );
};

export default Buttons;
