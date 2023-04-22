import {Button, TextField} from "@mui/material";
import axios from "axios";
import restHelper from '../commons/Utils'

export function TicketInputComponent(props) {
    let {ticketId, setTicketId, setTicketSummaryMessage, alias, sessionId} = props;
    const handleClick = () => {
        props.handleFileTwoClick();
    };
    let apiRes = "";
    const handleEnableDisableButton = (str) => {
        str = str.trim()
        return (!str || str.length === 0);
    }

    const handleTicketIdInput = () => {
        handleClick();
        const payload = {
            userId: alias,
            sessionId: sessionId,
            ticketId: ticketId
        }

        const endpoint = 'http://localhost:3001/api/v1/chat/ticket/summary'

        restHelper(endpoint, payload)
            .then(function (res) {
                console.log(res.data.response);
                setTicketSummaryMessage(res.data.response);
            });
    }


    return (
        <div className="ticket-input-container">
            <div className="ticket-input-container-text-field">
                <TextField id="outlined-basic" label="Ticket-Id" variant="outlined"
                           onChange={e => setTicketId(e.target.value)} size="small"/>
            </div>
            <div className="ticket-input-container-button">
                <Button variant="outlined" disabled={handleEnableDisableButton(ticketId)}
                        onClick={handleTicketIdInput}>Find</Button>
            </div>
        </div>
    )
}