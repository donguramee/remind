import styled from "styled-components";

export const Title = styled.h2``;
export const Slider = styled.div`
  position: relative;
`;
export const Arrow = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SliderLeft = styled.div`
  position: relative;
  height: 144px;
  width: 50px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../images/chevron-left-solid.svg") no-repeat center/cover;
    background-size: 30%;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scale(1.1);
  }

  &:hover {
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.542454481792717) 0%,
      rgba(113, 113, 113, 0.010241596638655426) 70%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
export const SliderRight = styled.div`
  position: relative;
  height: 144px;
  width: 50px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../images/chevron-right-solid.svg") no-repeat center/cover;
    background-size: 30%;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scale(1.1);
  }

  &:hover {
    border-radius: 4px;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.542454481792717) 0%,
      rgba(113, 113, 113, 0.010241596638655426) 70%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
export const RowPoster = styled.div`
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
