/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-17
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.0.4
*/

// Dependencies.
import RightChat from "./rchat.jsx";
import LeftChat from "./lchat.jsx";
import "./UserChatComponent.css";
import React from "react";
import './style.css'
import lodash from "lodash";
import DateTime from "./datetime";
import ChatMessageEditor from "./ChatMessageEditor";
import userProfile from '../../Assets/userAvatar.jpg'
import chatBot from '../../Assets/amazonChatBot.jpg'
/*
* @description: Builds chat messages context view.
* @type: UI
*/



export default class UserChatComponent extends React.PureComponent {
    /*
    * @description: Builds view instance.
    * @parameters:
    *   -> Object props: Contains class properties.
    * @return: void
    */
    constructor (props) {
        // Calls the parent constructor.
        super (props);
        // Global attributes.
        this.chat_context = React.createRef ();
        this.state = {
            active_index: 0,
            chats: [
                {
                    label: "This message isn't...",
                    name: "Lumia Noella",
                    date: "9/3/2022",
                    profil: chatBot,
                    data: [
                        {
                            datetime: DateTime.get_datetime(),
                            messages: [
                                {is_contact: true, text: "Hi, how can I help you today?"},
                            ]
                        }
                    ]
                }
            ]
        };
    }

    /*
    * @description: Sets active user contact index.
    * @parameters:
    *   -> int id: Contains the new value of index.
    * @return: void
    */
    __set_active_contact_index = new_index => this.setState ({active_index: new_index});

    /*
    * @description: Sends a written message to another connected user.
    * @parameters:
    *   -> String datetime: What the current datetime for message to send ?
    *   -> bool is_contact: Is it from the main user or his contact ?
    *   -> String message: Contains the message to be sent.
    * @return: void
    */
    sendMessage = (datetime, is_contact, message) => {
        // Gets chats data.
        let chats = lodash.cloneDeep (this.state.chats), today = (datetime.split (',')[0] + ", " + new Date ().getFullYear ());
        // Gets chat datetime index.
        let index = chats[this.state.active_index].data.findLastIndex (item => {
            // Returns the imposed constraint.
            return ((item.datetime.split (',')[0] + ", " + new Date ().getFullYear ()) === today);
        });
        // The given datetime is it defined ?
        if (index > -1) chats[this.state.active_index].data[index].messages.push ({is_contact: is_contact, text: message});
        // Adds the current message with the given datetime for today.
        else chats[this.state.active_index].data.push ({datetime: DateTime.get_datetime (), messages: [{is_contact: is_contact, text: message}]});
        // Updates the global state.
        this.setState ({chats: chats});
        // Moves the scrollbar at the full bottom.
        setTimeout (() => this.chat_context.current.scroll_to_bottom (), 20);
    }

    /*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
    render = () => <div className = "chat-workspace">
            {/* Chat context */}
            <Chat chats = {this.state.chats[this.state.active_index].data} userProfil = {userProfile}
                         contactProfil = {this.state.chats[this.state.active_index].profil} ref = {this.chat_context}/>
            {/* Message editor */}
            <ChatMessageEditor sendMessage={this.sendMessage} userId={this.props.alias} ticketId={this.props.ticketId}
                               sessionId={this.props.sessionId}/>
        </div>
}


class Chat extends React.PureComponent {
    /*
    * @description: Builds view instance.
    * @parameters:
    *   -> Object props: Contains class properties.
    * @return: void
    */
    constructor (props) {
        // Calls the parent constructor.
        super (props);
        // Global attributes.
        this.container = React.createRef ();
    }

    /*
    * @description: Moves the scrollbar at the bottom of the chat message data.
    * @return: void
    */
    scroll_to_bottom = () => this.container.current.scrollTop = this.container.current.scrollHeight;

    /*
    * @description: Called when this component comes to mount into app view.
    * @return: void
    */
    componentDidMount = () => this.scroll_to_bottom ();

    /*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
    render = () => <div className = "active-guest-messages" ref = {this.container}>
        {/* Chat datetime representation */}
        {this.props.chats.map ((item, index) => <div className = "chat-datetime" key = {index}>
            {/* Label date */}
            <div className = "msg-date" align = "center"><label>{item.datetime}</label></div>
            {/* Chat message for the selected user contact */}
            <div className = "chat-msg-user-contact">
                {/* Building all submitted message between the connected user and his contact */}
                {item.messages.map ((elmt, pos) => (elmt.is_contact ?
                    // Left chat message data building.
                    <LeftChat key={pos} text={elmt.text}
                              top={((pos > 0 && item.messages[(pos - 1)].is_contact) ? 0 : 15)}
                              profil={((pos > 0 && item.messages[(pos - 1)].is_contact) ? null : this.props.contactProfil)}
                              bottom={((pos < (item.messages.length - 1) && item.messages[(pos + 1)].is_contact) ? 5 : 15)}
                    /> :
                    // Right chat message data building.
                    <RightChat key = {pos} text = {elmt.text} top = {((pos > 0 && !item.messages[(pos - 1)].is_contact) ? 0 : 15)}
                               bottom = {((pos < (item.messages.length - 1) && !item.messages[(pos + 1)].is_contact) ? 5 : 15)}
                               profil = {((pos > 0 && !item.messages[(pos - 1)].is_contact) ? null : this.props.userProfil)}
                    />)
                )}
            </div>
        </div>)}
    </div>;
}
