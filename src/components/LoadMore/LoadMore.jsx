import css from "./LoadMore.module.css";

export default function LoadMore({ onLoadMode }) {
  return (
    <button className={css.button} type="button" onClick={onLoadMode}>
      Load more
    </button>
  );
}
