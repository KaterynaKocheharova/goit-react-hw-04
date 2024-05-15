export default function ImageCard({
  imageData: {
    likes,
    description,
    urls: { small, regular },
  },
  onOpenModal,
}) {
  function handleModalClick() {
    onOpenModal({ src: regular, alt: description });
  }

  return (
    <div>
      <div>
        <p>Likes: {likes}</p>
      </div>
      <img src={small} alt={description} onClick={handleModalClick} />
    </div>
  );
}
