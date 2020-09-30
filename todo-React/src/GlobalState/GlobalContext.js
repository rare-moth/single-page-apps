import React, { createContext, useState } from "react";

export const Context = createContext();

export const GlobalContext = ({ children }) => {
  // global state
  const [todoList, setTodoList] = useState([]);

  // adding new task in todo list
  const addTodo = (todo) => {
    console.log(todo);
    const list = [...todoList];
    list.push(todo);
    setTodoList(list);
  };

  // removing task from todo list
  const deleteTodo = (id) => {
    const newList = [...todoList];
    newList.splice(id, 1);
    setTodoList(newList);
  };

  return (
    <Context.Provider value={{ todoList, addTodo, deleteTodo }}>
      {children}
    </Context.Provider>
  );
};
