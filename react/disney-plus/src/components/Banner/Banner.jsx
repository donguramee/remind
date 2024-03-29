import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import {
  Button,
  Buttons,
  Container,
  Contents,
  Description,
  Header,
  HomeContainer,
  Iframe,
  Title,
} from "./Banner.style";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //현재 상영중인 영화 정보를 가져오기 (여러영화)
    const response = await axios.get(requests.fetchNowPlaying);
    //여러 영화중 하나의 ID를 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;
    //특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    );
  } else {
    return (
      <Header
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <Contents>
          <Title>{movie.title || movie.name || movie.original_name}</Title>
          <Buttons>
            {movie?.videos?.results[0]?.key && (
              <Button onClick={() => setIsClicked(true)}>Play</Button>
            )}
          </Buttons>
          <Description>{truncate(movie.overview, 100)}</Description>
        </Contents>
      </Header>
    );
  }
};

export default Banner;
