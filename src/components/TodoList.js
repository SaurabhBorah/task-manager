import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../providers/TodoProvider";

const TodoList = () => {
  const {
    todo,
    setTodo,
    todos,
    setTodos,
    isEmpty,
    setIsEmpty,
    editId,
    setEditId,
    inputRef,
  } = useContext(TodoContext);

  return (
    <ul className="h-[350px] w-[460px] overflow-auto no-scrollbar m-auto">
      {todos.map((t) => {
        return <TodoItem key={t.id} t={t} />;
      })}
    </ul>
  );
};

export default TodoList;
