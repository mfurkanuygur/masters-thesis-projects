import PropTypes from 'prop-types'

const Modal = ({ message }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
            </div>
        </div>
    );
};

Modal.propTypes = {
    message: PropTypes.string,
}

export default Modal;