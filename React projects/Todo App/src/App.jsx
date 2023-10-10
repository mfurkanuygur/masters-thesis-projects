import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList';
function App() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <main>
      <h1>Erciyes University Master Project</h1>
      <h2>Todo App With React</h2>
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      <ul>
        {
          allTodos?.length > 0 ? <TodoList allTodos={allTodos} setAllTodos={setAllTodos} /> : <div className='message'>No content added yet</div>
        }
      </ul>

    </main>
  )
}

export default App
