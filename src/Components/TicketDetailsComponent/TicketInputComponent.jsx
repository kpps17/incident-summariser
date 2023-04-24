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
        selected,
        userButtonClick,
        setUserButtonClick
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
        setUserButtonClick(true);
        handleClick();
        const payload = (pageId === ticket) ? {
            userId: alias,
            sessionId: sessionId,
            ticketId: identifier
        } : {
            ctiId: "cti"
        }

        const endpoint = `${baseUrl}/chat/${pageId}/summary`

        restHelper(endpoint, payload)
            .then(function (res) {
                console.log(res.data.response);
                setTicketSummaryMessage(res.data.response);
            });
    }

    return (
        <div className="ticket-input-container-text-field">
            <FormControl style={{marginTop: 100, marginLeft: 100, display: "contents"}} >
                <div id="id-input-group" style={{display: "flex"}}>
                    <div className="id-input-group-choice">
                        <Select value={selected} onChange={selectionChangeHandler}>
                            <MenuItem value={1}>Ticket</MenuItem>
                            <MenuItem value={2}>CTI</MenuItem>
                        </Select>
                    </div>
                    <div className="id-input-group-text-field">
                        <TextField id="outlined-basic" label={`enter ${pageId}`} variant="outlined"
                                   value = {identifier}
                                   onChange={e => setIdentifier(e.target.value)} size="medium" style={{width: "15vw"}}
                        />
                    </div>
                </div>
            </FormControl>
            <div className="ticket-input-container-button">
                <Button variant="outlined" disabled={handleEnableDisableButton(identifier)} style={{width: "30px"}}
                        onClick={handleIdInput} size="large">Find</Button>
            </div>

        </div>
    )
}