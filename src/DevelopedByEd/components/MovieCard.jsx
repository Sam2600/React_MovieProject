import { motion, AnimatePresence } from "framer-motion";

const MovieCard = ({ ...movie }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        <article className="w-56 p-3 h-48 mx-5 my-5 border shadow-md m-auto transition-all duration-200 hover:scale-90 hover:cursor-pointer">
          <div className="h-1/3">
            <h1>{movie.title}</h1>
          </div>
          <hr />
          <img
            className="h-2/3"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
        </article>
      </AnimatePresence>
    </motion.div>
  );
};

export default MovieCard;
