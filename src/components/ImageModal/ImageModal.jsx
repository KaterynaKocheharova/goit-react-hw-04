import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export default function ImageModal({ onCloseModal, modalIsOpen, modalData }) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      // shouldCloseOnOverlayClick={true}
      // shouldCloseOnEsc={true}
      className={css.content}
      overlayClassName={css["ReactModal__Overlay"]}
      // bodyOpenClassName when set as null doesn't add any class to document.body.
      bodyOpenClassName={modalIsOpen ? "ReactModal__Body--open" : null}
    >
      <img className={css.image} src={modalData.src} alt={modalData.alt} />
    </ReactModal>
  );
}
