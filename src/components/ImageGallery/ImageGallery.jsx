import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpenModal, setModalData }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.card} key={image.id}>
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
