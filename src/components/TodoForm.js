import React, { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";

const TodoForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id ? { id: t.id, todo } : { id: t.id, todo: t.todo }
      );

      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <form className="w-[500px] mb-12" onSubmit={handleSubmit}>
      <input
        className="w-11/12 rounded-3xl py-2 px-4 font-mono"
        type="text"
        placeholder="Enter a Task..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        required
        ref={inputRef}
      />
      <div className="my-3 space-x-4">
        <button className="button" type="submit">
          {editId ? "Edit Task" : "Add Task"}
        </button>
        {!isEmpty && (
          <button className="button" onClick={() => setTodos([])}>
            Clear All
          </button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
