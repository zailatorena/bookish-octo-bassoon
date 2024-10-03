import { useEffect, useState } from 'react'

export type IAddItems = (newTask: string) => void
export interface ITask {
  value: string
  status: string
}

export const initialTasks: ITask[] = [
  { value: 'Buy milk', status: 'Pending' },
  { value: 'Buy bread', status: 'Pending' },
]

export const useTask = () => {
  const [items, setItems] = useState<ITask[]>(initialTasks)
  // The list should contain 3 tasks after the component mounts. Two tasks are hardcoded in the initial state (above) and the third task is added via the useEffect hook.
  useEffect(() => {
    setItems((prevItems) => [
      ...prevItems,
      { value: 'Some other task', status: 'New' },
    ])
  }, [])
  const addItems: IAddItems = (newTask: string) => {
    setItems((prevItems) => [...prevItems, { value: newTask, status: 'New' }])
  }
  return { items, addItems }
}
