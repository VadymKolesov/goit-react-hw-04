import css from "./ImageCard.module.css";

export default function ImageCard({ onOpenModal, image, url, alt }) {
  return (
    <div className={css.wrap} onClick={() => onOpenModal(image)}>
      <img className={css.img} src={url} alt={alt} />
    </div>
  );
}
