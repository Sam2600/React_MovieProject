import { filter } from "../features/MovieSlice";
import { useDispatch } from "react-redux";

const Buttons = () => {
     
  const dispatch = useDispatch();

  return (
    <div className="flex gap-5 mt-7">
      <button
        onClick={() => dispatch(filter(0))}
        className="p-1 text-sm w-28 rounded-md bg-slate-200 border-none shadow-sm hover:cursor-pointer"
      >
        ALL
      </button>
      <button
        onClick={() => dispatch(filter(28))}
        className="p-1 text-sm w-28 rounded-md bg-slate-200 border-none shadow-sm hover:cursor-pointer"
      >
        COMEDY
      </button>
      <button
        onClick={() => dispatch(filter(35))}
        className="p-1 text-sm w-28 rounded-md bg-slate-200 border-none shadow-sm hover:cursor-pointer"
      >
        ACTION
      </button>
    </div>
  );
};

export default Buttons;
