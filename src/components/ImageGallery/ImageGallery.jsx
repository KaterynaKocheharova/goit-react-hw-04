import ImageCard from "../ImageCard/ImageCard";
import Container from "../Container/Container";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpenModal, setModalData }) {
  return (
    <Container>
      <ul className={css.list}>
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
    </Container>
  );
}
