import React, { useState } from "react";
import { ItemBox, CheckBox, Delete, Item } from "./TodoItem.style";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = () => {
    props.onDelete(props.item.id);
  };

  return (
    <ItemBox isChecked={isChecked}>
      <CheckBox type="checkbox" onChange={handleCheckboxChange} />
      <Item isChecked={isChecked}>{props.item.text}</Item>
      <Delete onClick={handleDelete} />
    </ItemBox>
  );
};

export default TodoItem;
