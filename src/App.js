import {TicketSummaryComponent} from "./Components/TicketSummaryComponent";
import {UserChatComponent} from "./Components/UserChatComponent";

function App() {
  return (
    <div className="App">
        <h1>
            Hello from incident summariser
        </h1>
        <TicketSummaryComponent />
        <UserChatComponent />
    </div>
  );
}

export default App;
