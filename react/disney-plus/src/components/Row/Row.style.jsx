import styled from "styled-components";

export const Title = styled.div``;
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
export const SliderLeft = styled.img`
  height: 30px;
  width: 30px;
  fill: #b7b7b7;
`;
export const SliderRight = styled.img`
  height: 30px;
  width: 30px;
  fill: #b7b7b7;
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
