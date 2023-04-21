import {Button, TextField} from "@mui/material";
import axios from "axios";
import {useState} from "react";

export function TicketInputComponent(props) {
    let {ticketId, setTicketId, setTicketSummaryMessage} = props;

    let apiRes = "";
    const handleEnableDisableButton = (str) => {
        str = str.trim()
        return (!str || str.length === 0);
    }

    const handleTicketIdInput = () => {
        // some API call and will set the message to be shown in the summary component
        axios.get('https://api.github.com/repos/tannerlinsley/react-query')
            .then((res) => {
                apiRes = res.data;
                setTicketSummaryMessage(apiRes.id)
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