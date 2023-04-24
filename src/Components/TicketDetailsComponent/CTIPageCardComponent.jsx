import {Card, CardActions, CardContent, Typography} from "@mui/material";

export function CTIPageCardComponent(props) {

    let {ticketInfo} = props;

    return (
        <Card sx={{ minWidth: 30 }} variant="outlined">
            <CardContent>
                <Typography sx={{ mb: 0.5 }} color="text.primary">
                    {`Title: ${ticketInfo.Title}`}
                </Typography>
                <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    {`Description: ${ticketInfo.Description}`}
                </Typography>
                <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    {`TicketId: ${ticketInfo.TicketId}`}
                </Typography>
                <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    {`Severity: ${ticketInfo.Severity}`}
                </Typography>
                <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    {`Status: ${ticketInfo.Status}`}
                </Typography>
            </CardContent>
        </Card>
    );
}