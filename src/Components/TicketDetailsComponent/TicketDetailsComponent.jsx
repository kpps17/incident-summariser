import './style.css'
import {TicketInputComponent} from "./TicketInputComponent";
import {TicketSummaryComponent} from "./TicketSummaryComponent";
import {useState} from "react";

export function TicketDetailComponent(props) {
    let {alias} = props
    let [ticketId, setTicketId] = useState("");
    let [ticketSummaryMessage, setTicketSummaryMessage] = useState("");

    return (
        <div>
            <TicketInputComponent ticketId = {ticketId} setTicketId={setTicketId} setTicketSummaryMessage={setTicketSummaryMessage}/>
            <TicketSummaryComponent ticketSummaryMessage={ticketSummaryMessage}/>
        </div>
    )
}

