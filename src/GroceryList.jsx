import React from "react";
import { GroceryItem } from "./GroceryItem";

export let GroceryList = ({ data, deleteItem, editData, setTitle, title }) => {
  return (
    <>
      {data.map((e) => (
        <GroceryItem
          data={e}
          deleteItem={deleteItem}
          key={e.id}
          id={e.id}
          title={title}
          editData={editData}
          setTitle={setTitle}
        />
      ))}
    </>
  );
};
