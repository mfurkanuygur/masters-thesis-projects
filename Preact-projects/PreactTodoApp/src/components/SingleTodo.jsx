// import PropTypes from 'prop-types'
import { useState } from 'preact/hooks';
const SingleTodo = ({ todo, allTodos, setAllTodos, isDisable, setIsDisable }) => {
    const [editTodoName, setEditTodoName] = useState("")

    const deleteTodo = (todoId) => {
        const filteredTodos = allTodos.filter(i => i.id != todoId)
        setAllTodos(filteredTodos)
    }

    const checkTodo = (todoId) => {
        const changeTodoColor = allTodos.find(i => i.id === todoId)
        changeTodoColor.isComplete = !changeTodoColor.isComplete
        setAllTodos([...allTodos])
    }

    const editTodo = (todoId) => {
        const editTodoState = allTodos.find(i => i.id == todoId);
        editTodoState.isEdit = !editTodoState.isEdit
        setEditTodoName(editTodoState.name)
        setAllTodos([...allTodos])
        setIsDisable(!isDisable)
    }
    const saveTodo = (todoId) => {
        const editTodoState = allTodos.find(i => i.id == todoId);
        editTodoState.isEdit = !editTodoState.isEdit
        editTodoState.name = editTodoName
        setAllTodos([...allTodos])
        setIsDisable(!isDisable)
    }
    return (
        <div >
            {todo.isEdit ?
                (<form className='edit-form'>
                    <input
                        type="text"
                        value={editTodoName}
                        onChange={(e) => setEditTodoName(e.target.value)}
                    />
                    <button onClick={() => saveTodo(todo.id)}>
                        <i className="fa-solid fa-floppy-disk fa-xl save-icon"></i>
                    </button>
                </form>) :
                (
                    <div className={`todo-container ${todo.isComplete && "active"}`}>
                        <p className={`todo-name ${todo.isComplete && "done"}`}>{todo.name}</p>
                        <div className='todo-buttons'>
                            <button className='todo-button' onClick={() => { deleteTodo(todo.id) }} aria-label="delete">
                                <i className="fa-solid fa-trash-can fa-xl"></i>
                            </button>
                            <button className='todo-button' disabled={isDisable} onClick={() => { editTodo(todo.id) }} aria-label="edit">
                                <i className="fa-solid fa-pencil fa-xl"></i>
                            </button>
                            <button className='todo-button' onClick={() => { checkTodo(todo.id) }} aria-label="check">
                                <i className={`fa-solid fa-circle-check fa-xl ${todo.isComplete && "tick"}`}  ></i>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
// TodoList.propTypes = {
//     allTodos: PropTypes.array,
//     setAllTodos: PropTypes.func
// }

export default SingleTodo