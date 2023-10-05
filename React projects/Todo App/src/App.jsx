import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <main>
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      {
        allTodos?.length>0 ? <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>:<div>Henüz bir todo eklemediniz</div>
      }
       {/* <TodoList allTodos={allTodos}/> */}
    </main>
  )
}

export default App
