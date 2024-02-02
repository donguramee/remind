import React, { useEffect, useState, useCallback } from "react";
import axios from "../../api/axios";
import { Title, SliderLeft, RowPoster, SliderRight, Slider } from "./Row.style";

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
        <SliderLeft>{"<"}</SliderLeft>
        <RowPoster id={id}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
          ))}
        </RowPoster>
        <SliderRight>{">"}</SliderRight>
      </Slider>
    </>
  );
};

export default Row;
