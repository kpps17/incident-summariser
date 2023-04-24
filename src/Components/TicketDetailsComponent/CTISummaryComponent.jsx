import {CTIPageCardComponent} from "./CTIPageCardComponent";
import {CTISummaryCardComponent} from "./CTISummaryCardComponent";

export const CTISummaryComponent = (props) => {
    let {ctiSummaryMessage} = props;
    console.log("i am in CTISummaryComponent")
    console.log(ctiSummaryMessage)
    return (
        <div className="ticket-conatainer">
            <CTISummaryCardComponent ActiveTicket={ctiSummaryMessage.ActiveTicket} ResolvedTicket={ctiSummaryMessage.ResolvedTicket}/>
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