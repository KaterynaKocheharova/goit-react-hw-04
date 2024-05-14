export default function ImageCard({
  imageData: {
    likes,
    description,
    urls: { small, regular, thumb },
  },
}) {
  return (
    <div>
      <div>
        <p>Likes: {likes}</p>
      </div>
      <img src={small} alt={description} />
    </div>
  );
}
