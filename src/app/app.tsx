import './app.css'
import TodoList from '../TodoList/TodoList'
import Layout from '../Layout'

function App() {
  return (
    <Layout
      complementary={
        <p>
          You have <strong>×</strong> total tasks.
        </p>
      }
    >
      <TodoList />
    </Layout>
  )
}

export default App
