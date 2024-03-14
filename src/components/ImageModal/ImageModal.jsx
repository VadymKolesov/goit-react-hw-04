import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, url, alt }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.wrap}>
          <img className={css.img} src={url} alt={alt} />
        </div>
      </Modal>
    </div>
  );
}
