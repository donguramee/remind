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
  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    console.log("response", response);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleSlideLeft = () => {
    const scrollContainer = document.getElementById("your-container-id");
    if (scrollContainer) {
      scrollContainer.scrollLeft -= window.innerWidth - 80;
      setScrollPosition(scrollContainer.scrollLeft);
    }
  };
  return (
    <>
      <Title>{title}</Title>
      <Slider>
        <Arrow>
          <SliderLeft onClick={handleSlideLeft} />
          <SliderRight onClick={handleSlideLeft} />
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
