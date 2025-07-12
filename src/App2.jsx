import { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function App2() {
  const [inputValue, setInputValue] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const handleAdd = (e) => {
    setTodoList([...todoList, inputValue]);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (indexTodelete) => {
    const newTodoList = todoList.filter((_, index) => index !== indexTodelete);
    setTodoList(newTodoList);
  };



  return (
    <div>
      <h1>App2</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAdd}>추가</button>

      <TodoBoard todoList={todoList} onDelete={handleDelete} />
    </div>
  );
}

export default App2;
