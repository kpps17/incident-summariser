import './style.css'
import Card from '../commons/CustomCardComponent'

export function TicketSummaryComponent(props) {
    let {ticketSummaryMessage} = props;


    return (
        <section classname="ticket-summary-component-section">
      {/*<div style={{ backgroundColor: '#87CEEB', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>*/}

      {/*        {ticketSummaryMessage.Title}*/}
      {/*    </div>*/}

            <Card
                title='Title'
                description={ticketSummaryMessage.Title}
            />

            <Card
                title='Severity'
                description={ticketSummaryMessage.Severity}
            />
            <Card
                title='Status'
                description={ticketSummaryMessage.Status}
            />

            <Card
                title='Description'
                description={ticketSummaryMessage.Description}
            />
            <br/>
        </section>
    )
}