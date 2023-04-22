import {TicketDetailComponent} from "./Components/TicketDetailsComponent/TicketDetailsComponent";
import UserChatComponent from "./Components/UserChatComponent/UserChatComponent";
import {UserLoginComponent} from "./Components/UserLoginComponent/UserLoginComponent";
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";

function App() {

    const isEmpty = (str) => {
        return (!str || str.length === 0);
    }

    let [alias, setAlias] = useState("");
    let [ticketId, setTicketId] = useState("");
    let [ticketSummaryMessage, setTicketSummaryMessage] = useState({
    });
    let [sessionId, setSessionId] = useState("")


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
                INCIDENT INSIGHT <FontAwesomeIcon icon={faBug} />!
            </span>
        </div>
        <div className="incident-summariser-required-component">
            <div className="incident-summariser-ticket-summary-component">
                <TicketDetailComponent
                    alias={alias}
                    sessionId={sessionId}
                    ticketId={ticketId}
                    setTicketId={setTicketId}
                    ticketSummaryMessage={ticketSummaryMessage}
                    setTicketSummaryMessage={setTicketSummaryMessage}
                />
            </div>
            <div className="incident-summariser-ticket-user-chat-component">
                <UserChatComponent
                    alias={alias}
                    sessionId={sessionId}
                    ticketId={ticketId}
                />
            </div>
        </div>
    </div>
  );
}

export default App;
