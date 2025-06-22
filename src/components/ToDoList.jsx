import ToDoItem from './ToDoItem'

export default function ToDoList({ todos, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-700 ">No tasks yet!</p>
  }
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
