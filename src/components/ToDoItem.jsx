import { useState } from 'react'

export default function ToDoItem({ todo, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  const toggleComplete = () =>
    onUpdate({ ...todo, completed: !todo.completed })

  const saveEdit = () => {
    const txt = draft.trim()
    if (!txt) return
    onUpdate({ ...todo, text: txt })
    setEditing(false)
  }

  return (
    <li className="flex items-center justify-between border rounded p-2 li-t">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
          className="h-5 w-5"
        />
        {editing ? (
          <input
            value={draft}
            onChange={e => setDraft(e.target.value)}
            className="border px-2 py-1 rounded flex-grow"
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        {editing ? (
          <button
            onClick={saveEdit}
            className="text-green-600 hover:underline"
          >
            <img className='h-8 w-8' src="/images/save.svg" alt="delete icon" />
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-blue-600 hover:underline"
          >
            <img className='h-8 w-8' src="/images/edit.svg" alt="delete icon" />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-600 hover:underline"
        >
          <img className='h-8 w-8' src="/images/delete.svg" alt="delete icon" />
        </button>
      </div>
    </li>
  )
}
