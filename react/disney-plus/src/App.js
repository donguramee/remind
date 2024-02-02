// import Bannerjs from "./components/Bannerjs/Bannerjs";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Row from "./components/Row/Row";
import { Container } from "./App.style";
import "./App.css";
import requests from "./api/request";

function App() {
  return (
    <Container>
      <Nav />
      {/* <Bannerjs /> */}
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
}

export default App;
