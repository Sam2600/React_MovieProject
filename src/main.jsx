import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./DevelopedByEd/pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./DevelopedByEd/app/store";
import { fetchMovies } from "./DevelopedByEd/features/MovieSlice";

store.dispatch(fetchMovies());

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <HomePage />
  </Provider>
  //</React.StrictMode>,
);
