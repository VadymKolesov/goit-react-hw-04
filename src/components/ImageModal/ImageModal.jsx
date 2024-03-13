import css from "./ImageModal.module.css";

export default function ImageModal({ url, alt }) {
  return (
    <div className={css.wrap}>
      <img className={css.img} src={url} alt={alt} />
    </div>
  );
}
