import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
`;

//css로 만든 슬라이더 스타일
// export const Slider = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// export const SliderLeft = styled.div`
//   position: absolute;
//   height: 144px;
//   width: 50px;
//   overflow: hidden;
//   left: 0;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: url("../images/chevron-left-solid.svg") no-repeat center/cover;
//     background-size: 30%;
//     transition: transform 0.3s ease;
//   }

//   &:hover::before {
//     transform: scale(1.1);
//   }

//   &:hover {
//     border-radius: 4px;
//     background: linear-gradient(
//       90deg,
//       rgba(0, 0, 0, 0.542454481792717) 0%,
//       rgba(113, 113, 113, 0.010241596638655426) 70%,
//       rgba(255, 255, 255, 0) 100%
//     );
//   }
// `;
// export const SliderRight = styled.div`
//   position: absolute;
//   height: 144px;
//   width: 50px;
//   overflow: hidden;
//   right: 0;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: url("../images/chevron-right-solid.svg") no-repeat center/cover;
//     background-size: 30%;
//     transition: transform 0.3s ease;
//   }

//   &:hover::before {
//     transform: scale(1.1);
//   }

//   &:hover {
//     border-radius: 4px;
//     background: linear-gradient(
//       270deg,
//       rgba(0, 0, 0, 0.542454481792717) 0%,
//       rgba(113, 113, 113, 0.010241596638655426) 70%,
//       rgba(255, 255, 255, 0) 100%
//     );
//   }
// `;

//swiper로 만든 슬라이더
export const Container = styled.div`
  padding: 0 0 26px;
`;
export const Content = styled.div``;
export const CustomSlider = styled.div`
  .swiper-pagination {
    text-align: right !important;
  }

  .swiper-pagination-bullet {
    background: gray !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet-active {
    background-color: white !important;
  }

  .swiper-button-prev {
    color: white !important;
  }

  .swiper-button-next {
    color: white !important;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.3rem !important;
    font-weight: 1000 !important;
  }
`;
export const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export const Contents = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0;
  scroll-behavior: smooth;

  img {
    object-fit: contain;
    width: 100%;
    max-height: 144px;
    margin-right: 10px;
    transform: transform 450ms;
    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MovieModal = styled.div``;
