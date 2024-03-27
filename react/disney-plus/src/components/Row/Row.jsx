import React, { useEffect, useState, useCallback } from "react";
import axios from "../../api/axios";
import MovieModal from "../MovieModal/MovieModal";
import { Title, Contents, Container, Wrap, CustomSlider } from "./Row.style";

//import swiper module
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//테스트
//import swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

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

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <CustomSlider>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true} //loop 기능을 사용할 것인지
          navigation // arrow 버튼 사용 유무
          pagination={{ clickable: true }} //페이지 버튼 보이게 할지
          breakpoints={{
            1378: {
              slidesPerView: 6, //한번에 보이는 슬라이드 개수
              slidesPerGroup: 6,
            },
            998: {
              slidesPerView: 5, //한번에 보이는 슬라이드 개수
              slidesPerGroup: 5,
            },
            625: {
              slidesPerView: 4, //한번에 보이는 슬라이드 개수
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3, //한번에 보이는 슬라이드 개수
              slidesPerGroup: 3,
            },
          }}
        >
          <Contents id={id}>
            {movies.map((movie) => (
              <SwiperSlide>
                <Wrap>
                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    onClick={() => handleClick(movie)}
                  />
                </Wrap>
              </SwiperSlide>
            ))}
          </Contents>
        </Swiper>
      </CustomSlider>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </Container>
  );
};

export default Row;
