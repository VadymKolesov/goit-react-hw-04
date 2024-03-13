import css from "./Loader.module.css";

import { ProgressBar } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loader}>
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#111111"
        barColor="#111111"
        borderColor="#111111"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
