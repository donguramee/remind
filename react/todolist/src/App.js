import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [enterPressed, setEnterPressed] = useState(false);
  const [nextId, setNextId] = useState(1);

  const addItem = () => {
    //만약 inputValue가 공백일때 alert을 띄움
    if (!inputValue.trim()) {
      alert("할 일을 입력하세요.");
    } else {
      //공백이 아니라면 새로운 id와 inputValue의 text를 가진 아이템을 생성
      const newItem = {
        id: new Date().getTime(),
        text: inputValue,
      };
      //todoList라는 배열에 새로운 아이템으로 넣기
      setTodoList([...todoList, newItem]);
      //inputValue는 다시 빈 객체의 상태로 되돌린다.
      setInputValue("");
    }
  };

  // enter키를 눌렸을때 실행되는 이벤트
  const handleInput = (event) => {
    setInputValue(event.target.value);
    //만약 이벤트키가 엔터이고 + 엔터가 상태가 false일때
    if (event.key === "Enter" && !enterPressed) {
      //enter키는 기본적으로 useState로 인해 false의 상태로 유지중이다가 enter키를 누르면 true로 상태가 변함
      setEnterPressed(true);
      //enter 이벤트가 이벤트버블링으로 인해 두번씩 실행되는걸 방지하는 preventDefault
      event.preventDefault();
      //addItem 함수 실행
      addItem();
    } else {
      //enter의 상태를 다시 false 이게 없으면 true로 유지되어 처음 아이템추가후엔 엔터가 작동안함
      setEnterPressed(false);
    }
  };

  //아이템 삭제버튼 이 함수는 itemId를 매개변수로 받음
  const handleDelete = (itemId) => {
    //updateTodoList라는 변수는 todoList의 item중 id가 같지 않은 객체들만 filter를 이용하여 새로운 배열을 만듦
    const updatedTodoList = todoList.filter((item) => item.id !== itemId);
    //새로운 배열을 TodoList의 배열로 업데이트
    setTodoList(updatedTodoList);
  };

  return (
    <main className="main">
      <h1>Todo List</h1>
      <label className="header">
        <input
          className="main-input"
          value={inputValue}
          type="text"
          placeholder="오늘 뭐하지 ?"
          onChange={handleInput}
          onKeyUp={handleInput}
        />
        <button
          className="button"
          onClick={() => {
            addItem();
          }}
        >
          추가
        </button>
      </label>
      <TodoBoard todoList={todoList} onDelete={handleDelete} />
    </main>
  );
}

export default App;
