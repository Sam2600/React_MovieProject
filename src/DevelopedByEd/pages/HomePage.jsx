import Buttons from "../components/Buttons";
import Failed from "../components/Failed";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";

import {
  currentStatus,
  filteredMovies,
} from "../features/MovieSlice";

import { motion, AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
import SearchInput from "../components/SearchInput";

const HomePage = () => {

  const status = useSelector(currentStatus);
  const filteredMvs = useSelector(filteredMovies);

  let content;

  if (status === "pending") {
    content = <Loading />;
  }

  if (status === "failed") {
    content = <Failed />;
  }
  
  if (status === "success") {
    content = filteredMvs.map((movie) => (
      <MovieCard key={movie.id} {...movie} />
    ));
  }

  return (

    <div className="w-10/12 my-7 m-auto flex flex-col items-center justify-center">

      <h1 className="text-2xl text-blue-600">Movie Nerds</h1>

      <Buttons />

      <SearchInput />

      <motion.div
        layout
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1.8 } }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
      >
        <AnimatePresence>
          <div className="flex flex-wrap my-7 items-center justify-center">
            {content}
          </div>
        </AnimatePresence>
      </motion.div>

    </div>
  );
};

export default HomePage;

/* 
  const handlePageClick = (e) => {
    const newOffset = (e.selected*itemsPerPage) % items.length
    setItemOffset(newOffset)
  }
*/

/*
  <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
  />
*/
