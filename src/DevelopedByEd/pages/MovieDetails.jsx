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

  return (
    <div className="flex flex-wrap w-11/12 p-2">

      <motion.div
        className="min-w-custom flex flex-col w-4/12 sm:flex-col sm:w-8/12 sm:ms-12 md:flex-row md:gap-3 md:w-11/12 lg:flex-col lg:my-5 lg:w-4/12 px-10 m-auto"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
        exit={{ opacity: 0 }}
      >
        <div className="my-5 w-full sm:w-full md:w-5/12 md:me-10 lg:w-10/12 m-auto">
          <img
            className="rounded-md h-48 w-full"
            src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>

        <div className=" w-full md:w-7/12 lg:w-10/12 m-auto">
          <div className="flex-col gap-3 border-b-2 py-2">
            <label className="text-slate-600 text">Rating</label>
            <p className="text-sm mt-2">{movie?.vote_average}</p>
          </div>

          <div className="flex-col border-b-2 py-2">
            <label className="text-slate-600 text">Genres</label>
            <div className="flex flex-wrap gap-3">
              {filteredGenreIds.map((genre) => (
                <span className="text-sm mt-2" key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </div>
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
        className=" flex flex-col justify-between w-full sm:w-10/12 sm:mt-10 sm:m-auto md:w-10/12 md:m-auto lg:w-7/12 lg:my-5 min-w-customOne px-10"
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
        exit={{ opacity: 0 }}
      >

        <div>
          <h1 className="text-2xl my-5"> Movie&apos;s overview</h1>
          <p className="text-lg mb-5"> <span className="text-slate-600">Movie name</span>: &nbsp; {movie?.title}</p>
        </div>

        <div>
          <p className="leading-8">{movie?.overview}</p>
        </div>

        <div className="flex-col w-10/12 sm:w-10/12 md:w-10/12 lg:w-full ">

          <h1 className=" text-md sm:text-md md:text-lg my-5 hover:text-slate-500 hover:cursor-pointer">
            Movies You might also like..
          </h1>

          <section className="flex justify-start items-start">
            <Splide
              options={{
                arrows: false,
                drag: "free",
                perPage: 5,
                pagination: false,
                rewind: true,
              }}>

              {youMightAlsoLikeMovies.map((movie) => {
                return (

                  <SplideSlide key={movie?.movieId}>
                    <div className="group relative me-2">
                      <img className="w-full rounded-md transition-all duration-500 hover:opacity-80"
                        src={`https://image.tmdb.org/t/p/w500${movie?.image}`}
                        alt={movie?.title}
                      />
                      <Link to={`/movies/${movie?.movieId}`}>
                        <p className="hidden opacity-70 group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-50 text-black py-2 px-4 rounded-lg">
                          View
                        </p>
                      </Link>
                    </div>

                  </SplideSlide>

                );
              })}
            </Splide>
          </section>


        </div>

      </motion.div >

    </div >
  );
};

export default MovieDetails;
