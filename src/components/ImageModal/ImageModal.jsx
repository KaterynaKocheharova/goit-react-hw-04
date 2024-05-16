import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "var(--second-color)",
  },
};

ReactModal.setAppElement("#root");

ReactModal.defaultStyles.overlay.backgroundColor = "black";

export default function ImageModal({ onCloseModal, modalIsOpen, modalData }) {
  return (
    <ReactModal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.content}
      bodyOpenClassName={"ReactModal__Body--open"}
    >
      <img className={css.image} src={modalData.src} alt={modalData.alt} />
    </ReactModal>
  );
}
