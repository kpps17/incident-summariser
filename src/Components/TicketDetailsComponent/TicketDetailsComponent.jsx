import './style.css'
import {TicketInputComponent} from "./TicketInputComponent";
import {TicketSummaryComponent} from "./TicketSummaryComponent";
import {useState} from "react";

export function TicketDetailComponent(props) {
    let {alias, sessionId, ticketId, setTicketId, ticketSummaryMessage, setTicketSummaryMessage} = props;
    const [showAdditionalFile, setShowAdditionalFile] = useState(false);

    const handleShowAdditionalFile = () => {
        setShowAdditionalFile(true);
    };

    return (
        <div>
            <div className="ticket-detail-component-header">
                <h1> Enter the Ticket ID</h1>
            </div>
            <TicketInputComponent
                ticketId={ticketId}
                setTicketId={setTicketId}
                setTicketSummaryMessage={setTicketSummaryMessage}
                alias={alias}
                sessionId={sessionId}
                handleFileTwoClick={handleShowAdditionalFile}
            />
            {showAdditionalFile &&  <TicketSummaryComponent
                ticketSummaryMessage={ticketSummaryMessage}
            />}

        </div>
    )
}

