import { useRef } from "react"
import PropTypes from 'prop-types'
// import Modal from "./Modal";

const TodoForm = ({ allTodos, setAllTodos }) => {
    const inputRef = useRef()
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const closeAfterDelay = () => {
    //     setTimeout(() => {
    //         setIsModalOpen(false);
    //     }, 1500);
    // };

    const addItem = (e) => {
        e.preventDefault();
        if (inputRef.current.value !== "") {
            setAllTodos([{
                id: self.crypto.randomUUID(),
                name: inputRef.current.value,
                isComplete: false,
                isEdit: false
            }, ...allTodos]);
            inputRef.current.value = "";
        }
    }

    return (
        <form onSubmit={(e) => addItem(e)}>
            <input type="text" placeholder="Please enter a todo!" ref={inputRef} />
            <button type="submit">
                <i className="fa-solid fa-square-plus fa-xl addIcon"></i>
            </button>
        </form>
    )
}

{/* {isModalOpen && (
    <Modal message="Please enter a content !!!" />
)} */}
TodoForm.propTypes = {
    allTodos: PropTypes.array,
    setAllTodos: PropTypes.func
}
export default TodoForm