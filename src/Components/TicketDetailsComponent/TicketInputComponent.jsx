import {Button, TextField} from "@mui/material";

export function TicketInputComponent(props) {
    let {ticketId, setTicketId, setTicketSummaryMessage} = props;

    const handleEnableDisableButton = (str) => {
        return (!str || str.length === 0);
    }

    const handleTicketIdInput = () => {
        // some API call and will set the message to be shown in the summary component
        setTicketSummaryMessage("Hi i am from response from API")
    }

    return (
        <div className="ticket-input-container">
            <TextField id="outlined-basic" label="Ticket-Id" variant="outlined"
                       onChange={e => setTicketId(e.target.value)}/>
            <Button variant="outlined" disabled={handleEnableDisableButton(ticketId)}
                    onClick={handleTicketIdInput}>Find</Button>
        </div>
    )
}