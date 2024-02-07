import React from 'react';
import styles from "./Button.module.css";

function Button({ buttonText }) {
  return (
    <button type="submit" className={styles.button}>{buttonText}</button>
  )
}

export default Button