import { useState } from 'preact/hooks';
import './app.css'
import TodoForm from './components/TodoForm'
import SingleTodo from './components/SingleTodo'

export function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [isDisable, setIsDisable] = useState(false)

  return (
    <main>
      <h1>Erciyes University</h1>
      <h2>Master Project</h2>
      <h3>Todo App With Preact</h3>
      <TodoForm allTodos={allTodos} setAllTodos={setAllTodos} />
      {
        allTodos?.map(todo => (
          < SingleTodo allTodos={allTodos} setAllTodos={setAllTodos} isDisable={isDisable} setIsDisable={setIsDisable} todo={todo} key={todo.id} />
        ))
      }

    </main>
  )
}
