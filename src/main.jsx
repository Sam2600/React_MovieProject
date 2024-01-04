import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./DevelopedByEd/states/store";
import {
  fetchGenres,
  fetchMovies,
} from "./DevelopedByEd/states/features/MovieSlice";
import { RouterProvider } from "react-router-dom";
import { routes } from "./DevelopedByEd/Routes/Route";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ChakraProvider } from "@chakra-ui/react";

store.dispatch(fetchMovies());
store.dispatch(fetchGenres());

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <ProSidebarProvider>
        <RouterProvider router={routes} />
      </ProSidebarProvider>
    </Provider>
    {/* </React.StrictMode> */}
  </ChakraProvider>
);
