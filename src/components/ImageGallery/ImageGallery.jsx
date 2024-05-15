import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard imageData={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
}
