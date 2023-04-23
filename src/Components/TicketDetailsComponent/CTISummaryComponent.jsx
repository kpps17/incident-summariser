export const CTISummaryComponent = (props) => {
    let {ctiSummaryMessage} = props;

    return (
        <>
            <span>{ctiSummaryMessage.Title}</span>
            <span>{ctiSummaryMessage.ResolvedTicket}</span>
            <span>{ctiSummaryMessage.ActiveTicket}</span>
            <span>{ctiSummaryMessage.Description}</span>
            {
                ctiSummaryMessage.ticketList.map(ticketInfo => {
                    console.log(ticketInfo)
                    return (
                        <>
                            <span>
                            {ticketInfo.Description}
                            </span>
                                <span>
                                {ticketInfo.Severity}
                            </span>
                                <span>
                                {ticketInfo.Status}
                            </span>
                                <span>
                                {ticketInfo.TicketId}
                            </span>
                            <span>
                                    {ticketInfo.Title}
                                </span>
                        </>
                    )
                })
            }
        </>
    )

}