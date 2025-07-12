function TodoItems(props) {
  return (
    <div>
      <h1 className="text-2xl font-bold border-2 border-blue-500">
        {props.item}
        <button
          onClick={() => props.onDelete(props.index)}
          className="bg-red-300 text-white p-0.5 rounded-md ml-5"
        >
          삭제
        </button>
      </h1>
    </div>
  );
}

export default TodoItems;
