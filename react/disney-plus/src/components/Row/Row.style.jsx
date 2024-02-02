import styled from "styled-components";

export const Title = styled.div``;
export const Slider = styled.div`
  position: relative;
`;
export const SliderLeft = styled.span`
  background-clip: content-box;
  padding: 20px 0;
  box-sizing: border-box;
  transform: 400ms all ease-in-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: 400ms all ease-in-out;

  &:hover {
    background: rgba(20, 20, 20, 0.5);
    transition: 400ms all ease-in-out;
  }
`;
export const RowPoster = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0 20px 20px;
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
export const SliderRight = styled.span`
  background-clip: content-box;
  padding: 20px 0;
  box-sizing: border-box;
  transform: 400ms all ease-in-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: 400ms all ease-in-out;

  &:hover {
    background: rgba(20, 20, 20, 0.5);
    transition: 400ms all ease-in-out;
  }
`;
