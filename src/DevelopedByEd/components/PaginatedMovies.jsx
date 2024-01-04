/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const PaginatedMovies = ({ movies }) => {
  const paginatedMovies = movies.map((movie) => (
    <MovieCard key={movie.id} {...movie} />
  ));

  return (
    <div className="flex flex-wrap my-7 items-center justify-center">
      {paginatedMovies}
    </div>
  );
};

export default PaginatedMovies;
