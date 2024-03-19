import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Presentation = styled.div`
  z-index: 1200;
  position: absolute;
`;
export const WrapperModal = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 /71%);
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;
export const Modal = styled.div`
  position: relative;
  max-width: 800px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #111;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: ${fadeIn} 400ms;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
export const CloseButton = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 1000;
  color: white;
  font-weight: 600;
`;
export const ModalPosterImage = styled.img`
  width: 100%;
  height: auto;
`;
export const ModalContent = styled.div`
  padding: 40px;
  color: white;
`;
export const ModalDetails = styled.p`
  font-weight: 600;
  font-size: 18px;
`;
export const ModalUserPerc = styled.span``;
export const ModalTitle = styled.h2`
  padding: 0;
  font-size: 40px;
  margin: 16px 0;
`;
export const ModalOverview = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;
export const ModalOverviewTxt = styled.p``;
