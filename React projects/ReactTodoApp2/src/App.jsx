import { useState } from "react";
import "./App.css";

function App() {
  const [editState, setEditState] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setTodos([
        {
          id: self.crypto.randomUUID(),
          name: inputValue,
          isComplete: false,
        },
        ...todos,
      ]);
    }
    setInputValue("");
  };
  const handleDelete = (todoID) => {
    setTodos(todos.filter(todo => todo.id !== todoID))
  }
  const handleComplete = (todo) => {
    // const changeComplete = todos.find(i => i.id === todoID)
    // changeComplete.isComplete = !changeComplete.isComplete
    // setTodos([...todos])
    todo.isComplete = !todo.isComplete
    setTodos([...todos])
  }

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setEditState(!editState);
    setInputValue(todo.name);
  };
  const handleSaveTodo = (e) => {
    e.preventDefault();
    setEditState(!editState);
    const updatedTodo = todos.map((todo) => {
      if (todo.id === editTodo.id) {
        return { ...todo, name: inputValue };
      }
      return todo;
    });
    setTodos(updatedTodo);
    setInputValue("");
  };

  const handleUpdate = (e) => {
    setInputValue(e.target.value);
    const updatedTodo = todos.map((todo) => {
      if (todo.id === editTodo.id) {
        return { ...todo, name: inputValue };
      }
      return todo;
    });
    updatedTodo.name = inputValue
    setTodos(updatedTodo);
  };

  return (
    <main>
      {!editState &&
        (<form onSubmit={(e) => handleAddTodo(e)}>
          <input
            type="text"
            placeholder="Please enter a todo!"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="form-button">
            <i className="fa-solid fa-square-plus fa-xl icon"></i>

          </button>
        </form>)
        ||
        (<form onSubmit={(e) => handleSaveTodo(e)}>
          <input
            type="text"
            placeholder="Please edit todo!"
            value={inputValue}
            onChange={(e) => {
              handleUpdate(e);
            }}
          />
          <button className="form-button">
            <i className="fa-solid fa-floppy-disk fa-xl icon"></i>
          </button>
        </form>)
      }
      {todos?.map((todo) => (
        <div key={todo.id} className={"todo-container" + (todo.isComplete ? " active" : "")} >
          <p className={"todo-name " + (todo.isComplete ? "done" : "")}> {todo.name}</p>
          <div className="todo-buttons">
            <button className="todo-button" onClick={() => { handleDelete(todo.id) }}>
              <i className="fa-solid fa-trash-can fa-xl"></i>
            </button>
            <button className={"todo-button" + (todo.isComplete ? " tick" : "")} onClick={() => { handleComplete(todo) }}>
              <i className="fa-solid fa-circle-check fa-xl"></i>
            </button>
            <button className="todo-button" disabled={editState} onClick={() => { handleEditTodo(todo) }}>
              <i className="fa-solid fa-pen fa-xl"></i>
            </button>
          </div>
        </div >
      ))
      }
    </main>
  );
}

export default App;
