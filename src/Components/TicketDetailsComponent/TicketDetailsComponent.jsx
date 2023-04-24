import './style.css'
import {TicketInputComponent} from "./TicketInputComponent";
import {TicketSummaryComponent} from "./TicketSummaryComponent";
import {useState} from "react";
import {ticket} from "../../Assets/endpoints";
import {FormControl, MenuItem, Select, TextField} from "@mui/material";
import {CTISummaryComponent} from "./CTISummaryComponent";
import {initialChatMessage} from "../commons/Utils";

export function TicketDetailComponent(props) {
    let {
        alias,
        sessionId,
        ticketSummaryMessage,
        setTicketSummaryMessage,
        pageId,
        setPageId,
        identifier,
        setIdentifier,
        ctiSummaryMessage,
        setCtiSummaryMessage,
        setChats,
        userButtonClick,
        setUserButtonClick
    } = props;
    const [showAdditionalFile, setShowAdditionalFile] = useState(false);
    const [selected, setSelected] = useState(1);

    const optionsList = ["ticket", "cti"]

    const selectionChangeHandler = (event) => {
        setIdentifier('');
        setUserButtonClick(false);
        setCtiSummaryMessage({});
        setTicketSummaryMessage({});
        setPageId(optionsList[event.target.value - 1]);
        setSelected(event.target.value);
        setChats([initialChatMessage]);
    };

    const handleShowAdditionalFile = () => {
        setShowAdditionalFile(true);
    };

    const isConversationRelatedToTicket = (str) => {
        return (str === ticket);
    }

    const isEmpty = (str) => {
        return (!str || str.length === 0);
    }

    return (
        <>
            {(<div className="details-main-component" >
                <TicketInputComponent
                    identifier={identifier}
                    setIdentifier={setIdentifier}
                    setTicketSummaryMessage={pageId === ticket ? setTicketSummaryMessage : setCtiSummaryMessage}
                    alias={alias}
                    sessionId={sessionId}
                    handleFileTwoClick={handleShowAdditionalFile}
                    pageId={pageId}
                    selected={selected}
                    selectionChangeHandler = {selectionChangeHandler}
                    userButtonClick={userButtonClick}
                    setUserButtonClick={setUserButtonClick}
                />
                {userButtonClick && isConversationRelatedToTicket(pageId) && showAdditionalFile && <TicketSummaryComponent
                    ticketSummaryMessage={ticketSummaryMessage}
                />}

                {userButtonClick && !isConversationRelatedToTicket(pageId) && showAdditionalFile && (<CTISummaryComponent
                    ctiSummaryMessage={ctiSummaryMessage}
                />)}

            </div>)}
        </>

    )
}

