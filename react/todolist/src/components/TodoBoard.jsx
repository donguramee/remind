import React from "react";
import { Container, DateLabel } from "./TodoBoard.style";
import TodoItem from "./TodoItem";

const TodoBoard = (props) => {
  const handleDelete = (itemId) => {
    const updatedTodoList = props.todoList.filter((item) => item.id !== itemId);
    props.onDelete(updatedTodoList);
  };

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  return (
    <>
      {props.todoList.length > 0 && (
        <Container>
          <DateLabel>Date: {getFormattedDate()}</DateLabel>

          {props.todoList.map((item) => (
            <TodoItem key={item.id} item={item} onDelete={props.onDelete} />
          ))}
        </Container>
      )}
    </>
  );
};

export default TodoBoard;
