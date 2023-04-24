import {Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import restHelper from '../commons/Utils'
import {baseUrl, ticket} from "../../Assets/endpoints";

export function TicketInputComponent(props) {
    let {
        identifier,
        setIdentifier,
        setTicketSummaryMessage,
        alias,
        sessionId,
        pageId,
        selectionChangeHandler,
        selected
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
            ticketId: identifier
        } : {
            ctiId: identifier
        }

        const endpoint = `${baseUrl}/chat/${pageId}/summary`

        restHelper(endpoint, payload)
            .then(function (res) {
                console.log(res.data.response);
                setTicketSummaryMessage(res.data.response);
            });
    }
    const isConversationRelatedToTicket = (str) => {
        return str === ticket ? "CTI" : "Ticket-Id";
    }


    return (
        <div className="ticket-input-container">
            <div className="ticket-input-container-text-field">
                <FormControl style={{marginTop: 100, marginLeft: 100}}>
                    <div id="id-input-group">
                        <Select value={selected} onChange={selectionChangeHandler}>
                            <MenuItem value={1}>Ticket</MenuItem>
                            <MenuItem value={2}>CTI</MenuItem>
                        </Select>
                        <TextField id="outlined-basic" label={`enter ${pageId}`} variant="outlined"
                                   onChange={e => setIdentifier(e.target.value)} size="small" style={{width: "15vw"}}
                        />
                    </div>
                </FormControl>
            </div>
            <div className="ticket-input-container-button">
                <Button variant="outlined" disabled={handleEnableDisableButton(identifier)}
                        onClick={handleIdInput}>Find</Button>
            </div>
        </div>
    )
}