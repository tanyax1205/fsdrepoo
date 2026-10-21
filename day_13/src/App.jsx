import React, { useState } from "react";

const App = () => {
  const [task, settask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, seteditIndex] = useState(null);

  const addHandler = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedList = [...todos];
      updatedList[editIndex] = task;
      setTodos(updatedList);
      seteditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    settask("");
  };

  const deleteHandler = (index) => {
    const updatedList = todos.filter((d, i) => i !== index);
    setTodos(updatedList);

    if (editIndex === index) {
      seteditIndex(null);
      settask("");
    } else if (editIndex !== null && editIndex > index) {
      seteditIndex(editIndex - 1);
    }
  };

  const editHandler = (index) => {
    settask(todos[index]);
    seteditIndex(index);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        value={task}
        onChange={(e) => settask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addHandler}>
        {editIndex !== null ? "UPDATE" : "ADD"}
      </button>

      <br />
      <br />

      {todos.map((todo, index) => (
        <div key={index}>
          <span>{todo} </span>

          <button onClick={() => editHandler(index)}>EDIT</button>

          <button onClick={() => deleteHandler(index)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default App;
