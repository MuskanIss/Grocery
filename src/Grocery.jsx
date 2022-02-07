import React from "react";
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from "uuid";
import { GroceryInput } from "./GroceryInput";

export let Grocery = () => {
  const [data, setData] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const addData = () => {
    let payload = {
      id: uuid(),
      title: title,
      status: false,
    };
    setData([...data, payload]);
  };
  const deleteItem = (cur) => {
    var newArr = data.filter((elem) => {
      return elem.id !== cur.id;
    });
    setData(newArr);
  };

  const editData = (item) => {
    var newArr = data.map((el) => {
      if (el.id === item.id) {
        el.title = title;
      }
      return el;
    });
    setData(newArr);
  };
  return (
    <>
      <GroceryInput
        data={data}
        addData={addData}
        title={title}
        setTitle={setTitle}
      />
      <GroceryList
        editData={editData}
        setTitle={setTitle}
        title={title}
        data={data}
        deleteItem={deleteItem}
      />
    </>
  );
};
