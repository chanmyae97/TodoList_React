import { useState } from "react";

export function Todoinput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState("");

  const handleShortcutKey = () => {
    if (!inputValue) return;
    handleAddTodo(inputValue);
    setInputValue("");
  };

  // console.log(inputValue);
  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleShortcutKey();
        }}
        placeholder="Add Task"
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
