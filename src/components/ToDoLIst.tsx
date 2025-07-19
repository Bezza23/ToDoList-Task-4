import { type Todo } from "../App"

interface ToDoProps{
    todos: Todo[],
    onEditTask: (id:number,newTask:string) => void,
    onDeleteTask: (id:number) => void
}

const ToDoLIst = ({todos,onEditTask,onDeleteTask}:ToDoProps) => {
  const handleEditClick = (id:number, text:string) => {
        const editedTask = prompt('Edit your task',text);

        if (editedTask){
            onEditTask(id,editedTask)
        }
    }

    return (
        <div>
            <ul>
                {todos.map(todo => (<li key={todo.id}>
                    <span>{todo.text}</span>
                    <div className="other-btn">
                        <button className="edit" onClick={() => handleEditClick(todo.id,todo.text)}>Edit</button>
                        <button className="delete" onClick={() => onDeleteTask(todo.id)}>Delete</button>
                    </div>
                </li>))}
            </ul>
        </div>
    )
}

export default ToDoLIst