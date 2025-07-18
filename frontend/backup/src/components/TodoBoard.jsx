import TodoItems from "./TodoItems";

function TodoBoard(props) {
  console.log(props);
  console.log(props.todoList);
  return (
    <div>
      <h1 className="mt-5">TodoList</h1>
      {props.todoList.map((value, index) => (
        <TodoItems item={value} index={index} onDelete={props.onDelete} />
      ))}
    </div>
  );
}

export default TodoBoard;
