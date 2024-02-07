import React from "react";
import styles from "./Input.module.css";

function Input({ attribute, labelText, type, placeholder, input }) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={attribute} className={styles.label}>{labelText}</label>
      {input || <input type={type} placeholder={placeholder} name={attribute} id={attribute} className={styles.input} min="0" />}
    </div>
  );
}

export default Input;