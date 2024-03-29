import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {
  Presentation,
  WrapperModal,
  Modal,
  CloseButton,
  ModalPosterImage,
  ModalContent,
  ModalDetails,
  ModalUserPerc,
  ModalTitle,
  ModalOverview,
  ModalOverviewTxt,
} from "./MovieModal.style";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  const ref = useRef();
  console.log("ref", ref.current);
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });
  return (
    <>
      <Presentation>
        <WrapperModal>
          <Modal ref={ref}>
            <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
            <ModalPosterImage
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt="modal-img"
            />
            <ModalContent>
              <ModalDetails>
                <ModalUserPerc>100% for you</ModalUserPerc>
                {release_date ? release_date : first_air_date}
              </ModalDetails>
              <ModalTitle>{title ? title : name}</ModalTitle>
              <ModalOverview>평점: {vote_average}</ModalOverview>
              <ModalOverviewTxt>{overview}</ModalOverviewTxt>
            </ModalContent>
          </Modal>
        </WrapperModal>
      </Presentation>
    </>
  );
};

export default MovieModal;
