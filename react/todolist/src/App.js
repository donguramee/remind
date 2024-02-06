import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [enterPressed, setEnterPressed] = useState(false);
  const [nextId, setNextId] = useState(1); // 새로운 아이템을 추가할 때 사용할 ID

  const addItem = () => {
    if (!inputValue.trim()) {
      alert("할 일을 입력하세요.");
    } else {
      const newItem = {
        id: new Date().getTime(), // 간단하게 현재 시간을 이용한 id 생성
        text: inputValue,
      };

      setTodoList([...todoList, newItem]);
      setInputValue("");
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && !enterPressed) {
      setEnterPressed(true);
      event.preventDefault(); //엔터이벤트 두번째 실행시 정지
      addItem();
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setEnterPressed(false);
  };

  const handleButtonClick = () => {
    addItem();
  };

  const handleDelete = (itemId) => {
    const updatedTodoList = todoList.filter((item) => item.id !== itemId);
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
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
        <button className="button" onClick={handleButtonClick}>
          추가
        </button>
      </label>
      <TodoBoard todoList={todoList} onDelete={handleDelete} />
    </main>
  );
}

export default App;
