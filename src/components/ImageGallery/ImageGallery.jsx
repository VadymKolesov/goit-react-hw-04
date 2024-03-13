import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ data, onOpenModal }) {
  return (
    <ul className={css.list}>
      {data.map((el) => (
        <li className={css.item} key={el.id}>
          <ImageCard
            image={el}
            url={el.urls.small}
            alt={el.alt_description}
            onOpenModal={onOpenModal}
          />
        </li>
      ))}
    </ul>
  );
}
