import {TicketDetailComponent} from "./Components/TicketDetailsComponent/TicketDetailsComponent";
import {UserChatComponent} from "./Components/UserChatComponent/UserChatComponent";
import './App.css'

function App() {
  return (
    <div className="App">
        <div className="incident-summariser-header">
            <span>
                Hello from incident summariser
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
