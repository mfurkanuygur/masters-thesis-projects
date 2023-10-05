import { useRef } from "react"
import PropTypes from 'prop-types'

const Form = ({ allTodos, setAllTodos }) => {
    const inputRef = useRef()

    const addItem = (e) => {
        e.preventDefault();
        inputRef.current.value == "" ? alert("lütfen bir todo gir") :
            setAllTodos([{
                id: self.crypto.randomUUID(),
                name: inputRef.current.value,
                isComplete: false,
                isEdit: false
            }, ...allTodos]);
        inputRef.current.value = "";
    }
    return (
        <form onSubmit={(e) => addItem(e)}>
            <input type="text" placeholder="Lütfen bir içerik giriniz!" ref={inputRef} />
            <button type="submit">Add</button>
        </form>
    )
}

Form.propTypes = {
    allTodos: PropTypes.array,
    setAllTodos: PropTypes.func
}
export default Form