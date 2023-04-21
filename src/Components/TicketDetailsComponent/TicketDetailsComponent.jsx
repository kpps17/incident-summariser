import './style.css'
import {TicketInputComponent} from "./TicketInputComponent";
import {TicketSummaryComponent} from "./TicketSummaryComponent";

export function TicketDetailComponent(props) {
    let {alias, sessionId, ticketId, setTicketId, ticketSummaryMessage, setTicketSummaryMessage} = props

    return (
        <div>
            <TicketInputComponent
                ticketId={ticketId}
                setTicketId={setTicketId}
                setTicketSummaryMessage={setTicketSummaryMessage}
                alias={alias}
                sessionId={sessionId}
            />
            <TicketSummaryComponent
                ticketSummaryMessage={ticketSummaryMessage}
            />
        </div>
    )
}

