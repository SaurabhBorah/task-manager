import { createContext, useRef, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [editId, setEditId] = useState(0);
  const inputRef = useRef();

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        isEmpty,
        setIsEmpty,
        editId,
        setEditId,
        inputRef,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
