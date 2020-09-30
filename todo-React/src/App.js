import React from "react";
import TodoHeader from "./components/TodoHeader";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="App container mx-auto">
      <TodoHeader />
      <TaskList />
    </div>
  );
}

export default App;
