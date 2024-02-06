import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [enterPressed, setEnterPressed] = useState(false);

  const addItem = () => {
    if (!inputValue.trim()) {
      alert("오늘 할일이 뭘까요 ?");
    } else {
      setTodoList([...todoList, inputValue]);
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
      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
