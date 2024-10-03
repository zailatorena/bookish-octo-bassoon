import { useState } from 'react'
import { useAppContext } from '../context/AppContextProvider'

const TodoList = () => {
  const appContext = useAppContext()
  const [newTask, setNewTask] = useState<string>('')

  const onInputChange = (value: string) => {
    setNewTask(value)
  }

  // When the user clicks the "Add Task" link, a new (hardcoded) task should be added to the list.
  const handleClick = () => {
    if (appContext?.addItems) appContext?.addItems(newTask)
  }

  // Next, allow custom tasks to be added via an input field
  // instead of hardcoding the task in the handleClick function

  return (
    <div>
      <input
        onChange={(e) => onInputChange(e.target.value)}
        value={newTask}
        style={{ border: '1px solid black', display: 'block' }}
        placeholder="new task"
      />
      <button onClick={() => handleClick()}>Add Task</button>
      <ul>
        {appContext?.items.map((item) => (
          <li>
            <span>{item.value}</span>: <span>{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Finally, make sure all the tests in arc/app/app.spec.tsx are passing.
// Add missing functionality until they do.

export default TodoList
