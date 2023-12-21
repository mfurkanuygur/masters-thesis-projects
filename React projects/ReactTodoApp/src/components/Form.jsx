import { useRef, useState } from "react"
import PropTypes from 'prop-types'
import Modal from "./Modal";

const Form = ({ allTodos, setAllTodos }) => {
    const inputRef = useRef()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeAfterDelay = () => {
        setTimeout(() => {
            setIsModalOpen(false);
        }, 1500);
    };

    const addItem = (e) => {
        e.preventDefault();
        inputRef.current.value == "" ?
            (
                setIsModalOpen(true),
                closeAfterDelay()
            ) :
            setAllTodos([{
                id: self.crypto.randomUUID(),
                name: inputRef.current.value,
                isComplete: false,
                isEdit: false
            }, ...allTodos]);
        inputRef.current.value = "";
    }

    return (
        <div>
            <form onSubmit={(e) => addItem(e)}>
                <input type="text" placeholder="Please enter a content!" ref={inputRef} />
                <button type="submit">Add</button>
            </form>
            {isModalOpen && (
                <Modal message="Please enter a content !!!" />
            )}
        </div>
    )
}

Form.propTypes = {
    allTodos: PropTypes.array,
    setAllTodos: PropTypes.func
}
export default Form