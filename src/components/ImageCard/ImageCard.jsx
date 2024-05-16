import css from "./ImageCard.module.css";

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
    <div className={css.card}>
      <div>
        <p className={css.likes}>Likes: {likes}</p>
      </div>
      <div className={css["image-container"]}>
        <img
          className={css.image}
          src={small}
          alt={description}
          onClick={handleModalClick}
        />
      </div>
    </div>
  );
}
