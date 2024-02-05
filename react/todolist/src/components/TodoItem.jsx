import React from "react";
import { ItemBox, CheckBox, Delete, Item } from "./TodoItem.style";

const TodoItem = (props) => {
  return (
    <ItemBox>
      <CheckBox type="checkbox" />
      <Item>{props.item}</Item>
      <Delete />
    </ItemBox>
  );
};

export default TodoItem;
