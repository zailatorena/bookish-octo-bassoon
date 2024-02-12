import { useEffect, useRef, useState } from 'react'

type Status = `error` | `success` | `loading`

type BaseTodoListProps = {
  items?: string[] | null
  setItems: React.Dispatch<React.SetStateAction<string[]>>
  errorMessage?: string
  status?: Status
}

type TodoListErroredProps = BaseTodoListProps & {
  errorMessage: string
  status: `error`
  items?: never
}

type TodoListSuccessProps = BaseTodoListProps & {
  status: `success`
  items: string[]
}

type TodoListLoadingProps = BaseTodoListProps & {
  status: `loading`
}

type TodoListNoStatusProps = BaseTodoListProps & {
  status?: never
  errorMessage?: never
}

type TodoListProps =
  | TodoListErroredProps
  | TodoListSuccessProps
  | TodoListLoadingProps
  | TodoListNoStatusProps

const TodoList = ({ items, setItems, status, errorMessage }: TodoListProps) => {
  const [newItem, setNewItem] = useState(``)
  const initRef = useRef(false)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (initRef.current) return
    setItems((items) => [...items, 'Some other task'])
    initRef.current = true
  }, [setItems])

  const handleClick = (todo = `new todo`) => {
    if (!todo) return
    setItems((items) => [...items, todo])
    setNewItem(``)
    inputRef.current?.focus()
  }

  const isTouched = newItem !== ``

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className={`flex gap-2 m-4`}>
            <input
              ref={inputRef}
              className={`p-2 rounded`}
              type="text"
              placeholder="new task"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button
              disabled={isTouched ? false : true}
              className={isTouched ? `cursor-not-allowed opacity-50` : ``}
              onClick={() => handleClick(newItem)}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>

      {errorMessage && (
        <div className={`border bg-red-500/20 border-red-500 my-4 p-2`}>
          Error: {errorMessage}
          <br />
          Status: {status}
        </div>
      )}

      {items && items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
