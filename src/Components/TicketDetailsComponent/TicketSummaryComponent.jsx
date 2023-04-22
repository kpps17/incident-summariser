export function TicketSummaryComponent(props) {
    let {ticketSummaryMessage} = props;

    return (
        <>
          <div>
              {ticketSummaryMessage.Title}
          </div>
            <div>
                {ticketSummaryMessage.Severity}
            </div>
            <div>
                {ticketSummaryMessage.Status}
            </div>
            <div>
                {ticketSummaryMessage.Description}
            </div>
        </>
    )
}