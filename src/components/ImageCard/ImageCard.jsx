export default function ImageCard({
  imageData: {
    likes,
    description,
    urls: { small },
  },
  onOpenModal,
}) {
  return (
    <div>
      <div>
        <p>Likes: {likes}</p>
      </div>
      <img src={small} alt={description} onClick={onOpenModal} />
    </div>
  );
}
