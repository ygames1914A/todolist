import { createContext, useContext, useEffect, useState } from "react";
import App from "../App";

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [task, setTask] = useState(() => {
    const tasks = localStorage.getItem("tasks");   
    return tasks ? JSON.parse(tasks) : [];
  });
  const [input, setInput] = useState();
  const [edit, setEdit] = useState(false);
  const [item, setitem] = useState();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
    setInput("");

  }, [task])
  

  return (
    <TodoContext.Provider
      value={{ task, setTask, input, setInput, edit, setEdit, item, setitem }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext)
