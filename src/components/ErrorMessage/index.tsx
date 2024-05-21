import React from "react";
import styles from "./styles.module.scss";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <p className={styles.message}>
      <span>🙁</span>
      {message}
    </p>
  );
};

export default ErrorMessage;
