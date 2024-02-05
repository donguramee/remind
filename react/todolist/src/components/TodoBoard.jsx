import React from "react";
import { Container, DateLabel } from "./TodoBoard.style"; // 가정: 스타일 컴포넌트에서 DateLabel을 사용
import TodoItem from "./TodoItem";

const TodoBoard = (props) => {
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

          {props.todoList.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}
        </Container>
      )}
    </>
  );
};

export default TodoBoard;
