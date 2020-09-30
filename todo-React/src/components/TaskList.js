import React, { useContext } from "react";

import { Context } from "../GlobalState/GlobalContext";
const TaskList = () => {
  const { todoList, deleteTodo } = useContext(Context);
  return (
    <div className="tasklist">
      {todoList.map((el, i) => (
        <div className="task" key={i}>
          <h5>{el.task}</h5>
          <button
            className="btn btn-info btn-sm"
            type="button"
            data-toggle="collapse"
            data-target={`#desc-${i}`}
          >
            Description
          </button>
          <button
            className="btn btn-danger btn-sm ml-4"
            onClick={() => {
              deleteTodo(i);
            }}
          >
            Remove
          </button>
          <div className="collapse description" id={`desc-${i}`}>
            <h6>Description :</h6>
            <small>{el.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
