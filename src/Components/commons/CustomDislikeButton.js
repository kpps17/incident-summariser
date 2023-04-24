import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DislikeIcon = (props) => {
    const handleClick = () => {
        toast.success('Feedback captured!');
    };

    return (
        <div onClick={handleClick}>
            <FontAwesomeIcon icon={faThumbsDown} />
        </div>
    );
};

export default DislikeIcon;
