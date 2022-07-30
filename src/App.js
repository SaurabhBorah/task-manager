import React, { useContext, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContext } from "./providers/TodoProvider";

const App = () => {
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

  useEffect(() => {
    if (todos.length === 0) {
      setIsEmpty(true);
    }
  }, [todos]);

  return (
    <div className="bg-[#282c34] min-h-screen flex justify-center items-center text-center">
      <div className="bg-blue-300 rounded p-[20px] h-[85vh]">
        <h1 className="text-4xl font-mono font-bold mt-4 mb-8">Task Manager</h1>
        <TodoForm />
        {isEmpty && <span className="font-mono text-2xl">No Tasks</span>}
        <TodoList />
      </div>
    </div>
  );
};

export default App;
