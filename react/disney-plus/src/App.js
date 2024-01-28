// import Bannerjs from "./components/Bannerjs/Bannerjs";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import { Container } from "./App.style";
import "./App.css";

function App() {
  return (
    <Container>
      <Nav />
      {/* <Bannerjs /> */}
      <Banner />
    </Container>
  );
}

export default App;
