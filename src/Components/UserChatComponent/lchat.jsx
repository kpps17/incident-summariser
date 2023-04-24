import "./lchat.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LeftChat (props) {
    const handleClick = () => {
        toast.success('Feedback captured!');
    };
    return <div className = "left-chat-msg" style = {{marginTop: (props.top + "px"), marginBottom: (props.bottom + "px")}}>
        <div className = "user-profil">{typeof props.profil === "string" && <img src = {props.profil} width = "32px" height = "32px" alt = ''/>}</div>
        <div className = "chat-msg-data"><label id = "chat-text">{props.text}</label>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faThumbsUp} onClick={handleClick}/>&nbsp;&nbsp;<FontAwesomeIcon icon={faThumbsDown} onClick={handleClick}/>
        </div>
        <ToastContainer />
    </div>;
}
