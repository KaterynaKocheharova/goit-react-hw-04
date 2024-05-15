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
    backgroundColor: "pink",
  },
  overlay: {
    backgroundColor: "black",
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
      <button onClick={onCloseModal}>Close</button>
      <img src={modalData.src} alt={modalData.alt} width="500" height="500" />
    </ReactModal>
  );
}
