import { useState } from "react";

interface TodoFormProps {
  onAddTask: (text: string) => void;
}

const ToDoForm = ({ onAddTask }: TodoFormProps) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      alert("Please enter a task");
      return;
    }

    onAddTask(inputText);
    setInputText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Task">Add Task:</label>
        <input
          type="text"
          id="Task"
          placeholder="Add a task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="main-btn">Add Task</button>
      </form>
    </>
  );
};

export default ToDoForm;
