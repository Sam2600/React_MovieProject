import { Link, useParams } from "react-router-dom";
import {
  searchedMovieById,
  genres,
  selectAllMovies,
} from "../features/MovieSlice";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


const MovieDetails = () => {

  const { id } = useParams(); // catching route's param
  const movie = useSelector((state) => searchedMovieById(state, Number(id))); // getting the Movie filtered by param(id)
  const movies = useSelector(selectAllMovies);
  const genreIds = useSelector(genres); // getting the genres array
  const movieGenreIds = movie?.genre_ids; // getting the Filtered Movie's genres ids

  const filteredGenreIds = genreIds.filter((movie) =>
    movieGenreIds.includes(movie.id)
  ); // Filtering and making new array to get the genres id's category names

  const sameGenres = []; // Fitst we make the empty array to capture the ohter movies that are same genre ids with this movie's

  movies.map(
    (
      movie // we map the object array
    ) =>
      sameGenres.push({
        movieId: movie?.id,
        image: movie?.backdrop_path,
        genres: movie?.genre_ids.filter((id) => movieGenreIds?.includes(id)), // then we filter the array inside the current object
      })
  );

  const youMightAlsoLikeMovies = sameGenres.filter(
    (movie) => movie.genres.length
  ); // then we filter the objects that are empty inside the genres array (means that movie is not match the genres with this current movie)

  console.log(movie)
  return (
    <div className="w-11/12 m-auto flex">

      <motion.div
        className="flex flex-col w-5/12 mx-10 px-10"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
        exit={{opacity:0}}
      >
        <div className="my-5 w-full">
          <h1 className="text-xl mb-5">{movie?.title}</h1>
          <img
            className="rounded-md w-full"
            src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>

        <div>
          <div className="flex-col gap-3 border-b-2 py-2">
            <label className="text-slate-600 text">Rating</label>
            <p className="text-sm mt-2">{movie?.vote_average}</p>
          </div>

          <div className="flex-col border-b-2 py-2">
            <label className="text-slate-600 text">Genres</label>
            <p className="flex gap-3">
              {filteredGenreIds.map((genre) => (
                <span className="text-sm mt-2" key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </p>
          </div>

          <div className="flex-col border-b-2 py-2">
            <label className="text-slate-600 text">Release Date</label>
            <p className="text-md text-sm mt-2">{movie?.release_date}</p>
          </div>

          <div className="flex-col border-b-2 py-2">
            <label className="text-slate-600 text">Popularity</label>
            <p className="text-md text-sm mt-2">{movie?.popularity}</p>
          </div>

          <div className="flex-col py-2">
            <label className="text-slate-600 text">Language</label>
            <p className="text-md text-sm mt-2">{movie?.original_language}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col w-7/12 justify-between"
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
        exit={{opacity:0}}
      >
        <div>
          <h1 className="text-2xl my-5"> Movie&apos;s overview</h1>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p className="leading-8">{movie?.overview}</p>
        </div>

        <div className="my-10">
          <h1 className="text-2xl hover:text-slate-400 hover:cursor-pointer">
            Movies You might also like..
          </h1>

          <Splide
            options={{
              perPage: 4,
              pagination: false,
              arrows: false,
              drag: "free",
              gap: "5px",
            }}
          >
            <div className="flex my-5">
              {youMightAlsoLikeMovies.map((movie) => {
                return (
                  <SplideSlide key={movie?.movieId}>
                    <Link to={`/movies/${movie?.movieId}`}>
                      <div className="w-40 mx-3">
                        <img
                          className="rounded-md"
                          src={`https://image.tmdb.org/t/p/w500${movie?.image}`}
                          alt={movie?.title}
                        />
                      </div>
                    </Link>
                  </SplideSlide>
                );
              })}
            </div>
          </Splide>
        </div>
      </motion.div>

    </div>
  );
};

export default MovieDetails;
