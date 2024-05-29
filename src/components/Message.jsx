import PropTypes from 'prop-types';
import './Message.css'; 

const Messages = ({ text, sender }) => {
    return (
        <div className={`message ${sender}`}>
            <p>{text}</p>
        </div>
    );
};

Messages.propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
};

export default Messages;
