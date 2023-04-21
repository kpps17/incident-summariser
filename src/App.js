import {TicketDetailComponent} from "./Components/TicketDetailsComponent/TicketDetailsComponent";
import UserChatComponent from "./Components/UserChatComponent/UserChatComponent";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
        <div className="incident-summariser-header">
            <span>
                Incident Insight
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
