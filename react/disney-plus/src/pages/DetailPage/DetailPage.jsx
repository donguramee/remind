import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { ModalPost } from "./DetailPage.style";

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return null;
  return (
    <>
      <ModalPost
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="detail image"
      />
    </>
  );
};

export default DetailPage;
