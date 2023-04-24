import {TicketDetailComponent} from "./Components/TicketDetailsComponent/TicketDetailsComponent";
import UserChatComponent from "./Components/UserChatComponent/UserChatComponent";
import {UserLoginComponent} from "./Components/UserLoginComponent/UserLoginComponent";
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
import {ticket} from "./Assets/endpoints";
import chatBot from "./Assets/amazonChatBot.jpg";
import DateTime from "./Components/UserChatComponent/datetime";

function App() {

    const isEmpty = (str) => {
        return (!str || str.length === 0);
    }

    let [alias, setAlias] = useState("");
    let [identifier, setIdentifier] = useState("");
    let [ticketSummaryMessage, setTicketSummaryMessage] = useState({});
    let [sessionId, setSessionId] = useState("")
    // let [cti, setCti] = useState("");
    let [ctiSummaryMessage, setCtiSummaryMessage] = useState("");
    let [pageId, setPageId] = useState(ticket)
    let [chats, setChats] = useState(
        [
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
    )
    let [activeIndex, setActiveIndex] = useState(0)

    console.log(localStorage.getItem('alias'))
    console.log(sessionId);
    let isAliasInLocalStorage = isEmpty(localStorage.getItem('alias')) && isEmpty(localStorage.getItem('sessionId'));

    useEffect(() => {
        if(!isAliasInLocalStorage) {
            setAlias(localStorage.getItem('alias'));
            setSessionId(localStorage.getItem('sessionId'));
        }
    }, [])


    return (
        <div className="App">
            {isAliasInLocalStorage && (< UserLoginComponent
                alias={alias}
                setAlias={setAlias}
                sessionId={sessionId}
                isAliasInLocalStorage = {isAliasInLocalStorage}
                setSessionId={setSessionId}
            />)
            }
            <div className="incident-summariser-header">
            <span>
                Incident Insight <FontAwesomeIcon icon={faBug} />!
            </span>
        </div>
        <div className="incident-summariser-required-component">
            <div className="incident-summariser-ticket-summary-component">
                <TicketDetailComponent
                    alias={alias}
                    sessionId={sessionId}
                    identifier={identifier}
                    setIdentifier={setIdentifier}
                    ticketSummaryMessage={ticketSummaryMessage}
                    setTicketSummaryMessage={setTicketSummaryMessage}
                    ctiSummaryMessage={ctiSummaryMessage}
                    setCtiSummaryMessage={setCtiSummaryMessage}
                    pageId={pageId}
                    setPageId={setPageId}
                    setChats={setChats}
                />
            </div>
            <div className="incident-summariser-ticket-user-chat-component">
                <UserChatComponent
                    alias={alias}
                    sessionId={sessionId}
                    identifier={identifier}
                    pageId={pageId}
                    chats={chats}
                    setChats={setChats}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            </div>
        </div>
    </div>
  );
}

export default App;
