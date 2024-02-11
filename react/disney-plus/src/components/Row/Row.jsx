import React, { useEffect, useState, useCallback } from "react";
import axios from "../../api/axios";
import MovieModal from "../MovieModal/MovieModal";
import { Title, SliderLeft, SliderRight, RowPoster, Slider } from "./Row.style";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    console.log("response", response);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  //슬라이더 기능
  const arrowSlider = (direction) => {
    const scrollContainer = document.getElementById(id);
    if (scrollContainer) {
      scrollContainer.scrollLeft += direction === "left" ? -800 : 800;
    }
  };

  const handleClick = (movie) => {
    console.log("Image clicked!", movie);

    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <>
      <Title>{title}</Title>
      <Slider>
        <SliderLeft onClick={() => arrowSlider("left")} />
        <RowPoster id={id}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              onClick={() => handleClick(movie)}
            />
          ))}
        </RowPoster>
        <SliderRight onClick={() => arrowSlider("right")} />
      </Slider>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default Row;
