import {Button, TextField} from "@mui/material";
import axios from "axios";
import restHelper from '../commons/Utils'

export function TicketInputComponent(props) {
    let {ticketId, setTicketId, setTicketSummaryMessage, alias, sessionId} = props;

    let apiRes = "";
    const handleEnableDisableButton = (str) => {
        str = str.trim()
        return (!str || str.length === 0);
    }

    const handleTicketIdInput = () => {
        // const options = {
        //     method: 'post',
        //     url: 'http://localhost:3001/api/v1/chat/create',
        //     data: {
        //         userId: alias,
        //         sessionId: sessionId,
        //         ticketId: ticketId
        //     }
        // };
        //
        // axios.request(options)
        //     .then(function (res) {
        //         console.log(res);
        //         setTicketSummaryMessage(res.data.response);
        //     });

        const payload = {
            userId: alias,
            sessionId: sessionId,
            ticketId: ticketId
        }

        const endpoint = 'http://localhost:3001/api/v1/chat/create'

        restHelper(endpoint, payload)
            .then(function (res) {
                console.log(res);
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