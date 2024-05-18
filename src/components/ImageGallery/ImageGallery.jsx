import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

// export default function ImageGallery({ images, onOpenModal, ref }) {
//   return (
//     <ul className={css.list}>
//       {images.map((image) => (
//         <li className={css.card} key={image.id}>
//           <ImageCard imageData={image} onOpenModal={onOpenModal} ref />
//         </li>
//       ))}
//     </ul>
//   );
// }

import { forwardRef } from "react";

const ImageGallery = forwardRef(function ImageGallery(
  { images, onOpenModal },
  ref
) {
  return (
    <ul className={css.list}>
      {images.map((image, index) => (
        <li ref={index === 0 ? ref : null} className={css.card} key={image.id}>
          <ImageCard imageData={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
});

export default ImageGallery;
