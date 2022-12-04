import React from "react";
import styles from "./modal.module.css";
import ReactPlayer from "react-player";

const Modal = ({ show, onClose, children, video }) => {
  if (!show) {
    return null;
  }
  console.log(video);
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button onClick={onClose} className={`${styles.btnClose} btn-close`} />
        {children}
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video?.results[0]?.key}`}
          controls
        />
      </div>
    </div>
  );
};

export default Modal;
