import React from "react";
import { Container, Wrap } from "./Category.style";

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Category;
