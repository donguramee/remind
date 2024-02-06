import React, { useState } from "react";
import { ItemBox, CheckBox, Delete, Item } from "./TodoItem.style";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ItemBox isChecked={isChecked}>
      <CheckBox type="checkbox" onChange={handleCheckboxChange} />
      <Item isChecked={isChecked}>{props.item}</Item>
      <Delete />
    </ItemBox>
  );
};

export default TodoItem;
