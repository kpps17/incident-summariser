import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const likeIcon = (props) => {
    const handleClick = () => {
        toast.success('Feedback captured!');
    };

    return (
        <div onClick={handleClick}>
            <FontAwesomeIcon icon={faThumbsUp} />
        </div>
    );
};

export default likeIcon;