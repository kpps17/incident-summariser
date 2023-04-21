import {TicketDetailComponent} from "./Components/TicketDetailsComponent/TicketDetailsComponent";
import UserChatComponent from "./Components/UserChatComponent/UserChatComponent";
import {UserLoginComponent} from "./Components/UserLoginComponent/UserLoginComponent";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";


function App() {
    let [alias, setAlias] = useState("");

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
                <TicketDetailComponent />
            </div>
            <div className="incident-summariser-ticket-user-chat-component">
                <UserChatComponent />
            </div>
        </div>
    </div>
  );
}

export default App;
