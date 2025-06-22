import { useState } from 'react'

export default function AddToDo({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        className=" add-input flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
        placeholder="Add a task"
        value={text}
        onChange={e => setText(e.target.value)}

        
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 rounded-r hover:bg-black btn"
      >
        Add
      </button>
    </form>
  )
}
