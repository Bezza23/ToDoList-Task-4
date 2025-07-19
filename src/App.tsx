import { useState } from "react"
import ToDoForm from "./components/ToDoForm"
import ToDoList from "./components/ToDoLIst";


export interface Todo{
  id: number,
  text: string
}

const App = () => {
  const [todos,setTodos] = useState<Todo[]>([]);

  const handleAddTask = (text:string) => {
    const newTodo:Todo = {
      id: Date.now(),
      text: text,
    }

    setTodos([...todos,newTodo]);
  };

  const handleEditTask = (id:number, text:string) => {
    setTodos(todos.map(todo => (todo.id === id? {...todo,text: text}: todo)))
  }

  const handleDeleteTask = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  return (
    <div className="main-div">
      <h1>ToDo List</h1>
      <ToDoForm onAddTask={handleAddTask}/>;
      <ToDoList todos={todos} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask}/>
    </div>
  )
}

export default App
