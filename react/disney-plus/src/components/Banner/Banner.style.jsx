import styled from "styled-components";

export const Header = styled.div`
  color: white;
  object-fit: contain;
  height: 448px;
  background-position: top center;
  background-size: cover;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  @media (min-width: 1500px) {
    height: 600px;
  }

  &:before {
    content: "";
    position: absolute;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.9290091036414566) 0%,
      rgba(85, 85, 85, 0.010241596638655426) 47%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 10px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover:before {
    border: 4px solid #fff;
    transition: 0.3s; /* border-color에 대한 0.2초 동안의 트랜지션 설정 */
  }
`;

export const Contents = styled.div`
  margin-left: 3rem;
  padding-top: 15rem;
  height: 190px;
  position: absolute;

  @media (max-width: 768px) {
    width: min-content;
    padding-left: 2.3rem;
    margine-left: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  margin-right: 1rem;
  background-color: white;
  color: black;
  border-radius: 3px;

  &:hover {
    color: #fff;
    background-color: rgba(170, 170, 170, 0.9);
    transition: color 0.2s, background-color 0.2s;
  }
`;

export const Description = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  height: 80px;

  @media (max-width: 768px) {
    font-size: 0.8rem !important;
    width: auto !important;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
