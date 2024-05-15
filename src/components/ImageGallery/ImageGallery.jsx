import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onOpenModal, setModalData }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            imageData={image}
            onOpenModal={onOpenModal}
            setModalData={setModalData}
          />
        </li>
      ))}
    </ul>
  );
}
