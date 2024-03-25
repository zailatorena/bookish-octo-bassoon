import { useEffect, useState } from 'react'

const TodoList = () => {
  const [items, setItems] = useState(['Buy milk', 'Buy bread'])

  // The list should contain 3 tasks after the component mounts. Two tasks are hardcoded in the initial state (above) and the third task is added via the useEffect hook.
  useEffect(() => {
    setItems(['Some other task'])
  })

  // When the user clicks the "Add Task" link, a new (hardcoded) task should be added to the list.
  const handleClick = () => {
    items.push('Brush teeth')
    setItems(items)
  }

  // Next, allow custom tasks to be added via an input field
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

// Finally, make sure all the tests in arc/app/app.spec.tsx are passing.
// Add missing functionality until they do.

export default TodoList
