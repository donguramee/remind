import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };
  return (
    <main>
      <div className="input-container">
        <input
          className="textInput"
          value={inputValue}
          type="text"
          placeholder="오늘 뭐하지 ?"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={addItem}>추가</button>
      </div>
      <TodoBoard todoList={todoList} />
    </main>
  );
}
export default App;
