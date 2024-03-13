import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.error}>
      <p>Error. Please, try again.</p>
    </div>
  );
}
