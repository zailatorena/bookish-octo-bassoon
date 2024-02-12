import { useState } from 'react'
import './app.css'
import TodoList from '../TodoList/TodoList'
import Layout from '../Layout'

function App() {
  const [items, setItems] = useState(['Buy milk', 'Buy bread'])

  return (
    <Layout
      complementary={
        <p>
          You have <strong>{items.length}</strong> total tasks.
        </p>
      }
    >
      <TodoList items={items} setItems={setItems} status="success" />
    </Layout>
  )
}

export default App
