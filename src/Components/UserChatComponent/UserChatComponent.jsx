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
import {ticket} from "../../Assets/endpoints";



export default class UserChatComponent extends React.PureComponent {
    constructor (props) {
        super (props);
        this.chat_context = React.createRef ();
    }

    sendMessage = (datetime, is_contact, message) => {
        let chats = lodash.cloneDeep (this.props.chats), today = (datetime.split (',')[0] + ", " + new Date ().getFullYear ());
        // Gets chat datetime index.
        let index = chats[this.props.activeIndex].data.findLastIndex (item => {
            // Returns the imposed constraint.
            return ((item.datetime.split (',')[0] + ", " + new Date ().getFullYear ()) === today);
        });
        // The given datetime is it defined ?
        if (index > -1) chats[this.props.activeIndex].data[index].messages.push ({is_contact: is_contact, text: message});
        // Adds the current message with the given datetime for today.
        else chats[this.props.activeIndex].data.push ({datetime: DateTime.get_datetime (), messages: [{is_contact: is_contact, text: message}]});
        // Updates the global state.
        // this.setState ({chats: chats});
        this.props.setChats(chats)
        // Moves the scrollbar at the full bottom.
        setTimeout (() => this.chat_context.current.scroll_to_bottom (), 20);
    }

    render = () => <div className = "chat-workspace">
            <Chat chats = {this.props.chats[this.props.activeIndex].data} userProfil = {userProfile}
                         contactProfil = {this.props.chats[this.props.activeIndex].profil} ref = {this.chat_context}/>
            <ChatMessageEditor sendMessage={this.sendMessage} userId={this.props.alias} ticketId={(this.props.pageId === ticket) ? this.props.ticketId : this.props.cti}
                               sessionId={this.props.sessionId} pageId={this.props.pageId}/>
        </div>
}


class Chat extends React.PureComponent {
    constructor (props) {
        super (props);
        this.container = React.createRef ();
    }

    scroll_to_bottom = () => this.container.current.scrollTop = this.container.current.scrollHeight;

    componentDidMount = () => this.scroll_to_bottom ();

    render = () => <div className = "active-guest-messages" ref = {this.container}>
        {this.props.chats.map ((item, index) => <div className = "chat-datetime" key = {index}>
            <div className = "msg-date" align = "center"><label>{item.datetime}</label></div>
            <div className = "chat-msg-user-contact">
                {item.messages.map ((elmt, pos) => (elmt.is_contact ?
                    <LeftChat key={pos} text={elmt.text}
                              top={((pos > 0 && item.messages[(pos - 1)].is_contact) ? 0 : 15)}
                              profil={((pos > 0 && item.messages[(pos - 1)].is_contact) ? null : this.props.contactProfil)}
                              bottom={((pos < (item.messages.length - 1) && item.messages[(pos + 1)].is_contact) ? 5 : 15)}
                    /> :
                    <RightChat key = {pos} text = {elmt.text} top = {((pos > 0 && !item.messages[(pos - 1)].is_contact) ? 0 : 15)}
                               bottom = {((pos < (item.messages.length - 1) && !item.messages[(pos + 1)].is_contact) ? 5 : 15)}
                               profil = {((pos > 0 && !item.messages[(pos - 1)].is_contact) ? null : this.props.userProfil)}
                    />)
                )}
            </div>
        </div>)}
    </div>;
}
