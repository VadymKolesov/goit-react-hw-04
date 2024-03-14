import css from "./LoadMoreBtn.module.css";

export default function LoadMore({ onLoadMode }) {
  return (
    <button className={css.button} type="button" onClick={onLoadMode}>
      Load more
    </button>
  );
}
