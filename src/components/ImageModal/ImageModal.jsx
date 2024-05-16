import ReactModal from "react-modal";

import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    height: "95%",
    overflow: "hidden",
  },
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
      overlayClassName={css.Overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={modalData.src} alt={modalData.alt} />
    </ReactModal>
  );
}
