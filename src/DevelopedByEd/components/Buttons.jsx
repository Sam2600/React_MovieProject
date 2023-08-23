import { filter, genres } from "../features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Tooltip } from "@chakra-ui/react";
import "@splidejs/react-splide/css";
import "./SplideStyle.css";

const Buttons = () => {

  const dispatch = useDispatch();

  const allGenres = useSelector(genres);

  const genreButons = allGenres.map((genre) => {
    return (
      <SplideSlide className="splide__slide" key={genre.id}>
        
        <Tooltip label={genre.name} aria-label="A tooltip">
          <button
            onClick={() => dispatch(filter(genre.id))}
            className="w-20 px-2 py-2 text-sm rounded-md bg-slate-300 border border-solid shadow-sm transition-all duration-300 hover:cursor-pointer hover:outline-slate-600 hover:bg-white hover: "
          >
            {genre.name.length > 5
              ? `${genre.name.substring(0, 5)}...`
              : genre.name}
          </button>
        </Tooltip>
      </SplideSlide>
    );
  });

  return (
    <div className="w-10/12 m-auto flex mx-5 mt-5 items-center">
      <Splide
        className="w-full"
        options={{
          arrows: false,
          pagination: false,
          drag: "free",
          perPage: 10,
          width: "90vw",
          breakpoints: {
            1300: {
              perPage: 5,
              width: "70vw",
            },

            1200: {
              perPage: 5,
              width: "70vw",
            },
            1096: {
              perPage: 5,
              width: "70vw",
            },
            768: {
              perPage: 3,
              width: "60vw",
            },
            576: {
              perPage: 3,
              width: "60vw",
            },
          },
        }}
      >
        <SplideSlide className="splide__slide">
          <button
            onClick={() => dispatch(filter(0))}
            className="p-2 px-3 text-sm rounded-md bg-slate-300 border border-solid shadow-sm transition-all duration-300
        hover:cursor-pointer hover:outline-slate-600 hover:bg-white hover:outline-8"
          >
            ALL
          </button>
        </SplideSlide>
        {genreButons}
      </Splide>
    </div>
  );
};

export default Buttons;
