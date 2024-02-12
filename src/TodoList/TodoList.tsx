import { useEffect, useState } from 'react'

const TodoList = () => {
  const [items, setItems] = useState(['Buy milk', 'Buy bread'])

  // pretend this is a side effect that adds a new task on mount
  useEffect(() => {
    setItems(['Some other task'])
  })

  // make this work first…
  const handleClick = () => {
    items.push('Brush teeth')
    setItems(items)
  }

  // …then allow custom tasks to be added via an input field
  // instead of hardcoding the task in the handleClick function

  return (
    <div>
      <a onClick={handleClick}>Add Task</a>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
