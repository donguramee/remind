import React, { useEffect, useState, useCallback } from "react";
import axios from "../../api/axios";
import {
  Title,
  SliderLeft,
  SliderRight,
  RowPoster,
  Slider,
  Arrow,
} from "./Row.style";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    console.log("response", response);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <>
      <Title>{title}</Title>
      <Slider>
        <Arrow>
          <SliderLeft
            src="/images/chevron-left-solid.svg"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          />
          <SliderRight
            src="/images/chevron-right-solid.svg"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          />
        </Arrow>
        <RowPoster id={id}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
          ))}
        </RowPoster>
      </Slider>
    </>
  );
};

export default Row;
