import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  genere_id: 0,
  searchInput: "",
  status: "idle",
  movies: [],
  filterdMovies: [],
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }&language=en-US&page=1`
  );
  return response.data;
});

const MovieSlice = createSlice({

  name: "movie",
  initialState,
  reducers: {

    filter: (state, action) => {
      if (action.payload === 0) {
        state.filterdMovies = state.movies;
        return;
      }

      const filtereds = state.movies.filter((movie) =>
        movie.genre_ids.includes(action.payload)
      );
      state.filterdMovies = filtereds;
    },

    searchMovie: (state, action) => {

      if (action.payload === "") {
        state.filterdMovies = state.movies;
      }

      const searched = state.filterdMovies.filter((movie) =>
        movie.original_title
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );

      state.filterdMovies = searched;
    },
    
  },

  extraReducers: (builer) => {
    builer
      .addCase(fetchMovies.pending, (state, action) => {
        console.log(action.payload);
        state.status = "pending";
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload?.results;
        state.filterdMovies = state.movies;
        state.status = "success";
      })

      .addCase(fetchMovies.rejected, (state, action) => {
        console.log(action.error);
        state.status = "failed";
      });
  },
});

export const selectAllMovies = (state) => state.movie.movies;
export const currentStatus = (state) => state.movie.status;
export const filteredMovies = (state) => state.movie.filterdMovies;
export const genere_id = (state) => state.movie.genere_id;

export default MovieSlice.reducer;
export const { filter, searchMovie } = MovieSlice.actions;
