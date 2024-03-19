import React from "react";
import Banner from "../../components/Banner/Banner";
import Nav from "../../components/Nav/Nav";
import Category from "../../components/Category/Category";
import Row from "../../components/Row/Row";
import requests from "../../api/request";

import { Container } from "./MainPage.style";

const MainPage = () => {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </Container>
  );
};

export default MainPage;
