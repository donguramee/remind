import React, { useState } from "react"; // useState import 추가
import {
  Container,
  DateLabel,
  ItemBox,
  CheckBox,
  Delete,
  Item,
} from "./TodoBoard.style"; // 중복된 import 제거

const TodoBoard = (props) => {
  const [isChecked, setIsChecked] = useState(false); // isChecked 상태 설정

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
          {/* props.todoList.map을 사용하여 TodoItem 렌더링 */}
          {props.todoList.map((item) => (
            <ItemBox key={item.id} isChecked={isChecked}>
              <CheckBox
                type="checkbox"
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <Item type={CheckBox} isChecked={isChecked}>
                {item.text}
              </Item>
              <Delete
                onClick={() => {
                  props.onDelete(item.id); // item.id로 변경
                }}
              />
            </ItemBox>
          ))}
        </Container>
      )}
    </>
  );
};

export default TodoBoard;
