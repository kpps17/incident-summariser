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
        setChats
    } = props;
    const [showAdditionalFile, setShowAdditionalFile] = useState(false);
    const [selected, setSelected] = useState(1);

    const optionsList = ["ticket", "cti"]

    const selectionChangeHandler = (event) => {
        setPageId(optionsList[event.target.value - 1])
        setSelected(event.target.value);
        setChats([initialChatMessage]);
    };

    const handleShowAdditionalFile = () => {
        setShowAdditionalFile(true);
    };

    const isConversationRelatedToTicket = (str) => {
        return (str === ticket);
    }

    return (
        <>
            {(<div>
                {/*<div className="ticket-detail-component-header">*/}
                {/*    <h1> Enter the Ticket ID</h1>*/}
                {/*</div>*/}
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
                />
                {isConversationRelatedToTicket(pageId) && showAdditionalFile && <TicketSummaryComponent
                    ticketSummaryMessage={ticketSummaryMessage}
                />}

                {!isConversationRelatedToTicket(pageId) && showAdditionalFile && (<CTISummaryComponent
                    ctiSummaryMessage={ctiSummaryMessage}
                />)}

            </div>)}
            {/*{!isConversationRelatedToTicket(pageId) && (*/}
            {/*    <>*/}
            {/*        /!*<div>*!/*/}
            {/*        /!*    <h1>Enter CTI</h1>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        <TicketInputComponent*/}
            {/*            ticketId={cti}*/}
            {/*            setTicketId={setCti}*/}
            {/*            setTicketSummaryMessage={setCtiSummaryMessage}*/}
            {/*            alias={alias}*/}
            {/*            sessionId={sessionId}*/}
            {/*            handleFileTwoClick={handleShowAdditionalFile}*/}
            {/*            pageId={pageId}*/}
            {/*        />*/}
            {/*        {showAdditionalFile && (<CTISummaryComponent*/}
            {/*            ctiSummaryMessage={ctiSummaryMessage}*/}
            {/*        />)}*/}
            {/*    </>*/}
            {/*)}*/}

            {/*<FormControl style={{marginTop: 100, marginLeft: 100}}>*/}
            {/*    <Select value={selected} onChange={selectionChangeHandler}>*/}
            {/*        <MenuItem value={1}>Ticket</MenuItem>*/}
            {/*        <MenuItem value={2}>CTI</MenuItem>*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}

            {/*{isConversationRelatedToTicket(pageId) && (*/}
            {/*    <div className="">*/}
            {/*        <div className="ticket-detail-component-header">*/}
            {/*            <h1> Enter the Ticket ID</h1>*/}
            {/*        </div>*/}
            {/*        <div className="input-and-card-container">*/}
            {/*            <TicketInputComponent*/}
            {/*                ticketId={ticketId}*/}
            {/*                setTicketId={setTicketId}*/}
            {/*                setTicketSummaryMessage={setTicketSummaryMessage}*/}
            {/*                alias={alias}*/}
            {/*                sessionId={sessionId}*/}
            {/*                handleFileTwoClick={handleShowAdditionalFile}*/}
            {/*                pageId={pageId}*/}
            {/*            />*/}
            {/*            {showAdditionalFile && <TicketSummaryComponent*/}
            {/*                ticketSummaryMessage={ticketSummaryMessage}*/}
            {/*            />}*/}
            {/*        </div>*/}
            {/*    </div>)}*/}
            {/*{!isConversationRelatedToTicket(pageId) && (*/}
            {/*    <div>*/}
            {/*        <div className="ticket-detail-component-header">*/}
            {/*            <h1>Enter CTI</h1>*/}
            {/*        </div>*/}
            {/*        <div className="input-and-card-container">*/}
            {/*            <TicketInputComponent*/}
            {/*                ticketId={cti}*/}
            {/*                setTicketId={setCti}*/}
            {/*                setTicketSummaryMessage={setCtiSummaryMessage}*/}
            {/*                alias={alias}*/}
            {/*                sessionId={sessionId}*/}
            {/*                handleFileTwoClick={handleShowAdditionalFile}*/}
            {/*                pageId={pageId}*/}
            {/*            />*/}
            {/*            {showAdditionalFile && (<CTISummaryComponent*/}
            {/*                ctiSummaryMessage={ctiSummaryMessage}*/}
            {/*            />)}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </>

    )
}

