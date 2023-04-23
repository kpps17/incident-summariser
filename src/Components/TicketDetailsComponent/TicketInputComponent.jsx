import {Button, TextField} from "@mui/material";
import restHelper from '../commons/Utils'
import {baseUrl, ticket} from "../../Assets/endpoints";

export function TicketInputComponent(props) {
    let {
        ticketId,
        setTicketId,
        setTicketSummaryMessage,
        alias,
        sessionId,
        pageId,
    } = props;
    const handleClick = () => {
        props.handleFileTwoClick();
    };
    let apiRes = "";
    const handleEnableDisableButton = (str) => {
        str = str.trim()
        return (!str || str.length === 0);
    }

    const handleIdInput = () => {
        handleClick();
        const payload = (pageId === ticket) ? {
            userId: alias,
            sessionId: sessionId,
            ticketId: ticketId
        } : {
            ctiId: ticketId
        }

        const endpoint = `${baseUrl}/chat/${pageId}/summary`

        restHelper(endpoint, payload)
            .then(function (res) {
                console.log(res.data.response);
                setTicketSummaryMessage(res.data.response);
            });
    }


    return (
        <div className="ticket-input-container">
            <div className="ticket-input-container-text-field">
                <TextField id="outlined-basic" label={`enter-${pageId}`} variant="outlined"
                           onChange={e => setTicketId(e.target.value)} size="small" style={{width: "15vw"}}
                />
            </div>
            <div className="ticket-input-container-button">
                <Button variant="outlined" disabled={handleEnableDisableButton(ticketId)}
                        onClick={handleIdInput}>Find</Button>
            </div>
        </div>
    )
}