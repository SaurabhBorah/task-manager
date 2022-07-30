import React, { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";

const TodoItem = ({ t }) => {
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

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);

    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    inputRef.current.focus();
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <>
      <li className="flex justify-between items-center bg-gray-500 px-3 py-2 rounded-lg mb-2">
        <span className="font-mono text-white">{t.todo}</span>
        <span className="space-x-2 flex">
          <button className="button" onClick={() => handleEdit(t.id)}>
            Edit
          </button>
          <button className="button" onClick={() => handleDelete(t.id)}>
            Delete
          </button>
        </span>
      </li>
    </>
  );
};

export default TodoItem;
