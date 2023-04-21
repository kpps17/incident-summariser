import {TicketDetailComponent} from "./Components/TicketDetailsComponent/TicketDetailsComponent";
import UserChatComponent from "./Components/UserChatComponent/UserChatComponent";
import {UserLoginComponent} from "./Components/UserLoginComponent/UserLoginComponent";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";


const sessionId = Math.random().toString(36).substring(2);

function App() {

    let [alias, setAlias] = useState("");

    useEffect(()=>{
        sessionStorage.setItem('sessionId', sessionId)
    },[])

  return (
    <div className="App">
        <UserLoginComponent
            alias = {alias}
            setAlias = {setAlias}
        />
        <div className="incident-summariser-header">
            <span>
                INCIDENT INSIGHT <FontAwesomeIcon icon={faBug} />!
            </span>
        </div>
        <div className="incident-summariser-required-component">
            <div className="incident-summariser-ticket-summary-component">
                <TicketDetailComponent alias={alias} sessionId={sessionId}/>
            </div>
            <div className="incident-summariser-ticket-user-chat-component">
                <UserChatComponent />
            </div>
        </div>
    </div>
  );
}

export default App;
