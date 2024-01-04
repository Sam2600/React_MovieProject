import { Link } from "react-router-dom";


export const TestingPage = () => {
  return (
    <div className="w-7/12 flex flex-col justify-center align-middle m-auto my-auto">
      <h1 className="text-3xl text-center my-5">This is testing page</h1>
      <button className="mx-auto w-2/12 my-5">
        <Link
          className="flex justify-center border py-2 border-black hover:bg-black hover:text-white items-center transition-all duration-150"
          to="/"
        >
          To Home Page
        </Link>
      </button>
    </div>
  );
};
