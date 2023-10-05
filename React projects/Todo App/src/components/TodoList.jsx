import PropTypes from 'prop-types'
import { useState } from 'react'

const TodoList = ({ allTodos, setAllTodos }) => {
    const [isDisable, setIsDisable] = useState(false)
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
        <ul>
            {
                allTodos?.map((todo, id) => (
                    <li key={id} style={{ color: todo.isComplete ? "green" : "red" }}>
                        {todo.isEdit ?
                            (<div>
                                <input
                                    type="text"
                                    value={editTodoName}
                                    onChange={(e) => setEditTodoName(e.target.value)}
                                />
                                <button onClick={() => saveTodo(todo.id)}>Save</button>
                            </div>) :
                            (
                                <>
                                    {todo.name}
                                    <button onClick={() => { checkTodo(todo.id) }}>Check</button>
                                    <button disabled={isDisable} onClick={() => { editTodo(todo.id) }}>Edit</button>
                                    <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                                </>
                            )
                        }

                    </li>
                ))
            }
        </ul>
    )
}
TodoList.propTypes = {
    allTodos: PropTypes.array,
    setAllTodos: PropTypes.func
}

export default TodoList