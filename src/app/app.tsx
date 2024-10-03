import './app.css'
import TodoList from '../TodoList/TodoList'
import Layout from '../Layout'
import { useAppContext } from '../context/AppContextProvider'

function App() {
  const appContext = useAppContext()
  return (
    <Layout
      complementary={
        <p>
          You have <strong>{appContext?.items.length}</strong> total tasks.
        </p>
      }
    >
      <TodoList />
    </Layout>
  )
}

export default App
