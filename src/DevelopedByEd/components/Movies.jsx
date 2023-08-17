import React, { useState } from 'react'
import PaginatedMovies from './PaginatedMovies'
import { filteredMovies } from "../features/MovieSlice"
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import "../style.css"

const Movies = () => {

     const [startOffset, setStartOffset] = useState(0);

     const movies = useSelector(filteredMovies);

     const totalMovies = movies.length; // 20

     const moviesPerPage = 8

     const totalPages = Math.ceil(totalMovies / moviesPerPage); // 3

     const endOffset = startOffset + moviesPerPage

     const paginatedMovies = movies.slice(startOffset, endOffset)

     const handlePageClick = (e) => {
          const newOffset = (e.selected * moviesPerPage) % totalMovies
          setStartOffset(newOffset)
     }

     return (
          <div className="flex flex-col my-3 items-center justify-center">
               <PaginatedMovies movies={paginatedMovies} />
               <ReactPaginate className='flex gap-5 text-lg justify-center items-center'
                    breakLabel="..."
                    nextLabel="Next >>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={moviesPerPage}
                    pageCount={totalPages}
                    previousLabel="<< Previous"
                    renderOnZeroPageCount={null}
                    pageLinkClassName="links"
                    activeLinkClassName="active"
                    nextLinkClassName="next"
                    previousLinkClassName="prev"  
               />
          </div>
     )

}

export default Movies

