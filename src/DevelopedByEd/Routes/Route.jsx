import { createBrowserRouter, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DefaultLayout from "../Layout/DefaultLayout";
import MovieDetails from "../pages/MovieDetails";
import { TestingPage } from "../pages/TestingPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
      },
      {
        path: "/testing",
        element: <TestingPage />,
      },
    ],
  },

  {
    path: "/*",
    element: (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-black my-14">No Process in this page.</h1>
        <Link className="underline text-blue-400 text-lg" to="/">
          Back To Home
        </Link>
      </div>
    ),
  },
]);
