import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { Todoinput } from "./components/TodoInput";
import { useState } from "react";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the gecories", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([{ input: "Hello! Add your first todo!", complete: true }])

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
  }

  function handleEditTodo(){

  }

  function handleDeleteTodo(){

  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <Todoinput  handleAddTodo={ handleAddTodo }/>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
