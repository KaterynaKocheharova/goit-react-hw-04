import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export default function ImageModal({ onCloseModal, modalIsOpen, modalData }) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.content}
      overlayClassName={css["ReactModal__Overlay"]}
      bodyOpenClassName={"ReactModal__Body--open"}
    >
      <img className={css.image} src={modalData.src} alt={modalData.alt} />
    </ReactModal>
  );
}
