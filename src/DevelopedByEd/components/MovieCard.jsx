import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MovieCard = ({ ...movie }) => {

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
    >
      <AnimatePresence>
        <div className="flex-col w-60 h-44 mx-5 my-5 rounded-lg border shadow-md m-auto transition-all duration-200 hover:cursor-pointer hover:scale-105">
          <h1 className="text-md my-2 px-2">{movie.title.length > 20 ? `${movie.title.substring(0, 20)}...` : movie.title}</h1>
          <Link to={`/movies/${movie.id}`}>
            <img
              className="px-2"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
          </Link>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default MovieCard;
