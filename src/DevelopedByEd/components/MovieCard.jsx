import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";

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
          {movie.title.length > 20 ? (
            <Tooltip
              label={movie.title}
              aria-label="A tooltip"
              openDelay={200}
              arrowSize={8}
              placement={"top-start"}
              hasArrow={true}
            >
              <h1 className="text-md my-2 px-2">
                {`${movie.title.substring(0, 20)}...`}
              </h1>
            </Tooltip>
          ) : (
            <h1 className="text-md my-2 px-2">{movie.title}</h1>
          )}

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
