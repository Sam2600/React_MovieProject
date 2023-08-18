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
        <div className=" p-2 flex flex-col gap-2 w-60 h-52 mx-5 my-5 border shadow-md m-auto transition-all duration-200 hover:cursor-pointer">
          <h1 className="text-md">{ movie.title.length > 20 ? `${movie.title.substring(0,20)}...` : movie.title }</h1>
          <img
            className=""
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Link className="hover:text-slate-500" to={`/movies/${movie.id}`}>View Details</Link>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default MovieCard;
