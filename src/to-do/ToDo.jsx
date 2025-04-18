import React, { useState } from "react";

export default function ToDo() {
  const [taskInput, setTaskInput] = useState("");
  const [todoList, setTodoList] = useState(["Buy eggs", "Watch a movie"]);

  function handleInput(e) {
    setTaskInput(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    setTodoList([...todoList, taskInput]);
    setTaskInput(""); // clear input after adding
  }

  return (
    <div className="max-w-[500px] mx-auto">
      <ul>
        {todoList.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <form onSubmit={handleAddTask}>
        <input
          className="outline mr-4 p-4 mt-4"
          type="text"
          placeholder="Enter task here"
          value={taskInput}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="bg-blue-200 p-4 rounded-full hover:bg-blue-500 cursor-pointer"
        >
          Add task
        </button>
      </form>
    </div>
  );
}
