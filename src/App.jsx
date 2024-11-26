import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { Todoinput } from "./components/TodoInput";
import { useState, useEffect } from "react";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the gecories", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  // function handleCompleteTodo(index) {
  //   let newTodoList = [...todos];
  //   let completeTodo = todos[index];
  //   completeTodo["complete"] = true;
  //   newTodoList[index] = completeTodo;
  //   setTodos(newTodoList);
  // }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]; // Create a shallow copy of the array
    newTodoList[index] = { ...todos[index], complete: true }; // Create a copy of the specific todo object and update it immutably
    setTodos(newTodoList); // Update the state
    handleSaveData(newTodoList); // Save the updated list to localStorage
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    console.log("here");
    // let db =[]
    // if(localStorage.getItem('todo-app')){
    let db = JSON.parse(localStorage.getItem("todo-app"));

    setTodos(db.todos);
    //}
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Todoinput handleAddTodo={handleAddTodo} />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        selectedTab={selectedTab}
      />
    </>
  );
}

export default App;
