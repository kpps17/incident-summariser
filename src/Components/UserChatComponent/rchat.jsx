import "./rchat.css";
import React from "react";

export default function RightChat (props) {
    return <div className = "right-chat-msg" style = {{marginTop: (props.top + "px"), marginBottom: (props.bottom + "px")}}>
        <div className = "crblank-space"></div><div className = "chat-msg-data"><label id = "chat-text">{props.text}</label></div>
        <div className = "user-profil">{typeof props.profil === "string" && <img src = {props.profil} width = "32px" height = "32px" alt = ''/>}</div>
    </div>;
}
