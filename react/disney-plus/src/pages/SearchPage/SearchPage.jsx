import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import {
  Movie,
  MovieImage,
  MoviePoster,
  NoData,
  NoResults,
  NoResultsTxt,
  SearchContainer,
} from "./SearchPage.style";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovies(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovies = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  if (searchResults.length > 0) {
    return (
      <SearchContainer>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

            return (
              <Movie key={movie.id}>
                <MoviePoster onClick={() => navigate(`/${movie.id}`)}>
                  <MovieImage src={movieImageUrl} alt="movie" />
                </MoviePoster>
              </Movie>
            );
          }
        })}
      </SearchContainer>
    );
  } else {
    return (
      <NoResults>
        <NoResultsTxt>
          <NoData>
            찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
          </NoData>
        </NoResultsTxt>
      </NoResults>
    );
  }
};

export default SearchPage;
