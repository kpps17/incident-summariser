import DateTime from "./datetime.js";
import "./ChatMessageEditor.css";
import React from "react";
import restHelper from '../commons/Utils'
import {baseUrl, ticket} from "../../Assets/endpoints";


export default class ChatMessageEditor extends React.PureComponent {
	constructor (props) {
        // Calls the parent constructor.
        super(props);
        // Attributes.
        this.input = React.createRef();
        this.handleSendMessage = this.handleSendMessage.bind(this)
    }

    handleMessageEnter = (userId, sessionId, ticketId, pageId) => {
        let value = this.input.current.value.trim();
        if (!value.length) return;
        this.handleSendMessage(false, value);
        this.input.current.value = String('');

        const endpoint = `${baseUrl}/chat/${pageId}/send`
        const payload = (pageId === ticket) ? {
            userId: userId,
            sessionId: sessionId,
            ticketId: ticketId,
            question: value
        } : {
            userId: userId,
            sessionId: sessionId,
            ctiId: ticketId,
            question: value
        }
        restHelper(endpoint, payload)
            .then((res) => {
                this.handleSendMessage(true, res.data.response)
            })
    }

    handleSendMessage = (bool, value) => {
        this.props.sendMessage(DateTime.get_datetime(), bool, value);
    }

    render() {
        const {userId, sessionId, ticketId, pageId} = this.props;
        return (
            <div className = "message-editior">
                {/* Message input field */}
                <div className = "msg-editor" title = "Write your message here.">
                    {/* Message value */}
                    <input ref = {this.input} type = "text" placeholder = "Send a message..." onKeyDown = {e => {if (e.key === "Enter") this.handleMessageEnter (userId, sessionId, ticketId, pageId)}}/>
                </div>
                {/* Emoji icon container */}
                <div className = "emoji-icon" title = "Add an emoji expression.">
                    {/* Vector representation */}
                    <svg viewBox = "0 0 496 512" width = "24px" height = "24px" fill = "silver">
                        <path d = {`M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 
                168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 
                32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm80 
                256c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.3-21.6 20.7-17.9C155.1 330.5 200 336 248 
                336s92.9-5.5 123.1-15.2c11.3-3.7 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3z`}/>
                    </svg>
                </div>
                {/* Sender icon representation */}
                <div className = "sender-icon" title = "Send this message." onClick = {this.__send_message}>
                    {/* Vector representation */}
                    <svg viewBox = "0 0 24 24" width = "36px" height = "36px" fill = "silver">
                        <g><path d = {`M21.5,11.1l-17.9-9C2.7,1.7,1.7,2.5,2.1,3.4l2.5,6.7L16,12L4.6,13.9l-2.5,6.7c-0.3,0.9,0.6,
                1.7,1.5,1.2l17.9-9 C22.2,12.5,22.2,11.5,21.5,11.1z`}/></g>
                    </svg>
                </div>
            </div>
        )
    }
}
