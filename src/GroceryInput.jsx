import React from "react";
import styles from "./Grocery.module.css";

export let GroceryInput = ({ data, addData, title, setTitle }) => {
  return (
    <>
      <div className={styles.takeInp}>
        <button className={styles.inpBut} onClick={addData}>
          <b>+</b>
        </button>
        <input
          className={styles.input}
          placeholder="Grocery..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </>
  );
};
