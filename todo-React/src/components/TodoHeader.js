import React, { useContext, useState } from "react";

import { Context } from "../GlobalState/GlobalContext";

const TodoHeader = () => {
  const { addTodo } = useContext(Context);

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const clean = () => {
    setTask("");
    setDescription("");
  };
  return (
    <div className="todoHeader">
      <h3>Todo Application</h3>
      <div className="form-group">
        <input
          type="text"
          value={task}
          className="form-control"
          placeholder="Task"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          value={description}
          className="form-control"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          addTodo({ task, description });
          clean();
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoHeader;
