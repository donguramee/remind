import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    if (!inputValue.trim()) {
      alert("오늘 할일이 뭘까요 ?");
      return;
    }
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && !event.enterKey) {
      event.preventDefault();
      addItem();
    }
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
          onChange={(event) => setInputValue(event.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button onClick={addItem}>추가</button>
      </label>
      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
