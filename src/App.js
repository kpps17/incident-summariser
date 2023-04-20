import {TicketDetailComponent} from "./Components/TicketSummaryComponent/TicketSummaryComponent";
import {UserChatComponent} from "./Components/UserChatComponent/UserChatComponent";
import './App.css'

function App() {
  return (
    <div className="App">
        <div className="incident-summariser-header">
            <h1>
                Hello from incident summariser
            </h1>
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
