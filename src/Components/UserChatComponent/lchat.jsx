import "./lchat.css";
import React from "react";

export default function LeftChat (props) {
    return <div className = "left-chat-msg" style = {{marginTop: (props.top + "px"), marginBottom: (props.bottom + "px")}}>
        <div className = "user-profil">{typeof props.profil === "string" && <img src = {props.profil} width = "32px" height = "32px" alt = ''/>}</div>
        <div className = "chat-msg-data"><label id = "chat-text">{props.text}</label></div>
    </div>;
}
