import React from "react";
import styles from "./GroceryItem.module.css";
import { GroceryInput } from "./GroceryInput";

export let GroceryItem = ({ data, deleteItem, editData, setTitle, title }) => {
  let [edit, setEdit] = React.useState(false);
  return (
    <div className={styles.listItem}>
      <div className={styles.inp}>
        {edit ? (
          <GroceryInput
            addData={() => {
              editData(data);
              setEdit(false);
            }}
            setTitle={setTitle}
            title={title}
          />
        ) : (
          <h3 className={styles.title}>{data.title}</h3>
        )}
      </div>
      <div>
        <button onClick={() => setEdit(!edit)}>Edit</button>
        <button onClick={() => deleteItem(data)}>Delete</button>
      </div>
    </div>
  );
};
