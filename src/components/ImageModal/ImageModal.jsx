import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ onCloseModal }) {
  return (
    <Modal style={customStyles}>
      <button onClick={onCloseModal}>Close</button>
      <img src="" alt="" />
    </Modal>
  );
}
