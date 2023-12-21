import { useState } from 'preact/hooks';
import './app.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

export function App() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <main>
      <h1>Erciyes University Master Project</h1>
      <h2>Todo App With Preact</h2>
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      <ul>
        {
          allTodos?.length > 0 ? <TodoList allTodos={allTodos} setAllTodos={setAllTodos} /> : <div className='message'>No content added yet</div>
        }
      </ul>

    </main>
  )
}
