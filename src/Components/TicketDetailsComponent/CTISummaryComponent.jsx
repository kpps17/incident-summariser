import {CTIPageCardComponent} from "./CTIPageCardComponent";
import {CTISummaryCardComponent} from "./CTISummaryCardComponent";

export const CTISummaryComponent = (props) => {
    let {ctiSummaryMessage} = props;
    return (
        <div className="ticket-conatainer">
            <CTISummaryCardComponent
                ActiveTicket={ctiSummaryMessage.ActiveTicket}
                ResolvedTicket={ctiSummaryMessage.ResolvedTicket}
                cti={ctiSummaryMessage.Title}
            />
            <div className="ticket-card-component">
                {
                    ctiSummaryMessage.ticketList?.map(ticketInfo => {
                        return (
                            <CTIPageCardComponent ticketInfo={ticketInfo} key={ticketInfo.TicketId}/>
                        )
                    })
                }
            </div>
        </div>
    )

}